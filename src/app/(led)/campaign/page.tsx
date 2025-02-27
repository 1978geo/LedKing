import { getBillboards } from '@/actions/billboards'
import { getCities } from '@/actions/cities'
import LedCampaingForm from '@/components/forms/led-campaign.form'
import { BillboardWithCity } from '@/types/Billboard'

export default async function CampaignPage() {
  const cities = await getCities()
  const billboards = await getBillboards()

  const billboardsByCity = billboards.reduce((acc, billboard) => {
    const city = cities.find(city => city.id === billboard.cityId)
    if (!city) return acc

    if (!acc[city.id]) {
      acc[city.id] = []
    }

    acc[city.id].push(billboard)

    return acc
  }, {} as { [key: string]: BillboardWithCity[] })

  return (
    <div className='flex flex-col flex-1 bg-white text-black h-full w-full'>
      <section className='container mx-auto'>
        <h1 className='text-4xl text-center py-8'>LED Кампания</h1>
      </section>
      <LedCampaingForm
        cities={cities}
        billboards={billboards}
        billboardsByCity={billboardsByCity}
      />
    </div>
  )
}
