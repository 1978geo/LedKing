'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CraeteCitySchema } from '@/schemas/create-city.schema'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { toast } from 'sonner'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { createCity, updateCity } from '@/actions/cities'
import { Switch } from '../ui/switch'

interface CreateCityFormProps {
  onSubmit: () => void
  editData?: z.infer<typeof CraeteCitySchema>
  id?: string
}

export function CreateCityForm({
  onSubmit,
  editData,
  id,
}: CreateCityFormProps) {
  const form = useForm<z.infer<typeof CraeteCitySchema>>({
    resolver: zodResolver(CraeteCitySchema),
    defaultValues: id
      ? editData
      : {
          name: '',
          popularChoice: false,
        },
  })

  function handleSubmit(data: z.infer<typeof CraeteCitySchema>) {
    const parsedPayload = CraeteCitySchema.safeParse(data)

    if (parsedPayload.success) {
      if (id) {
        updateCity(id, parsedPayload.data)
        toast.success('City updated successfully.')
      } else {
        createCity(parsedPayload.data)
        toast.success('City created successfully.')
      }
      onSubmit()
    } else {
      toast.error('Please double check all fields.')
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className='w-full space-y-4 max-w-xl mx-auto'
      >
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='mb-1'>City Name</FormLabel>
              <FormControl>
                <Input
                  placeholder='New York'
                  className='shadow-none h-10.5 px-3 rounded-lg focus-visible:ring-indigo-500'
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
                    className='shadow-none data-[state=checked]:bg-indigo-500'
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
          value='adminDefault'
          className='w-full rounded-md'
          variant='adminDefault'
        >
          {id ? 'Update' : 'Create'}
        </Button>
      </form>
    </Form>
  )
}
