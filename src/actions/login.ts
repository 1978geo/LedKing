'use server'

import { signIn } from '@/lib/auth'
import { LoginSchema, LoginSchemaType } from '@/schemas/login.schema'
import { DEFAULT_LOGIN_REDIRECT } from '@/routes'
import { AuthError } from 'next-auth'
import { getUserByEmail } from './users'
import { generateVerificationToken } from '@/lib/tokens'

export async function login(values: LoginSchemaType) {
  const validatedFields = LoginSchema.safeParse(values)

  if (!validatedFields.success) {
    return { error: 'Invalid fields!' }
  }

  const { email, password } = validatedFields.data

  const existingUser = await getUserByEmail(email)

  if (!existingUser?.email || !existingUser?.password) {
    return { error: 'Email does not exist!' }
  }

  if (!existingUser?.emailVerified) {
    await generateVerificationToken(existingUser.email)
    return { success: 'Confirmation email sent!' }
  }

  try {
    await signIn('credentials', {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    })
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return { error: 'Invalid credentials' }
        default:
          return { error: 'Something went wrong!' }
      }
    }

    throw error
  }
}
