import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const url = 'https://api.open-meteo.com/v1/forecast?latitude=37.507877&longitude=15.08303&current_weather=true&temperature_unit=celsius'
    const res = await fetch(url, { next: { revalidate: 300 } })
    if (!res.ok) {
      return NextResponse.json({ error: 'Failed to fetch weather' }, { status: 502 })
    }
    const data = await res.json()
    return NextResponse.json(data)
  } catch (err) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
