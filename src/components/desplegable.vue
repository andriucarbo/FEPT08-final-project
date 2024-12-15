<template>
<div>

<!-- <nav class="navbar flex flex-wrap justify-between items-center px-4 py-2 gap-10"> -->
    <nav class="navbar flex flex-wrap justify-between items-center px-4 py-2 gap-10">
      <!-- Botón con menú desplegable -->
      <button 
        class="hamburger md:hidden px-4 py-2 text-lg focus:outline-none"  
        @click="toggleMobileMenu">
        ☰
      </button>
    
<!-- Botón con menú desplegable -->
<div class="relative">
    <button class="conocenos px-4 py-2 hover:underline transition duration-600 ease-in-out cursor-pointer" 
    @click="toggleDropdown('conocenos')">Conócenos</button>

    
    <div v-if="activeDropdown === 'conocenos'" 
    class="absolute left-0 mt-2 bg-white shadow-lg rounded w-48">
    <ul class="flex flex-col">
        <router-link to="/conocenos/historia" class="px-4 py-2 hover:bg-gray-100">Historia</router-link>
        <!-- <li class="px-4 py-2 hover:bg-gray-100">Historia</li> -->
        <router-link to="/conocenos/Mision" class="px-4 py-2 hover:bg-gray-100">Misión</router-link>
        <!-- <li class="px-4 py-2 hover:bg-gray-100">Equipo</li> -->
        <router-link to="/conocenos/equipo" class="px-4 py-2 hover:bg-gray-100">Equipo</router-link>
        <!-- <li class="px-4 py-2 hover:bg-gray-100">Misión</li> -->
    </ul>
    </div>
</div>



<div class="relative">
    <button class="habitantes px-4 py-2 hover:underline transition duration-600 ease-in-out cursor-pointer" 
    @click="toggleDropdown('habitantes')">Habitantes</button>

    <div v-if="activeDropdown === 'habitantes'" 
    class="absolute left-0 mt-2 bg-white shadow-lg rounded w-48">
    <ul class="flex flex-col">
        <router-link to="/HabitantesGeneral/Habitantes" class="px-4 py-2 hover:bg-gray-100">Habitantes</router-link>
        <li class="px-4 py-2 hover:bg-gray-100">En memoria</li>
    </ul>
    </div>
</div>

<div class="relative">
    <button class="colabora px-4 py-2 hover:underline transition duration-600 ease-in-out cursor-pointer" 
    @click="toggleDropdown('colabora')">Colabora</button>

    <div v-if="activeDropdown === 'colabora'" 
    class="absolute left-0 mt-2 bg-white shadow-lg rounded w-48">

    <ul class="flex flex-col">
        <!-- <li class="px-4 py-2 hover:bg-gray-100">Hazte socio</li> -->
        <router-link to="/Colabora/HazteSocio" class="px-4 py-2 hover:bg-gray-100">Hazte socio</router-link>
        <router-link to="/Colabora/Amadrina" class="px-4 py-2 hover:bg-gray-100">Amadrina</router-link>
        <router-link to="/Colabora/Dona" class="px-4 py-2 hover:bg-gray-100">Dona</router-link>
        <router-link to="/Colabora/Voluntariado" class="px-4 py-2 hover:bg-gray-100">Voluntariado</router-link>
        <router-link to="/Colabora/BeneficiosFiscales" class="px-4 py-2 hover:bg-gray-100">Beneficios Fiscales</router-link>
        <router-link to="/Colabora/OtrasDonaciones" class="px-4 py-2 hover:bg-gray-100">Otras formas de colaborar</router-link>
    </ul>
    </div>
</div>

<div class="relative">
    <button class="educa px-4 py-2 hover:underline transition duration-600 ease-in-out cursor-pointer" 
    @click="toggleDropdown('educa')">Educa</button>

    <div v-if="activeDropdown === 'educa'" 
    class="absolute left-0 mt-2 bg-white shadow-lg rounded w-48">
    <ul class="flex flex-col">
        <li class="px-4 py-2 hover:bg-gray-100">Visitas escolares</li>
        <li class="px-4 py-2 hover:bg-gray-100">Suscripción mensual - Aprende desde casa</li>
        <li class="px-4 py-2 hover:bg-gray-100">Visitas técnicas</li>
        <li class="px-4 py-2 hover:bg-gray-100">Prácticas formativas</li>
        <li class="px-4 py-2 hover:bg-gray-100">Visitas en familia</li>
    </ul>
    </div>
