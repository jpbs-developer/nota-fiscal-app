import { z } from 'zod';

export const signupSchema = z.object({
  fullName: z.string().min(1, 'Nome é obrigatório'),
  email: z.string().email('Email é inválido'),
  password: z.string().min(6, 'Senha deve ter pelo menos 6 caracteres'),
  company: z.string().min(1, 'Empresa é obrigatório'),
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, 'Senha deve ter pelo menos 6 caracteres'),
});
