<!-- CÓDIGO MIÉRCOLES 15h -->
<template>
  <div>
    <h1>Habitantes de la Granja</h1>

    <!-- Contenedor grid para las imágenes -->
    <div class="grid-container grid-rows-3 gap-4">
      <h1 class="animal_name">Mariano</h1>
      <div class="animal_card flex justify-evenly bg-white shadow-lg px-4 py-4">
        <div v-for="(pic, index) in animalPics" :key="index" class="grid-item h-auto rounded shadow">
          <!-- Mostrar cada imagen -->
          <img :src="pic" alt="Imagen de animal de granja" class="">
        </div>
          <!-- texto para presentar al animal de granja -->
        <div class="animal_resume">texto presentación animal de granja</div>
          <!-- Botón para amadrinar -->
        <div class="button">
          <button class="amadrina">Amadríname</button>
        </div>
    </div>

      <h1 class="animal_name">Mariano</h1>

<div class="animal_card flex justify-evenly bg-white shadow-lg px-4 py-4">
  <div v-for="(pic, index) in animalPics" :key="index"      class="grid-item h-auto rounded shadow">
    <!-- Mostrar cada imagen -->
    <img :src="pic" alt="Imagen de animal de granja" class="">
  </div>
  <div class="animal_resume">texto presentación animal de granja</div>
  <div class="button">
    <button class="amadrina">Amadríname</button>
  </div>
  
</div>
      <!-- Iterar sobre animalPics con v-for -->
      
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import { useFarmAnimalPicsStore } from '../stores/farmAnimalPics';

export default {
  setup() {
    // Acceder al store
    const farmAnimalPicsStore = useFarmAnimalPicsStore();

    // Definir método para cargar las imágenes
    const loadSheepPics = () => {
      // Llamar a la acción fetchAnimalPics del store
      farmAnimalPicsStore.fetchAnimalPics();
    };

    // Llamar a loadSheepPics() cuando el componente se monta
    onMounted(() => {
      loadSheepPics();
    });

    return {
      // Retornar animalPics y loadSheepPics para usarlos en el template
      animalPics: farmAnimalPicsStore.animalPics,
      loadSheepPics,
    };
  },
};
</script>

<style>

</style>












<!-- <template>
    <div>
        <h1>Habitantes view</h1>
        <RouterView/>
    </div>
    <div class="gridAnimals grid grid-cols-5 border-2 border-amber-800 gap-6">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        

    </div>
</template>



<script>
import { useFarmAnimalPicsStore } from '../stores/farmAnimalPics'



export default {
    computed: {
        AnimalPics() {
            return useFarmAnimalPicsStore()
        } 
    },
    methods: {}, 
} 

</script>



<style>
    
</style> -->


<!-- 1) crear la carpeta Store y después crear el archivo .js (en este caso farmAnimalPics)
Dentro del archivo, crear los componentes que tiene (la estructura que queremos mostrar). Dentro del export defalut hemos completado la estructura (computed y methods), después lo hemos importado debajo de <script></script>, y creado la const AnimalPics.


2) crear en views el archivo Habitantes. -->


<!-- <template>
    <div>
      <h1>Imágenes de Ovejas</h1>
      <button @click='loadSheepPics'>Cargar Imágenes de Ovejas</button>
      <div v-if='animalPics.length'>
        <img v-for='(pic, index) in animalPics' :key='index' :src='pic' alt='Imagen de oveja'>
      </div>
    </div>
  </template>


  <script>
  import { computed } from 'vue';
  import { useFarmAnimalPicsStore } from '../stores/farmAnimalPics';  // Asegúrate de ajustar la ruta de importación
  export default {
    setup() {
      const farmAnimalPicsStore = useFarmAnimalPicsStore();
      const loadSheepPics = () => {
        farmAnimalPicsStore.fetchSheepPics();
      };
      const imageCount = computed(() => farmAnimalPicsStore.animalPics.length);

      return {
        animalPics: farmAnimalPicsStore.animalPics,
        loadSheepPics,
        imageCount,
      };
    },
  };
  </script>


  <style scoped>
  img {
    width: 200px;
    height: auto;
    margin: 10px;
  }
  </style> -->