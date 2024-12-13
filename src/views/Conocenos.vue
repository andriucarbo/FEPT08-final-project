<template>
    <!-- <div>
        <h1 class="contenedor_conocenos text-4xl ">Conocenos viewwwwww</h1>
        <RouterView/>
    </div> -->
    <div class="p-6">
    <h1 class=" font-bold text-center mb-6">Conócenos view</h1>

    <!-- Contenido dinámico -->
    <router-view />
    </div>
    
    


</template>
<script>
import Equipo from '../components/Equipo.vue';
import Historia from '../components/Historia.vue'
import Mision from '../components/Mision.vue';


export default {
    name: 'Conocenos',
    components: { Historia, Mision, Equipo }

    
}
</script>



<style>
    
</style>


/*

