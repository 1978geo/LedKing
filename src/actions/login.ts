'use server'

import { z } from 'zod'
import { LoginSchema, LoginSchemaType } from '@/schemas/login.schema'
import { prisma } from '@/lib/prisma'

export async function login(values: LoginSchemaType) {
  const validatedFields = LoginSchema.safeParse(values)

  if (!validatedFields.success) {
    return { error: 'Invalid fields!' }
  }

  return {
    success: 'Login successful!',
  }
}
