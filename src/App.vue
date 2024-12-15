<template>
<div>
  <div class="app flex flex-col min-h-screen" >

<!-- NAVBAR -->
<!-- Iconos redes sociales -->
<!-- icono 1 -->
    <div class="SocialMedia flex flex-row justify-center gap-10 items-center py-2">
      <button class="Instagram">
      <img src="../public/instagram-brands-solid.svg" alt="icono instagram" class="w-8">
      </button>
<!-- icono 2 -->
      <button class="Facebook">
        <img src="../public/facebook-brands-solid.svg" alt="icono facebook" class="w-8">
      </button>
<!-- icono 3 -->
      <button class="Twitter">
      <img src="../public/twitter-brands-solid.svg" alt="icono twitter" class="w-8">
      </button>
    </div>
<!-- LOGO FUNDACIÓN PATOdalavida -->
 <!--MENU HAMBURGUESA-->
    <nav class="navbar flex flex-wrap justify-center gap-10 px-4 py-2 items-center z-50">
      <img class="logotipo rounded-full w-24 h-24 ml-6" src="/LogoProvisional.png" alt="logo provisional">
      <button 
      class="hamburger md:hidden px-4 py-2 text-lg focus:outline-none"  
      @click="toggleMobileMenu">
        ☰
      </button>
      <desplegable/> 
      <!-- Menú completo (escondido en pantallas pequeñas) -->
      <div :class="{'hidden': !isMobileMenuOpen}" class="w-full md:flex md:w-auto">
        <div class="relative" v-for="(item, index) in menuItems" :key="index">
          <button class="px-4 py-2 hover:underline transition duration-600 ease-in-out cursor-pointer" 
          @click="toggleDropdown(item.name)">
            {{ item.label }}
          </button>

          <div v-if="activeDropdown === item.name" 
          class="absolute left-0 mt-2 bg-white shadow-lg rounded w-48">
            <ul class="flex flex-col">
              <li v-for="(link, index) in item.links" :key="index" class="px-4 py-2 hover:bg-gray-100">
                <router-link :to="link.to">{{ link.text }}</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
<!-- FIN NAVBAR -->

<!-- BOTÓN FIJO LATERAL DERECHO SOCIAL MEDIA -->
<div class="fixed right-4 bottom-4 flex space-x-4">
  <button class="w-32 h-12 bg-[#857a5c] text-white rounded hover:bg-[#6e654c]">Dona</button>
  <button class="w-32 h-12 bg-[#857a5c] text-white rounded hover:bg-[#6e654c]">
    <span class="material-symbols-outlined">Síguenos</span>
  </button>
</div>

<div>
    <Router-view/>
</div>
</div>


