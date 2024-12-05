<template>
  <div class="app" >

    <!-- <h1 class="text-8xl font-black text-emerald-800">{{ title }}</h1> -->
    
<!-- NAVBAR -->
<!-- Iconos redes sociales -->
    <div class="SocialMedia flex flex-row justify-center gap-4 items-center py-2">
      <button class="Instagram">☺️</button>
      <button class="Facebook">☺️</button>
      <button class="Twitter">☺️</button>
    </div>
    
    <nav class="navbar bg-amber-500 flex justify-center gap- items-center">
      <img class="logotipo rounded-full w-24 h-24 ml-6" src="../public/LogoProvisional.png" alt="logo provisional">
      <desplegable/> 
    </nav>
<!-- FIN NAVBAR -->

<!-- FOOTER -->
<div class="footerGrid flex items-center">
  <footer class="footer bg-gray-200 grid grid-cols-4 mt-auto">
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
  components: { desplegable },
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








