<template>
    <div>
        <div class="burro_imagen">
                <img :src="'/public/HabitantesCabrasImages/CabraPortada.png'" alt="imagen burro comiendo"
                    class=" bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center w-full">
            </div>
            <div>
                <h1 class="text-[#47462d] text-9xl text-center mt-20 mx-20">
                    Conoce a nuestras cabras
                </h1>
                <p class="dona text-[#47462d] text-2xl text-center mx-36 my-16">
                    Las cabritas son animales curiosos, juguetones y llenos de energía, pero a menudo enfrentan vidas de sufrimiento en condiciones de explotación. En nuestro santuario, estas pequeñas exploradoras han encontrado un refugio donde pueden vivir en paz y con dignidad.
                </p>
                <p class="socio text-[#47462d] text-2xl text-center mx-36 my-16">
                    Sabías que las cabras son increíblemente inteligentes y pueden reconocer rostros humanos, recordar rutas complejas e incluso formar vínculos muy profundos con quienes las cuidan? Además, son expertas trepadoras, capaces de escalar terrenos empinados con facilidad gracias a sus patas ágiles y pezuñas especializadas.
                </p>
                <p class="socio text-[#47462d] text-2xl text-center mx-36 my-16 ">
                    Cada cabrita que llega a nosotros trae una historia única de lucha y superación, y aquí, les devolvemos lo que siempre debió ser suyo: la libertad y el amor <strong>la libertad y el amor PATOdalavida</strong>
                </p>
                
            </div>

    </div>

    <!-- GRID ANIMALES + HISTORIA -->

    <div class="grid_habitantes grid grid-cols-2 gap-12">
        
            <div class="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between ml-20 hover:scale-105 transition-transform duration-300">
                <img src="/public/HabitantesCabrasImages/1.png" alt="cabeza de un burrito" class="object-cover mb-4">
                <h3 class="text-bold text-2xl text-center mx-12 my-6 text-[#47462d]">Alma</h3>
                <h4 class="text-justify text-[#47462d] mx-12 my-6">Alma fue encontrada en un pequeño corral, desnutrida y débil. Su vida anterior estaba marcada por el abandono, pero su espíritu nunca se quebró. Hoy corre feliz por el santuario, mostrando su fortaleza y su alegría contagiosa.</h4>
                <button type="submit" class="w-full bg-[#47462d]/50 text-white p-2 rounded-md hover:bg-[#47462d] transition duration-300 mt-12">Amadríname</button>
            </div>
        
        
            <div class="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between hover:scale-105 transition-transform duration-300 mr-20">
                <img src="/public/HabitantesCabrasImages/2.png" alt="dos vacas en la montaña" class="object-cover mb-4">
                <h3 class="text-bold text-2xl text-center mx-12 my-6 text-[#47462d]">Estrella</h3>
                <h4 class="text-justify text-[#47462d] mx-12 my-6">Estrella nació en una granja donde la crianza intensiva era la norma. Apenas tuvo espacio para moverse, pero su historia cambió cuando llegó al santuario. Ahora disfruta de días soleados y noches tranquilas, explorando con curiosidad cada rincón de su nuevo hogar.</h4>
                <button type="submit" class="w-full bg-[#47462d]/50 text-white p-2 rounded-md hover:bg-[#47462d] transition duration-300 mt-12">Amadríname</button>
            </div>
        
        
            <div class="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between hover:scale-105 transition-transform duration-300 ml-20">
                <img src="/public/habitantesCabrasImages/3.png" alt="primer plano cara vaca" class="object-cover mb-4">
                <h3 class="text-bold text-2xl text-center mx-12 my-6 text-[#47462d]">Valentina</h3>
                <h4 class="text-justify text-[#47462d] mx-12 my-6">Valentina fue rescatada de un mercado ilegal, donde era tratada como una simple mercancía. Ahora, es conocida por ser una de las más cariñosas del grupo, siempre buscando mimos y atención de los visitantes.</h4>
                <button type="submit" class="w-full bg-[#47462d]/50 text-white p-2 rounded-md hover:bg-[#47462d] transition duration-300 mt-12">Amadríname</button>
            </div>
        
        
            <div class="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between hover:scale-105 transition-transform duration-300 mr-20">
                <img src="/public/habitantesCabrasImages/4.png" alt="vaca tumbada" class="object-cover mb-4">
                <h3 class="text-bold text-2xl text-center mx-12 my-6 text-[#47462d]">Aurora</h3>
                <h4 class="text-justify text-[#47462d] mx-12 my-6">Aurora llegó al santuario después de haber sido herida en un accidente. Su recuperación fue lenta, pero con cuidados amorosos, volvió a caminar con confianza. Es un símbolo viviente de perseverancia.</h4>
                <button type="submit" class="w-full bg-[#47462d]/50 text-white p-2 rounded-md hover:bg-[#47462d] transition duration-300 mt-12">Amadríname</button>
            </div>
        
        
            <div class="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between hover:scale-105 transition-transform duration-300 ml-20">
                <img src="/public/habitantesCabrasImages/5.png" alt="primer plano vaca marrón y blanca" class="object-cover mb-4">
                <h3 class="text-bold text-2xl text-center mx-12 my-6 text-[#47462d]">Canela</h3>
                <h4 class="text-justify text-[#47462d] mx-12 my-6">Canela fue encontrada sola, vagando por un campo después de que su rebaño fuera vendido. Ahora vive rodeada de amigas en el santuario y es conocida por su amor por los árboles frutales.</h4>
                <button type="submit" class="w-full bg-[#47462d]/50 text-white p-2 rounded-md hover:bg-[#47462d] transition duration-300 mt-12">Amadríname</button>
            </div>
        
        
            <div class="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between hover:scale-105 transition-transform duration-300 mr-20">
                <img src="/public/habitantesCabrasImages/6.png" alt="primer plano vaca cara blanca" class="object-cover mb-4">
                <h3 class="text-bold text-2xl text-center mx-12 my-6 text-[#47462d]">Blanquita</h3>
                <h4 class="text-justify text-[#47462d] mx-12 my-6">Blanquita pasó sus primeros meses de vida encerrada en un establo oscuro. Cuando fue rescatada, apenas podía ver la luz del sol. Ahora, no hay día que no salga al campo a disfrutar de la brisa y los rayos del sol.</h4>
                <button type="submit" class="w-full bg-[#47462d]/50 text-white p-2 rounded-md hover:bg-[#47462d] transition duration-300 mt-12">Amadríname</button>
            </div>


            <div class="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between hover:scale-105 transition-transform duration-300 ml-20">
                <img src="/public/habitantesCabrasImages/7.png" alt="primer plano toro marrón" class="object-cover mb-4">
                <h3 class="text-bold text-2xl text-center mx-12 my-6 text-[#47462d]">Nina</h3>
                <h4 class="text-justify text-[#47462d] mx-12 my-6">Nina fue rescatada de una granja donde era explotada por su leche. Llegó al santuario exhausta, pero con el tiempo recuperó su energía y ahora es la líder del grupo, siempre guiando a las demás cabritas.</h4>
                <button type="submit" class="w-full bg-[#47462d]/50 text-white p-2 rounded-md hover:bg-[#47462d] transition duration-300 mt-12">Amadríname</button>
            </div>
        
            <div class="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between hover:scale-105 transition-transform duration-300 mr-20">
                <img src="/public/habitantesCabrasImages/8.png" alt="perfil toro marrón" class="object-cover mb-4">
                <h3 class="text-bold text-2xl text-center mx-12 my-6 text-[#47462d]">Luna</h3>
                <h4 class="text-justify text-[#47462d] mx-12 my-6">Luna fue abandonada a su suerte en un bosque cercano. Estaba asustada y sola, pero su vida cambió cuando fue acogida por la fundación. Ahora, es conocida por sus saltos y juegos en los prados del santuario.</h4>
                <button type="submit" class="w-full bg-[#47462d]/50 text-white p-2 rounded-md hover:bg-[#47462d] transition duration-300 mt-12">Amadríname</button>
            </div>
        
        
    </div>

    <div>
                <p class="socio text-[#47462d] text-2xl text-center mx-36 my-16">
                    Nuestras cabritas son un símbolo de resiliencia y alegría. En el santuario, han encontrado un hogar seguro donde pueden ser libres y felices, recordándonos cada día la importancia de proteger y respetar a todos los seres vivos.
                    <br>
                    💚
                </p>
            </div>
</template>

<script>

export default {
    name: 'HabitantesCabras',
}
</script>


<style>
    
</style>