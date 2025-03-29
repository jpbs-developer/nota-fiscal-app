import type { RouteRecordRaw } from 'vue-router'
import Authenticated from '../../pages/authenticated/Authenticated.vue'
import Clients from '../../pages/authenticated/pages/Clients.vue'

const autenticatedRoutes: RouteRecordRaw = {
  path: '/authenticated',
  component: Authenticated,
  meta: { requiresAuth: true },
  children: [
    { path: '', redirect: 'clients' },
    { path: 'clients', component: Clients, name: 'clients' },
  ],
}

export default autenticatedRoutes
