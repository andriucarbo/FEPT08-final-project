<template>

    <!-- <div>
        <h2>{{counter.name}}</h2>
    </div> -->


        <!-- Main -->
<div class="main" >
    <!-- Apartado Home "Conócenos - Conoce nuestra historia" -->
    <div class="mainConocenos relative flex flex-col justify-center items-center w-full h-screen bg-cover bg-center" style="background-image: url('/ImagesHome/VacaPortada1.png')">
        <!-- Video de fondo -->
        <!-- <video 
            autoplay 
            loop 
            muted 
            playsinline 
            class="absolute inset-0 w-full h-full object-cover z-0 filter brightness-75">
            <source src="/VideoHistoria/.console.log('Home component loaded');video_historia.mp4" type="video/mp4" />
            Tu navegador no soporta videos HTML5.
        </video> -->

        <!-- Contenido sobre el video -->
        <div class="relative z-10 text-center text-white p-6 md:p-10">
            <h1 class="title1 text-5xl md:text-6xl lg:text-7xl text-[#47462d] my-10 mx-6 md:mx-10 bg-white bg-opacity-40 p-4 rounded leading-tight">
                Fundación <br> Santuario PATOdalavida
            </h1>
            <p class="text1 text-2xl md:text-3xl lg:text-4xl text-slate-50 my-4 leading-snug">
                Proporcionamos un espacio seguro para los animales considerados de granja.
            </p>
            <div class="buttonContainer flex justify-center mt-6 md:mt-10">
                <RouterLink to="/conocenos/historia" class="buttonnuestraHistoria text-xl p-4 text-[#857a5c] rounded bg-white bg-opacity-70 hover:bg-neutral-50 hover:text-[#857a5c] focus:outline-none">
                    Conoce nuestra historia
                </RouterLink>
            </div>
        </div>
    </div> 


</div>

  

    <!-- Apartado Conoce a nuestros habitantes -->
    <div class="mainHabitantes bg-[#e2d9c7] flex flex-col justify-center items-center border-b border-[#47462d]/50 ml-20 mr-20" >
        <h1 class="text1 text-5xl text-[#47462d] my-10 mx-20"> Nuestros habitantes</h1>
        <p class="text1 text-2xl px-14 mx-36 text-[#47462d]">En la Fundación Santuario PATOdalavida trabajamos día a día para disponer de las condiciones necesarias y ofrecer a los animales que forman parte de nuestra familia esa vida que se merecen.</p>

        <div class="CardH flex flex-wrap justify-center items-center w-full h-full mb-20">
            <CardHabitantes/>
            <div>
                <button class="buttonnuestroshabitantes text-xl p-4 bg-[#857a5c] text-slate-50 rounded hover:bg-[#6e654c] hover:text-[#e2d9c7] focus:outline-none  "  @click="navigateTo('/HabitantesGeneral/Habitantes')">Conoce a nuestros habitantes</button>
            </div>
        </div> 
    </div>

    <div class="">
        <h1 class="text1 text-5xl font-bold text-[#47462d] text-center mt-20">¿Cómo puedes ayudar?</h1>
        <p class=" text1 text-2xl text-[#47462d] mt-10 mb-10 text-center">Estas son algunas de las maneras con las que nos puedes ayudar a seguir salvando la vida de cientos de animales</p>
    </div>

<div class="border-b border-[#47462d]/50 mx-20">
<div class="grid grid-cols-2 gap-4">
    <div class="row-span-1  ml-60 mb-6">
        <img src="/public/ImagesHome/niñacolaborahome.png" alt="niña abrazando a conejo" class="w-50%">
    </div>
    
    <div class="flex justify-items-center ml-20">
        <Contador/>
    </div>

<div class="">
    <div class="flex flex-col justify-center ml-20">
        <button class=" p-4 rounded shadow text-center border-b-2 border-[#47462d] hover:bg-[#e6dfd1]" @click="navigateTo('/Colabora/HazteSocio')">
            <p class="text1 text-[#47462d] text-2xl ">Hazte socio/a</p>
            <p class="text1 text-[#47462d] text-l">Elige la cantidad mensual con la que quieres colaborar</p>
        </button>

        <button class=" p-4 rounded shadow text-center hover:bg-[#e6dfd1]" @click="navigateTo('/Colabora/Dona')">
            <p class="text1 text-[#47462d] text-2xl">Dona hoy</p>
            <p class="text1 text-[#47462d] text-l">Realiza tu donación para apoyar la misión de Santuario PATOdalavida</p>
        </button>

        
    </div>
