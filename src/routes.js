import { createWebHashHistory, createRouter } from "vue-router"

import Home from './views/Home.vue'
import Colabora from './views/Colabora.vue'
import Socio from './views/Socio.vue'
import Amadrina from './views/Amadrina.vue'

const routes = [
    {   path: "/",
        name: "Home",
        component: Home,
        //aquí pondremos las siguientes rutas
    },
    {   path: "/colabora",
        name: "Colabora",
        component: Colabora,
        children: [
            {
                path:'HazteSocio',
                component:Socio
            },
            {
                path:'Amadrina',
                component:Amadrina
            },
        ]
        },

];



const router = createRouter({
    history: createWebHashHistory(),
    routes
})


export default router