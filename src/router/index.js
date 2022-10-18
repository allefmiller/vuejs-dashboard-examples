import { createWebHistory, createRouter } from 'vue-router'

import Home from "@/views/Home.vue"
import VisaoPrincipal from "@/views/visao-principal.vue"

const routes = [
    {
        path: "/",
        name:"Home",
        component: Home,
    },
    {
        path: "/visaoprincipal",
        name:"VisaoPrincipal",
        component: VisaoPrincipal
    },
    
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router