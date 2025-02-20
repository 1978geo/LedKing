import { getCities } from '@/actions/cities'
import { LedCampaingForm } from '@/components/forms/led-campaign.form'

export default async function CampaignPage() {
  const cities = await getCities()

  return (
    <div className='flex flex-col flex-1 bg-white text-black h-full w-full'>
      <section className='container mx-auto py-[46px]'>
        <h1 className='text-4xl text-center'>LED Кампания</h1>
        <LedCampaingForm cities={cities} />
      </section>
    </div>
  )
}
