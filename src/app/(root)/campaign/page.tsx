import { getCities } from '@/actions/cities'

export default async function CampaignPage() {
  const data = await getCities()
  console.log('DATA: ', data)
  return (
    <div className='flex flex-col flex-1 bg-white text-black h-full w-full'>
      <section className='container mx-auto py-[46px]'>
        <h1 className='text-4xl text-center'>LED Кампания</h1>
      </section>
    </div>
  )
}
