import { NextResponse } from 'next/server'
import { contactSchema } from '@/lib/validation'

export async function POST(request: Request) {
  const payload = await request.json()
  const parsed = contactSchema.safeParse(payload)

  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: 'Invalid form payload.' }, { status: 400 })
  }

  if (parsed.data.website) {
    return NextResponse.json({ ok: false, error: 'Spam detected.' }, { status: 400 })
  }

  return NextResponse.json({ ok: true })
}
