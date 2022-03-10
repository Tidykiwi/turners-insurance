import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import QuoteView from '../views/QuoteView.vue'
import AccountView from '../views/AccountView.vue'
import PaymentView from '../views/PaymentView.vue'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/quote',
    name: 'QuoteView',
    component: QuoteView
  },
  {
    path: '/account',
    name: 'AccountView',
    component: AccountView
  },
  {
    path: '/payment',
    name: 'PaymentView',
    component: PaymentView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
