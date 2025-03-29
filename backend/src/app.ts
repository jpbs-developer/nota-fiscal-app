import fastify from 'fastify';
import cors from '@fastify/cors';

async function buildApp() {
  const app = fastify();
  await app.register(cors, {
    origin: '*',
    credentials: true,
  });

  return app;
}

export default buildApp;
