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

interface CreateCityFormProps {
  onSubmit: () => void
}

export function CreateCityForm({ onSubmit }: CreateCityFormProps) {
  const form = useForm<z.infer<typeof CraeteCitySchema>>({
    resolver: zodResolver(CraeteCitySchema),
    defaultValues: {
      name: '',
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
        className='w-full space-y-6 px-6'
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
                  className='shadow-none'
                  {...field}
                />
              </FormControl>
              <FormDescription>Enter city name here.</FormDescription>
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
