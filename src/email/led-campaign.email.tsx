'use server'

import { BillboardWithCity } from '@/types/Billboard'

export interface LEDCampaignEmailProps {
  campaignStartDate: string
  campaignEndDate: string
  city: string
  comments?: string
  email: string
  phone: string
  location: BillboardWithCity[]
  supportNeeded: boolean
  videoDuration: number
}

export const LEDCampaignEmail: React.FC<
  Readonly<LEDCampaignEmailProps>
> = async ({
  campaignStartDate,
  campaignEndDate,
  city,
  comments,
  email,
  phone,
  location,
  supportNeeded,
  videoDuration,
}) => (
  <div className='flex flex-col w-full max-w-5xl mx-auto p-4 gap-y-8'>
    <header className='flex flex-col w-full bg-gradient-to-r from-primary-purple to-secondary-purple backdrop-blur'>
      <div className='flex items-center h-full justify-between py-4'>
        <h2 className='text-2xl text-white mr-10'>LED Campaign</h2>
      </div>
      <div className='flex shrink-0 w-full h-1.5 bg-gradient-to-r from-white via-[#fcd448] to-[#0230d6]' />
    </header>

    <section className='flex flex-col gap-y-2'>
      <h1 className='text-2xl font-semibold'>LED Campaign inquiry:</h1>
      <div className='grid grid-cols-2'>
        <div>
          <strong>City:</strong>
        </div>
        <div>{city}</div>
        <div>
          <strong>Start Date:</strong>
        </div>
        <div>{campaignStartDate}</div>
        <div>
          <strong>End Date:</strong>
        </div>
        <div>{campaignEndDate}</div>
        <div>
          <strong>Video Duration:</strong>
        </div>
        <div>{videoDuration} сек.</div>
        <div>
          <strong>Video creation help needed:</strong>
        </div>
        <div>{supportNeeded ? 'Да' : 'Не'}</div>
        <div>
          <strong>Comments:</strong>
        </div>
        <div>{comments}</div>
      </div>
    </section>

    <section className='flex flex-col gap-y-2'>
      <h2 className='text-2xl font-semibold'>LED Campaign Locations:</h2>
      <div className='border border-border rounded-md overflow-clip'>
        <table>
          <thead className='bg-gradient-to-r from-primary-purple to-secondary-purple'>
            <tr>
              <th className='text-white'>City</th>
              <th className='text-white'>Address</th>
              <th className='text-white'>Coordinates</th>
              <th className='text-white'>Number of Screens</th>
              <th className='text-white'>Width</th>
              <th className='text-white'>Height</th>
              <th className='text-white'>Photo</th>
            </tr>
          </thead>
          <tbody>
            {location.map(loc => (
              <tr key={loc.id}>
                <td>{loc.city.name}</td>
                <td>{loc.address}</td>
                <td>
                  {loc.lat}, {loc.lng}
                </td>
                <td>{loc.countScreens}</td>
                <td>{loc.width}cm</td>
                <td>{loc.height}cm</td>
                <td>
                  <a
                    href={loc.photo}
                    target='_blank'
                  >
                    image
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>

    <section className='flex flex-col gap-y-2'>
      <h2 className='text-2xl font-semibold'>Contact Information:</h2>
      <div className='flex flex-col gap-y-2'>
        <div className='flex gap-x-2'>
          <strong className='flex items-center gap-x-2'>Email:</strong>
          <a href={`mailto:${email}`}>{email}</a>
        </div>
        <div className='flex gap-x-2'>
          <strong className='flex items-center gap-x-2'>Phone:</strong>
          <a href={`tel:${phone}`}>{phone}</a>
        </div>
      </div>
    </section>
  </div>
)

export default LEDCampaignEmail
