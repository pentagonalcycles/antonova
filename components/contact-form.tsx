'use client'

import { useState } from 'react'

type Status = 'idle' | 'sending' | 'success' | 'error'

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')

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
      <textarea id="message" name="message" required minLength={20} rows={6} />

      <input type="text" name="website" className="honeypot" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <button type="submit">Send</button>
      {status === 'success' && <p role="status">Message sent successfully.</p>}
      {status === 'error' && <p role="status">Unable to send message.</p>}
    </form>
  )
}
