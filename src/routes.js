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
import Dona from './views/Donativos.vue'
import Voluntariado from "./views/Voluntariado.vue"
import BeneficiosFiscales from "./views/BeneficiosFiscales.vue"
import OtrasDonaciones from "./views/OtrasDonaciones.vue"
import HabitantesVacas from "./views/HabitantesVacas.vue"
import HabitantesGeneral from "./views/HabitantesGeneral.vue"
import HabitantesCerdos from "./views/HabitantesCerdos.vue"
import HabitantesBurros from "./views/HabitantesBurros.vue"
import HabitantesCabras from "./views/HabitantesCabras.vue"
import PaginaEnConstruccion from "./views/PaginaEnConstruccion.vue"

// firebase vista
import Familia from'./views/Familia.vue'



const routes = [

    {   path: "/familia",
        name: "Familia",
        component: Familia,
    },

    {   path: "/",
        name: "Home",
        component: Home,

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
            {
                path:'Dona',
                component:Dona
            },
            {
                path:'Voluntariado',
                component:Voluntariado
            },
            {
                path:'BeneficiosFiscales',
                component:BeneficiosFiscales
            },
            {
                path:'OtrasDonaciones',
                component:OtrasDonaciones
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
                component: Mision,
            },
        ]
        },
    {
        path: "/habitantesGeneral",
        name:"HabitantesGeneral",
        component: HabitantesGeneral,
        children: [
            {
                path: "Habitantes",
                name: "Habitantes",
                component: Habitantes,
            },
            
            {   path: "/HabitantesVacas",
                name: "HabitantesVacas",
                component: HabitantesVacas,
        },
        {   path: "/HabitantesCerdos",
            name: "HabitantesCerdos",
            component: HabitantesCerdos,
        },
        {   path: "/HabitantesBurros",
            name: "HabitantesBurros",
            component: HabitantesBurros,
        },
        {   path: "/HabitantesCabras",
        name: "HabitantesCabras",
        component: HabitantesCabras,
        },
    
    ]
        
    },

    {   path: "/PaginaEnConstruccion",
        name: "PaginaEnConstruccion",
        component: PaginaEnConstruccion,
    },
    
];



const router = createRouter({
    history: createWebHashHistory(),
    routes
})


export default router