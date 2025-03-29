import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import authRoutes from './modules/auth'
import autenticatedRoutes from './modules/authenticated'

const routes: RouteRecordRaw[] = [{ path: '', redirect: '/login' }, authRoutes, autenticatedRoutes]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('authToken')
  if (to.meta.requiresAuth && !isAuthenticated) return next('/login')
  if (!to.meta.requiresAuth && isAuthenticated) return next('/authenticated/clients')

  next()
})

export default router
