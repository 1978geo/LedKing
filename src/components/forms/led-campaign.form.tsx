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
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { CityEntity } from '@/types/City.type'
import { cn } from '@/lib/utils'

interface LedCampaingFormProps {
  cities: CityEntity[]
}

type SubmitFormValues = z.output<typeof LedCampaingSchema>

const initialValues: DefaultValues<SubmitFormValues> = {
  city: '',
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

export function LedCampaingForm({ cities }: LedCampaingFormProps) {
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
        className='space-y-5 pt-4 relative'
      >
        <div className='absolute top-0 left-0 h-full w-10 bg-gradient-to-r from-white to-transparent pointer-events-none'></div>
        <div className='absolute top-0 right-0 h-full w-10 bg-gradient-to-l from-white to-transparent pointer-events-none'></div>
        <FormField
          name='city'
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className='grid grid-flow-col auto-cols-max items-center gap-2 overflow-x-auto px-10'
                >
                  {cities.map(city => (
                    <FormItem
                      className={cn(
                        'flex items-center flex-nowrap space-x-2 space-y-0 px-4 rounded-full border border-slate-400',
                        field.value === city.id
                          ? 'bg-primary-purple/10 border-primary-purple'
                          : 'hover:bg-primary-purple hover:bg-opacity-10 hover:border-primary-purple hover:cursor-pointer',
                      )}
                      key={city.id}
                    >
                      <FormControl>
                        <RadioGroupItem
                          value={city.id}
                          className='hover:cursor-pointer'
                        />
                      </FormControl>
                      <FormLabel className='font-normal py-4 hover:cursor-pointer'>
                        {city.name}
                      </FormLabel>
                    </FormItem>
                  ))}
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}
