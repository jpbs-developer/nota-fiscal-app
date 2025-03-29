import { prisma } from '@/lib/prisma';
import { clientSchema } from '@/schemas/clients.schema';
import { FastifyInstance } from 'fastify';

export default async function clientsRoutes(app: FastifyInstance) {
  app.post('/', { preHandler: app.authenticate }, async (request, reply) => {
    const data = clientSchema.parse(request.body);
    const { userId } = request.user;
    const userExists = await prisma.client.findUnique({ where: { email: data.email, userId } });
    if (userExists) return reply.status(409).send({ message: 'Cliente já cadastrado!' });
    await prisma.client.create({ data: { ...data, userId: userId } });
    return reply.status(201).send({ message: 'Cliente cadastrado com sucesso!' });
  });

  app.get('/', { preHandler: app.authenticate }, async (request, reply) => {
    const { userId } = request.user;
    const clients = await prisma.client.findMany({ where: { userId } });
    return reply.status(200).send({ clients });
  });
}
