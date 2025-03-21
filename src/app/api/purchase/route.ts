import {
  LEDPurchaseEmail,
  LEDPurchaseEmailProps,
} from '@/emails/led-purchase.email'
import { NextRequest } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  const body: LEDPurchaseEmailProps & {
    attachments: Array<{ filename: string; content: string }>
  } = await req.json()
  const { attachments, ...rest } = await body

  try {
    const { data, error } = await resend.emails.send({
      from: 'campaign@ledking.bg',
      to: ['office@ledking.bg'],
      subject: `LED Purchase Inquiry - ${body.email}`,
      attachments: attachments.map(
        (file: { filename: string; content: string }) => ({
          filename: file.filename,
          content: file.content,
        }),
      ),
      react: LEDPurchaseEmail({
        city: rest.city,
        typeLed: rest.typeLed,
        pixelDistance: rest.pixelDistance,
        email: rest.email,
        phone: rest.phone,
        comments: rest.comments,
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
