import app from './app';
import authRoutes from './routes/auth.routes';

app.register(authRoutes, { prefix: '/auth' });
app.get('/', async (request, reply) => {
  return { message: 'Api online' };
});
