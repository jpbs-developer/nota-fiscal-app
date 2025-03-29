import fastify from 'fastify';
import cors from '@fastify/cors';
import verifyJwt from './middleware/verify-jwt';

async function buildApp() {
  const app = fastify();
  await app.register(cors, {
    origin: '*',
    credentials: true,
  });
  await app.register(verifyJwt);
  return app;
}

export default buildApp;
