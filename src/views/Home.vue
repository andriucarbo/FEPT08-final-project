<template>
        <!-- Main -->
<div class="main" >

    <!-- Apartado home "conócenos - conoce nuestra historia" -->
    <div class="mainConocenos bg-[url('/ImagesHome/VacaPortada1.png')] bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center w-full h-full">
        <div>
            <h1 class="title1 text-5xl text-[#47462d] my-10 mx-20">Fundación <br> Santuario PATOdalavida</h1>
            <p class="text1 text-3xl text-slate-50 text-center">Proporcionamos un espacio seguro para los animales considerados de granja.</p>
            <p class="text1 text-2xl text-slate-50 mx-10 my-10 text-center">En 2024, Andrea y Vanessa dieron vida a PATOdalavida, un santuario pensado para ofrecer un entorno seguro y cálido a animales de granja. En este refugio, cada habitante encuentra un hogar lleno de amor y cuidado, donde pueden vivir tranquilos y felices. Andrea y Vanessa, con su dedicación y cariño, se aseguran de que todos los animales sean tratados con respeto.<br> PATOdalavida no solo es un refugio, sino también un lugar de descanso, donde la vida digna de cada animal es lo más importante. <br> Este santuario es un hermoso ejemplo de lo que se puede lograr con un corazón lleno de amor por los animales.</p>
            <div class="buttonContainer flex justify-end pr-20 pt-96 mb-20 mr-10">
                <button class="buttonnuestraHistoria text-xl p-4 text-[#857a5c] rounded hover:bg-neutral-50 hover:text-[#857a5c] focus:outline-none">Conoce nuestra historia</button>
            </div> 
        </div> 
    </div>

    <!-- Apartado carrusel Nuestros valores -->
    <div class="mainValores bg-cyan-400 flex flex-col justify-center items-center" >
        <p> Nuestros valores</p>
        <div>
        
        
</div>
    </div>

    <!-- Apartado Conoce a nuestros habitantes -->
    <div class="mainHabitantes bg-[#e2d9c7] flex flex-col justify-center items-center border-b border-[#47462d]/50 ml-20 mr-20" >
        <h1 class="text1 text-5xl text-[#47462d] my-10 mx-20"> Nuestros habitantes</h1>
        <p class="text1 text-2xl px-14 mx-36 text-[#47462d]">En la Fundación Santuario PATOdalavida trabajamos día a día para disponer de las condiciones necesarias y ofrecer a los animales que forman parte de nuestra familia esa vida que se merecen.</p>

        <div class="CardH flex flex-wrap justify-center items-center w-full h-full mb-20">
            <CardHabitantes/>
            <div>
                <button class="buttonnuestroshabitantes text-xl p-4 bg-[#857a5c] text-slate-50 rounded hover:bg-[#6e654c] hover:text-[#e2d9c7] focus:outline-none  ">Conoce a nuestros habitantes</button>
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
        <button class=" p-4 rounded shadow text-center border-b-2 border-[#47462d] hover:bg-[#e6dfd1]">
            <p class="text1 text-[#47462d] text-2xl ">Hazte socio/a</p>
            <p class="text1 text-[#47462d] text-l">Elige la cantidad mensual con la que quieres colaborar</p>
        </button>

        <button class=" p-4 rounded shadow text-center hover:bg-[#e6dfd1]">
            <p class="text1 text-[#47462d] text-2xl">Dona hoy</p>
            <p class="text1 text-[#47462d] text-l">Realiza tu donación para apoyar la misión de Santuario PATOdalavida</p>
        </button>

        
    </div>
</div>

    <div class=" mr-20 flex flex-col justify-center">
        <button class=" p-4 rounded shadow text-center border-b-2 border-[#47462d] hover:bg-[#e6dfd1]">
            <p class=" text1 text-[#47462d] text-2xl">Amadrina</p>
            <p class="text1 text-[#47462d] text-l">Los habitantes necesitan padrinos y madrinas que nos ayuden a cuidarles</p>
        </button>

        <button class=" p-4 rounded shadow text-center hover:bg-[#e6dfd1] mb-20">
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


    <!-- <div class="mainReceta bg-green-400 flex flex-col justify-center items-center"  >
        <p>Recetas</p>
    </div> -->

    <!-- <div class="mainNoticias bg-violet-300 flex flex-col justify-center items-center" >
        <p>Noticias</p>
    </div> -->

    <div class="mainTienda bg-[url('/public/ImagesHome/imagentienda.png')] bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center w-full h-full">
        <div>
            <h1 class="title1 text-5xl text-[#47462d] my-20 mx-20 text-center">Tienda solidaria <br> Santuario PATOdalavida</h1>
            <p class="text1 text-3xl text-[#47462d] text-center">Ayúdanos a cambiar su mundo.</p> 
        </div> 
        <div class="buttonContainer flex justify-center w-full mt-8">
                <button class="buttontienda text-xl p-4 text-[#857a5c] rounded hover:bg-neutral-50 hover:text-[#857a5c] focus:outline-none ml-auto mr-36 mb-36">Accede a nuestra tienda</button>
            </div>
    </div>

    <!-- <div class="mainContacto bg-teal-300 flex flex-col justify-center items-center" >
        <p>Contacto</p>
    </div> -->


</div>

</template>


<script>

import CardHabitantes from '../components/CardHabitantes.vue';
import Contador from '../components/Contador.vue';
import FlipCard from '../components/FlipCard.vue';

export default {
    name: "Home",
    components: {
        CardHabitantes, 
        Contador,
        FlipCard
    },
}

</script>


<style>

.title1, .text1, .buttonnuestraHistoria, .buttontienda  {
    font-family: 'Crimson Text', serif;
}

.buttonnuestraHistoria, .buttontienda {
    background-color: #e2d9c7;
}





</style>