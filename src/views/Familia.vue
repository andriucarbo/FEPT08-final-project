<template>
    <div>
        <h1>Familia</h1>
        <ul>
            <li class=“flex mb-4” v-for='deadAnimal in deadAnimals' :key='deadAnimal.name'>
                <p>{{ deadAnimal.name }}</p>
                <p>{{ deadAnimal.description }}</p>
            </li>
        </ul>
    </div>
</template>
<script>
import { updateDatabaseFam, getDatabaseFam } from "../firebasePato.js";
export default {
    name: "Familia",
    data() {
        return {
            deadAnimals: []
        };
    },
    async mounted() {
        try {
            const data = await getDatabaseFam();
            this.deadAnimals = data;
            await updateDatabaseFam(this.deadAnimals);
        } catch (error) {
            console.error(error);
        }
    }
};
</script>

<style>
/* Aquí se definen las clases adicionales si es necesario */
</style>