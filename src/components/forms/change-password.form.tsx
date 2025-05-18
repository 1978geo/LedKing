'use client'

import { toast } from 'sonner'
import { useForm } from 'react-hook-form'
import { Session } from 'next-auth'
import { DotIcon, InfoIcon, LoaderIcon } from 'lucide-react'
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
import { isPasswordMatch, updatePassword } from '@/actions/users'
import { useTransition } from 'react'
import {
  ChangePasswordSchema,
  ChangePasswordSchemaType,
} from '@/schemas/change-password.schema'
import { signOut } from 'next-auth/react'

interface ChangePasswordFormProps {
  session: Session
}

export function ChangePasswordForm({ session }: ChangePasswordFormProps) {
  const { user } = session
  const [isPending, startTransition] = useTransition()

  const form = useForm<ChangePasswordSchemaType>({
    resolver: zodResolver(ChangePasswordSchema),
    defaultValues: {
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
  })

  const onSubmit = async (data: ChangePasswordSchemaType) => {
    startTransition(async () => {
      const parsedPayload = ChangePasswordSchema.safeParse(data)
      if (parsedPayload.success) {
        if (!user.id) {
          toast.error('User session is invalid, please log in again.')
          return
        }
        const isPasswordsMatch = await isPasswordMatch(
          user.email,
          parsedPayload.data.oldPassword,
        )
        if (!isPasswordsMatch) {
          toast.error('Old password is incorrect.')
          return
        }
        await updatePassword(user.id, parsedPayload.data.newPassword)
        toast.success('Password changed successfully. Please log in again.')
        signOut()
      } else {
        toast.error('Please double check all fields.')
      }
    })
  }

  const onError = (error: unknown) => {
    console.log('error', error)
    toast.error('Something went wrong, please try again.')
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit, onError)}
        className='flex flex-col w-full gap-y-6 max-w-xl'
      >
        <FormField
          control={form.control}
          name='oldPassword'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Old Password</FormLabel>
              <FormControl>
                <Input
                  type='password'
                  placeholder='Enter your old password'
                  className='shadow-none'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className='flex flex-col gap-y-2'>
          <FormField
            control={form.control}
            name='newPassword'
            render={({ field }) => (
              <FormItem>
                <FormLabel>New Password</FormLabel>
                <FormControl>
                  <Input
                    type='password'
                    placeholder='Enter your new password'
                    className='shadow-none'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className='flex flex-col text-sm text-muted-foreground '>
            <span>Password must match the following rules:</span>
            <span className='flex items-center'>
              <DotIcon className='size-6' /> Minimum characters 8
            </span>
            <span className='flex items-center'>
              <DotIcon className='size-6' /> One uppercase character
            </span>
            <span className='flex items-center'>
              <DotIcon className='size-6' /> One lowercase character
            </span>
            <span className='flex items-center'>
              <DotIcon className='size-6' /> One special character
            </span>
            <span className='flex items-center'>
              <DotIcon className='size-6' /> One number
            </span>
          </div>
        </div>

        <FormField
          control={form.control}
          name='confirmPassword'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input
                  type='password'
                  placeholder='Confirm your new password'
                  className='shadow-none'
                  {...field}
                />
              </FormControl>
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
            'Change Password'
          )}
        </Button>
      </form>
    </Form>
  )
}