</div>

<div class="relative">
    <button class="recetas px-4 py-2 hover:underline transition duration-600 ease-in-out cursor-pointer" 
    @click="toggleDropdown('recetas')">Recetas</button>

    <div v-if="activeDropdown === 'recetas'" 
    class="absolute left-0 mt-2 bg-white shadow-lg rounded w-48">
    <ul class="flex flex-col">
        <li class="px-4 py-2 hover:bg-gray-100">Platos principales</li>
        <li class="px-4 py-2 hover:bg-gray-100">Postres</li>
    </ul>
    </div>
</div>

<div class="relative">
    <button class="noticias px-4 py-2 hover:underline transition duration-600 ease-in-out cursor-pointer" 
    @click="toggleDropdown('noticias')">Noticias</button>
    

    <div v-if="activeDropdown === 'noticias'" 
    class="absolute left-0 mt-2 bg-white shadow-lg rounded w-48">
    <ul class="flex flex-col">
        <li class="px-4 py-2 hover:bg-gray-100">Actualidad rescates</li>
        <li class="px-4 py-2 hover:bg-gray-100">Noticias del mundo</li>
        <li class="px-4 py-2 hover:bg-gray-100">Eventos</li>
    </ul>
    </div>
</div>

<div class="relative">
    <button  class="tienda px-4 py-2 hover:underline transition duration-600 ease-in-out cursor-pointer" 
    @click="toggleDropdown('tienda')">Tienda</button>

    <div v-if="activeDropdown === 'tienda'" 
    class="absolute left-0 mt-2 bg-white shadow-lg rounded w-48">
    <ul class="flex flex-col">
        <li class="px-4 py-2 hover:bg-gray-100">Amadrinamiento</li>
        <li class="px-4 py-2 hover:bg-gray-100">Librería solidaria</li>
        <li class="px-4 py-2 hover:bg-gray-100">Ropa</li>
        <li class="px-4 py-2 hover:bg-gray-100">Niños</li>
        <li class="px-4 py-2 hover:bg-gray-100">Especial Navidad</li>
    </ul>
    </div>
</div>

<div class="relative">
    <button class="contacto px-4 py-2 hover:underline transition duration-600 ease-in-out cursor-pointer" 
    @click="contacto">Contacto</button>

    <!-- <div v-if="activeDropdown === 'contacto'" 
    class="absolute left-0 mt-2 bg-white shadow-lg rounded w-48">
    <ul class="flex flex-col">
        <li class="px-4 py-2 hover:bg-gray-100">Información amadrinamientos, donativos, colaboraciones, etc.</li>
        <li class="px-4 py-2 hover:bg-gray-100">Contacto rescates</li>
        <li class="px-4 py-2 hover:bg-gray-100">Contacto con nuestra tienda benéfica</li>
        <li class="px-4 py-2 hover:bg-gray-100">Contacto voluntariado y visitas</li>
    </ul> 
    </div> -->

</div>
</nav>

        
</div>
</template>


<script>
export default {
    props: ['title', 'options'], //en chatgpt no aparece props
    data(){
        return{
            activeDropdown: null, // controla qué menú está abierto
        }
    },
    mounted(){
        document.addEventListener('click',this.closeDropdown);
    },
    beforeDestroy(){
        document.removeEventListener('click',this.closeDropdown);
    },

    methods: {
        toggleDropdown(buttonName){
            this.activeDropdown = this.activeDropdown === buttonName ? null : buttonName;
    },
    closeDropdown(event){
        //comprueba si el clic no ocurrió en un dropdown
        if (!this.$el.contains(event.target)) {
            this.activeDropdown = null;
        }
    },
    },
};

</script>


<style>
    .navbar {
        background-color: #e2d9c7;
        font-family: 'Crimson Text', serif;
    }

    .relative{
        font-size:large
    }
</style>





