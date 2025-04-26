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
import { RegisterSchema } from '@/schemas/register.schema'
import { register } from '@/actions/register'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'
import { InfoIcon } from 'lucide-react'

export function MyProfileForm() {
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      image: '',
      role: 'USER',
    },
  })

  async function handleSubmit(data: z.infer<typeof RegisterSchema>) {
    const parsedPayload = RegisterSchema.safeParse(data)

    if (parsedPayload.success) {
      const response = await register(parsedPayload.data)
      if (response?.error) {
        toast.error(response.error as string)
        return
      }
      toast.success('User created successfully.')
    } else {
      toast.error('Please double check all fields.')
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className='flex flex-col w-full gap-y-3 max-w-xl mx-auto'
      >
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  placeholder='John Doe'
                  className='shadow-none px-3 rounded-md'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email*</FormLabel>
              <FormControl>
                <Input
                  type='email'
                  placeholder='j.doe@mail.com'
                  className='shadow-none px-3 rounded-md'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password*</FormLabel>
              <FormControl>
                <Input
                  type='password'
                  placeholder='*********'
                  autoComplete='off'
                  className='shadow-none px-3 rounded-md'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='image'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Photo URL</FormLabel>
              <FormControl>
                <Input
                  type='text'
                  placeholder='https://example.com/photo.jpg'
                  autoComplete='off'
                  className='shadow-none px-3 rounded-md'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='role'
          render={({ field }) => (
            <FormItem className='flex flex-col flex-1'>
              <FormLabel>Role*</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger className='w-full rounded-md shadow-none'>
                    <SelectValue placeholder='Select Role' />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value='USER'>User</SelectItem>
                  <SelectItem value='ADMIN'>Admin</SelectItem>
                  <SelectItem value='SUPERADMIN'>Super Admin</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <span className='text-sm text-muted-foreground inline-flex items-center gap-x-1'>
          <InfoIcon className='size-4' /> All fields marked with &apos;*&apos;
          are required
        </span>
        <Button
          type='submit'
          className='w-full rounded-md cursor-pointer mt-2'
          variant='adminDefault'
          size='lg'
        >
          Create
        </Button>
      </form>
    </Form>
  )
}
