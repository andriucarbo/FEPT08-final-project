<template>
    <div @click="flipCard" class="flipping-card relative w-96 h-96 perspective my-12 mx-12">
    <div :class="['flipping-card-inner', { 'flipped': isFlipped }]">
        <!-- Parte Frontal -->
        <div class="flipping-card-front bg-gray-100 text-black rounded shadow-lg">
        <img :src="image" alt="Imagen" class="w-96 h-96 object-cover rounded-t" />
        <div class="p-4">
            <h3 class="text-lg font-bold">{{ title }}</h3>
            <!-- <p class="text-sm">{{ frontText }}</p> -->
            
        </div>
        </div>
        <!-- Parte Trasera -->
        <div class="flipping-card-back bg-gray-200 text-black rounded shadow-lg p-4 flex flex-col items-center justify-center">
        <p>{{ backText }}</p>
        <button class="bg-[#857a5c] text-white rounded hover:bg-[#6e654c] px-4 py-2 transition duration-300 mt-4">Descubre más</button> 
        </div>
    </div>
    </div>
</template>


<script>
    export default {
    props: {
        title: String,
        image: String,
        // frontText: String,
        backText: String
    },
    data() {
        return {
        isFlipped: false
    };
    },
    methods: {
        flipCard() {
        this.isFlipped = !this.isFlipped;
        }
    }
};
</script>

<style>
.perspective {
    perspective: 1000px;
}
.flipping-card {
    cursor: pointer;
    transform-style: preserve-3d;
    transition: transform 0.6s;
}
.flipping-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
}
.flipped {
    transform: rotateY(180deg);
}
.flipping-card-front, .flipping-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 10px;
}
.flipping-card-back {
    transform: rotateY(180deg);
}
</style>
