<template>
    <div>
        <h1>Familia</h1>
        <ul v-if="deadAnimals.length">
            <li class=“flex mb-4” v-for="deadAnimal in deadAnimals" :key="deadAnimal.name">
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
    methods:{
        async getDeadAnimals(){
            try {
            // 1- hacer fetch a json databaseFam
            const response = await fetch("http://localhost:5173/databaseFam.json")
            // http://localhost:5173/databaseFam.json
            // 2- guardar en data 
            const data = response.json();
            this.deadAnimals = data;
            // 3-modificar la base de datos
            updateDatabaseFam(this.deadAnimals);
            // 4-si queremos ver información en pantalla necesitamos la función getDatabaseFam (en dos funciones distintas, una recoge info y  la otra muestra)
        } catch (error) {
            console.error(error);
        }
        }

    },
    mounted() {
        this.getDeadAnimals();
        
    }
};
</script>

<style>
/* Aquí se definen las clases adicionales si es necesario */
</style>