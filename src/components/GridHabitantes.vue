<template>
    <div>
        <div class="container mx-auto px-4 py-6 sm:py-8 md:py-10 lg:py-12">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-center text-[#47462d] items-baseline">
                <div class="cow_button">
                    <button @click="navigateTo('/HabitantesVacas')">
                        <img src="/GridAnimalHabitantes/cow.grid.png" alt="cow" class="h-full">
                    </button>
                    <p>VACAS</p>
                </div>
                <div class="horse_button">
                    <button>
                        <img src="/GridAnimalHabitantes/horse.grid.png" alt="horse">
                    </button>
                    <p>CABALLOS</p>
                </div>
                <div @click="navigateTo('/HabitantesCabras')" class="sheep_button">
                    <button>
                        <img src="/GridAnimalHabitantes/sheep.grid.png" alt="sheep">
                    </button>
                    <p>CABRAS</p>
                </div>
                <div class="donkey_button" @click="navigateTo('/HabitantesBurros')">
                    <button>
                        <img src="/GridAnimalHabitantes/donkey.grid.png" alt="donkey">
                    </button>
                    <p>BURROS</p>
                </div>

                <div class="goat_button" @click="navigateTo('/HabitantesCabras')">

                    <button>
                        <img src="/GridAnimalHabitantes/goat.grid.png" alt="goat">
                    </button>
                    <p>OVEJAS</p>
                </div>
                <div class="pig_button">
                    <button @click="navigateTo('/HabitantesCerdos')">
                        <img src="/GridAnimalHabitantes/pig.grid.png" alt="pig">
                    </button>
                    <p>CERDOS</p>
                </div>
                <div class="chicken_button">
                    <button>
                        <img src="/GridAnimalHabitantes/chicken.grid.png" alt="chicken">
                    </button>
                    <p>AVES</p>
                </div>
                <div class="rabbit_button">
                    <button>
                        <img src="/GridAnimalHabitantes/rabbit.grid.png" alt="rabbit">
                    </button>
                    <p>CONEJOS</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useRouter } from 'vue-router';
import HabitantesVacas from '../views/HabitantesVacas.vue';
import HabitantesCerdos from '../views/HabitantesCerdos.vue';
import HabitantesBurros from '../views/HabitantesBurros.vue';
import HabitantesCabras from '../views/HabitantesCabras.vue';


export default {
    name: 'Grid',
    components: { HabitantesVacas, HabitantesCerdos, HabitantesBurros, HabitantesCabras },
    setup() {
        const router = useRouter();
        const navigateTo = (route) => {
            router.push(route);
        };
        return { navigateTo };
    },
};
</script>

<style scoped>
.grid_habitantes {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 1rem;
    text-align: center;
    color: #47462d;
    align-items: baseline;
}

@media (min-width: 640px) {
    .grid_habitantes {
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;
    }
}

@media (min-width: 960px) {
    .grid_habitantes {
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
    }
}

@media (min-width: 1200px) {
    .grid_habitantes {
        grid-template-columns: repeat(4, 1fr);
        gap: 2.5rem;
    }
}
</style>