import { env } from '@/env';
import fp from 'fastify-plugin';
import jwt from 'jsonwebtoken';
import { FastifyInstance, FastifyReply, FastifyRequest, HookHandlerDoneFunction } from 'fastify';

export default fp((fastify: FastifyInstance) => {
  fastify.decorate('authenticate', async (request: FastifyRequest, reply: FastifyReply) => {
    const authHeader = request.headers.authorization;
    if (!authHeader) return reply.status(401).send({ message: 'Token não fornecido' });
    const token = authHeader.replace('Bearer ', '').trim();
    try {
      const decoded = jwt.verify(token, env.JWT_SECRET) as FastifyRequest['user'];
      request.user = decoded;
    } catch {
      return reply.status(401).send({ message: 'Token inválido ou expirado' });
    }
  });
});
