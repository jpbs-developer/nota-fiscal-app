import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import authRoutes from './modules/auth'

const routes: RouteRecordRaw[] = [{ path: '', redirect: 'login' }, authRoutes]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
