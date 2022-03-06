import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import QuoteView from '../views/QuoteView.vue'
import AccountView from '../views/AccountView.vue'
import PaymentView from '../views/PaymentView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/quote',
    name: 'quote',
    component: QuoteView
  },
  {
    path: '/account',
    name: 'account',
    component: AccountView
  },
  {
    path: '/payment',
    name: 'payment',
    component: PaymentView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
