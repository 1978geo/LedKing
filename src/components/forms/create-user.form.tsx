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
import { createCity } from '@/actions/cities'
import { Switch } from '../ui/switch'
import { RegisterSchema } from '@/schemas/register.schema'
import { register } from '@/actions/register'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'

interface CreateCityFormProps {
  onSubmitAction: () => void
}

export function CreateUserForm({ onSubmitAction }: CreateCityFormProps) {
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      role: 'USER',
    },
  })

  async function handleSubmit(data: z.infer<typeof RegisterSchema>) {
    const parsedPayload = RegisterSchema.safeParse(data)

    if (parsedPayload.success) {
      await register(parsedPayload.data)
      toast.success('User created successfully.')
      onSubmitAction()
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
              <FormLabel>Email</FormLabel>
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
              <FormLabel>Password</FormLabel>
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
          name='role'
          render={({ field }) => (
            <FormItem className='flex flex-col flex-1'>
              <FormLabel>Role</FormLabel>
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
