import { z } from 'zod'

export const RegisterSchema = z.object({
  email: z.string().email({ message: 'Email is required' }),
  name: z.string().optional(),
  role: z.enum(['USER', 'ADMIN', 'SUPERADMIN'], {
    errorMap: () => ({ message: 'Role is required' }),
  }),
  password: z.string().min(1, { message: 'Password is required' }),
  image: z.string().optional(),
})

export type RegisterSchemaType = z.infer<typeof RegisterSchema>
