import { z } from 'zod'

export const LedCampaingSchema = z
  .object({
    city: z.array(z.string()).refine(value => value.some(item => item), {
      message: 'Изберете град',
    }),
    location: z.string().nonempty({ message: 'Изберете локация' }),
    campaignStartDate: z.coerce
      .date({ message: 'Изберете начална дата' })
      .refine(value => value > new Date(), {
        message: 'Стартовата дата трябва да е след текущата',
      }),
    campaignEndDate: z.coerce
      .date({ message: 'Изберете крайна дата' })
      .refine(value => value > new Date(), {
        message: 'Крайната дата трябва да е след текущата',
      }),
    videoDuration: z.string().nonempty({ message: 'Изберете времетраене' }),
    supportNeeded: z.boolean().optional(),
    email: z.string().email({ message: 'Невалиден имейл' }),
    phone: z.string().nonempty({ message: 'Невалиден телефон' }),
    comments: z.string().optional(),
    acceptTerms: z
      .boolean()
      .refine(value => value, { message: 'Трябва да приемете условията' }),
  })
  .refine(data => data.campaignEndDate > data.campaignStartDate, {
    message: 'Крайната дата трябва да е след началната',
    path: ['campaignEndDate'],
  })
