<template>
<div>
        <nav class="navbar flex flex-wrap justify-between items-center px-4 py-2 gap-10">
<!-- Botón con menú desplegable -->
<div class="relative">
    <button class="conocenos px-4 py-2 hover: border-4 border-transparent border-b-orange-700 rounded" 
    @click="toggleDropdown('conocenos')">Conócenos</button>

    <!-- Menú desplegable -->
    <div v-if="activeDropdown === 'conocenos'" 
    class="absolute left-0 mt-2 bg-white shadow-lg rounded w-48">
    <ul class="flex flex-col">
        <li class="px-4 py-2 hover:bg-gray-100">Historia</li>
        <li class="px-4 py-2 hover:bg-gray-100">Equipo</li>
        <li class="px-4 py-2 hover:bg-gray-100">Misión</li>
    </ul>
    </div>
</div>

<!-- Repite el mismo patrón para otros botones --> 
<div class="relative">
    <button class="habitantes px-4 py-2  hover:bg-amber-300 rounded" 
    @click="toggleDropdown('habitantes')">Habitantes</button>

    <div v-if="activeDropdown === 'habitantes'" 
    class="absolute left-0 mt-2 bg-white shadow-lg rounded w-48">
    <ul class="flex flex-col">
        <li class="px-4 py-2 hover:bg-gray-100">Habitantes</li>
        <li class="px-4 py-2 hover:bg-gray-100">En memoria</li>
    </ul>
    </div>
</div>

<div class="relative">
    <button class="colabora px-4 py-2 hover:bg-amber-300 rounded" 
    @click="toggleDropdown('colabora')">Colabora</button>

    <div v-if="activeDropdown === 'colabora'" 
    class="absolute left-0 mt-2 bg-white shadow-lg rounded w-48">
    <ul class="flex flex-col">
        <li class="px-4 py-2 hover:bg-gray-100">Hazte socio</li>
        <li class="px-4 py-2 hover:bg-gray-100">Amadrina</li>
        <li class="px-4 py-2 hover:bg-gray-100">Donativos</li>
        <li class="px-4 py-2 hover:bg-gray-100">Voluntariado</li>
        <li class="px-4 py-2 hover:bg-gray-100">Trabaja con nosotros</li>
    </ul>
    </div>
</div>

<div class="relative">
    <button class="educa px-4 py-2 hover:bg-amber-300 rounded" 
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
    <button class="recetas px-4 py-2 hover:bg-amber-300 rounded" 
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
    <button class="noticias px-4 py-2 hover:bg-amber-300 rounded" 
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
    <button class="tienda px-4 py-2 hover:bg-amber-300 rounded" 
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
    <button class="contacto px-4 py-2 hover:bg-amber-300 rounded" 
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

<!-- Agrega más botones según sea necesario -->
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
        background-color: #C7963e;
    }

    
</style>




<!-- Paso 1) Creación de botones y lista de opciones desplegable dentro de src>components>desplegable>template
 Paso 2) Creación de la función toggleDropdown en src>components>desplegable>script
 Para crear el menú desplegable, se utiliza el atributo v-if para mostrar o ocultar menú
 Paso 3) Creación de la función closeDropdown en src>components>desplegable>
 Paso 4) Creación de la función mounted en src>components>desplegable>script
 Paso 5) Creación de la función beforeDestroy en src>components>desplegable>script
 Paso 6) Creación de la función closeDropdown en src>components>desplegable>

  **en todo el espacio(<div></div>) de la NavBar no se aplica el closeDropdown**
 
 Paso 7) Ir a App.vue
 


-->
