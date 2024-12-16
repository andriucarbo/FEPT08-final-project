<template>
  <div>
    <div class="app flex flex-col min-h-screen">
      <!-- NAVBAR -->
      <!-- Iconos redes sociales -->
      <div class="SocialMedia flex flex-row justify-center gap-10 items-center py-2">
        <button class="Instagram">
          <img src="/instagram-brands-solid.svg" alt="icono instagram" class="w-8">
        </button>
        <button class="Facebook">
          <img src="/facebook-brands-solid.svg" alt="icono facebook" class="w-8">
        </button>
        <button class="Twitter">
          <img src="/twitter-brands-solid.svg" alt="icono twitter" class="w-8">
        </button>
      </div>
      <!-- LOGO FUNDACIÓN PATOdalavida -->
      <nav class="navbar flex flex-wrap justify-center items-center px-4 py-2">
        <router-link to="/" class="flex items-center">
          <img class="logotipo rounded-full w-24 h-24" src="/LogoProvisional.png" alt="logo provisional">
        </router-link>
        <button class="hamburger md:hidden px-4 py-2 text-lg focus:outline-none" @click="toggleMobileMenu">
          ☰
        </button>
        <desplegable />
        <div :class="['w-full md:flex md:w-auto', { 'hidden': !isMobileMenuOpen }]">
          <div class="relative" v-for="(item, index) in menuItems" :key="index">
            <button class="px-4 py-2 hover:underline transition duration-300 ease-in-out cursor-pointer"
              @click="toggleDropdown(item.name)">
              {{ item.label }}
            </button>
            <div v-if="activeDropdown === item.name" class="absolute left-0 mt-2 bg-white shadow-lg rounded w-48 z-10">
              <ul class="flex flex-col">
                <li v-for="(link, linkIndex) in item.links" :key="linkIndex" class="px-4 py-2 hover:bg-gray-100">
                  <router-link :to="link.to">{{ link.text }}</router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <!-- FIN NAVBAR -->
      <!-- BOTÓN FIJO PARA HACER SCROLL -->
      <div>
        <button @click="scrollToTop"
          :class="['text-4xl fixed bottom-24 right-12 bg-[#47462d]/50 text-white p-3 rounded-full shadow-md hover:bg-[#47462d] transition duration-300', showButton ? 'block' : 'hidden']">
          ↑
        </button>
      </div>
      <!-- BOTÓN FIJO LATERAL DERECHO SOCIAL MEDIA -->
      <div class="fixed right-4 bottom-4 flex space-x-4">
        <button type="submit" @click="navigateTo('/Colabora/Dona')"
          class="w-32 h-12 bg-[#857a5c] text-white rounded hover:bg-[#6e654c] transition duration-300 p-3 md:p-4">Dona</button>
        <button type="submit" @click="navigateTo('/Colabora/Amadrina')"
          class="w-32 h-12 bg-[#857a5c] text-white rounded hover:bg-[#6e654c] transition duration-300 p-3 md:p-4">Amadrina</button>
      </div>
      <!-- ROUTER VIEW -->
      <div>
        <router-view />
      </div>
    </div>
    <!-- FOOTER -->
