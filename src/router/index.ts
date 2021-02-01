import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import MainPage from '../components/MainPage.vue'

const routes: Array<RouteRecordRaw> = [
//   {
//     path: '/home',
//     name: 'Home',
//     component: Home
//   },
    {
        path: '/',
        name: 'MainPage',
        component: MainPage
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
