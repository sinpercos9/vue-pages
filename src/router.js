import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/pages/login'
import register from '@/pages/register'
import Shop from '@/pages/shop'
import Pay from '@/pages/pay'


const routes = [
    {
        path: '/',
        name: 'login-page',
        component: Login

    },

    {
        path: '/register',
        name: 'register-page',
        component: register
    },

    {
        path: '/shop',
        name: 'shop-page',
        component: Shop
    },

    {
        path: '/pay',
        name: 'pay-vue',
        component: Pay
    }
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })

  export default router