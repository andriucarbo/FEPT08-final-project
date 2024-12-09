import { createWebHashHistory, createRouter } from "vue-router"

import Home from './views/Home.vue'
import Colabora from './views/Colabora.vue'

const routes = [
    {   path: "/",
        name: "Home",
        component: Home,
        //aquí pondremos las siguientes rutas
    },
    {   path: "/colabora",
        name: "Colabora",
        component: Colabora,
        },
];



const router = createRouter({
    history: createWebHashHistory(),
    routes
})


export default router