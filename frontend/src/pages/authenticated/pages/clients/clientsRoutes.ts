import type { RouteRecordRaw } from 'vue-router'
import Clients from './Clients.vue'
import ClientsList from './components/ClientsList.vue'
import ClientForm from './components/ClientForm.vue'

const clientRoutes: RouteRecordRaw = {
  path: 'clients',
  component: Clients,
  children: [
    { path: '', redirect: { name: 'clients-list' } },
    { path: 'list', component: ClientsList, name: 'clients-list' },
    { path: 'create', component: ClientForm, name: 'client-form' },
  ],
}

export default clientRoutes
