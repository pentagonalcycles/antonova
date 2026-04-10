import { describe, it, expect } from 'vitest'
import { contactSchema } from '@/lib/validation'

describe('contact schema', () => {
  it('rejects invalid email', () => {
    const result = contactSchema.safeParse({
      name: 'Ana',
      email: 'not-an-email',
      message: 'This is a long enough message for schema testing.'
    })

    expect(result.success).toBe(false)
  })
})
