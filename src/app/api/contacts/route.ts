import LEDContactsEmail, {
  LEDContactsEmailProps,
} from '@/emails/led-contacts.email'
import { NextRequest } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  const body: LEDContactsEmailProps = await req.json()

  try {
    const { data, error } = await resend.emails.send({
      from: 'campaign@ledking.bg',
      to: ['office@ledking.bg'],
      subject: `LED Contact Inquiry - ${body.email}`,
      react: LEDContactsEmail({
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
