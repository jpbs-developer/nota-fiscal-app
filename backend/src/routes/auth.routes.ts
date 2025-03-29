import 'dotenv/config';
import { loginSchema, signupSchema } from '@/schemas/auth.schema';
import { FastifyInstance } from 'fastify';
import { hash, compare } from 'bcrypt';
import { SALT } from '@/helper/bcrypt-salt';
import { prisma } from '@/lib/prisma';
import jwt from 'jsonwebtoken';
import { env } from '@/env';

export default async function authRoutes(app: FastifyInstance) {
  app.post('/signup', async (request, reply) => {
    const { company, email, fullName, password: userPassword } = signupSchema.parse(request.body);
    const userExists = await prisma.user.findUnique({ where: { email } });
    if (userExists) return reply.status(400).send({ message: 'Email já cadastrado' });
    const passwordHash = await hash(userPassword, SALT);
    const user = await prisma.user.create({
      data: { fullName, email, company, password: passwordHash },
    });
    const { password, ...safeUser } = user;

    reply.status(201).send({ message: 'Usuário criado com sucesso!', user: safeUser });
  });

  app.post('/login', async (request, reply) => {
    const { email, password: userPassword } = loginSchema.parse(request.body);
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user || !(await compare(userPassword, user.password))) return reply.status(401).send({ message: 'Credenciais inválidas' });

    const token = jwt.sign(
      {
        sub: user.id,
        email: user.email,
        fullName: user.fullName,
      },
      env.JWT_SECRET,
      {
        expiresIn: '7d',
      },
    );

    const { password, ...safeUser } = user;

    return reply.status(200).send({ user: safeUser, token });
  });
}
