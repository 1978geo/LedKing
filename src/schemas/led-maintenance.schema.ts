import { z } from 'zod'

export const LedMaintenanceSchema = z
  .object({
    city: z.string().nonempty({ message: 'Изберете град' }),
    typeLed: z.enum(['inside', 'outside'], { message: 'Изберете тип на LED' }),
    maintenanceStartDate: z.coerce
      .date({ message: 'Изберете начална дата' })
      .refine(value => value > new Date(), {
        message: 'Стартовата дата трябва да е след текущата',
      }),
    maintenanceEndDate: z.coerce
      .date({ message: 'Изберете крайна дата' })
      .refine(value => value > new Date(), {
        message: 'Крайната дата трябва да е след текущата',
      }),
    email: z.string().email({ message: 'Невалиден имейл' }),
    phone: z.string().nonempty({ message: 'Невалиден телефон' }),
    comments: z.string().optional(),
    acceptTerms: z
      .boolean()
      .refine(value => value, { message: 'Трябва да приемете условията' }),
  })
  .refine(data => data.maintenanceEndDate > data.maintenanceStartDate, {
    message: 'Крайната дата трябва да е след началната',
    path: ['maintenanceEndDate'],
  })
