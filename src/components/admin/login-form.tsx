'use client'

import { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoginSchema, LoginSchemaType } from '@/schemas/login.schema'
import { CardWrapper } from './card-wrapper'
import {
  Form,
  FormItem,
  FormControl,
  FormLabel,
  FormMessage,
  FormField,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { FormError } from '@/components/form-error'
import { FormSuccess } from '@/components/form-success'
import { login } from '@/actions/login'
import { LoaderIcon } from 'lucide-react'

export function LoginForm() {
  const [isPending, startTransition] = useTransition()
  const [success, setSuccess] = useState<string | undefined>(undefined)
  const [error, setError] = useState<string | undefined>(undefined)

  const form = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = (values: LoginSchemaType) => {
    setError(undefined)
    setSuccess(undefined)

    startTransition(() => {
      login(values).then(data => {
        setError(data?.error)
        setSuccess(data?.success)
      })
    })
  }

  return (
    <CardWrapper headerLabel='Welcome to LedKing admin'>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-6'
        >
          <div className='space-y-4'>
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type='email'
                      placeholder='john.doe@mail.com'
                      className='w-full shadow-none focus-visible:ring-slate-800'
                      disabled={isPending}
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
                      placeholder='***********'
                      className='w-full shadow-none focus-visible:ring-slate-800'
                      disabled={isPending}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormError message={error} />
          <FormSuccess message={success} />

          <Button
            variant='admin'
            type='submit'
            size='lg'
            className='w-full cursor-pointer'
            disabled={isPending}
          >
            {isPending && <LoaderIcon className='animate-spin size-4' />} Login
          </Button>
        </form>
      </Form>
    </CardWrapper>
  )
}
