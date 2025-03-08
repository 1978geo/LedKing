import { z } from 'zod'

export const LedBuySchema = z.object({
  city: z.string().nonempty({ message: 'Изберете град' }),
  typeLed: z.enum(['inside', 'outside'], { message: 'Изберете тип на LED' }),
  pixelDistance: z.enum(['1.2', '1.5', '1.8', '2', '2.5', '3', '4', '5', '6'], {
    message: 'Изберете пикселно разстояние',
  }),
  photo: z
    .union([
      z.instanceof(File, { message: 'Задължително поле' }),
      z.string().optional(), // Allow the existing image URL for editing mode
    ])
    .optional(),
  email: z.string().email({ message: 'Невалиден имейл' }),
  phone: z.string().nonempty({ message: 'Невалиден телефон' }),
  comments: z.string().optional(),
  acceptTerms: z
    .boolean()
    .refine(value => value, { message: 'Трябва да приемете условията' }),
})
