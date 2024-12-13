<template>
    <div>
        <h1>Family</h1>
        <ul>
            <li class="flex mb-4" v-for="deadAnimal in deadAnimals" :key="deadAnimal.id">
                <p>{{ deadAnimal.name }}</p>
                <!-- <img :src="{{ deadAnimal.image }}" :alt="">
                <p>{{ deadAnimal.description }}</p> -->
            </li>
        </ul>
        <!-- mirar ejemplo Irene Favourites.vue si queremos añadir últimos animales vistos con el evento click -->
    </div>
</template>


<script>
import { updateDatabaseFam, getDatabaseFam} from '../firebase.js'

export default {
    name: "Familia",
    data(){
        return {
            deadAnimals: []
        };
    },
    mounted () {
        this.getDatabaseFam();
    },
    methods: {
        async getDatabaseFam(){
            try{
                const response = await fetch("/public/databaseFam.json")
                const data = await response.json()
                this.deadAnimals = data;
                await
                updateDatabaseFam(this.deadAnimals)

            }catch(error){
                console.log(error)
            }
        },
    },
    }
</script>



<style>
    
</style>