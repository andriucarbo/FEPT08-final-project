<template>
  <div class="main">
    <!-- Apartado Home "Conócenos - Conoce nuestra historia" -->
    <div class="mainConocenos relative flex flex-col justify-center items-center w-full h-[600px] bg-cover bg-center bg-no-repeat" style="background-image: url('/ImagesHome/VacaPortada1.png');">
        <!-- Contenido sobre la imagen -->
        <div class="relative z-10 text-center text-white p-6 md:p-10">
            <h1 class="title1 text-5xl md:text-6xl lg:text-7xl text-[#47462d] my-10 mx-6 md:mx-10 bg-white bg-opacity-40 p-4 rounded leading-tight">
                Fundación <br> Santuario PATOdalavida
            </h1>
            <p class="text1 text-2xl md:text-3xl lg:text-4xl text-slate-50 my-4 leading-snug">
                Proporcionamos un espacio seguro para los animales considerados de granja.
            </p>
            <p class="text1 text-base md:text-lg lg:text-xl text-slate-50 mx-6 md:mx-10 my-10 leading-relaxed">
                En 2024, Andrea y Vanessa dieron vida a PATOdalavida, un santuario pensado para ofrecer un entorno seguro y cálido a animales de granja. 
                En este refugio, cada habitante encuentra un hogar lleno de amor y cuidado, donde pueden vivir tranquilos y felices. 
                Andrea y Vanessa, con su dedicación y cariño, se aseguran de que todos los animales sean tratados con respeto. 
                PATOdalavida no solo es un refugio, sino también un lugar de descanso, donde la vida digna de cada animal es lo más importante. 
                Este santuario es un hermoso ejemplo de lo que se puede lograr con un corazón lleno de amor por los animales.
            </p>
            <!-- <div class="buttonContainer flex justify-center mt-6 md:mt-10">
                <button class="buttonnuestraHistoria text-xl p-4 text-[#857a5c] rounded bg-white bg-opacity-70 hover:bg-neutral-50 hover:text-[#857a5c] focus:outline-none">
                    Conoce nuestra historia
                </button>
            </div> -->
        </div>
    </div> 
</div>



  
    <div class="main">
    <!-- Apartado Home "Conócenos - Conoce nuestra historia" -->
    <div class="mainConocenos relative flex flex-col justify-center items-center w-full h-screen bg-cover bg-center" style="background-image: url('/ImagesHome/VacaPortada1.png')">
        <!-- Imagen de fondo (vaca) -->
        <div class="absolute inset-0 w-full h-full bg-cover bg-center"></div>

        <!-- Contenido sobre la imagen -->
        <div class="relative z-10 text-center text-white p-6 md:p-10">
            <h1 class="title1 text-5xl md:text-6xl lg:text-5xl text-[#47462d] my-10 mx-6 md:mx-10 bg-white bg-opacity-20 p-4 rounded leading-tight">
                Nuestra historia
            </h1>
            <p class="text1 text-2xl md:text-3xl lg:text-4xl text-slate-50 my-4 leading-snug">
                Proporcionamos un espacio seguro para los animales considerados de granja.
            </p>
            <p class="text1 text-base md:text-lg lg:text-xl text-slate-50 mx-6 md:mx-10 my-10 leading-relaxed">
                En 2024, Andrea y Vanessa dieron vida a PATOdalavida, un santuario pensado para ofrecer un entorno seguro y cálido a animales de granja. 
                En este refugio, cada habitante encuentra un hogar lleno de amor y cuidado, donde pueden vivir tranquilos y felices. 
                Andrea y Vanessa, con su dedicación y cariño, se aseguran de que todos los animales sean tratados con respeto. 
                PATOdalavida no solo es un refugio, sino también un lugar de descanso, donde la vida digna de cada animal es lo más importante. 
                Este santuario es un hermoso ejemplo de lo que se puede lograr con un corazón lleno de amor por los animales.
            </p>
            <!-- <div class="buttonContainer flex justify-center mt-6 md:mt-10">
                <button class="buttonnuestraHistoria text-xl p-4 text-[#857a5c] rounded bg-white bg-opacity-70 hover:bg-neutral-50 hover:text-[#857a5c] focus:outline-none">
                    Conoce nuestra historia
                </button>
            </div> -->
        </div>
        </div> 
    </div>












   
    <div class="contenedor-historia border-amber-900 border-2  flex justify-center items-center py-10">
        <div class="historia text-center max-w-2xl">
            <!-- Imagen comentada, descoméntala si la necesitas -->
            <!-- <div class="historia_imagen mb-4">
                <img :src="'/public/ColaboraImages/colabora_socio.png'" alt="imagen lechón" class="bg-cover bg-no-repeat bg-center w-full">
            </div> -->
            <h1 class="title1 text-2xl font-bold mb-4 text-[#47462d]">LA FUNDACIÓN</h1>
            <h2 class="text-lg font-semibold mb-4 text-[#47462d]">Fundación PATOdalavida</h2>
            <p class="text-base text-[#47462d] leading-7">
                Somos una organización sin ánimo de lucro fundada en el año 2016 que desde entonces ha desplegado una incesante actividad en favor de la fauna salvaje.  
                Rehabilitamos y recuperamos animales heridos, huérfanos o capturados de forma ilegal o que han sido afectados por el impacto humano. En caso de poder son devueltos al medio silvestre y si no por razones físicas, conductuales o legales es imposible, permanece en la Reserva ofreciéndoles una segunda oportunidad. 
                Hoy la Fundación PATOdalavida es un espacio orientado a servir de referente a personas interesadas en profundizar en la educación medioambiental y la investigación de especies autóctonas de la zona y cómo cubrir su bienestar así como trabajar para su recuperación y reintroducción colaborando junto con entidades públicas.
                Estamos ubicados en Aguilar de Segarra, cercanos a Manresa (Cataluña, España).
            </p>
        </div>
    </div>
</template>



<script>
export default {
    name: 'Historia',
}
</script>



<style>
    .text2 {
    font-family: 'Crimson Text', serif;
}

.tituloHistoria {
    font-family:Verdana, Geneva, Tahoma, sans-serif;
}

</style>