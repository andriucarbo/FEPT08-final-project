<template>
    <div class=“bg-red-200”>
        <button @click='getAnimals'>see animals</button>
        <ul>
            <li v-for='animal in favAnimals' :key='animal.id' class=“text-emerald-800”>
                {{ animal.name }}
            </li>
        </ul>
    </div>
</template>



<script>
import { updateFavorites, getFavorites } from '../firebase.js';
export default {
    name: 'favoritesList',
    data() {
        return {
            favAnimals: [],
        };
    },
    methods: {
        async getAnimals() {
            return this.favAnimals = await getFavorites();
        },
    },
};
</script>



<style></style>