<template>
        <!-- Main -->
<div class="main" >

    <!-- Apartado home "conócenos - conoce nuestra historia" -->
    <div class="mainConocenos bg-[url('/HomePics/VacaPortada1.png')] bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center w-full h-full">
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
    <div class="mainHabitantes bg-[#e2d9c7] flex flex-col justify-center items-center " >
        <h1 class="text1 text-5xl text-[#47462d] my-10 mx-20"> Nuestros habitantes</h1>
        <p class="text1 text-2xl px-14 mx-36 text-[#47462d]">En la Fundación Santuario PATOdalavida trabajamos día a día para disponer de las condiciones necesarias y ofrecer a los animales que forman parte de nuestra familia esa vida que se merecen.</p>

        <div class="CardHabitantes flex flex-wrap justify-center items-center w-full h-full mb-64">
            <CardHabitantes/>
            <div>
                <button class="buttonnuestroshabitantes text-xl p-4 bg-[#857a5c] text-slate-50 rounded hover:bg-[#6e654c] hover:text-[#e2d9c7] focus:outline-none  ">Conoce a nuestros habitantes</button>
            </div>
        </div>

        <div class="grid grid-cols-4 bg-pink-500 gap-4 ml-4 mr-4 " >
            

                <!-- <img src="/AnimalesGridHomeView/burros1.png" alt="Imagen burros"/>
                <p>Nombre</p>
                <p>Historia</p>
                <button>Apadríname</button>
            </div>
            <div class="dos bg-slate-200" >
                <img src="/AnimalesGridHomeView/gallinas1.png" alt="imagen gallinas sobre silla">
                <p>Nombre</p>
                <p>Historia</p>
                <button>Apadríname</button>
            </div>
            <div class="tres bg-slate-200" >
                <img src="/AnimalesGridHomeView/pato1.png" alt="imagen pato blanco">
                <p>Nombre</p>
                <p>Historia</p>
                <button>Apadríname</button>
            </div>
            <div class="cuatro bg-slate-200" >
                <img src="/AnimalesGridHomeView/lechones1.png" alt="imagen 3 lechones">
                <p>Nombre</p>
                <p>Historia</p>
                <button>Apadríname</button>
            </div>
            <div class="cinco bg-slate-200" >
                <img src="/AnimalesGridHomeView/ternera1.png" alt="imagen ternera marrón">
                <p>Nombre</p>
                <p>Historia</p>
                <button>Apadríname</button>
            </div>
            <div class="seis bg-slate-200" >
                <img src="/AnimalesGridHomeView/oveja3.png" alt="oveja lana rizada">
                <p>Nombre</p>
                <p>Historia</p>
                <button>Apadríname</button>
            </div>
            <div class="seis bg-slate-200" >
                <img src="/AnimalesGridHomeView/conejo1.png" alt="imagen conejo marrón">
                <p>Nombre</p>
                <p>Historia</p>
                <button>Apadríname</button>
            </div>
            <div class="seis bg-slate-200" >
                <img src="/AnimalesGridHomeView/lechon2.png" alt="lechón con manchitas">
                <p>Nombre</p>
                <p>Historia</p>
                <button>Apadríname</button>
            </div> -->
        
        </div>
    </div>

<!-- APARTADO COLABORA :CÓDIGO PROVISIONAL EN COMPONENTE ColaboraHome.vue -->

<div class="">

<div class="grid grid-cols-3 gap-4">
    <div class="row-span-2  ml-20">
        <img src="/public/HomePics/niñacolaborahome.png" alt="niña abrazando a conejo" class="w-full h-full">
    </div>
    <div class="">
        <h1 class="text1 text-5xl font-bold text-[#47462d] text-center mt-20 justify-items-center">¿Cómo puedes ayudar?</h1>
        <p class=" text1 text-2xl text-[#47462d] justify-items-center mt-20 text-center">Estas son algunas de las maneras con las que nos puedes ayudar a seguir salvando la vida de cientos de animales</p>
    </div>
    <div class=" mr-20">
        <Contador/>
    </div>

<div class="grid grid-col-4">
    <div class=" col-span-2 flex flex-col justify-center">
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

        <button class=" p-4 rounded shadow text-center hover:bg-[#e6dfd1]">
            <p class="text1 text-[#47462d] text-2xl">Voluntariado</p>
            <p class="text1 text-[#47462d] text-l">Ayuda en el trabajo del día a día</p>
        </button>
    </div>
    
    
</div>
</div>

<!-- APARTADO EDUCA -->

    <div class="mainEduca bg-green-200 flex flex-col justify-center items-center" >
        <p>Educa</p>
    </div>

    <!-- <div class="mainReceta bg-green-400 flex flex-col justify-center items-center"  >
        <p>Recetas</p>
    </div> -->

    <!-- <div class="mainNoticias bg-violet-300 flex flex-col justify-center items-center" >
        <p>Noticias</p>
    </div> -->

    <div class="mainTienda bg-violet-500 flex flex-col justify-center items-center">
        <p>Tienda</p>
    </div>

    <!-- <div class="mainContacto bg-teal-300 flex flex-col justify-center items-center" >
        <p>Contacto</p>
    </div> -->


</div>

</template>


<script>

import CardHabitantes from '../components/CardHabitantes.vue';
import Contador from '../components/Contador.vue';




    
import CardHabitantes from './CardHabitantes.vue';

export default {
    name: "Home",
    components: {
        CardHabitantes, 
        Contador
    },
}
</script>


<style>

.title1, .text1, .buttonnuestraHistoria  {
    font-family: 'Crimson Text', serif;
}

.buttonnuestraHistoria {
    background-color: #e2d9c7;
}

    
</style>