'use client'

import { z } from 'zod'
import { toast } from 'sonner'
import { useForm } from 'react-hook-form'
import { Session } from 'next-auth'
import { InfoIcon, LoaderIcon } from 'lucide-react'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { RegisterSchemaWithOptionalPassword } from '@/schemas/register.schema'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { updateUser } from '@/actions/users'
import { useTransition } from 'react'

interface MyProfileFormProps {
  session: Session
}

export function MyProfileForm({ session }: MyProfileFormProps) {
  const { user } = session
  const [isPending, startTransition] = useTransition()

  const form = useForm<z.infer<typeof RegisterSchemaWithOptionalPassword>>({
    resolver: zodResolver(RegisterSchemaWithOptionalPassword),
    defaultValues: {
      name: user.name ?? '',
      surname: user.surname ?? '',
      username: user.username ?? '',
      email: user.email ?? '',
      role: user.role ?? 'USER',
    },
  })

  const onSubmit = async (
    data: z.infer<typeof RegisterSchemaWithOptionalPassword>,
  ) => {
    startTransition(async () => {
      const parsedPayload = RegisterSchemaWithOptionalPassword.safeParse(data)
      if (parsedPayload.success) {
        if (!user.id) {
          toast.error('User session is invalid, please log in again.')
          return
        }
        await updateUser(user.id, parsedPayload.data)
        toast.success('User created successfully.')
      } else {
        toast.error('Please double check all fields.')
      }
    })
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
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
          name='surname'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Surname</FormLabel>
              <FormControl>
                <Input
                  placeholder='Doe'
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
          name='username'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input
                  placeholder='johndoe'
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
          disabled={isPending || !form.formState.isDirty}
        >
          {isPending ? (
            <span className='flex items-center gap-x-2'>
              <LoaderIcon className='size-4 animate-spin' /> Saving...
            </span>
          ) : (
            'Save Changes'
          )}
        </Button>
      </form>
    </Form>
  )
}
