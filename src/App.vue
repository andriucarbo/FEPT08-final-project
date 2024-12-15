<template>
  <div>
    <div class="app flex flex-col min-h-screen">

<<<<<<< HEAD
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

      <!-- LOGO FUNDACIÓN PATOdalavida -->
      <nav class="navbar flex justify-center gap- items-center">
        <button @click="navigateTo('/')" >
          <img class="logotipo rounded-full w-24 h-24 ml-6" src="/LogoProvisional.png" alt="logo provisional">
        </button>
        
        <desplegable />
      </nav>
      <!-- FIN NAVBAR -->

      
      <!-- BOTÓN FIJO PARA HACER SCROLL -->
      <div>
        <button 
          @click="scrollToTop" 
          :class="['text-4xl fixed bottom-24 right-12 bg-[#47462d]/50 text-white p-3 rounded-full shadow-md hover:bg-[#47462d] transition duration-300', showButton ? 'block' : 'hidden']">
          ↑
        </button>
      </div>

      <!-- BOTÓN FIJO LATERAL DERECHO SOCIAL MEDIA -->

      <div class="fixed right-4 bottom-4 flex space-x-4">
        <button type="submit" @click="navigateTo('/Colabora/Dona')" class="w-32 h-12 bg-[#857a5c] text-white rounded hover:bg-[#6e654c] transition duration-300 p-3 md:p-4">Dona</button>
        <button class="w-32 h-12 bg-[#857a5c] text-white rounded hover:bg-[#6e654c]">
          <span class="material-symbols-outlined">Síguenos</span>
        </button>
      </div>

      <div>
        <router-view />
      </div>
=======
<!-- NAVBAR -->
<!-- Iconos redes sociales -->
<!-- icono 1 -->
    <div class="SocialMedia flex flex-wrap justify-center gap-6 items-center py-2">
      <!-- <div class="SocialMedia flex flex-wrap justify-center gap-6 items-center py-2"></div> before -->
      <button class="Instagram">
      <img src="../public/instagram-brands-solid.svg" alt="icono instagram" class="w-6 md:w-8">
      </button>
<!-- icono 2 -->
      <button class="Facebook">
        <img src="../public/facebook-brands-solid.svg" alt="icono facebook" class="w-6 md:w-8">
      </button>
<!-- icono 3 -->
      <button class="Twitter">
      <img src="../public/twitter-brands-solid.svg" alt="icono twitter" class="w-6 md:w-8">
      </button>
>>>>>>> 87755cf (Andrea 18.49, cambios)
    </div>

<!-- LOGO FUNDACIÓN PATOdalavida -->
<<<<<<< HEAD
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
=======
    <nav class="navbar flex flex-wrap justify-center items-center px-4 py-2 md:py-4" >
    <img class="logotipo rounded-full w-16 h-16 md:w-24 md:h-24" src="/LogoProvisional.png" alt="logo provisional">
      <!-- Botón Hamburguesa -->
    <button 
        class="hamburger md:hidden px-4 py-2 text-lg focus:outline-none"  
        @click="toggleMobileMenu">
        ☰
    </button>
      <!-- <img class="logotipo rounded-full w-16 h-16 md:w-24 md:h-24" src="/LogoProvisional.png" alt="logo provisional"> -->
      <desplegable class="hidden md:block" :isMobileMenuOpen="isMobileMenuOpen"/> 
>>>>>>> 87755cf (Andrea 18.49, cambios)
    </nav>

<!-- FIN NAVBAR -->

<!-- BOTÓN FIJO LATERAL DERECHO SOCIAL MEDIA sin ser responsive -->
<!-- <div class="fixed right-4 bottom-4 flex space-x-4">
  <button class="w-32 h-12 bg-[#857a5c] text-white rounded hover:bg-[#6e654c]">Dona</button>
  <button class="w-32 h-12 bg-[#857a5c] text-white rounded hover:bg-[#6e654c]">
    <span class="material-symbols-outlined">Síguenos</span>
  </button>
</div> -->

<!-- Botones fijos en el lateral derecho responsive -->
<div class="fixed right-2 bottom-2 flex flex-col space-y-2 md:space-x-4 md:flex-row">
  <button class="w-24 md:w-32 h-10 md:h-12 bg-[#857a5c] text-white rounded hover:bg-[#6e654c]">Dona</button>
  <button class="w-24 md:w-32 h-10 md:h-12 bg-[#857a5c] text-white rounded hover:bg-[#6e654c]">
    <span class="material-symbols-outlined text-sm md:text-base">Síguenos</span>
  </button>
</div>

<div>
    <Router-view/>
</div>
</div>