</div>

    <div class=" mr-20 flex flex-col justify-center">
        <button class=" p-4 rounded shadow text-center border-b-2 border-[#47462d] hover:bg-[#e6dfd1]" @click="navigateTo('/Colabora/Amadrina')">
            <p class=" text1 text-[#47462d] text-2xl">Amadrina</p>
            <p class="text1 text-[#47462d] text-l">Los habitantes necesitan padrinos y madrinas que nos ayuden a cuidarles</p>
        </button>

        <button class=" p-4 rounded shadow text-center hover:bg-[#e6dfd1] mb-20"@click="navigateTo('/Colabora/Voluntariado')">
            <p class="text1 text-[#47462d] text-2xl">Voluntariado</p>
            <p class="text1 text-[#47462d] text-l">Ayuda en el trabajo del día a día</p>
        </button>
    </div>
    
    
</div>
</div>

<!-- APARTADO EDUCA -->
<div class="container mx-auto p-6 flex flex-col"> 
    <div class="textEduca mx-20 by-20">
        <h1 class="text1 text-5xl font-bold text-[#47462d] text-center my-20" >Educa</h1>
        <p class="text1 text-2xl text-[#47462d] mt-10 mb-10 text-center" >La Fundación Santuario PATOdalavida ofrece formaciones o talleres a escuelas, centros formativos y familias que quieran venir a pasar un día con nosotros. </p>
    </div>
    <div class=" text1 flex flex-wrap justify-center gap-8"> 
        <FlipCard 
        title="Visitas Escolares" 
        image="/public/ImagesHome/educa.escuela.png" 
        frontText=""    
        backText="La Fundación Santuario PATOdalavida ofrece visitar el centro a todas las escuelas y casales que tengan un interés pedagógico en los animales de granja, la conservación y la biodiversidad." />
        

        <FlipCard 
        title="Visitas técnicas" 
        image="/public/ImagesHome/educa.practicas.png" 
        frontText="" 
        backText="Formación enfocada a alumnos o trabajadores del ámbito veterinario" /> 
        
        <FlipCard 
        title="Visitas en familia" 
        image="/public/ImagesHome/educa.familia.png" 
        frontText="" 
        backText="Visítanos en familia y conoce de primera mano la labor de la fundación" /> 
        
        <FlipCard 
        title="Suscripción mensual aprende desde casa" 
        image="/public/ImagesHome/educa.material.png" 
        frontText="" 
        backText="Únete a la Suscripción 'Farm Scout' y aprende desde casa, con fichas didácticas imprimibles, propuestas de juego y muchas sorpresas más" /> 
        
    </div> 
</div>

    <div class="mainTienda bg-[url('/public/ImagesHome/imagentienda.png')] bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center w-full h-full">
        <div>
            <h1 class="title1 text-5xl text-[#47462d] my-20 mx-20 text-center">Tienda solidaria <br> Santuario PATOdalavida</h1>
            <p class="text1 text-3xl text-[#47462d] text-center">Ayúdanos a cambiar su mundo.</p> 
        </div> 

        <div class="buttonContainer flex justify-center w-full mt-8">
            <!-- Botón que lleva al mensaje -->
                <button class="buttontienda text-xl p-4 text-[#857a5c] rounded hover:bg-neutral-50 hover:text-[#857a5c] focus:outline-none ml-auto mr-36 mb-36"  @click="navigateTo('/PaginaEnConstruccion')">Accede a nuestra tienda</button>
            </div>
    </div>
</template>



<script>
import { RouterLink } from 'vue-router';
import CardHabitantes from '../components/CardHabitantes.vue';
import Contador from '../components/Contador.vue';
import FlipCard from '../components/FlipCard.vue';  

import { useRouter } from 'vue-router';





export default {
    name: "Home",
    components: {CardHabitantes, Contador, FlipCard, },
    setup() { 
        const router = useRouter(); 
        const navigateTo = (route) => { 
            router.push(route); 
        }; return { navigateTo 
        }; 
    },

    }
</script>


<style>

.title1, .text1, .buttonnuestraHistoria, .buttontienda {
    font-family: 'Crimson Text', serif;
}

.buttonnuestraHistoria, .buttontienda {
    background-color: #e2d9c7;
}





</style>


