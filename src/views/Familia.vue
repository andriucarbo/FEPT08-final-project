<template>
    <div>
        <h1>Family</h1>
        <ul>
            <li class="flex mb-4" v-for="deadAnimal in deadAnimals"></li>
        </ul>
    </div>
</template>


<script>


export default {
    name: "Familia",
    data(){
        deadAnimals: []
    },
    methods: {
        async getAnimals(){
            try{
                const response = await fetch("/public/databaseFam.json")
                // const data = await response.js()
                this.animals = data;

            }catch(error){
                console.log(error)
            }
        },
    },
    }
</script>



<style>
    
</style>