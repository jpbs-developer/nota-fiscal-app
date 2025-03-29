import 'dotenv/config';
import { z } from 'zod';
const envShema = z.object({
  DATABASE_URL: z.string(),
  JWT_SECRET: z.string(),
});

const _env = envShema.safeParse(process.env);

if (!_env.success) {
  console.error('Falha nas variaveis de ambiente', _env.error.format());
  throw new Error('Falha nas variaveis de ambiente');
}

export const env = _env.data;