<<<<<<< HEAD
    <!-- FOOTER -->
    <footer class="footer bg-[#47462d] mt-auto text-[#e2d9c7] text-xl">
      <div class="container mx-auto px-6 py-10">
        <div class="footer_body grid grid-cols-1 md:grid-cols-3 gap-50">
          <!-- FOOTER ITEMS -->
          <div class="footer_item flex flex-col items-start">
            <div class="footer_socialmedia">
              <h1 class="footer_logo">LOGO</h1>
              <h3 class="footer_subtitle text-2xl underline">Redes sociales:</h3>
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
=======
<!-- FOOTER sin ser responsive -->
  <footer class="footer bg-[#47462d] mt-auto text-[#e2d9c7] text-base md:text-lg px-4 py-6">
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
>>>>>>> 87755cf (Andrea 18.49, cambios)

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
              <li class="footer_menu-item">
                <a href="" class="footer_menu-link">Conócenos</a>
              </li>
              <li class="footer_menu-item">
                <a href="" class="footer_menu-link">Habitantes</a>
              </li>
              <li class="footer_menu-item">
                <a href="" class="footer_menu-link">Colabora</a>
              </li>
              <li class="footer_menu-item">
                <a href="" class="footer_menu-link">Educa</a>
              </li>
              <li class="footer_menu-item">
                <a href="" class="footer_menu-link">Recetas</a>
              </li>
              <li class="footer_menu-item">
                <a href="" class="footer_menu-link">Tienda</a>
              </li>
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
              <li class="footer_contact-item">
                <a href="" class="footer_contact-link">Fundación PATOdalavida</a>
              </li>
              <li class="footer_contact-item">
                <a href="000 999 888 765" class="footer_phone-link flex items-center">
                  <img src="../public/phone-solid.svg" alt="icono teléfono" class="w-6 mr-2">
                  <p class="footer_contact-subtitle">
                    Rescates: 000 999 888 765
                  </p>
                </a>
              </li>
              <li class="footer_contact-item">
                <a href="000 999 888 756" class="footer_phone-link flex items-center">
                  <img src="../public/phone-solid.svg" alt="icono teléfono" class="w-6 mr-2">
                  <p class="footer_contact-subtitle">
                    Información: 000 999 888 756
                  </p>
                </a>
              </li>
              <li class="footer_contact-item">
                <a href="mailto:info@pato.com" class="footer_mail-link flex items-center">
                  <img src="../public/envelope-solid.svg" alt="icono correo electrónico" class="w-6 mr-2">
                  <p class="footer_mail-subtitle"> info@pato.com</p>
                </a>
              </li>
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
<<<<<<< HEAD
import desplegable from '/components/desplegable.vue';
import { useRouter } from 'view-router';
=======
import desplegable from './components/desplegable.vue';
import { ref } from 'vue';
>>>>>>> 87755cf (Andrea 18.49, cambios)

export default { 
  name: "App",
  components: { desplegable },

<<<<<<< HEAD
  data() {
    return {
      showButton: false,
      selectedAmount: null,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.checkScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.checkScroll);
  },
  methods: {
    checkScroll() {
      this.showButton = window.scrollY > 100;
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    selectAmount(amount) {
      this.selectedAmount = amount;
    }
  },
  setup() {
    const router = useRouter();
    const navigateTo = (route) => {
      router.push(route);
    };
    return { navigateTo };
  }
};
=======
export default {
  name:"App",
  components: { desplegable },
  setup() {
    const isMobileMenuOpen = ref(false);

    function toggleMobileMenu() {
      isMobileMenuOpen.value = !isMobileMenuOpen.value;
      // Emitir evento a desplegable.vue
      $emit('update:isMobileMenuOpen', isMobileMenuOpen.value);
    }

    return {
      isMobileMenuOpen,
      toggleMobileMenu
      }
    },
  }

  

>>>>>>> 87755cf (Andrea 18.49, cambios)
</script>



<style>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

<<<<<<< HEAD
.footer {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Crimson Text', serif;
  text-decoration: none;
  padding: 50px 30px 20px;
}
=======
  .navbar {
    position: relative;
    z-index: 50; /* Asegúrate de que sea mayor que el fondo */
}

  .footer {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Crimson Text', serif;
    text-decoration: none;
    padding:50px 30px 20px;
  }
>>>>>>> 87755cf (Andrea 18.49, cambios)

.footer_body {
  display: flex;
  justify-content: space-between;
  gap: 180px;
}

.footer_logo {
  padding-bottom: 10px;
}

.footer_subtitle {
  padding-bottom: 20px;
}

.footer_title {
  padding-bottom: 10px;
}

.footer_menu {
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








