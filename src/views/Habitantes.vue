<!-- CÓDIGO MIÉRCOLES 15h -->
<!-- <template>
  <div>
    <h1>Habitantes de la Granja</h1>

    <div class="grid grid-cols-3 gap-8">
      <div class="bg-red-300">
        <h4 class="animal_name">Mariano</h4>
        <img :src="farmAnimalPics.animalPics[0]" alt="Imagen de animal de granja" class="">
      </div>
      <div class="bg-red-300">
        <h4 class="animal_name">Mariano</h4>
        <img :src="farmAnimalPics.animalPics[0]" alt="Imagen de animal de granja" class="">
      </div>
      <div class="bg-red-300">
        <h4 class="animal_name">Mariano</h4>
        <img :src="farmAnimalPics.animalPics[1]" alt="Imagen de animal de granja" class="">
      </div>
      <div class="bg-red-300">
        <h4 class="animal_name">Mariano</h4>
        <img :src="farmAnimalPics.animalPics[2]" alt="Imagen de animal de granja" class="">
      </div>
      <div class="bg-red-300">
        <h4 class="animal_name">Mariano</h4>
        <img :src="farmAnimalPics.animalPics[3]" alt="Imagen de animal de granja" class="">
      </div>
      <div class="bg-red-300">
        <h4 class="animal_name">Mariano</h4>
        <img :src="farmAnimalPics.animalPics[4]" alt="Imagen de animal de granja" class="">
      </div>
      <div class="bg-red-300">
        <h4 class="animal_name">Mariano</h4>
        <img :src="farmAnimalPics.animalPics[5]" alt="Imagen de animal de granja" class="">
      </div>
      <div class="bg-red-300">
        <h4 class="animal_name">Mariano</h4>
        <img :src="farmAnimalPics.animalPics[6]" alt="Imagen de animal de granja" class="">
      </div>
      <div class="bg-red-300">
        <h4 class="animal_name">Mariano</h4>
        <img :src="farmAnimalPics.animalPics[7]" alt="Imagen de animal de granja" class="">
      </div>
    </div>
  </div>
</template>

<script>
// import { onMounted } from 'vue';
import { useFarmAnimalPicsStore } from '../stores/farmAnimalPics';

export default {
  name: 'Habitantes',
  computed:{
    farmAnimalPics(){
      return useFarmAnimalPicsStore()
    }
  },
  mounted(){
    this.farmAnimalPics.fetchAnimalPics()
  }
};
</script>
<style>
</style> -->

<template>
  <div class="flex justify-center items-center">
    <h1>Habitantes view</h1>
  </div>
<div class="flex justify-center items-center">
  <carousel class="mx-96 my-20" @next="next" @prev="prev">
    <!-- <carousel-slide>
          <img :src="farmAnimalPics.animalPics" alt="Imagen de animal de granja" class=""/>
            </carousel-slide> -->

    <carouselSlide
      v-for="(image, index) in farmAnimalPics.animalPics"
      :key="index"
      :visibleSlide="currentIndex"
      :index="index"
      :direction="direction"
    >
      <img
        :src="image"
        alt="Imagen de animal de granja"
        class="w-full h-auto"
      />
    </carouselSlide>
  </carousel>
</div>
</template>


<script>
import Carousel from "../components/Carousel.vue";
import CarouselSlide from "../components/CarouselSlide.vue";

// import { onMounted } from 'vue';
import { useFarmAnimalPicsStore } from "../stores/farmAnimalPics";


export default {
  name: "Habitantes",
  components: { Carousel, CarouselSlide },

  computed: {
    farmAnimalPics() {
      return useFarmAnimalPicsStore();
    },
  },
  mounted() {
    this.farmAnimalPics.fetchAnimalPics();
  },
  data() {
    return {
      currentIndex: 0,
      direction: "left", // Índice inicial del carrusel
    };
  },
  methods: {
    async next() {
      // Incrementar el índice actual
      if (this.currentIndex >= this.farmAnimalPics.animalPics.length - 1) {
        // Si estamos en el último slide, volver al primero
        this.currentIndex = 0;
      } else {
        // De lo contrario, mover al siguiente slide
        this.currentIndex++;
      }
      this.direction = "left";
    },
    prev() {
      // Decrementar el índice actual
      if (this.currentIndex <= 0) {
        // Si estamos en el primer slide, ir al último
        this.currentIndex = this.farmAnimalPics.animalPics.length - 1;
      } else {
        // De lo contrario, mover al slide anterior
        this.currentIndex--;
      }
      this.direction="right";
    },
  },
};
</script>
<style></style>
