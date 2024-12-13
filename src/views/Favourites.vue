<template>
    <div>
        <h1>Favourites view</h1>
        <ul>
            <li class="flex mb-4" v-for="animal in animals" :key="animal.id">
            <p> {{ animal.name }}</p> 
            <button class="bg-rose-400 px-4 py-3" @click="addFavourite(animal.id)">+</button>
            </li>
        </ul>
        <FavoriteList/>
    </div>
</template>



<script>
import { updateFavorites, getFavorites } from '../firebase.js';
import FavoritesList from '../components/FavoritesList.vue';


export default {
    name: "Favourites",
    components: { FavoritesList }, 
    data(){
        return{
            animals: [{
        id: 1,
        name: "Mariano",
        description: "Es una gallina que busca familia",
        age: 3
    },
    {
        id: 2,
        name: "Nuvol",
        description: "Es una oveja que busca familia",
        age: 3
    },
    {
        id: 3,
        name: "Floc",
        description: "Es una gato que busca familia",
        age: 3
    },
    {
        id: 4,
        name: "Flama",
        description: "Es una vaca que busca familia",
        age: 3
    },],



        }
    },
    // mounted(){
    //     this.getAnimals()
    // },
    //lo comenta en un momento porque hace un efecto raro al cargar en la web
    method: {
        async getAnimals(){
            try{
                const response = await fetch("../animals.json")
                // const data = await response.js()
                this.animals = response;

            }catch(error){
                console.log(error)
            }
        },
        addFavourite(id){
            let favAnimal = this.animals.find(animal => animal.id === id)
            this.favourites.push(favAnimal)
            console.log(this.favourites)
            updateFavorites(this.favourites)
        }

    },
    
};



</script>




<style>
    
</style>