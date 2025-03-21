import {
  LEDCampaignEmail,
  LEDCampaignEmailProps,
} from '@/email/led-campaign.email'
import { NextRequest } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  const body: LEDCampaignEmailProps = await req.json()

  try {
    const { data, error } = await resend.emails.send({
      from: 'campaign@ledking.bg',
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
