interface VercelRequest {
  method?: string
  body?: unknown
}

interface VercelResponse {
  status(code: number): VercelResponse
  json(body: unknown): void
  setHeader(name: string, value: string): void
}

const TO_EMAIL = 'burrisairam2000@gmail.com'
const FROM_EMAIL = 'Portfolio Contact <onboarding@resend.dev>'

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function escapeHtml(input: string) {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const body = (req.body ?? {}) as { name?: unknown; email?: unknown; message?: unknown }
  const name = typeof body.name === 'string' ? body.name.trim() : ''
  const email = typeof body.email === 'string' ? body.email.trim() : ''
  const message = typeof body.message === 'string' ? body.message.trim() : ''

  if (!name || !isValidEmail(email) || !message) {
    return res.status(400).json({ error: 'Please provide a valid name, email, and message.' })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error('RESEND_API_KEY is not set')
    return res.status(500).json({ error: 'Email service is not configured.' })
  }

  const resendResponse = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      reply_to: email,
      subject: `New portfolio message from ${name}`,
      html: `<p><strong>Name:</strong> ${escapeHtml(name)}</p><p><strong>Email:</strong> ${escapeHtml(email)}</p><p><strong>Message:</strong></p><p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>`,
    }),
  })

  if (!resendResponse.ok) {
    console.error('Resend error:', await resendResponse.text())
    return res.status(502).json({ error: 'Failed to send message. Please try again later.' })
  }

  return res.status(200).json({ ok: true })
}
