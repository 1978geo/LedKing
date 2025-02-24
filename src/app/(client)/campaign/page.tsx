import { getBillboards } from '@/actions/billboards'
import { getCities } from '@/actions/cities'
import LedCampaingForm from '@/components/forms/led-campaign.form'

export default async function CampaignPage() {
  const cities = await getCities()
  const billboards = await getBillboards()

  return (
    <div className='flex flex-col flex-1 bg-white text-black h-full w-full'>
      <section className='container mx-auto'>
        <h1 className='text-4xl text-center py-8'>LED Кампания</h1>
      </section>
      <LedCampaingForm
        cities={cities}
        billboards={billboards}
      />
    </div>
  )
}
