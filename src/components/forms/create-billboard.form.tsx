'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { CreateBillboardSchema } from '@/schemas/create-billboard.schema'
import { createBillboard } from '@/actions/billboards'
import { CityList } from '@/actions/cities'

interface CreateBillboardFormProps {
  cities: CityList[]
  onSuccess?: () => void
}

export function CreateBillboardForm({
  cities,
  onSuccess,
}: CreateBillboardFormProps) {
  const form = useForm<z.infer<typeof CreateBillboardSchema>>({
    resolver: zodResolver(CreateBillboardSchema),
    defaultValues: {
      address: '',
      lat: 0,
      lng: 0,
      type: '',
      countScreens: 0,
      width: 0,
      height: 0,
      photo: '',
      cityId: '',
    },
  })

  async function handleSubmit(data: z.infer<typeof CreateBillboardSchema>) {
    const parsedPayload = CreateBillboardSchema.safeParse(data)

    if (parsedPayload.success) {
      try {
        await createBillboard(parsedPayload.data)
        toast.success('City created successfully.')
        form.reset()
        onSuccess?.()
      } catch (error) {
        console.error('Error creating billboard:', error)
        toast.error('Error creating billboard. Please try again later.')
      }
    } else {
      toast.error('Please double check all fields.')
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className='w-full space-y-4 max-w-2xl'
      >
        <FormField
          control={form.control}
          name='address'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='mb-1'>Address</FormLabel>
              <FormControl>
                <Input
                  placeholder='123 Main St'
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
          name='photo'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='mb-1'>Photo</FormLabel>
              <FormControl>
                <Input
                  placeholder='https://example.com/photo.jpg'
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
          name='cityId'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='mb-1'>City</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className='shadow-none h-10.5 px-3 rounded-lg focus:ring-indigo-500'>
                    <SelectValue placeholder='Select a city' />
                  </SelectTrigger>
                  <SelectContent>
                    {cities.map(city => (
                      <SelectItem
                        key={city.id}
                        value={city.id}
                      >
                        {city.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className='flex gap-x-4'>
          <FormField
            control={form.control}
            name='lat'
            render={({ field }) => (
              <FormItem className='flex-1'>
                <FormLabel className='mb-1'>Latitude</FormLabel>
                <FormControl>
                  <Input
                    type='number'
                    placeholder='42.123456'
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
            name='lng'
            render={({ field }) => (
              <FormItem className='flex-1'>
                <FormLabel className='mb-1'>Longitude</FormLabel>
                <FormControl>
                  <Input
                    type='number'
                    placeholder='-71.123456'
                    className='shadow-none h-10.5 px-3 rounded-lg focus-visible:ring-indigo-500'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className='flex gap-x-4'>
          <FormField
            control={form.control}
            name='type'
            render={({ field }) => (
              <FormItem className='flex-1'>
                <FormLabel className='mb-1'>Type</FormLabel>
                <FormControl>
                  <Input
                    placeholder='Billboard Type'
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
            name='countScreens'
            render={({ field }) => (
              <FormItem className='flex-1'>
                <FormLabel className='mb-1'>Count Screens</FormLabel>
                <FormControl>
                  <Input
                    type='number'
                    placeholder='2'
                    className='shadow-none h-10.5 px-3 rounded-lg focus-visible:ring-indigo-500'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className='flex gap-x-4'>
          <FormField
            control={form.control}
            name='width'
            render={({ field }) => (
              <FormItem className='flex-1'>
                <FormLabel className='mb-1'>Width</FormLabel>
                <FormControl>
                  <Input
                    type='number'
                    placeholder='10'
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
            name='height'
            render={({ field }) => (
              <FormItem className='flex-1'>
                <FormLabel className='mb-1'>Height</FormLabel>
                <FormControl>
                  <Input
                    type='number'
                    placeholder='5'
                    className='shadow-none h-10.5 px-3 rounded-lg focus-visible:ring-indigo-500'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button
          type='submit'
          variant='adminDefault'
          size='lg'
          className='w-full rounded-md mt-4 cursor-pointer'
        >
          Create
        </Button>
      </form>
    </Form>
  )
}
