import { z } from 'zod'

const fileSchema = z.object({
  filename: z.string(),
  content: z.any(), // Zod doesn't work well with instanceof(File) or FileList
})

export const LedBuySchema = z.object({
  city: z.string().nonempty({ message: 'Изберете град' }),
  typeLed: z.enum(['inside', 'outside'], { message: 'Изберете тип на LED' }),
  pixelDistance: z.enum(['1.2', '1.5', '1.8', '2', '2.5', '3', '4', '5', '6'], {
    message: 'Изберете пикселно разстояние',
  }),
  attachments: z.array(fileSchema).optional(),
  email: z.string().email({ message: 'Невалиден имейл' }),
  phone: z.string().nonempty({ message: 'Невалиден телефон' }),
  comments: z.string().optional(),
  acceptTerms: z
    .boolean()
    .refine(value => value, { message: 'Трябва да приемете условията' }),
})
