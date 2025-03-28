import type { RouteRecordRaw } from 'vue-router'
import Auth from '../../pages/auth/Auth.vue'
import Login from '../../pages/auth/components/Login.vue'
import Signup from '../../pages/auth/components/Signup.vue'

const authRoutes: RouteRecordRaw = {
  path: '/',
  component: Auth,
  children: [
    { path: 'login', component: Login },
    { path: 'signup', component: Signup },
  ],
}

export default authRoutes
