import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { first_name, last_name, email, phone, subject_line, message } = body

    const html = `
      <h2>New Contact Message - Dogwood Landscaping & Gardening</h2>
      <p><strong>Name:</strong> ${first_name} ${last_name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
      <p><strong>Subject:</strong> ${subject_line}</p>
      <hr/>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Dogwood Website <onboarding@resend.dev>',
        to: ['dogwoodlandgardening@gmail.com'],
        reply_to: email,
        subject: `New Contact Message: ${subject_line}`,
        html,
      }),
    })

    const data = await response.json()

    if (response.ok) {
      return NextResponse.json({ success: true })
    } else {
      return NextResponse.json({ success: false, message: data.message || 'Failed to send email' }, { status: 500 })
    }
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Server error: ' + String(error) }, { status: 500 })
  }
}
