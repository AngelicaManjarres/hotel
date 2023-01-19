import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
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
  },
  {
    path: '/addStock',
    name: 'addStock',
    component: () => import('../views/AddStockView')
  },
  {
    path: '/booking',
    name: 'booking',
    component: () => import('../views/BookingView')
  },
  {
    path: '/addBooking',
    name: 'addBoking',
    component: () => import('../views/AddBookingView')
  },
  {
    path: '/singleBooking/:id',
    name: 'singleBooking',
    props: true,
    component: () => import('../views/SingleBookingView')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
