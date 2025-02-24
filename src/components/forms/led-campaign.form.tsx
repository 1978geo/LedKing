'use client'

import { z } from 'zod'
import React, { useMemo } from 'react'
import { DefaultValues, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { LedCampaingSchema } from '@/schemas/led-campaing.schema'
import { Checkbox } from '@/components/ui/checkbox'
import { cn } from '@/lib/utils'
import { Billboard, City } from '@/generated/client'
import LEDMap from '../led-map'

interface LedCampaingFormProps {
  cities: City[]
  billboards: Billboard[]
}

type SubmitFormValues = z.output<typeof LedCampaingSchema>

const initialValues: DefaultValues<SubmitFormValues> = {
  city: [],
  location: [],
  campaignStartDate: new Date(),
  campaignEndDate: new Date(),
  videoDuration: '',
  supportNeeded: false,
  email: '',
  phone: '',
  comments: '',
  acceptTerms: false,
}

function LedCampaingForm({ cities, billboards }: LedCampaingFormProps) {
  const form = useForm<SubmitFormValues>({
    resolver: zodResolver(LedCampaingSchema),
    defaultValues: initialValues,
  })

  const selectedCityIds = form.watch('city')

  const onSubmit = (values: SubmitFormValues) => {
    console.log(values)
  }

  const onError = (error: unknown) => {
    console.error(error)
  }

  const billboardsByCity = useMemo(
    () =>
      billboards.reduce((acc, billboard) => {
        const city = cities.find(city => city.id === billboard.cityId)
        if (!city) return acc

        if (!acc[city.id]) {
          acc[city.id] = []
        }

        acc[city.id].push(billboard)

        return acc
      }, {} as { [key: string]: Billboard[] }),
    [billboards, cities],
  )

  const selectedBillboards = useMemo(
    () => selectedCityIds.flatMap(cityId => billboardsByCity[cityId] || []),
    [selectedCityIds, billboardsByCity],
  )

  console.log(selectedBillboards)

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit, onError)}
        className='space-y-5 relative'
      >
        <div className='max-w-screen mx-auto'>
          <div className='absolute top-0 left-0 h-full w-10 bg-gradient-to-r from-white to-transparent pointer-events-none'></div>
          <div className='absolute top-0 right-0 h-full w-10 bg-gradient-to-l from-white to-transparent pointer-events-none'></div>
          <FormField
            control={form.control}
            name='city'
            render={() => (
              <FormItem className='flex flex-row items-center gap-x-2 overflow-x-auto px-8 w-full'>
                {cities.map(city => (
                  <FormField
                    key={city.id}
                    control={form.control}
                    name='city'
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={city.id}
                          className={cn(
                            'flex flex-row items-center min-w-max space-x-3 space-y-0 h-9 pl-3 rounded-full border border-slate-400 mb-2.5',
                            field.value?.includes(city.id) &&
                              'bg-primary-purple/20 border-primary-purple',
                          )}
                        >
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(city.id)}
                              onCheckedChange={checked => {
                                return checked
                                  ? field.onChange([...field.value, city.id])
                                  : field.onChange(
                                      field.value?.filter(
                                        value => value !== city.id,
                                      ),
                                    )
                              }}
                            />
                          </FormControl>
                          <FormLabel className='flex items-center font-normal h-full pr-3'>
                            {city.name}
                          </FormLabel>
                        </FormItem>
                      )
                    }}
                  />
                ))}
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <LEDMap billboards={billboards} />
        <div>
          <h3 className='text-2xl font-bold text-center'>Локация*</h3>
        </div>
      </form>
    </Form>
  )
}

export default LedCampaingForm
