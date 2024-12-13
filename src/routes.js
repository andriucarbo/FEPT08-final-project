import { createWebHashHistory, createRouter } from "vue-router"

import Home from './views/Home.vue'
import Colabora from './views/Colabora.vue'
import Conocenos from './views/Conocenos.vue'
import Historia from './components/Historia.vue'
import Mision from './components/Mision.vue'
import Equipo from './components/Equipo.vue'
import Socio from './views/Socio.vue'
import Amadrina from './views/Amadrina.vue'
import Habitantes from './views/Habitantes.vue'


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
            {
                path: "equipo",
                name: "Equipo",
                component: Equipo,
            },
            {
                path: "mision",
                name: "Mision",
                components: Mision,
            },
        ]
        },
        {
            path: "/habitantes",
            name:"Habitantes",
            component: Habitantes,
        },
       
        //children: [
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