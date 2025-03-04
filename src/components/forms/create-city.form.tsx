'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CraeteCitySchema } from '@/schemas/create-city.schema'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { toast } from 'sonner'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { createCity } from '@/actions/cities'
import { Switch } from '../ui/switch'

interface CreateCityFormProps {
  onSubmit: () => void
}

export function CreateCityForm({ onSubmit }: CreateCityFormProps) {
  const form = useForm<z.infer<typeof CraeteCitySchema>>({
    resolver: zodResolver(CraeteCitySchema),
    defaultValues: {
      name: '',
      popularChoice: false,
    },
  })

  function handleSubmit(data: z.infer<typeof CraeteCitySchema>) {
    const parsedPayload = CraeteCitySchema.safeParse(data)

    if (parsedPayload.success) {
      createCity(parsedPayload.data)
      toast.success('City created successfully.')
      onSubmit()
    } else {
      toast.error('Please double check all fields.')
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className='w-full space-y-5 max-w-xl mx-auto'
      >
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>City Name</FormLabel>
              <FormControl>
                <Input
                  placeholder='New York'
                  className='shadow-none h-10.5 px-3 rounded-lg'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='popularChoice'
          render={({ field }) => (
            <FormItem>
              <div className='flex items-center justify-between gap-x-3 px-3 py-2'>
                <FormLabel>Make it a popular choice?</FormLabel>
                <FormControl>
                  <Switch
                    className='shadow-none'
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type='submit'
          className='w-full rounded-full'
          size='xl'
        >
          Create
        </Button>
      </form>
    </Form>
  )
}
