'use client'

import { z } from 'zod'
import { format, formatDate } from 'date-fns'
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'
import { Textarea } from '../ui/textarea'
import { Checkbox } from '../ui/checkbox'
import { Label } from '../ui/label'
import Link from 'next/link'
import { toast } from 'sonner'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'
import { CalendarIcon } from 'lucide-react'
import { Calendar } from '../ui/calendar'
import { LedMaintenanceSchema } from '@/schemas/led-maintenance.schema'
import { useState } from 'react'

type SubmitFormValues = z.output<typeof LedMaintenanceSchema>

const initialValues: DefaultValues<SubmitFormValues> = {
  city: '',
  typeLed: 'inside',
  maintenanceStartDate: new Date(),
  maintenanceEndDate: new Date(),
  email: '',
  phone: '',
  comments: '',
  acceptTerms: false,
}

function MaintenanceLedForm() {
  const [loading, setLoading] = useState(false)

  const form = useForm<SubmitFormValues>({
    resolver: zodResolver(LedMaintenanceSchema),
    defaultValues: initialValues,
  })

  const onSubmit = async (values: SubmitFormValues) => {
    const parsedValues = LedMaintenanceSchema.safeParse(values)

    if (parsedValues.success) {
      const { data: rentValues } = parsedValues
      const emailData = {
        ...rentValues,
        maintenanceEndDate: formatDate(
          rentValues.maintenanceEndDate,
          'yyyy-MM-dd',
        ),
        maintenanceStartDate: formatDate(
          rentValues.maintenanceStartDate,
          'yyyy-MM-dd',
        ),
      }

      try {
        setLoading(true)
        const response = await fetch('/api/maintenance', {
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

        <section>
          <h3 className='text-2xl font-bold mb-2'>
            Продължителност на поддръжката*
          </h3>
          <div className='flex flex-col gap-y-4 md:flex-row md:gap-x-4 lg:gap-y-0 w-full'>
            <FormField
              control={form.control}
              name='maintenanceStartDate'
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
              name='maintenanceEndDate'
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

export default MaintenanceLedForm
