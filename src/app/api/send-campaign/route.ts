import {
  LEDCampaignEmail,
  LEDCampaignEmailProps,
} from '@/email/led-campaign.email'
import { NextApiRequest } from 'next'
import { Resend } from 'resend'

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY)

export async function POST(req: NextApiRequest) {
  const body: LEDCampaignEmailProps = await req.body

  console.log(body)

  try {
    const { data, error } = await resend.emails.send({
      from: body.email,
      to: ['office@ledking.bg'],
      subject: `LED Campaign Inquiry - ${body.email}`,
      react: LEDCampaignEmail({
        campaignStartDate: body.campaignStartDate,
        campaignEndDate: body.campaignEndDate,
        city: body.city,
        comments: body.comments,
        email: body.email,
        phone: body.phone,
        location: body.location,
        supportNeeded: body.supportNeeded,
        videoDuration: body.videoDuration,
      }) as React.ReactNode,
    })

    if (error) {
      return Response.json({ error }, { status: 500 })
    }

    return Response.json(data)
  } catch (error) {
    return Response.json({ error }, { status: 500 })
  }
}
