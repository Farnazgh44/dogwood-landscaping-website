import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        ...body,
        access_key: '7a4e2835-9a4e-4e01-8bac-1738ed4cc9f7',
        subject: 'New Contact Message - Dogwood Landscaping & Gardening',
      }),
    })

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Server error: ' + String(error) }, { status: 500 })
  }
}
