import type { RouteRecordRaw } from 'vue-router'
import Authenticated from '../../pages/authenticated/Authenticated.vue'
import Clients from '../../pages/authenticated/pages/clients/Clients.vue'
import clientRoutes from '../../pages/authenticated/pages/clients/clientsRoutes'


const autenticatedRoutes: RouteRecordRaw = {
  path: '/authenticated',
  component: Authenticated,
  meta: { requiresAuth: true },
  children: [
    { path: '', redirect: 'clients' },
    clientRoutes
  ],
}

export default autenticatedRoutes
