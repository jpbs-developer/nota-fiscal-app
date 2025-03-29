import buildApp from './app';
import authRoutes from './routes/auth.routes';

buildApp().then(app => {
  app.register(authRoutes, { prefix: '/auth' });
  app.get('/', async (request, reply) => {
    return { message: 'Api online' };
  });

  app
    .listen({
      port: 3333,
    })
    .then(() => {
      console.log('Server is running on port 3333');
    });
});
