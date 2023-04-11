import { createRouter, createWebHistory } from 'vue-router'
import {useAuthStore} from "@/stores/authStore.js";
import api from "../api/api.js";

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('/src/views/Home.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('/src/views/Login.vue'),
        meta: {
            hideForAuth: true
        }
    },
    {
        path: '/reg',
        name: 'registration',
        component: () => import('/src/views/Register.vue'),
        meta: {
            hideForAuth: true
        }
    },

    {
        path: '/account',
        name: 'account',
        component: () => import('/src/views/Account.vue'),
        children: [
            {
                path: '/account/info',
                name: 'accountInfo',
                component: () => import('/src/components/pages/AccountInfo.vue')
            },
            {
                path: '/account/settings',
                name: 'accountSettings',
                component: () => import('/src/components/pages/Settings.vue')
            },
            {
                path: '/account/orderHistory',
                name: 'accountHistory',
                component: () => import('/src/components/pages/OrderHistory.vue')
            },
            {
                path: '/account/vehicles',
                name: 'accountVehicles',
                component: () => import('/src/components/pages/Vehicles.vue')
            },
        ]
    },
    {
        path: '/orders',
        name: 'orders',
        component: () => import('/src/views/Orders.vue'),
    },
    {
        path: '/orders/:id',
        name: 'orderDetails',
        component: () => import('/src/views/Order.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('/src/views/About.vue')
    },
    {
        path: '/contacts',
        name: 'contacts',
        component: () => import('/src/views/Contacts.vue')
    },
    {
        path: '/help',
        name: 'help',
        component: () => import('/src/views/Help.vue')
    },
    {
        path: '/401',
        name: 'unauthorized',
        component: () => import('/src/components/common/Unauthorized.vue')
    },
    {
        path: '/404',
        name: 'notFound',
        component: () => import('/src/components/common/NotFound.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})
// router.beforeEach((from, to ,next) => {
//     const store = useAuthStore()
//     if (to.matched.some(record => record.meta.requiresAuth)) {
//         if (store.is_auth){
//             next()
//         } else {
//             router.replace({path: '/login'})
//         }
//     } else if (to.meta.hideForAuth) {
//         router.replace({path: '/home'})
//     } else {
//         next()
//     }
// })

export default router
