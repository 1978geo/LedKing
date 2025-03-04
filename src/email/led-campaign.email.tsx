import { BillboardWithCity } from '@/types/Billboard'
import { CityWithBillboards } from '@/types/City'

export interface LEDCampaignEmailProps {
  campaignStartDate: string
  campaignEndDate: string
  city: CityWithBillboards[]
  comments?: string
  email: string
  phone: string
  location: BillboardWithCity[]
  supportNeeded: boolean
  videoDuration: number
}

export const LEDCampaignEmail: React.FC<Readonly<LEDCampaignEmailProps>> = ({
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
  <div className='w-full max-w-5xl mx-auto p-4 gap-y-4'>
    <h1 className='text-2xl font-semibold'>LED Campaign inquiry:</h1>
    <div className='grid grid-cols-2'>
      <div>
        <strong>City:</strong>
      </div>
      <div>{city[0].name}</div>
      <div>
        <strong>Campaign Start Date:</strong>
      </div>
      <div>{campaignStartDate}</div>
      <div>
        <strong>Campaign End Date:</strong>
      </div>
      <div>{campaignEndDate}</div>
      <div>
        <strong>Video Duration:</strong>
      </div>
      <div>{videoDuration}</div>
      <div>
        <strong>Support eeded for video creation:</strong>
      </div>
      <div>{supportNeeded ? 'Yes' : 'No'}</div>
      <div>
        <strong>Comments:</strong>
      </div>
      <div>{comments}</div>
    </div>
    <h2>LED Campaign Locations:</h2>
    <table>
      <thead>
        <tr>
          <th>Address</th>
          <th>City</th>
          <th>Latitude</th>
          <th>Longitude</th>
          <th>Number of Screens</th>
          <th>Width</th>
          <th>Height</th>
          <th>Photo</th>
        </tr>
      </thead>
      <tbody>
        {location.map(loc => (
          <tr key={loc.id}>
            <td>{loc.address}</td>
            <td>{loc.city.name}</td>
            <td>{loc.lat}</td>
            <td>{loc.lng}</td>
            <td>{loc.countScreens}</td>
            <td>{loc.width}</td>
            <td>{loc.height}</td>
            <td>{loc.photo}</td>
          </tr>
        ))}
      </tbody>
    </table>

    <h2>Contact Information:</h2>
    <div>
      <strong>Email:</strong>
      <a href={`mailto:${email}`}>{email}</a>
    </div>
    <div>
      <strong>Phone:</strong>
      <a href={`tel:${phone}`}>{phone}</a>
    </div>
  </div>
)
