// import {defineStore} from "pinia";

// export const useFarmAnimalPicsStore = defineStore('farmAnimalPics', {
//     //state,
//     state: () => ({
//         animalPic: [],
//     }),
//     //getter,
//     getters: {
        
//     },
//     //actions
//     actions: {
//         async fetchSheepPics() {
//            const apiKey = "TTjl1vVp5sGjNOJt0kTPb01cxe-lokmQRvZJV525xfo";  // Reemplaza con tu clave de acceso de Unsplash
//             const searchQuery = "sheep";  // Consulta para buscar imágenes de ovejas
//             const apiUrl = `https://api.unsplash.com/search/photos?query=${searchQuery}&client_id=${apiKey}`;
//         try {
//             const response = await fetch(apiUrl);
//             const data = await response.json();
//              this.animalPics = data.results.map(image => image.urls.small);  // Almacenar las URLs de las imágenes en el estado
//         } catch (error) {
//         console.error("Error al obtener imágenes:", error);
//         }
//         }
        
//     },
// });


// ___________________
import { defineStore } from "pinia";
export const useFarmAnimalPicsStore = defineStore("farmAnimalPics", {
  // state
  state: () => ({
    animalPics: [],  // Cambiar a plural y usar el nombre correcto
  }),
  // getters
  getters: {
  },
  // actions
  actions: {
    async fetchSheepPics() {
      const apiKey = "TTjl1vVp5sGjNOJt0kTPb01cxe-lokmQRvZJV525xfo";  // Reemplaza con tu clave de acceso de Unsplash
      const searchQuery = "sheep";  // Consulta para buscar imágenes de ovejas
      const apiUrl = `https://api.unsplash.com/search/photos?query=${searchQuery}&client_id=${apiKey}`;
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        this.animalPics = data.results.map(image => image.urls.small);  // Almacenar las URLs de las imágenes en el estado
      } catch (error) {
        console.error("Error al obtener imágenes:", error);
      }
    }
  },
});








// export default useFarmAnimalPicsStore


// import { defineStore } from ‘pinia’;
// export const useFarmAnimalPicsStore = defineStore(‘farmAnimalPics’, {
//   state: () => ({
//     animalPics: [],  // Arreglo para almacenar las imágenes
//   }),
//   getters: {
//     // Puedes añadir getters aquí si es necesario
//   },
//   actions: {
//     async fetchSheepPics() {
//       const apiKey = ‘TU_CLAVE_DE_ACCESO’;  // Reemplaza con tu clave de acceso de Unsplash
//       const searchQuery = ‘sheep’;  // Consulta para buscar imágenes de ovejas
//       const apiUrl = `https://api.unsplash.com/search/photos?query=${searchQuery}&client_id=${apiKey}`;
//       try {
//         const response = await fetch(apiUrl);
//         const data = await response.json();
//         this.animalPics = data.results.map(image => image.urls.small);  // Almacenar las URLs de las imágenes en el estado
//       } catch (error) {
//         console.error(‘Error al obtener imágenes:’, error);
//       }
//     }
//   },
// });









