import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../pages/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../pages/AboutView.vue')
  },
  {
    path: '/ui',
    name: 'ui',
    component: () => import('../pages/UI.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
