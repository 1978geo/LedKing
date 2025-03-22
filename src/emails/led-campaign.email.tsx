import { BillboardWithCity } from '@/types/Billboard'
import {
  Body,
  Column,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Tailwind,
  Row,
  Text,
} from '@react-email/components'

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
  <Html>
    <Head />
    <Tailwind>
      <Body className='bg-white my-auto mx-auto font-sans px-2'>
        <Preview>LED Campaing Inquiry</Preview>
        <Container className='mx-auto px-5 pb-12 w-2xl max-w-full'>
          <Section className='mb-5'>
            <Row>
              <Column>
                <Img
                  src='/Logo.png'
                  width='42'
                  height='42'
                  alt='LedKing Logo'
                />
              </Column>

              <Column
                align='right'
                className='table-cell'
              >
                <Text className='text-2xl font-normal text-gray-500'>
                  LED Campaign Inquiry
                </Text>
              </Column>
            </Row>
          </Section>

          <Section className='border-collapse border-0 border-spacing-0 text-gray-800 bg-[#fafafa] rounded-sm text-xs'>
            <Row className='h-11'>
              <Column colSpan={2}>
                <Section>
                  <Row>
                    <Column className='pl-5 border border-white h-12'>
                      <Text className='text-[#666] text-[10px] my-0 py-0'>
                        CITY:
                      </Text>
                      <Text className='text-[#333] text-xs my-0 py-0'>
                        {city}
                      </Text>
                    </Column>
                  </Row>

                  <Row>
                    <Column className='pl-5 border border-white h-12'>
                      <Text className='text-[#666] text-[10px] py-0 my-0'>
                        CAMPAIGN PERIOD:
                      </Text>
                      <Text className='text-[#333] text-xs py-0 my-0'>
                        Start: {campaignStartDate} - End: {campaignEndDate}
                      </Text>
                    </Column>
                  </Row>
                </Section>
              </Column>

              <Column colSpan={2}>
                <Section>
                  <Row>
                    <Column className='pl-5 border border-white h-12'>
                      <Text className='text-[#666] text-[10px] my-0 py-0'>
                        VIDEO DURATION:
                      </Text>
                      <Text className='text-[#333] text-xs my-0 py-0'>
                        {videoDuration} сек.
                      </Text>
                    </Column>
                  </Row>

                  <Row>
                    <Column className='pl-5 border border-white h-12'>
                      <Text className='text-[#666] text-[10px] py-0 my-0 uppercase'>
                        Video creation help needed:
                      </Text>
                      <Text className='text-[#333] text-xs py-0 my-0'>
                        {supportNeeded ? 'Да' : 'Не'}
                      </Text>
                    </Column>
                  </Row>
                </Section>
              </Column>
            </Row>

            <Row className='mt-4'>
              <Column className='pl-5 border border-white h-12'>
                <Text className='text-[#666] text-[10px] py-0 my-0 uppercase'>
                  Comments:
                </Text>
                <Text className='text-[#333] text-xs py-0 my-0'>
                  {comments}
                </Text>
              </Column>
            </Row>
          </Section>

          <Section>
            <Row>
              <Column>
                <Text className='text-2xl font-normal text-gray-500 mt-8'>
                  Campaign Locations:
                </Text>
              </Column>
            </Row>
            <Section className='border-collapse border-0 border-spacing-0 text-gray-800 rounded-sm text-xs'>
              <Row className='bg-[#fafafa] px-2'>
                <Column className='w-1/6 px-2'>
                  <Text className='text-[#666] text-xs uppercase font-semibold'>
                    City
                  </Text>
                </Column>
                <Column className='w-2/6 px-2'>
                  <Text className='text-[#666] text-xs uppercase font-semibold'>
                    Address
                  </Text>
                </Column>
                <Column className='w-1/6 px-2'>
                  <Text className='text-[#666] text-xs uppercase font-semibold'>
                    Coordinates
                  </Text>
                </Column>
                <Column className='w-1/6 px-2'>
                  <Text className='text-[#666] text-xs uppercase font-semibold'>
                    # Screens
                  </Text>
                </Column>
                <Column className='w-1/6 px-2'>
                  <Text className='text-[#666] text-xs uppercase font-semibold'>
                    Screen size
                  </Text>
                </Column>
                <Column className='w-14 px-2'>
                  <Text className='text-[#666] text-xs uppercase font-semibold'>
                    Photo
                  </Text>
                </Column>
              </Row>
              {location.map(loc => (
                <>
                  <Row
                    key={loc.id}
                    className='px-2'
                  >
                    <Column className='w-1/6 px-2 border-b'>
                      <Text className='text-[#333] text-xs'>
                        {loc.city.name}
                      </Text>
                    </Column>
                    <Column className='w-2/6 px-2  border-b'>
                      <Text className='text-[#333] text-xs'>{loc.address}</Text>
                    </Column>
                    <Column className='w-1/6 px-2 border-b'>
                      <Text className='text-[#333] text-xs'>
                        {loc.lat}, {loc.lng}
                      </Text>
                    </Column>
                    <Column className='w-1/6 px-2 border-b'>
                      <Text className='text-[#333] text-xs'>
                        {loc.countScreens}
                      </Text>
                    </Column>
                    <Column className='w-1/6 px-2 border-b'>
                      <Text className='text-[#333] text-xs'>
                        {loc.width}cm x {loc.height}cm
                      </Text>
                    </Column>
                    <Column className='w-14 px-2 border-b'>
                      <Link
                        href={loc.photo}
                        className='text-blue-500'
                      >
                        image
                      </Link>
                    </Column>
                  </Row>
                  <Hr className='my-0 border-t-1 border-slate-200' />
                </>
              ))}
            </Section>
          </Section>

          <Section>
            <Text className='text-2xl font-normal text-gray-500 mt-8'>
              Contact Info:
            </Text>
            <Row>
              <Column className='flex gap-x-2 items-center'>
                <Text className='text-[#666] text-[10px] my-0 py-0 uppercase'>
                  Email:
                </Text>
                <Text className='text-[#333] text-xs my-0 py-0'>
                  <a href={`mailto:${email}`}>{email}</a>
                </Text>
              </Column>
            </Row>

            <Row>
              <Column className='flex gap-x-2 items-center'>
                <Text className='text-[#666] text-[10px] py-0 my-0 uppercase'>
                  Phone:
                </Text>
                <Text className='text-[#333] text-xs py-0 my-0'>
                  <a href={`tel:${phone}`}>{phone}</a>
                </Text>
              </Column>
            </Row>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
)

export default LEDCampaignEmail