<footer class="footer bg-[#47462d] mt-auto text-[#e2d9c7] text-xl">
  <div class="container mx-auto px-4 sm:px-6 py-8 sm:py-10">
    <div class="footer_body grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
      <!-- FOOTER ITEMS 1 -->
      <div class="footer_item flex flex-col items-start">
        <div class="footer_socialmedia">
          <h1 class="footer_logo text-2xl font-bold mb-4">LOGO</h1>
          <h3 class="footer_subtitle text-xl sm:text-2xl underline mb-3">Redes sociales:</h3>
          <div class="footer_social_link_body flex space-x-4 mb-6">
            <a href="" class="footer_social_link">
              <img src="/instagram_claro.svg" alt="logo instagram" class="social_media-link-img w-8 h-8">
            </a>
            <a href="" class="footer_social_link">
              <img src="/facebook-clarito.svg" alt="logo facebook" class="social_media-link-img w-8 h-8">
            </a>
            <a href="" class="footer_social_link">
              <img src="/twitter-clarito.svg" alt="logo twitter" class="social_media-link-img w-8 h-8">
            </a>
          </div>
          <div class="space-y-3 sm:space-y-0 sm:flex sm:space-x-3">
            <button class="w-full sm:w-32 h-12 bg-[#857a5c] text-white rounded hover:bg-[#6e654c]">Amadrina</button>
            <button class="w-full sm:w-32 h-12 bg-[#857a5c] text-white rounded hover:bg-[#6e654c]">Hazte Socio</button>
            <button class="w-full sm:w-32 h-12 bg-[#857a5c] text-white rounded hover:bg-[#6e654c]">Voluntariado</button>
          </div>
        </div>
      </div>
      <!-- END OF FOOTER ITEMS 1-->

      <!-- FOOTER ITEMS 2 -->
      <div class="footer_item mt-8 sm:mt-0">
        <h1 class="footer_title text-xl sm:text-2xl underline mb-4">Acceso rápido</h1>
        <ul class="footer_menu space-y-2">
          <li class="footer_menu-item"><a href="" class="footer_menu-link hover:underline">Conócenos</a></li>
          <li class="footer_menu-item"><a href="" class="footer_menu-link hover:underline">Habitantes</a></li>
          <li class="footer_menu-item"><a href="" class="footer_menu-link hover:underline">Colabora</a></li>
          <li class="footer_menu-item"><a href="" class="footer_menu-link hover:underline">Educa</a></li>
          <li class="footer_menu-item"><a href="" class="footer_menu-link hover:underline">Recetas</a></li>
          <li class="footer_menu-item"><a href="" class="footer_menu-link hover:underline">Tienda</a></li>
          <li class="footer_menu-item"><a href="" class="footer_menu-link hover:underline">Contacto</a></li>
        </ul>
      </div>
      <!-- END OF FOOTER ITEMS 2 -->

      <!-- FOOTER ITEMS 3 -->
      <div class="footer_item mt-8 lg:mt-0">
        <h1 class="footer_title text-xl sm:text-2xl underline mb-4">Información de contacto</h1>
        <ul class="footer_contact space-y-3">
          <li class="footer_contact-item"><a href="" class="footer_contact-link hover:underline">Fundación PATOdalavida</a></li>
          <li class="footer_contact-item">
            <a href="tel:000999888765" class="footer_phone-link flex items-center">
              <img src="/phone-solid.svg" alt="icono teléfono" class="w-6 mr-2">
              <p class="footer_contact_subtitle">Rescates: 000 999 888 765</p>
            </a>
          </li>
          <li class="footer_contact-item">
            <a href="tel:000999888756" class="footer_phone_link flex items-center">
              <img src="/phone-solid.svg" alt="icono teléfono" class="w-6 mr-2">
              <p class="footer_contact_subtitle">Información: 000 999 888 756</p>
            </a>
          </li>
          <li class="footer_contact-item">
            <a href="mailto:info@pato.com" class="footer_mail_link flex items-center">
              <img src="/envelope-solid.svg" alt="icono correo electrónico" class="w-6 mr-2">
              <p class="footer_mail_subtitle">info@pato.com</p>
            </a>
          </li>
          <li class="footer_contact-item">
            <a href="" class="footer_contact_link flex items-center">
              <img src="/location-dot-solid.svg" alt="icono ubicación" class="w-6 mr-2">
              <p class="footer_location_subtitle">Dónde nos encontramos:</p>
            </a>
          </li>
        </ul>
      </div>
      <!-- END OF FOOTER ITEMS 3 -->
    </div>
  </div>
  <!-- FOOTER COPYRIGHT -->
  <div class="footer_copy_r text-center py-4 border-t border-[#e2d9c7] mt-8">
    Copyright © 2024 Andrea&Vanessa Web Design. All rights reserved.
  </div>
</footer>

  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import desplegable from './components/desplegable.vue';
import { ref } from 'vue';

export default {
  name: "App",
  components: { desplegable },

  data() { return { showButton: false, selectedAmount: null }; },

  mounted() { window.addEventListener('scroll', this.checkScroll); },

  beforeDestroy() { window.removeEventListener('scroll', this.checkScroll); },

  methods: {
    checkScroll() { this.showButton = window.scrollY > 100; },

    scrollToTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); },

    selectAmount(amount) { this.selectedAmount = amount; }
  },

  setup() {
    const isMobileMenuOpen = ref(false);

    function toggleMobileMenu() {
      isMobileMenuOpen.value = !isMobileMenuOpen.value; // Emitir evento a desplegable.vue $emit('update:isMobileMenuOpen', isMobileMenuOpen.value); } 

      const router = useRouter();

      const navigateTo = (route) => { router.push(route); };

      return { navigateTo, isMobileMenuOpen, toggleMobileMenu };
    }
  },
} ;
</script>

<style>
.app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

.navbar {
  position: relative;
  z-index: 50;
   /* Asegúrate de que sea mayor que el fondo */
}

.footer {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Crimson Text', serif;
  text-decoration: none;
  padding: 50px 30px 20px;
}

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

.footer_copy-r {
  padding-top: 10px;
  font-size: 12px;
  text-align: center;
}

.app {
  /*color fondo de toda la página*/
  background-color: #e2d9c7;
}
</style>
