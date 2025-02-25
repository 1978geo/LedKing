'use client'

import { z } from 'zod'
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
import { Billboard, City } from '@prisma/client'
import { cn } from '@/lib/utils'
import LEDMap from '../led-map'
import { ImageIcon, MapPinIcon } from 'lucide-react'

type BillboardWithCity = Billboard & { city: City }
type CityWithBillboards = City & { billboards: Billboard[] }

interface LedCampaingFormProps {
  cities: CityWithBillboards[]
  billboards: BillboardWithCity[]
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

  const billboardsByCity = billboards.reduce((acc, billboard) => {
    const city = cities.find(city => city.id === billboard.cityId)
    if (!city) return acc

    if (!acc[city.id]) {
      acc[city.id] = []
    }

    acc[city.id].push(billboard)

    return acc
  }, {} as { [key: string]: BillboardWithCity[] })

  const selectedCitiesBillboards = selectedCityIds.flatMap(
    cityId => billboardsByCity[cityId] || [],
  )

  const onSubmit = (values: SubmitFormValues) => {
    console.log(values, selectedCitiesBillboards)
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
        <div className='max-w-screen mx-auto'>
          <div className='absolute top-0 left-0 h-11 w-10 bg-gradient-to-r from-white to-transparent pointer-events-none'></div>
          <div className='absolute top-0 right-0 h-11 w-10 bg-gradient-to-l from-white to-transparent pointer-events-none'></div>
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
                              className='rounded-full'
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
        <div className='flex flex-col gap-y-4'>
          <h3 className='text-2xl font-bold text-center'>Локация*</h3>
          <FormField
            control={form.control}
            name='location'
            render={() => (
              <FormItem className='flex flex-col gap-y-2 px-5 w-full'>
                {selectedCitiesBillboards.map(billboard => (
                  <FormField
                    key={billboard.id}
                    control={form.control}
                    name='location'
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={billboard.id}
                          className={cn(
                            'flex flex-col gap-y-1 p-4 rounded-2xl border border-transparent',
                            field.value?.includes(billboard.id) &&
                              'bg-primary-purple/20 border-primary-purple text-primary-purple',
                          )}
                        >
                          <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-x-4'>
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(billboard.id)}
                                  onCheckedChange={checked => {
                                    return checked
                                      ? field.onChange([
                                          ...field.value,
                                          billboard.id,
                                        ])
                                      : field.onChange(
                                          field.value?.filter(
                                            value => value !== billboard.id,
                                          ),
                                        )
                                  }}
                                  className='rounded-full size-6'
                                />
                              </FormControl>
                              <FormLabel className='text-2xl'>
                                {billboard.city.name}
                              </FormLabel>
                            </div>
                            <div className='flex items-center justify-end gap-x-4'>
                              <MapPinIcon size={24} />
                              <ImageIcon size={24} />
                            </div>
                          </div>

                          <div
                            className={cn(
                              'flex h-[1px] w-full bg-gray-200',
                              field.value?.includes(billboard.id) &&
                                'bg-primary-purple',
                            )}
                          />

                          <div className='flex flex-col gap-y-0.5'>
                            <h2 className='font-semibold text-lg text-wrap'>
                              Адрес:
                            </h2>
                            <p>{billboard.address}</p>
                          </div>

                          <div
                            className={cn(
                              'flex h-[1px] w-full bg-gray-200',
                              field.value?.includes(billboard.id) &&
                                'bg-primary-purple',
                            )}
                          />

                          <div className='flex flex-col gap-y-0.5'>
                            <h2 className='font-semibold text-lg text-wrap'>
                              Вид на екрана:
                            </h2>
                            <p>{billboard.type}</p>
                          </div>

                          <div
                            className={cn(
                              'flex h-[1px] w-full bg-gray-200',
                              field.value?.includes(billboard.id) &&
                                'bg-primary-purple',
                            )}
                          />

                          <div className='flex flex-col gap-y-0.5'>
                            <h2 className='font-semibold text-lg text-wrap'>
                              Размери:
                            </h2>
                            <p>
                              {Intl.NumberFormat('bg-BG', {
                                style: 'unit',
                                unit: 'centimeter',
                                unitDisplay: 'short',
                              }).format(billboard.width)}{' '}
                              x{' '}
                              {Intl.NumberFormat('bg-BG', {
                                style: 'unit',
                                unit: 'centimeter',
                                unitDisplay: 'short',
                              }).format(billboard.height)}
                            </p>
                          </div>
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
      </form>
    </Form>
  )
}

export default LedCampaingForm
