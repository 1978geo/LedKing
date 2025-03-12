import { z } from 'zod'

export const LedRentSchema = z
  .object({
    city: z.string().nonempty({ message: 'Изберете град' }),
    typeLed: z.enum(['inside', 'outside'], { message: 'Изберете тип на LED' }),
    pixelDistance: z.enum(
      ['1.2', '1.5', '1.8', '2', '2.5', '3', '4', '5', '6'],
      {
        message: 'Изберете пикселно разстояние',
      },
    ),
    rentStartDate: z.coerce
      .date({ message: 'Изберете начална дата' })
      .refine(value => value > new Date(), {
        message: 'Стартовата дата трябва да е след текущата',
      }),
    rentEndDate: z.coerce
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
  .refine(data => data.rentEndDate > data.rentStartDate, {
    message: 'Крайната дата трябва да е след началната',
    path: ['rentEndDate'],
  })
