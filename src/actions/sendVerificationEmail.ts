import { Resend } from 'resend'

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY)

export async function sendVerificationEmail(email: string, token: string) {
  const confirmLink = `${process.env.NEXT_PUBLIC_BASE_URL}/auth/new-verification?token=${token}`
  await resend.emails.send({
    from: 'office@ledking.bg',
    to: email,
    subject: 'Verify your email address',
    html: `<p>Click <a hre="${confirmLink}">here</a> to confirm email.</p>`,
  })
}
