<template>
    <div>
        <div class="container ml-20">
            <div class="grid_habitantes grid grid-cols-3 gap-4 text-center text-[#47462d] items-baseline">
                <div class="cow_button">
                    <button @click="navigateTo('/HabitantesVacas')">
                        <!-- <button @click="navigateTo('HabitantesVacas')"></button> -->
                        <img src="/public/GridAnimalHabitantes/cow.grid.png" alt="cow" class="h-full">
                    </button>
                    <p>VACAS</p>
                </div>
                <div class="horse_button">
                    <button>
                        <img src="/public/GridAnimalHabitantes/horse.grid.png" alt="horse">
                    </button>
                    <p>CABALLOS</p>
                </div>
                <div class="sheep_button">
                    <button>
                        <img src="/public/GridAnimalHabitantes/sheep.grid.png" alt="sheep">
                    </button>
                    <p>CABRAS</p>
                </div>
                <div class="donkey_button">
                    <button>
                        <img src="/public/GridAnimalHabitantes/donkey.grid.png" alt="donkey">
                    </button>
                    <p>BURROS</p>
                </div>
                <div class="goat_button">
                    <button>
                        <img src="/public/GridAnimalHabitantes/goat.grid.png" alt="goat">
                    </button>
                    <p>OVEJAS</p>
                </div>
                <div class="pig_button">
                    <button @click="navigateTo('/HabitantesCerdos')">
                        <img src="/public/GridAnimalHabitantes/pig.grid.png" alt="pig">
                    </button>
                    <p>CERDOS</p>
                </div>
                <div class="chicken_button">
                    <button>
                        <img src="/public/GridAnimalHabitantes/chicken.grid.png" alt="chicken">
                    </button>
                    <p>AVES</p>
                </div>
                <div class="rabbit_button">
                    <button>
                        <img src="/public/GridAnimalHabitantes/rabbit.grid.png" alt="rabbit">
                    </button>
                    <p>CONEJOS</p>
                </div>

            </div>
        </div>

    </div>
</template>


<script>
// Importar la función useRouter del paquete vue-router
import { useRouter } from 'vue-router';

// Importar el componente HabitantesVacas desde su ubicación
import HabitantesVacas from '../views/HabitantesVacas.vue';
import HabitantesCerdos from '../views/HabitantesCerdos.vue';


export default {
    name: 'Grid',
    components: { HabitantesVacas, HabitantesCerdos },

     // Función setup para la Composition API 
    setup() { // Si está usando Vue 3 con Composition API
        const router = useRouter();
    // Definir una función para navegar a una ruta
        const navigateTo = (route) => {
            router.push(route);
        };
    // Retornar un objeto con las funciones y variables que se quieren exponer al template
        return { navigateTo };
    },
};


</script>
<style></style>