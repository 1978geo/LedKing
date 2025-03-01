'use client'

import { z } from 'zod'
import { format } from 'date-fns'
import { DefaultValues, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { LedCampaingSchema } from '@/schemas/led-campaing.schema'
import { Billboard, City } from '@prisma/client'
import { cn } from '@/lib/utils'
import LEDMap from '../led-map'
import { CalendarIcon, CheckIcon, ImageIcon, MapPinIcon } from 'lucide-react'
import { useEffect } from 'react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Button } from '../ui/button'
import { Calendar } from '../ui/calendar'
import { Slider } from '../ui/slider'

type BillboardWithCity = Billboard & { city: City }
type CityWithBillboards = City & { billboards: Billboard[] }

interface LedCampaingFormProps {
  cities: CityWithBillboards[]
  billboards: BillboardWithCity[]
  billboardsByCity: Record<string, BillboardWithCity[]>
}

type SubmitFormValues = z.output<typeof LedCampaingSchema>

const initialValues: DefaultValues<SubmitFormValues> = {
  city: [],
  location: [],
  campaignStartDate: new Date(),
  campaignEndDate: new Date(),
  videoDuration: 0,
  supportNeeded: false,
  email: '',
  phone: '',
  comments: '',
  acceptTerms: false,
}

function LedCampaingForm({
  cities,
  billboards,
  billboardsByCity,
}: LedCampaingFormProps) {
  const form = useForm<SubmitFormValues>({
    resolver: zodResolver(LedCampaingSchema),
    defaultValues: initialValues,
  })

  const selectedCityIds = form.watch('city')

  const selectedCitiesBillboards = selectedCityIds.flatMap(
    cityId => billboardsByCity[cityId] || [],
  )

  const onSubmit = (values: SubmitFormValues) => {
    console.log(values, selectedCitiesBillboards)
  }

  const onError = (error: unknown) => {
    console.error(error)
  }

  console.log(billboards)

  useEffect(() => {
    const selectedLocations = form.getValues('location')
    const filteredLocations = selectedLocations.filter(location =>
      selectedCitiesBillboards
        .map(billboard => billboard.id)
        .includes(location),
    )
    form.setValue('location', [...filteredLocations])
  }, [selectedCityIds])

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
                            'flex flex-row items-center min-w-max space-x-3 space-y-0 h-9 rounded-full border border-slate-400 mb-2.5',
                            field.value?.includes(city.id) &&
                              'bg-primary-purple/20 border-primary-purple',
                          )}
                        >
                          <FormControl>
                            <div className='relative flex items-center gap-x-1.5 px-2 pr-3'>
                              <input
                                id={city.id}
                                type='checkbox'
                                aria-checked={field.value?.includes(city.id)}
                                checked={field.value?.includes(city.id)}
                                onChange={e =>
                                  e.target.checked
                                    ? field.onChange([...field.value, city.id])
                                    : field.onChange(
                                        field.value?.filter(
                                          value => value !== city.id,
                                        ),
                                      )
                                }
                                className='absolute top-0 left-0 peer size-4 shrink-0 rounded-full opacity-0 z-20'
                              />
                              <div
                                className={cn(
                                  'size-5 border border-slate-400 rounded-full flex items-center justify-center z-10',
                                  field.value?.includes(city.id) &&
                                    'bg-primary-purple border-primary-purple',
                                )}
                              >
                                {field.value?.includes(city.id) && (
                                  <CheckIcon className='size-4 text-white' />
                                )}
                              </div>
                              <label
                                htmlFor={city.id}
                                className='flex items-center font-normal h-full'
                              >
                                {city.name}
                              </label>
                            </div>
                          </FormControl>
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

        <div className='flex flex-col gap-y-4 mb-16'>
          <h3 className='text-2xl font-bold text-center my-10'>Локация*</h3>
          <div className='lg:hidden'>
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
                            <FormControl>
                              <div className='flex flex-col gap-y-2'>
                                <div className='flex items-center justify-between'>
                                  <label
                                    htmlFor={billboard.id}
                                    className='relative flex items-center justify-between w-full font-normal h-full pr-3'
                                  >
                                    <div className='flex items-center gap-x-4'>
                                      <input
                                        id={billboard.id}
                                        type='checkbox'
                                        aria-checked={field.value?.includes(
                                          billboard.id,
                                        )}
                                        checked={field.value?.includes(
                                          billboard.id,
                                        )}
                                        onChange={e =>
                                          e.target.checked
                                            ? field.onChange([
                                                ...field.value,
                                                billboard.id,
                                              ])
                                            : field.onChange(
                                                field.value?.filter(
                                                  value =>
                                                    value !== billboard.id,
                                                ),
                                              )
                                        }
                                        className='absolute top-0 left-0 peer size-4 shrink-0 rounded-full opacity-0 z-20'
                                      />
                                      <div
                                        className={cn(
                                          'size-5 border border-slate-400 rounded-full flex items-center justify-center z-10',
                                          field.value?.includes(billboard.id) &&
                                            'bg-primary-purple border-primary-purple',
                                        )}
                                      >
                                        {field.value?.includes(
                                          billboard.id,
                                        ) && (
                                          <CheckIcon className='size-4 text-white' />
                                        )}
                                      </div>

                                      {billboard.city.name}
                                    </div>
                                    <div className='flex items-center justify-end gap-x-4'>
                                      <MapPinIcon size={24} />
                                      <ImageIcon size={24} />
                                    </div>
                                  </label>
                                </div>

                                <div
                                  className={cn(
                                    'flex h-[1px] w-full bg-gray-200',
                                    field.value?.includes(billboard.id) &&
                                      'bg-primary-purple/60',
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
                                      'bg-primary-purple/60',
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
                                      'bg-primary-purple/60',
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
                              </div>
                            </FormControl>
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

          <div className='hidden lg:block max-w-7xl mx-auto'>
            <div className='container mx-auto grid grid-cols-[200px_300px_1fr_1fr_110px_1fr_1fr] text-sm text-black font-normal h-16 px-4.5 py-2 rounded-lg bg-gray-200'>
              <div className='flex items-center px-4'>Град</div>
              <div className='flex items-center px-4'>Адрес</div>
              <div className='flex items-center break-words px-4'>
                Брой Екрани
              </div>
              <div className='flex items-center px-4'>Вид на Екрана</div>
              <div className='flex items-center px-4'>Размер</div>
              <div className='flex items-center text-center px-4'>
                GPS Координати
              </div>
              <div className='flex items-center text-center px-4'>Снимка</div>
            </div>

            <FormField
              control={form.control}
              name='location'
              render={() => (
                <FormItem className='flex flex-col w-full'>
                  {selectedCitiesBillboards.map(billboard => (
                    <FormField
                      key={billboard.id}
                      control={form.control}
                      name='location'
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={billboard.id}
                            className='flex flex-col mb-0'
                          >
                            <FormControl>
                              <div
                                className={cn(
                                  'container mx-auto grid grid-cols-[200px_300px_1fr_1fr_110px_1fr_1fr] px-6 rounded-lg min-h-16 border border-transparent',
                                  field.value?.includes(billboard.id) &&
                                    'bg-primary-purple/20 border border-primary-purple',
                                )}
                              >
                                <div className='flex items-center justify-between px-4 border-r border-gray-300'>
                                  <label
                                    htmlFor={billboard.id}
                                    className='relative flex items-center justify-between w-full font-normal h-full pr-3'
                                  >
                                    <input
                                      id={billboard.id}
                                      type='checkbox'
                                      aria-checked={field.value?.includes(
                                        billboard.id,
                                      )}
                                      checked={field.value?.includes(
                                        billboard.id,
                                      )}
                                      onChange={e =>
                                        e.target.checked
                                          ? field.onChange([
                                              ...field.value,
                                              billboard.id,
                                            ])
                                          : field.onChange(
                                              field.value?.filter(
                                                value => value !== billboard.id,
                                              ),
                                            )
                                      }
                                      className='absolute top-0 left-0 peer size-4 shrink-0 rounded-full opacity-0 z-20'
                                    />
                                    <div className='flex items-center gap-x-4'>
                                      <div
                                        className={cn(
                                          'size-5 border border-slate-400 rounded-full flex items-center justify-center z-10',
                                          field.value?.includes(billboard.id) &&
                                            'bg-primary-purple border-primary-purple',
                                        )}
                                      >
                                        {field.value?.includes(
                                          billboard.id,
                                        ) && (
                                          <CheckIcon className='size-4 text-white' />
                                        )}
                                      </div>

                                      {billboard.city.name}
                                    </div>
                                  </label>
                                </div>

                                <div className='flex flex-col gap-y-0.5 text-sm justify-center px-4 border-r border-gray-300'>
                                  {billboard.address}
                                </div>

                                <div className='flex flex-col gap-y-0.5 text-sm text-center justify-center items-center px-4 border-r border-gray-300'>
                                  {billboard.countScreens}
                                </div>

                                <div className='flex flex-col gap-y-0.5 text-sm  justify-center items-center px-4 border-r border-gray-300'>
                                  {billboard.type}
                                </div>

                                <div className='flex flex-col gap-y-0.5 text-sm  justify-center items-center px-4 border-r border-gray-300'>
                                  {(billboard.width / 100).toFixed(2)} x{' '}
                                  {(billboard.height / 100).toFixed(2)}
                                </div>

                                <div className='flex justify-center items-center px-4 border-r border-gray-300'>
                                  <MapPinIcon size={24} />
                                </div>

                                <div className='flex justify-center items-center'>
                                  <ImageIcon size={24} />
                                </div>
                              </div>
                            </FormControl>
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

          <h3 className='text-2xl font-bold text-center mt-10 mb-2'>
            Период на рекламната кампания*
          </h3>
          <div className='flex flex-col gap-y-4 lg:flex-row lg:gap-x-4 lg:gap-y-0 w-full lg:container mx-auto px-5 mb-10'>
            <FormField
              control={form.control}
              name='campaignStartDate'
              render={({ field }) => (
                <FormItem className='flex flex-col flex-1'>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={'outline'}
                          className={cn(
                            'w-full pl-3 text-left font-normal rounded-md shadow-none',
                            !field.value && 'text-muted-foreground',
                          )}
                        >
                          {field.value ? (
                            format(field.value, 'PPP')
                          ) : (
                            <span>Начална дата</span>
                          )}
                          <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent
                      className='w-auto p-0'
                      align='start'
                    >
                      <Calendar
                        mode='single'
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={date => date < new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='campaignEndDate'
              render={({ field }) => (
                <FormItem className='flex flex-col flex-1'>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={'outline'}
                          className={cn(
                            'w-full pl-3 text-left font-normal rounded-md shadow-none',
                            !field.value && 'text-muted-foreground',
                          )}
                        >
                          {field.value ? (
                            format(field.value, 'PPP')
                          ) : (
                            <span>Крайна дата</span>
                          )}
                          <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent
                      className='w-auto p-0'
                      align='start'
                    >
                      <Calendar
                        mode='single'
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={date => date < new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <section className='w-full h-[180px] bg-slate-100 flex flex-col items-center justify-center'>
            <h3 className='text-2xl font-bold text-center mb-4 px-5'>
              Времетраене на видеото (в секунди)*
            </h3>
            <div className='relative w-full max-w-lg mx-auto mb-8 px-5'>
              <FormField
                control={form.control}
                name='videoDuration'
                render={({ field }) => (
                  <FormItem className='flex flex-col flex-1'>
                    <FormControl>
                      <Slider
                        defaultValue={[0]}
                        max={45}
                        step={5}
                        value={[field.value]}
                        onValueChange={value => {
                          console.log(value)
                          field.onChange(value[0])
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className='absolute w-full -bottom-8 left-1/2 -translate-x-1/2 flex mx-auto'>
                <div className='flex-1 text-center'>0</div>
                <div className='flex-1 text-center'>5</div>
                <div className='flex-1 text-center'>10</div>
                <div className='flex-1 text-center'>15</div>
                <div className='flex-1 text-center'>20</div>
                <div className='flex-1 text-center'>25</div>
                <div className='flex-1 text-center'>30</div>
                <div className='flex-1 text-center'>35</div>
                <div className='flex-1 text-center'>40</div>
                <div className='flex-1 text-center'>45</div>
              </div>
            </div>
          </section>
        </div>
      </form>
    </Form>
  )
}

export default LedCampaingForm
