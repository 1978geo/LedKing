'use client'

import { z } from 'zod'
import { DefaultValues, useForm } from 'react-hook-form'
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
import { SubmitButton } from './submit-button'
import { Textarea } from '../ui/textarea'
import { Checkbox } from '../ui/checkbox'
import { Label } from '../ui/label'
import Link from 'next/link'
import { toast } from 'sonner'
import { useState } from 'react'
import { LedContactsSchema } from '@/schemas/led-contacts.schema'

type SubmitFormValues = z.output<typeof LedContactsSchema>

const initialValues: DefaultValues<SubmitFormValues> = {
  email: '',
  phone: '',
  message: '',
  acceptTerms: false,
}

function LedContactsForm() {
  const [loading, setLoading] = useState(false)

  const form = useForm<SubmitFormValues>({
    resolver: zodResolver(LedContactsSchema),
    defaultValues: initialValues,
  })

  const onSubmit = async (values: SubmitFormValues) => {
    const parsedValues = LedContactsSchema.safeParse(values)

    if (parsedValues.success) {
      const { data: contactsData } = parsedValues

      try {
        setLoading(true)
        const response = await fetch('/api/contacts', {
          method: 'POST',
          body: JSON.stringify(contactsData),
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
            name='message'
            render={({ field }) => (
              <FormItem className='flex flex-col flex-1'>
                <FormLabel className='text-2xl font-bold'>Съобщение:</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    className='resize-none shadow-none rounded-lg border-form-border text-form-border'
                    placeholder='Вашето съобщение...'
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
          className='mt-10 mb-16'
          loading={loading}
        >
          Изпратете заявката
        </SubmitButton>
      </form>
    </Form>
  )
}

export default LedContactsForm
