<template>
    <div>
        <div class="vaca_imagen">
                <img :src="'/public/HabitantesCerdosImages/portadacerdos.png'" alt="imagen vaca de espaldas"
                    class=" bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center w-full">
            </div>
            <div class="texto">
                <h1 class="text-[#47462d] text-9xl text-center mt-20 mx-20">
                    Conoce a nuestros cerdos
                </h1>
                <p class=" text-[#47462d] text-2xl text-center mx-36 my-16">
                    ¡Aquí te explicamos una curiosidad sobre estos animales tan espectaculares!
                </p>
                <p class=" text-[#47462d] text-2xl text-center mx-36 my-16">
                    Los cerdos son considerados uno de los animales más inteligentes, incluso más que los perros. Pueden aprender a realizar trucos y resolver problemas, y se ha demostrado que tienen una inteligencia comparable a la de un niño humano de tres años.
                </p>
                <p class=" text-[#47462d] text-2xl text-center mx-36 my-16 ">
                    Se estima que los cerdos pueden emitir hasta 20 sonidos diferentes, cada uno con un significado específico. Esto les permite comunicarse entre ellos de manera efectiva y expresar sus necesidades o emociones.
                </p>
                <p class=" text-[#47462d] text-2xl text-center mx-36 my-16">
                    Estas curiosidades muestran que las cerdos son animales fascinantes con comportamientos únicos y características sorprendentes que merecen ser apreciadas y respetadas.
                </p>
            </div>

    </div>

    <!-- GRID ANIMALES + HISTORIA -->

    <div class="texto grid_habitantes grid grid-cols-2 gap-12">
        
            <div class="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between ml-20 hover:scale-105 transition-transform duration-300">
                <img src="/public/HabitantesCerdosImages/1.png" alt="dos vacas en la montaña" class="object-cover mb-4">
                <h3 class="text-bold text-4xl text-center mx-12 my-6 text-[#47462d]">Bacon</h3>
                <h4 class="text-justify text-[#47462d] mx-12 my-6 text-2xl">Bacon fue rescatado de un matadero clandestino donde vivía en condiciones deplorables. Al llegar al santuario, estaba desnutrido y asustado. Con paciencia y cuidados, Bacon recuperó su salud y confianza. Hoy es conocido por su personalidad juguetona y le encanta revolcarse en el barro con sus nuevos amigos.</h4>
                <button type="submit" class="w-full bg-[#47462d]/50 text-white p-2 rounded-md hover:bg-[#47462d] transition duration-300 mt-12 text-2xl" @click="navigateTo('/Colabora/FormularioAmadrina')">Amadríname</button>
            </div>
        
        
            <div class="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between hover:scale-105 transition-transform duration-300 mr-20">
                <img src="/public/HabitantesCerdosImages/2.png" alt="dos vacas en la montaña" class="object-cover mb-4">
                <h3 class="text-bold text-4xl text-center mx-12 my-6 text-[#47462d]">Panceta</h3>
                <h4 class="text-justify text-[#47462d] mx-12 my-6 text-2xl">Panceta fue encontrada abandonada en una carretera, débil y enferma. Los cuidadores del santuario la acogieron y le brindaron atención veterinaria intensiva. Gracias a su espíritu luchador, Panceta se recuperó por completo. Ahora disfruta explorando los prados y tomando baños de sol.</h4>
                <button type="submit" class="w-full bg-[#47462d]/50 text-white p-2 rounded-md hover:bg-[#47462d] transition duration-300 mt-12 text-2xl" @click="navigateTo('/Colabora/FormularioAmadrina')">Amadríname</button>
            </div>
        
        
            <div class="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between hover:scale-105 transition-transform duration-300 ml-20">
                <img src="/public/HabitantesCerdosImages/3.png" alt="primer plano cara vaca" class="object-cover mb-4">
                <h3 class="text-bold text-4xl text-center mx-12 my-6 text-[#47462d]">Lola</h3>
                <h4 class="text-justify text-[#47462d] mx-12 my-6 text-2xl">Lola llegó al santuario después de ser rescatada de una granja industrial. Estaba aterrorizada y mostraba signos de estrés crónico. Con amor y tiempo, Lola aprendió a confiar en los humanos nuevamente. Hoy es una cerda feliz que adora recibir caricias y mimos de los visitantes.</h4>
                <button type="submit" class="w-full bg-[#47462d]/50 text-white p-2 rounded-md hover:bg-[#47462d] transition duration-300 mt-12 text-2xl" @click="navigateTo('/Colabora/FormularioAmadrina')">Amadríname</button>
            </div>
        
        
            <div class="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between hover:scale-105 transition-transform duration-300 mr-20">
                <img src="/public/HabitantesCerdosImages/4.png" alt="vaca tumbada" class="object-cover mb-4">
                <h3 class="text-bold text-4xl text-center mx-12 my-6 text-[#47462d]">Gertrudis</h3>
                <h4 class="text-justify text-[#47462d] mx-12 my-6 text-2xl">Gertrudis fue decomisada durante una redada en una granja ilegal. Tenía problemas de salud debido a la falta de cuidados adecuados. En el santuario, recibió tratamiento y una dieta nutritiva. Gertrudis se ha convertido en una cerda curiosa y sociable que disfruta aprendiendo nuevos trucos.</h4>
                <button type="submit" class="w-full bg-[#47462d]/50 text-white p-2 rounded-md hover:bg-[#47462d] transition duration-300 mt-12 text-2xl" @click="navigateTo('/Colabora/FormularioAmadrina')">Amadríname</button>
            </div>
        
        
            <div class="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between hover:scale-105 transition-transform duration-300 ml-20">
                <img src="/public/HabitantesCerdosImages/5.png" alt="primer plano vaca marrón y blanca" class="object-cover mb-4">
                <h3 class="text-bold text-4xl text-center mx-12 my-6 text-[#47462d]">Hugo</h3>
                <h4 class="text-justify text-[#47462d] mx-12 my-6 text-2xl">Hugo escapó de un camión que lo llevaba al matadero y fue encontrado vagando por las calles. Estaba herido y asustado cuando llegó al santuario. Con paciencia y cariño, Hugo superó sus traumas. Ahora es conocido por su personalidad tranquila y su amor por los baños de lodo.</h4>
                <button type="submit" class="w-full bg-[#47462d]/50 text-white p-2 rounded-md hover:bg-[#47462d] transition duration-300 mt-12 text-2xl" @click="navigateTo('/Colabora/FormularioAmadrina')">Amadríname</button>
            </div>
        
        
            <div class="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between hover:scale-105 transition-transform duration-300 mr-20">
                <img src="/public/HabitantesCerdosImages/6.png" alt="primer plano vaca cara blanca" class="object-cover mb-4">
                <h3 class="text-bold text-4xl text-center mx-12 my-6 text-[#47462d]">Marcelo</h3>
                <h4 class="text-justify text-[#47462d] mx-12 my-6 text-2xl">Marcelo fue rescatado de una situación de negligencia extrema en una pequeña granja. Estaba desnutrido y con problemas de piel. Gracias a los cuidados veterinarios y una alimentación adecuada, Marcelo se recuperó completamente. Hoy es un cerdo feliz que disfruta de la compañía de otros animales rescatados.</h4>
                <button type="submit" class="w-full bg-[#47462d]/50 text-white p-2 rounded-md hover:bg-[#47462d] transition duration-300 mt-12 text-2xl" @click="navigateTo('/Colabora/FormularioAmadrina')">Amadríname</button>
            </div>


            <div class="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between hover:scale-105 transition-transform duration-300 ml-20">
                <img src="/public/HabitantesCerdosImages/7.png" alt="primer plano toro marrón" class="object-cover mb-4">
                <h3 class="text-bold text-4xl text-center mx-12 my-6 text-[#47462d]">Ambrosio</h3>
                <h4 class="text-justify text-[#47462d] mx-12 my-6 text-2xl">Ambrosio llegó al santuario después de ser utilizado en experimentos de laboratorio. Estaba traumatizado y rehuía el contacto humano. Con mucha paciencia y terapia, Ambrosio aprendió a confiar nuevamente. Ahora es un cerdo curioso que le encanta explorar su entorno.</h4>
                <button type="submit" class="w-full bg-[#47462d]/50 text-white p-2 rounded-md hover:bg-[#47462d] transition duration-300 mt-12 text-2xl" @click="navigateTo('/Colabora/FormularioAmadrina')">Amadríname</button>
            </div>
        
            <div class="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between hover:scale-105 transition-transform duration-300 mr-20">
                <img src="/public/HabitantesCerdosImages/8.png" alt="perfil toro marrón" class="object-cover mb-4">
                <h3 class="text-bold text-4xl text-center mx-12 my-6 text-[#47462d]">Jacinta</h3>
                <h4 class="text-justify text-[#47462d] mx-12 my-6 text-2xl">Jacinta fue encontrada en una granja abandonada, sola y asustada. Al principio, se mostraba agresiva debido al miedo. Con amor y cuidados constantes, Jacinta se transformó en una cerda dulce y cariñosa. Hoy es la "mamá" adoptiva de otros animales rescatados más jóvenes.</h4>
                <button type="submit" class="w-full bg-[#47462d]/50 text-white p-2 rounded-md hover:bg-[#47462d] transition duration-300 mt-12 text-2xl" @click="navigateTo('/Colabora/FormularioAmadrina')">Amadríname</button>
            </div>
        
        
            <div class="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between hover:scale-105 transition-transform duration-300 ml-20">
                <img src="/public/HabitantesCerdosImages/9.png" alt="vaca en hierba" class="object-cover mb-4">
                <h3 class="text-bold text-4xl text-center mx-12 my-6 text-[#47462d]">Roberta</h3>
                <h4 class="text-justify text-[#47462d] mx-12 my-6 text-2xl">Roberta fue rescatada de un criadero ilegal donde vivía en condiciones insalubres. Tenía problemas respiratorios y estaba muy débil. Gracias a la atención veterinaria y mucho cariño, Roberta se recuperó por completo. Ahora es conocida por su personalidad vivaz y su amor por los juguetes.</h4>
                <button type="submit" class="w-full bg-[#47462d]/50 text-white p-2 rounded-md hover:bg-[#47462d] transition duration-300 my-12 text-2xl" @click="navigateTo('/Colabora/FormularioAmadrina')">Amadríname</button>
            </div>
    </div>

    <div class="texto">
                <p class="socio text-[#47462d] text-2xl text-center mx-36 my-16">
                    Estas historias no solo reflejan el sufrimiento que enfrentaron estos cerdos antes de ser rescatados; también destacan la esperanza y la felicidad que han encontrado en PATOdalavida tras haber superado sus traumas pasados. Cada uno de ellos ahora vive libremente en un entorno lleno de amor y cuidado, recordándonos la importancia del respeto hacia todos los seres vivos.
                </p>
                <p class="socio text-[#47462d] text-2xl text-center mx-36 my-16">
                    En PATOdalavEn PATOdalavida hay muchas historias conmovedoras como las de Bacon, Panceta, Lola, Gertrudis, Hugo, Marcelo, Ambrosio, Jacinta y Roberta. Cada cerdo y cerda tiene su propio viaje hacia la libertad y la felicidad después de haber enfrentado sufrimientos inimaginables. El santuario no solo les ofrece un hogar seguro; también les brinda amor incondicional y el respeto que merecen por sus vidas.
                    Cada visita al santuario es una oportunidad para conocer a estos maravillosos animales y aprender sobre sus experiencias. Al interactuar con ellos, los visitantes pueden comprender la importancia del rescate animal y cómo cada uno de ellos ha superado sus traumas pasados. Juntos, podemos hacer una diferencia significativa en sus vidas y contribuir a su bienestar.
                </p>
            </div>

            <div class="text-center mt-10"> 
        <button @click="navigateTo('/HabitantesGeneral/Habitantes')"
            class="bg-[#47462d] text-white px-4 py-2 rounded-md hover:bg-[#333] transition duration-300 mb-20"> Volver a
            Habitantes 
        </button> 
    </div>

</template>


<script>

import { useRouter } from 'vue-router';

export default {
    name: 'HabitantesCerdos', 
    setup() { 
        const router = useRouter(); 
        const navigateTo = (route) => { 
            router.push(route); 
        }; return { navigateTo 

        }; 
    },
}; 
</script>  

<style>

.texto{
    font-family: 'Crimson Text', serif;
}
    
</style>