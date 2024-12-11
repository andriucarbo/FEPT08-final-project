// CÓDIGO MIÉRCOLES 15h

import { defineStore } from 'pinia';

// Definir el store 'farmAnimalPics'
export const useFarmAnimalPicsStore = defineStore('farmAnimalPics', {
  // Definir estado
  state: () => ({
    animalPics: [],  // Arreglo para almacenar las imágenes
  }),

  // Definir acciones
  actions: {
    // Función para obtener imágenes de animales de granja
    async fetchAnimalPics() {
      // Declarar la clave de acceso de Unsplash
      const apiKey = 'TTjl1vVp5sGjNOJt0kTPb01cxe-lokmQRvZJV525xfo'; 
      // Consulta para buscar imágenes de animales de granja
      const searchQuery = 'farm animals'  
      // Construir la URL de la API con la clave de acceso y la consulta
      const apiUrl = `https://api.unsplash.com/search/photos?query=${searchQuery}&client_id=${apiKey}`;

      try {
        // Hacer solicitud fetch a la API
        const response = await fetch(apiUrl);
        // Convertir la respuesta a JSON
        const data = await response.json();
        // Almacenar las URLs de las imágenes en el estado
        this.animalPics = data.results.map(image => image.urls.small);  
      } catch (error) {
        // Manejo de errores
        console.error('Error al obtener imágenes:', error);
      }
    }
  },
});






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




// import { defineStore } from "pinia";
// export const useFarmAnimalPicsStore = defineStore("farmAnimalPics", {
//   // state
//   state: () => ({
//     animalPic: [],  // Cambiar a plural y usar el nombre correcto
//   }),
//   // getters
//   getters: {
//   },
//   // actions
//   actions: {
//     async fetchSheepPics() {
//       const apiKey = "TTjl1vVp5sGjNOJt0kTPb01cxe-lokmQRvZJV525xfo";  // Reemplaza con tu clave de acceso de Unsplash
//       const searchQuery = "sheep";  // Consulta para buscar imágenes de ovejas
//       const apiUrl = `https://api.unsplash.com/search/photos?query=${searchQuery}&client_id=${apiKey}`;
//       try {
//         const response = await fetch(apiUrl);
//         const data = await response.json();
//         this.animalPics = data.results.map(image => image.urls.small);  // Almacenar las URLs de las imágenes en el estado
//       } catch (error) {
//         console.error("Error al obtener imágenes:", error);
//       }
//     }
//   },
// });








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









