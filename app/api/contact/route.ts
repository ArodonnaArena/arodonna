import type { NextRequest } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json()

    if (!name || !email || !message) {
      return new Response('Invalid payload', { status: 400 })
    }

    // Configure via environment variables for production
    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO } = process.env

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !CONTACT_TO) {
      console.warn('Missing SMTP env vars; skipping email send in dev.')
      return new Response('OK (dev no-op)', { status: 200 })
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS }
    })

    await transporter.sendMail({
      from: `Arodonna Contact <${SMTP_USER}>`,
      to: CONTACT_TO,
      subject: `New enquiry from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`
    })

    return new Response('OK', { status: 200 })
  } catch (e) {
    console.error(e)
    return new Response('Server error', { status: 500 })
  }
}