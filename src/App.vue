<template>
  <div class="app" >

    <!-- <h1 class="text-8xl font-black text-emerald-800">{{ title }}</h1> -->
    
<!-- NAVBAR -->
<!-- Iconos redes sociales -->
    <div class="SocialMedia flex flex-row justify-center gap-10 items-center py-2">
      <button class="Instagram">
      <img src="../public/instagram-brands-solid.svg" alt="icono instagram" class="w-8">
      </button>
      <button class="Facebook">
        <img src="../public/facebook-brands-solid.svg" alt="icono facebook" class="w-8">
      </button>
      <button class="Twitter">
      <img src="../public/twitter-brands-solid.svg" alt="icono twitter" class="w-8">
      </button>
    </div>
    
    <nav class="navbar bg-amber-500 flex justify-center gap- items-center">
      <img class="logotipo rounded-full w-24 h-24 ml-6" src="/LogoProvisional.png" alt="logo provisional">
      <desplegable/> 
    </nav>
<!-- FIN NAVBAR -->

<!-- BOTÓN FIJO LATERAL DERECHO SOCIAL MEDIA -->
<div class="fixed right-4 bottom-4 flex space-x-4">
  <button class="w-32 h-12 bg-[#857a5c] text-white rounded hover:bg-[#6e654c]">Dona</button>
  <button class="w-32 h-12 bg-[#857a5c] text-white rounded hover:bg-[#6e654c]">
    <span class="material-symbols-outlined">Síguenos</span>
  </button>
</div>


<!-- FOOTER -->
<div class="footerGrid flex items-center">
  <footer class="footer bg-[#47462d] grid grid-cols-4 mt-auto">
    <!-- mt-auto = margin top auto: hace que se ajuste al final del contenedo principal -->
    <p>Copyright 2024</p>
  </footer>
</div>

    <Router-view/>
    
  </div>
</template>

<script>
import desplegable from './components/desplegable.vue';


export default {
  name:"App",
  components: { desplegable, },

  data(){
    return{
      title:"holaaa! 🐷🐷 "
    }
  }
  
}
</script>

<style>
  .app {
    min-height: 100vh;
    display: flex;
    flex-direction: column; 
    /* 100vh:asegura que el contenedor principal tenga un alto mínimo igual al 100% de la viewport visible */
    /* display:flex y flex-direction:column permite organizar los elementos en una columna vertical */
  }

  .footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    /* position:fixed asegura que el footer se mantenga en la misma posición, incluso cuando se hace scroll */
  }

.app {
  /*color fondo de toda la página*/
  background-color: #e2d9c7;
}


</style>








