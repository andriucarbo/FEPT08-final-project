// CÓDIGO MIÉRCOLES 15h

import { defineStore } from 'pinia';

// Definir el store 'farmAnimalPics'
export const useFarmAnimalPicsStore = defineStore('farmAnimalPics', {
  // Definir estado
  state: () => ({
    animalPics: [],  // Array para almacenar las imágenes
  }),

  // Definir acciones
  actions: {
    // Función para obtener imágenes de animales de granja
    async fetchAnimalPics() {
      // Declarar la clave de acceso de Unsplash
      const apiKey = 'TTjl1vVp5sGjNOJt0kTPb01cxe-lokmQRvZJV525xfo'; 
      // Consulta para buscar imágenes de animales de granja
      const searchQuery = 'cute farm animals'  
      // Construir la URL de la API con la clave de acceso y la consulta
      const apiUrl = `https://api.unsplash.com/search/photos?query=${searchQuery}&client_id=${apiKey}`;

      try {
        // Hacer solicitud fetch a la API
        const response = await fetch(apiUrl);
        // Convertir la respuesta a JSON
        const data = await response.json();
        // Almacenar las URLs de las imágenes en el estado
        this.animalPics = data.results.map(image => image.urls.small); 
        console.log(this.animalPics) 
      } catch (error) {
        // Manejo de errores
        console.error('Error al obtener imágenes:', error);
      }
    }
  },
});


//API KEY ANDREA: TTjl1vVp5sGjNOJt0kTPb01cxe-lokmQRvZJV525xfo
//API KEY VANESSA: 759WuqsHL09nnyTP2WrSL2JgPfvCqjCpTS26W-2pEe0
