import { z } from 'zod';

export const clientSchema = z.object({
  fullName: z.string().min(3),
  email: z.string().email(),
  type: z.enum(['FISIC', 'JURIDIC']),
  document: z.string().min(11).max(18),
  phone: z.string(),
});
