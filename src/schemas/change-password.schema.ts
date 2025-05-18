import { z } from 'zod'

export const ChangePasswordSchema = z
  .object({
    oldPassword: z.string().min(1, { message: 'Old password is required' }),
    newPassword: z.string().min(8, { message: 'New password is required' }),
    confirmPassword: z
      .string()
      .min(8, { message: 'Confirm password is required' }),
  })
  .refine(data => data.newPassword === data.confirmPassword, {
    message: 'Passwords do not match',
  })
  .refine(data => data.newPassword !== data.oldPassword, {
    message: 'New password must be different from old password',
  })
  .refine(data => data.newPassword.length >= 8, {
    message: 'New password must be at least 8 characters long',
  })
  .refine(data => /[A-Z]/.test(data.newPassword), {
    message: 'New password must contain at least one uppercase letter',
  })
  .refine(data => /[a-z]/.test(data.newPassword), {
    message: 'New password must contain at least one lowercase letter',
  })
  .refine(data => /\d/.test(data.newPassword), {
    message: 'New password must contain at least one number',
  })
  .refine(data => /[!@#$%^&*(),.?":{}|<>]/.test(data.newPassword), {
    message: 'New password must contain at least one special character',
  })

export type ChangePasswordSchemaType = z.infer<typeof ChangePasswordSchema>