<!-- FOOTER -->
  <footer class="footer bg-[#47462d] mt-auto text-[#e2d9c7] text-xl">
    <!-- mt-auto = margin top auto: hace que se ajuste al final del contenedo principal -->
    <div class="container mx-auto px-6 py-10">
      <div class="footer_body grid grid-cols-1 md:grid-cols-3 gap-50">
        <!-- FOOTER ITEMS -->
        <div class="footer_item flex flex-col items-start">
          <div class="footer_socialmedia">
            <h1 class="footer_logo">LOGO</h1>
            <h3 class="footer_subtitle text-2xl underline">Redes sociales:</h3>
            <!-- FOOTER SOCIAL LINK BODY -->
            <div class="footer_social_link_body flex space-x-4 mb-4">
              <a href="" class="footer_social_link pb-3 text-xl justify-items-start">
                <img src="../public/instagram_claro.svg" alt="logo instagram" class="social_media-link-img w-8 h-8">
              </a>

              <a href="" class="footer_social_link pb-3">
                <img src="../public/facebook-clarito.svg" alt="logo instagram" class="social_media-link-img w-8 h-8">
              </a>

              <a href="" class="footer_social_link pb-3">
                <img src="../public/twitter-clarito.svg" alt="logo instagram" class="social_media-link-img w-8 h-8">
              </a>
            </div>
            <!-- END OF SOCIAL MEDIA LINK BODY -->

            <div class="space-y-2"> 
              <button class="w-32 h-12 mr-4 bg-[#857a5c] text-white rounded hover:bg-[#6e654c]">
                Amadrina
              </button> 
              <button class="w-32 h-12 mr-4 bg-[#857a5c] text-white rounded hover:bg-[#6e654c]">
                Hazte Socio
              </button> 
              <button class="w-32 h-12 mr-4 bg-[#857a5c] text-white rounded hover:bg-[#6e654c]">
                Voluntariado
              </button> 
            </div>
          </div>
        </div>
        <!-- END OF FOOTER ITEMS 1-->
      
        <!-- FOOTER ITEMS 2 -->
        <div class="footer_item">
          <h1 class="footer_title text-2xl underline">Acceso rápido</h1>
          <ul class="footer_menu">
            <!-- Footer menu intem -->
            <li class="footer_menu-item">
              <a href="" class="footer_menu-link">Conócenos</a>
            </li>
            <!-- Footer menu item -->
            <li class="footer_menu-item">
              <a href="" class="footer_menu-link">Habitantes</a>
            </li>
            <!-- Footer menu item -->
            <li class="footer_menu-item">
              <a href="" class="footer_menu-link">Colabora</a>
            </li>
            <!-- Footer menu item -->
            <li class="footer_menu-item">
              <a href="" class="footer_menu-link">Educa</a>
            </li>
            <!-- Footer menu item -->
            <li class="footer_menu-item">
              <a href="" class="footer_menu-link">Recetas</a>
            </li>
            <!-- Footer menu item -->
            <li class="footer_menu-item">
              <a href="" class="footer_menu-link">Tienda</a>
            </li>
            <!-- Footer menu item -->
            <li class="footer_menu-item">
              <a href="" class="footer_menu-link">Contacto</a>
            </li>
          </ul>
          
        </div>
        <!-- END OF FOOTER ITEMS 2 -->
        
        <!-- FOOTER ITEMS 3 -->
        <div class="footer_item">
          <h1 class="footer_title text-2xl underline">Información de contacto</h1>
          <ul class="footer_contact space-y-2">
            <!-- Footer contacto intem -->
            <li class="footer_contact-item">
              <a href="" class="footer_contact-link">Fundación PATOdalavida</a>
            </li>
            <!-- Footer contacto item -->
            <li class="footer_contact-item">
              <a href="000 999 888 765" class="footer_phone-link flex items-center">
                <img src="../public/phone-solid.svg" alt="icono teléfono" class="w-6 mr-2">
                <p class="footer_contact-subtitle">
                  Rescates: 000 999 888 765
                </p>
              </a>
            </li>
            <!-- Footer contacto item -->
            <li class="footer_contact-item">
              <a href="000 999 888 756" class="footer_phone-link flex items-center">
                <img src="../public/phone-solid.svg" alt="icono teléfono" class="w-6 mr-2">
                <p class="footer_contact-subtitle">
                  Información: 000 999 888 756
                </p>
              </a>
            </li>
            <!-- Footer contact item -->
            <li class="footer_contact-item">
              <a href="mailito:info@pato.com" class="footer_mail-link flex items-center">
                <img src="../public/envelope-solid.svg" alt="icono correo electrónico" class="w-6 mr-2">
                <p class="footer_mail-subtitle"> info@pato.com</p>
              </a>
            </li>
            <!-- Footer contact item -->
            <li class="footer_contact-item">
              <a href="" class="footer_contact-link flex items-center">
              <img src="../public/location-dot-solid.svg" alt="icono ubicación" class="w-6">
              <p class="footer_location-subtitle ml-2">Dónde nos encontramos:</p>
              </a>
            </li>
          </ul>
        </div>
        <!-- END OF FOOTER ITEMS 3 -->
      </div>
    </div>
    <div class="footer_copy-r">
        Copyright © 2024 Andrea&Vanessa Web Design. All rights reserved.
      </div>
  </footer>


</div>

</template>

<script>
import desplegable from './components/desplegable.vue';




export default {
  name:"App",
  components: { desplegable, },

  data(){
    return{
    
  }
}}
  

</script>

<style>
  .app {
    min-height: 100vh;
    display: flex;
    flex-direction: column; 
    /* 100vh:asegura que el contenedor principal tenga un alto mínimo igual al 100% de la viewport visible */
    /* display:flex y flex-direction:column permite organizar los elementos en una columna vertical */
  }
/*Esto sirve para que el desplegable de la NavBar no se quede detrás de las imágenes*/
  .navbar-desplegable {
    position: absolute; /* O fixed si es necesario */
    z-index: 100;
}
.hamburger {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}
@media (min-width: 768px) {
  .hamburger {
    display: none;
  }
}

  .footer {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Crimson Text', serif;
    text-decoration: none;
    padding:50px 30px 20px;
  }

  .footer_body{
    display: flex;
    justify-content: space-between;
    gap:180px
  }

  .footer_logo{
    padding-bottom: 10px;
  }

  .footer_subtitle{
    padding-bottom: 20px;
  }

  .footer_title{
    padding-bottom: 10px;
  }

  .footer_menu{
    height: 180px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .footer_copy-r{
    padding-top: 10px;
    font-size: 12px;
    text-align: center;

  }

.app {
  /*color fondo de toda la página*/
  background-color: #e2d9c7;
}


</style>








