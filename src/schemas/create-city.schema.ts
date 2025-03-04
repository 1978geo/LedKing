import { z } from 'zod'

export const CraeteCitySchema = z.object({
  name: z.string({ message: 'Задължително поле' }).min(3, {
    message: 'Името трябва да е поне 3 символа',
  }),
  popularChoice: z.boolean(),
})
