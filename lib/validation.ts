import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(20),
  website: z.string().optional()
})
