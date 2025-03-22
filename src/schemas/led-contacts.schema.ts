import { z } from 'zod'

export const LedContactsSchema = z.object({
  email: z.string().email({ message: 'Невалиден имейл' }),
  phone: z.string().nonempty({ message: 'Невалиден телефон' }),
  message: z.string().nonempty({ message: 'Полето не може да бъде празно' }),
  acceptTerms: z
    .boolean()
    .refine(value => value, { message: 'Трябва да приемете условията' }),
})
