'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

type Status = 'idle' | 'sending' | 'success' | 'error'

const BOOKING_MESSAGES: Record<string, string> = {
  phone: 'I would like to book a free phone consultation.',
  inperson: 'I would like to book an in-person healing session.',
  distant: 'I would like to book a distant healing session.'
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [messageValue, setMessageValue] = useState('')
  const searchParams = useSearchParams()

  useEffect(() => {
    if (!searchParams) return
    const booking = searchParams.get('booking')
    if (booking && BOOKING_MESSAGES[booking]) {
      setMessageValue(BOOKING_MESSAGES[booking])
    }
  }, [searchParams])

  async function onSubmit(formData: FormData) {
    setStatus('sending')

    const payload = {
      name: String(formData.get('name') || ''),
      email: String(formData.get('email') || ''),
      message: String(formData.get('message') || ''),
      website: String(formData.get('website') || '')
    }

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })

    setStatus(response.ok ? 'success' : 'error')
  }

  return (
    <form action={onSubmit} className="contact-form">
      <label htmlFor="name">Name</label>
      <input id="name" name="name" required minLength={2} />

      <label htmlFor="email">Email</label>
      <input id="email" name="email" type="email" required />

      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" required minLength={20} rows={6} value={messageValue} onChange={(e) => setMessageValue(e.target.value)} />

      <input type="text" name="website" className="honeypot" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <button type="submit">Send</button>
      {status === 'success' && <p role="status">Message sent successfully.</p>}
      {status === 'error' && <p role="status">Unable to send message.</p>}
    </form>
  )
}
