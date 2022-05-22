import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  { path: '/', component: () => import('@/views/login/login.vue') },
  { path: '/compare/invoice', component: () => import('@/views/compare/invoice.vue') }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
