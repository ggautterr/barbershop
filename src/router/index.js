import { createRouter, createWebHistory } from 'vue-router';
import Barbershop_item from '@/views/Barbershop-item.vue'
import Barbershop_price from '@/views/Barbershop-price.vue'
import Barbershop_shop from '@/views/Barbershop-shop.vue'

const routes = [
    {
        path: '/barbershop-item',
        name: 'barbershop-item',
        component: Barbershop_item
    },
    {
        path: '/barbershop-price',
        name: 'barbershop-price',
        component: Barbershop_price
    },
    {
        path: '/barbershop-shop',
        name: 'barbershop-shop',
        component: Barbershop_shop
    },
]

const router = new createRouter ({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router