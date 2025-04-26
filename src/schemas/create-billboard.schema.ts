import { z } from 'zod'

export const CreateBillboardSchema = z.object({
  address: z.string({ message: 'Задължително поле' }).min(5, {
    message: 'Адресът трябва да е поне 5 символа',
  }),
  lat: z.coerce.number({ message: 'Задължително поле' }),
  lng: z.coerce.number({ message: 'Задължително поле' }),
  type: z.string({ message: 'Задължително поле' }),
  countScreens: z.coerce.number({ message: 'Задължително поле' }),
  width: z.coerce.number({ message: 'Задължително поле' }),
  height: z.coerce.number({ message: 'Задължително поле' }),
  photo: z.string().optional(),
  cityId: z.string({ message: 'Задължително поле' }),
})
