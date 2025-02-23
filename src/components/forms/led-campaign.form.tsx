'use client'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { DefaultValues, useForm } from 'react-hook-form'
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
import { CityEntity } from '@/types/City.type'
import LEDMap from '../led-map'
import React from 'react'
import { Billboard } from '@/types/Billboard.type'

interface LedCampaingFormProps {
  cities: CityEntity[]
  billboards: Billboard[]
}

type SubmitFormValues = z.output<typeof LedCampaingSchema>

const initialValues: DefaultValues<SubmitFormValues> = {
  city: [],
  location: '',
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

  const onSubmit = (values: SubmitFormValues) => {
    console.log(values)
  }

  const onError = (error: unknown) => {
    console.error(error)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit, onError)}
        className='space-y-5 relative'
      >
        <section className='max-w-screen mx-auto'>
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
                          className='flex flex-row items-start min-w-max space-x-3 space-y-0 p-2.5 rounded-full border border-slate-400 mb-2.5'
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
                          <FormLabel className='font-normal'>
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
        </section>
        <LEDMap billboards={billboards} />
      </form>
    </Form>
  )
}

export default LedCampaingForm
