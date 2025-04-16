import { RegisterSchema, RegisterSchemaType } from '@/schemas/register.schema'
import bcrypt from 'bcryptjs'
import { getUserByEmail } from './users'
import { prisma } from '@/lib/prisma'
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

  // const verificationToken = await generateVerificationToken(email)
  // await sendVerificationEmail(verificationToken.email, verificationToken.token)

  return { success: 'Confirmation email sent!' }
}
