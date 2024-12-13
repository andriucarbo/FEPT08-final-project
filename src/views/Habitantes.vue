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


<template>
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
      const animalPics = computed(() => farmAnimalPicsStore);

      return {
        animalPics,
        loadSheepPics,
      
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
  </style>