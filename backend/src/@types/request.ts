import 'fastify';
import { preHandlerHookHandler } from 'fastify';

declare module 'fastify' {
  interface FastifyRequest {
    user: {
      sub: string;
      email: string;
      fullName: string;
      userId: string;
    };
  }

  interface FastifyInstance {
    authenticate: preHandlerHookHandler;
  }
}
