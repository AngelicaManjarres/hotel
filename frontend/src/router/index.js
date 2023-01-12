import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/tasks',
    name: 'tasks',
    component: () => import('../views/TasksView')
  },
  {
    path: '/billing',
    name: 'billing',
    component: () => import('../views/BillingView')
  },
  {
    path: '/stock',
    name: 'stock',
    component: () => import('../views/StockView')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
