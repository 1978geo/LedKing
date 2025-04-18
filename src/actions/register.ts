'use server'

import { revalidatePath } from 'next/cache'
import bcrypt from 'bcryptjs'
import { RegisterSchema, RegisterSchemaType } from '@/schemas/register.schema'
import { prisma } from '@/lib/prisma'
import { getUserByEmail } from './users'
// import { generateVerificationToken } from '@/lib/tokens'
// import { sendVerificationEmail } from './sendVerificationEmail'

export async function register(values: RegisterSchemaType) {
  const validateFields = RegisterSchema.safeParse(values)

  if (!validateFields.success) {
    return {
      error: validateFields.error.format(),
    }
  }

  const { email, name, password, role } = validateFields.data
  const hashedPassword = await bcrypt.hash(password, 10)

  const existingUser = await getUserByEmail(email)

  if (existingUser) {
    return {
      error: 'Email already in use!',
    }
  }

  await prisma.user.create({
    data: {
      email,
      name,
      role,
      image: null,
      emailVerified: new Date(),
      password: hashedPassword,
    },
  })

  revalidatePath('/admin/settings/users')
  // const verificationToken = await generateVerificationToken(email)
  // await sendVerificationEmail(verificationToken.email, verificationToken.token)

  return { success: 'Confirmation email sent!' }
}
