<template>
  <div>
    <!-- <h1 class="text-8xl font-black text-emerald-800">{{ title }}</h1> -->
    
    <!-- NAVBAR -->
    <!-- Iconos redes sociales -->
    <div class="SocialMedia bg-amber-300 flex flex-row justify-center gap-4 items-center py-2">
      <button class="Instagram">☺️</button>
      <button class="Facebook">☺️</button>
      <button class="Twitter">☺️</button>
    </div>
    <nav class="navbar bg-amber-500 flex justify-center gap-8 items-center">
      <img class="logotipo rounded-full w-24 h-24 ml-6" src="../public/LogoProvisional.png" alt="logo provisional">
      <button class="conocenos">Conócenos</button>
      <button class="habitantes">Habitantes</button>
      <button class="colabora" >Colabora</button>
      <button class="educa">Educa</button>
      <button class="recetas">Recetas</button>
      <button class="noticias">Noticias</button>
      <button class="tienda"> Tienda </button>
      <button class="contacto"> Contacto</button>
    </nav>
    <!-- FIN NAVBAR -->

  <!-- Main -->
  <div class="main border-cyan-900 border-2" >
  <div class="mainConocenos bg-amber-300 flex flex-col justify-center items-center">
    <p>Conócenos</p>

  </div>

  <div class="mainHabitantes bg-cyan-200 flex flex-col justify-center items-center " >
    <p> Habitantes</p>
    <div class="grid grid-cols-4 bg-pink-500 gap-8" >
      <div class="uno bg-slate-200" >1</div>
      <div class="dos bg-slate-200" >2</div>
      <div class="tres bg-slate-200" >3</div>
      <div class="cuatro bg-slate-200" >4</div>
      <div class="cinco bg-slate-200" >5</div>
      <div class="seis bg-slate-200" >6</div>
    </div>
    
  </div>

  <div class="mainColabora bg-cyan-400 flex flex-col justify-center items-center" >
    <p> Colabora</p>
  </div>

  <div class="mainEduca bg-green-200 flex flex-col justify-center items-center" >
    <p>Educa</p>
  </div>

  <div class="mainReceta bg-green-400 flex flex-col justify-center items-center"  >
    <p>Recetas</p>
  </div>

  <div class="mainNoticias bg-violet-300 flex flex-col justify-center items-center" >
    <p>Noticias</p>
  </div>

  <div class="mainTienda bg-violet-500 flex flex-col justify-center items-center">
    <p>Tienda</p>
  </div>

  <div class="mainContacto bg-teal-300 flex flex-col justify-center items-center" >
    <p>Contacto</p>
  </div>

  <div></div>

  <div></div>
</div>


<div>
  <footer class="footer bg-gray-200">
    <p>Copyright 2024</p>
  </footer>
</div>

  

    

    

    <h2 class="text-6xl text-pink-700">bon dia</h2>
    <h3>hola hola!</h3>



    <Router-view/>
    
  </div>
</template>

<script>
export default {
  name:"App",
  data(){
    return{
      title:"holaaa! 🐷🐷 "
    }
  }
  
}
</script>

<style>
  
</style>