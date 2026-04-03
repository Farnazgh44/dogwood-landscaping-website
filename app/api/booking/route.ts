import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { first_name, last_name, email, phone, property_address, notes, appointment_date, appointment_time, service } = body

    const html = `
      <h2>New Booking Request - Dogwood Landscaping & Gardening</h2>
      <p><strong>Name:</strong> ${first_name} ${last_name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Property Address:</strong> ${property_address}</p>
      <hr/>
      <p><strong>Service:</strong> ${service}</p>
      <p><strong>Date:</strong> ${appointment_date}</p>
      <p><strong>Time:</strong> ${appointment_time}</p>
      <p><strong>Notes:</strong> ${notes || 'None'}</p>
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
        subject: `New Booking: ${service} on ${appointment_date} at ${appointment_time}`,
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
