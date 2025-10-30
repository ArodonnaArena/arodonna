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

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
      console.warn('Missing SMTP env vars; skipping email send in dev.')
      return new Response('OK (dev no-op)', { status: 200 })
    }

    // Sanitize recipients: take the first real email, ignore placeholders like you@example.com
    const toList = (CONTACT_TO || '')
      .split(/[ ,;]+/)
      .map((s) => s.trim())
      .filter(Boolean)
      .filter((addr) => !/example\.com$/i.test(addr))
    const to = toList[0]

    if (!to) {
      console.warn('CONTACT_TO not configured to a real recipient; skipping send.')
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
      to,
      replyTo: `${name} <${email}>`,
      subject: `New enquiry from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`
    })

    return new Response('OK', { status: 200 })
  } catch (e) {
    console.error(e)
    return new Response('Server error', { status: 500 })
  }
}