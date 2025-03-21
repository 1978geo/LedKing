import {
  Body,
  Column,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Section,
  Tailwind,
  Row,
  Text,
} from '@react-email/components'

export interface LEDPurchaseEmailProps {
  city: string
  typeLed: string
  pixelDistance: string
  email: string
  phone: string
  comments: string
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : ''

export const LEDPurchaseEmail: React.FC<Readonly<LEDPurchaseEmailProps>> = ({
  city,
  typeLed,
  pixelDistance,
  email,
  phone,
  comments,
}) => (
  <Html>
    <Head />
    <Tailwind>
      <Body className='bg-white my-auto mx-auto font-sans px-2'>
        <Preview>LED Purchase Inquiry</Preview>
        <Container className='mx-auto px-5 pb-12 w-2xl max-w-full'>
          <Section className='mb-5'>
            <Row>
              <Column>
                <Img
                  src={`${baseUrl}/Logo.png`}
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
                  LED Purchase Inquiry
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
                        TYPE LED:
                      </Text>
                      <Text className='text-[#333] text-xs py-0 my-0'>
                        {typeLed}
                      </Text>
                    </Column>
                  </Row>
                </Section>
              </Column>

              <Column colSpan={2}>
                <Section>
                  <Row>
                    <Column className='pl-5 border border-white h-12'>
                      <Text className='text-[#666] text-[10px] my-0 py-0 uppercase'>
                        Pixel Distance:
                      </Text>
                      <Text className='text-[#333] text-xs my-0 py-0'>
                        {pixelDistance}
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

export default LEDPurchaseEmail
