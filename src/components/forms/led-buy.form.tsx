'use client'

import { z } from 'zod'
import { Controller, DefaultValues, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '../ui/input'
import { LedBuySchema } from '@/schemas/led-buy.schema'
import { SubmitButton } from './submit-button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'
import ImagePicker from '../ui/image-picker'
import { Textarea } from '../ui/textarea'
import { Checkbox } from '../ui/checkbox'
import { Label } from '../ui/label'
import Link from 'next/link'
import { toast } from 'sonner'
import { useState } from 'react'

type SubmitFormValues = z.output<typeof LedBuySchema>

const initialValues: DefaultValues<SubmitFormValues> = {
  city: '',
  typeLed: 'inside',
  pixelDistance: '1.2',
  attachments: undefined,
  email: '',
  phone: '',
  comments: '',
  acceptTerms: false,
}

function BuyLedForm() {
  const [loading, setLoading] = useState(false)

  const form = useForm<SubmitFormValues>({
    resolver: zodResolver(LedBuySchema),
    defaultValues: initialValues,
  })

  const onSubmit = async (values: SubmitFormValues) => {
    const parsedValues = LedBuySchema.safeParse(values)

    if (parsedValues.success) {
      const { data: purchaseValues } = parsedValues
      const emailData = {
        city: purchaseValues.city,
        typeLed: purchaseValues.typeLed,
        pixelDistance: purchaseValues.pixelDistance,
        attachments: purchaseValues.attachments,
        email: purchaseValues.email,
        phone: purchaseValues.phone,
        comments: purchaseValues.comments,
      }

      try {
        setLoading(true)
        const response = await fetch('/api/purchase', {
          method: 'POST',
          body: JSON.stringify(emailData),
        })

        if (!response.ok) {
          const err = await response.json()
          throw new Error(err?.message ?? 'Something went wrong')
        }

        form.reset()
        toast.success('Email sent successfully')
      } catch (error) {
        console.error(error)
        toast.error('Failed to send email')
      } finally {
        setLoading(false)
      }
    }

    if (parsedValues.error) {
      parsedValues.error?.errors.forEach(error => {
        toast.error(error.message)
      })
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='flex flex-col gap-y-6 px-4 w-full'
      >
        <section className='flex flex-col md:flex-row gap-6'>
          <FormField
            control={form.control}
            name='city'
            render={({ field }) => (
              <FormItem className='flex flex-col flex-1'>
                <FormLabel className='text-2xl font-bold'>
                  Град/Населено място*
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type='text'
                    className='w-full h-12 text-lg rounded-lg shadow-none border-form-border text-form-border'
                    placeholder='Вашият град или населено място'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='typeLed'
            render={({ field }) => (
              <FormItem className='flex flex-col flex-1'>
                <FormLabel className='text-2xl font-bold'>
                  LED екран за*
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className='w-full h-12 text-lg rounded-lg shadow-none border-form-border text-form-border'>
                      <SelectValue placeholder='Select a verified email to display' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value='inside'>Вътрешна употреба</SelectItem>
                    <SelectItem value='outside'>Външна употреба</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </section>

        <section className='flex flex-col md:flex-row gap-6'>
          <FormField
            control={form.control}
            name='pixelDistance'
            render={({ field }) => (
              <FormItem className='flex flex-col flex-1'>
                <FormLabel className='text-2xl font-bold'>
                  Разстояние между пикселите*
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className='w-full h-12 text-lg rounded-lg shadow-none border-form-border text-form-border'>
                      <SelectValue placeholder='Изберете разстояние между пикселите' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value='1.2'>1,2</SelectItem>
                    <SelectItem value='1.5'>1,5</SelectItem>
                    <SelectItem value='1.8'>1,8</SelectItem>
                    <SelectItem value='2'>2</SelectItem>
                    <SelectItem value='2.5'>2,5</SelectItem>
                    <SelectItem value='3'>3</SelectItem>
                    <SelectItem value='4'>4</SelectItem>
                    <SelectItem value='5'>5</SelectItem>
                    <SelectItem value='6'>6</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='attachments'
            render={() => (
              <FormItem className='flex flex-col flex-1'>
                <FormLabel className='text-2xl font-bold'>
                  Снимка на обекта
                </FormLabel>
                <FormControl>
                  <Controller
                    name='attachments'
                    control={form.control}
                    render={({ field: { value, onChange, ...fieldProps } }) => (
                      <ImagePicker
                        {...fieldProps}
                        value={value as File | undefined}
                        onChange={file => {
                          if (file) {
                            Promise.all(
                              Array.from([file]).map(async file => ({
                                filename: file.name,
                                content: Buffer.from(
                                  await file.arrayBuffer(),
                                ).toString('base64'),
                              })),
                            ).then(filesArray => {
                              onChange(filesArray)
                            })
                          }
                        }}
                        placeholder='Качете снимка на обекта (jpg,png,gif,svg)'
                        className='w-full h-12 text-lg rounded-lg shadow-none border-form-border text-form-border'
                      />
                    )}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </section>

        <section className='flex flex-col md:flex-row gap-6'>
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem className='flex flex-col flex-1'>
                <FormLabel className='text-2xl font-bold'>Имейл*</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type='email'
                    className='w-full h-12 text-lg rounded-lg shadow-none border-form-border text-form-border'
                    placeholder='Вашият имейл'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='phone'
            render={({ field }) => (
              <FormItem className='flex flex-col flex-1'>
                <FormLabel className='text-2xl font-bold'>
                  Телефонен номер*
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type='phone'
                    className='w-full h-12 text-lg rounded-lg shadow-none border-form-border text-form-border'
                    placeholder='Вашият телефонен номер'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </section>

        <section className='flex flex-col gap-y-4 w-full'>
          <FormField
            control={form.control}
            name='comments'
            render={({ field }) => (
              <FormItem className='flex flex-col flex-1'>
                <FormLabel className='text-2xl font-bold'>
                  Допълнителен коментар
                </FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    className='resize-none shadow-none rounded-lg border-form-border text-form-border'
                    placeholder='Напишете Вашият коментар...'
                    rows={6}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='acceptTerms'
            render={({ field }) => (
              <FormItem className='flex flex-col flex-1'>
                <FormControl>
                  <div className='flex gap-x-2'>
                    <Checkbox
                      id='acceptTerms'
                      aria-checked={field.value}
                      checked={field.value}
                      onCheckedChange={checked => field.onChange(checked)}
                    />
                    <Label
                      htmlFor='acceptTerms'
                      className='text-primary-purple'
                    >
                      С изпращането на тази заявка се съгласявам личните ми
                      данни да бъдат обработвани от &quot;LED King&quot;
                      съгласно{' '}
                      <Link
                        href='/terms'
                        className='underline font-semibold'
                      >
                        Общите условия
                      </Link>
                      .
                    </Label>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </section>

        <SubmitButton
          loading={loading}
          className='mt-10 mb-16'
        >
          Изпратете заявката
        </SubmitButton>
      </form>
    </Form>
  )
}

export default BuyLedForm
