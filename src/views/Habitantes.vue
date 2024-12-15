<template>
  <div class="donativo_imagen">
    <img :src="'/public/portadaHabitantes.png'" alt="imagen mujer dando de comer a cabras"
      class=" bg-cover bg-no-repeat bg-center  flex flex-col justify-center items-center w-full">
  </div>
  <div class="texto">
    <h1 class="dona text-[#47462d] text-9xl text-center mt-20">
      Nuestros Habitantes
    </h1>
    <p class="dona text-[#47462d] text-2xl text-center mx-36 my-16">
      Todos ellos forman parte de nuestra familia PATOdalavida, cada uno tiene su propia historia. Te invitamos a que
      los conozcas un poco más.
    </p>
  </div>

  <!-- GRID IMÁGENES DE LOS HABITANTES/FORMATO BOTÓN QUE TE LLEVA A HABITANTES -->
  <div class="grid-habitantes border-b-2 border-b-[#47462d]/50 ml-20 mr-20 pb-20">
    <GridHabitantes />
  </div>


  <div class="texto">
    <h2 class="dona text-[#47462d] text-5xl text-center mt-20">
      Descubre las últimas aventuras de nuestros habitantes
    </h2>
  </div>

  <div class="flex justify-center items-center">
    <carousel class="mx-96 my-20" @next="next" @prev="prev">

      <carouselSlide v-for="(image, index) in farmAnimalPics.animalPics" :key="index" :visibleSlide="currentIndex"
        :index="index" :direction="direction">
        <img :src="image" alt="Imagen de animal de granja" class="w-full h-auto" />
      </carouselSlide>
    </carousel>
  </div>

  <div class=" texto flex justify-center mb-20">
    <button type="submit"
    class=" bg-[#47462d]/50 text-white p-2 rounded-md hover:bg-[#47462d] transition duration-300 text-2xl">Apúntate a nuestra Newsletter</button>
  </div>

  <router-view></router-view>
  
</template>


<script>
import Carousel from "../components/Carousel.vue";
import CarouselSlide from "../components/CarouselSlide.vue";
import GridHabitantes from '../components/GridHabitantes.vue'
import { useFarmAnimalPicsStore } from "../stores/farmAnimalPics";


export default {
  name: "Habitantes",
  components: {
    Carousel,
    CarouselSlide,
    GridHabitantes
  },

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
      this.direction = "right";
    },
  },
};
</script>
<style>

.texto{
  font-family: 'Crimson Text', serif;
}
</style>
