import { createWebHashHistory, createRouter } from "vue-router"

import Home from './views/Home.vue'
import Colabora from './views/Colabora.vue'
import Conocenos from './views/Conocenos.vue'
import Historia from "./components/Historia.vue";


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
    {
        path: "/conocenos",
        name: "Conocenos",
        component: Conocenos,
        children: [
            {
                path: "historia",
                name: "Historia",
                component: Historia,
            },
        ]
        },
       
        //children: [
        //   {
        //       path: 'historia',
        //       name: 'Historia',
        //       component: Historia,
        //   },
        //     {
        //         path: 'mision',
        //         name: 'Mision',
        //         component: Mision,
        //     },
        //     {
        //         path: 'equipo',
        //         name: 'Equipo',
        //         component: Historia,
        //     },
        // ]
    
];



const router = createRouter({
    history: createWebHashHistory(),
    routes
})


export default router