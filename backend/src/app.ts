import fastify from 'fastify';
import authRoutes from './routes/auth.routes';

const app = fastify();

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('Server is running on port 3333');
  });

export default app;
