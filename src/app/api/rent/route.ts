import LEDRentEmail, { LEDRentEmailProps } from '@/emails/led-rent.email'
import { NextRequest } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  const body: LEDRentEmailProps = await req.json()

  try {
    const { data, error } = await resend.emails.send({
      from: 'campaign@ledking.bg',
      to: ['office@ledking.bg'],
      subject: `LED Purchase Inquiry - ${body.email}`,
      react: LEDRentEmail({
        city: body.city,
        typeLed: body.typeLed,
        rentStartDate: body.rentStartDate,
        rentEndDate: body.rentEndDate,
        pixelDistance: body.pixelDistance,
        email: body.email,
        phone: body.phone,
        comments: body.comments,
      }) as React.ReactElement,
    })

    if (error) {
      console.dir(error)
      return new Response(JSON.stringify(error), { status: 500 })
    }

    return new Response(JSON.stringify(data), { status: 200 })
  } catch (error) {
    console.dir(error)
    return new Response(JSON.stringify(error), { status: 500 })
  }
}
