'use client'

import { z } from 'zod'
import { format, formatDate } from 'date-fns'
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
import { LedRentSchema } from '@/schemas/led-rent.schema'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'
import { CalendarIcon } from 'lucide-react'
import { Calendar } from '../ui/calendar'

type SubmitFormValues = z.output<typeof LedRentSchema>

const initialValues: DefaultValues<SubmitFormValues> = {
  city: '',
  typeLed: 'inside',
  pixelDistance: '1.2',
  rentStartDate: new Date(),
  rentEndDate: new Date(),
  email: '',
  phone: '',
  comments: '',
  acceptTerms: false,
}

function BuyLedForm() {
  const form = useForm<SubmitFormValues>({
    resolver: zodResolver(LedRentSchema),
    defaultValues: initialValues,
  })

  const onSubmit = async (values: SubmitFormValues) => {
    const parsedValues = LedRentSchema.safeParse(values)

    if (parsedValues.success) {
      const { data: rentValues } = parsedValues
      const submitData = {
        ...rentValues,
        rentEndDate: formatDate(rentValues.rentEndDate, 'yyyy-MM-dd'),
        rentStartDate: formatDate(rentValues.rentStartDate, 'yyyy-MM-dd'),
      }

      console.log(submitData)
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
        </section>

        <section>
          <h3 className='text-2xl font-bold mb-2'>Продължителност на наема*</h3>
          <div className='flex flex-col gap-y-4 md:flex-row md:gap-x-4 lg:gap-y-0 w-full'>
            <FormField
              control={form.control}
              name='rentStartDate'
              render={({ field }) => (
                <FormItem className='flex flex-col flex-1'>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={'outline'}
                          className={cn(
                            'w-full pl-3 h-12 text-lg rounded-lg text-left font-normal shadow-none border-form-border text-form-border',
                            !field.value && 'text-muted-foreground',
                          )}
                        >
                          {field.value ? (
                            format(field.value, 'PPP')
                          ) : (
                            <span>Начална дата</span>
                          )}
                          <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent
                      className='w-auto p-0'
                      align='start'
                    >
                      <Calendar
                        mode='single'
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={date => date < new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='rentEndDate'
              render={({ field }) => (
                <FormItem className='flex flex-col flex-1'>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={'outline'}
                          className={cn(
                            'w-full pl-3 h-12 text-lg rounded-lg text-left font-normal shadow-none border-form-border text-form-border',
                            !field.value && 'text-muted-foreground',
                          )}
                        >
                          {field.value ? (
                            format(field.value, 'PPP')
                          ) : (
                            <span>Крайна дата</span>
                          )}
                          <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent
                      className='w-auto p-0'
                      align='start'
                    >
                      <Calendar
                        mode='single'
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={date => date < new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
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
                        href='#'
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

        <SubmitButton className='mt-10 mb-16'>Изпратете заявката</SubmitButton>
      </form>
    </Form>
  )
}

export default BuyLedForm
