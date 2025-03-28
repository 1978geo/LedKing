import {
  LEDCampaignEmail,
  LEDCampaignEmailProps,
} from '@/emails/led-campaign.email'
import { ReactNode } from 'react'
import { Resend } from 'resend'

export async function sendLEDCampaignEmail(payload: LEDCampaignEmailProps) {
  const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY)
  return await resend.emails.send({
    to: 'office@ledking.bg',
    from: 'office@ledking.bg',
    subject: `LED Campaign Inquiry - ${payload.email}`,
    react: LEDCampaignEmail({
      campaignStartDate: payload.campaignStartDate,
      campaignEndDate: payload.campaignEndDate,
      city: payload.city,
      comments: payload.comments,
      email: payload.email,
      phone: payload.phone,
      location: payload.location,
      supportNeeded: payload.supportNeeded,
      videoDuration: payload.videoDuration,
    }) as ReactNode,
  })
}
