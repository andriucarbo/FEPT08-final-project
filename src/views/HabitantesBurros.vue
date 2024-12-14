<template>
    <div>
        <div class="burro_imagen">
                <img :src="'/public/HabitantesCerdosImages/portadacerdos.png'" alt="imagen vaca de espaldas"
                    class=" bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center w-full">
            </div>
            <div>
                <h1 class="text-[#47462d] text-9xl text-center mt-20 mx-20">
                    Conoce a nuestros burros
                </h1>
                <p class="dona text-[#47462d] text-2xl text-center mx-36 my-16">
                    Desde tiempos antiguos, los burros han sido compañeros valientes y resilientes en muchos entornos, ayudando a las personas a sobrevivir en condiciones difíciles. Con su memoria sorprendente y su capacidad para adaptarse a los paisajes más exigentes, los burros han sido esenciales en comunidades rurales y han demostrado ser fuertes y fieles aliados.
                </p>
                <p class="socio text-[#47462d] text-2xl text-center mx-36 my-16">
                    En nuestra fundación, buscamos honrar y proteger a estos maravillosos animales, que a menudo pasan desapercibidos. Queremos brindarles un lugar donde puedan vivir en paz, seguros y bien cuidados, como se merecen. Los burros no solo son esenciales para el equilibrio natural, sino que también poseen una personalidad única y especial que les permite contribuir a comunidades y entornos en los que viven.
                </p>
                <p class="socio text-[#47462d] text-2xl text-center mx-36 my-16 ">
                    A través de nuestro trabajo, buscamos educar y concienciar sobre la importancia de su conservación y promover el respeto hacia ellos. ¡Únete a nosotros en esta misión y descubre el valor de los burros en nuestra vida y en la naturaleza!
                </p>
                
            </div>

    </div>

    <!-- GRID ANIMALES + HISTORIA -->

    <div class="grid_habitantes grid grid-cols-2 gap-12">
        
            <div class="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between ml-20 hover:scale-105 transition-transform duration-300">
                <img src="/public/HabitantesCerdosImages/1.png" alt="dos vacas en la montaña" class="object-cover mb-4">
                <h3 class="text-bold text-2xl text-center mx-12 my-6 text-[#47462d]">Bacon</h3>
                <h4 class="text-justify text-[#47462d] mx-12 my-6">Bacon fue rescatado de un matadero clandestino donde vivía en condiciones deplorables. Al llegar al santuario, estaba desnutrido y asustado. Con paciencia y cuidados, Bacon recuperó su salud y confianza. Hoy es conocido por su personalidad juguetona y le encanta revolcarse en el barro con sus nuevos amigos.</h4>
                <button type="submit" class="w-full bg-[#47462d]/50 text-white p-2 rounded-md hover:bg-[#47462d] transition duration-300 mt-12">Amadríname</button>
            </div>
        
        
            <div class="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between hover:scale-105 transition-transform duration-300 mr-20">
                <img src="/public/HabitantesCerdosImages/2.png" alt="dos vacas en la montaña" class="object-cover mb-4">
                <h3 class="text-bold text-2xl text-center mx-12 my-6 text-[#47462d]">Panceta</h3>
                <h4 class="text-justify text-[#47462d] mx-12 my-6">Panceta fue encontrada abandonada en una carretera, débil y enferma. Los cuidadores del santuario la acogieron y le brindaron atención veterinaria intensiva. Gracias a su espíritu luchador, Panceta se recuperó por completo. Ahora disfruta explorando los prados y tomando baños de sol.</h4>
                <button type="submit" class="w-full bg-[#47462d]/50 text-white p-2 rounded-md hover:bg-[#47462d] transition duration-300 mt-12">Amadríname</button>
            </div>
        
        
            <div class="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between hover:scale-105 transition-transform duration-300 ml-20">
                <img src="/public/HabitantesCerdosImages/3.png" alt="primer plano cara vaca" class="object-cover mb-4">
                <h3 class="text-bold text-2xl text-center mx-12 my-6 text-[#47462d]">Lola</h3>
                <h4 class="text-justify text-[#47462d] mx-12 my-6">Lola llegó al santuario después de ser rescatada de una granja industrial. Estaba aterrorizada y mostraba signos de estrés crónico. Con amor y tiempo, Lola aprendió a confiar en los humanos nuevamente. Hoy es una cerda feliz que adora recibir caricias y mimos de los visitantes.</h4>
                <button type="submit" class="w-full bg-[#47462d]/50 text-white p-2 rounded-md hover:bg-[#47462d] transition duration-300 mt-12">Amadríname</button>
            </div>
        
        
            <div class="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between hover:scale-105 transition-transform duration-300 mr-20">
                <img src="/public/HabitantesCerdosImages/4.png" alt="vaca tumbada" class="object-cover mb-4">
                <h3 class="text-bold text-2xl text-center mx-12 my-6 text-[#47462d]">Gertrudis</h3>
                <h4 class="text-justify text-[#47462d] mx-12 my-6">Gertrudis fue decomisada durante una redada en una granja ilegal. Tenía problemas de salud debido a la falta de cuidados adecuados. En el santuario, recibió tratamiento y una dieta nutritiva. Gertrudis se ha convertido en una cerda curiosa y sociable que disfruta aprendiendo nuevos trucos.</h4>
                <button type="submit" class="w-full bg-[#47462d]/50 text-white p-2 rounded-md hover:bg-[#47462d] transition duration-300 mt-12">Amadríname</button>
            </div>
        
        
            <div class="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between hover:scale-105 transition-transform duration-300 ml-20">
                <img src="/public/HabitantesCerdosImages/5.png" alt="primer plano vaca marrón y blanca" class="object-cover mb-4">
                <h3 class="text-bold text-2xl text-center mx-12 my-6 text-[#47462d]">Hugo</h3>
                <h4 class="text-justify text-[#47462d] mx-12 my-6">Hugo escapó de un camión que lo llevaba al matadero y fue encontrado vagando por las calles. Estaba herido y asustado cuando llegó al santuario. Con paciencia y cariño, Hugo superó sus traumas. Ahora es conocido por su personalidad tranquila y su amor por los baños de lodo.</h4>
                <button type="submit" class="w-full bg-[#47462d]/50 text-white p-2 rounded-md hover:bg-[#47462d] transition duration-300 mt-12">Amadríname</button>
            </div>
        
        
            <div class="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between hover:scale-105 transition-transform duration-300 mr-20">
                <img src="/public/HabitantesCerdosImages/6.png" alt="primer plano vaca cara blanca" class="object-cover mb-4">
                <h3 class="text-bold text-2xl text-center mx-12 my-6 text-[#47462d]">Marcelo</h3>
                <h4 class="text-justify text-[#47462d] mx-12 my-6">Marcelo fue rescatado de una situación de negligencia extrema en una pequeña granja. Estaba desnutrido y con problemas de piel. Gracias a los cuidados veterinarios y una alimentación adecuada, Marcelo se recuperó completamente. Hoy es un cerdo feliz que disfruta de la compañía de otros animales rescatados.</h4>
                <button type="submit" class="w-full bg-[#47462d]/50 text-white p-2 rounded-md hover:bg-[#47462d] transition duration-300 mt-12">Amadríname</button>
            </div>


            <div class="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between hover:scale-105 transition-transform duration-300 ml-20">
                <img src="/public/HabitantesCerdosImages/7.png" alt="primer plano toro marrón" class="object-cover mb-4">
                <h3 class="text-bold text-2xl text-center mx-12 my-6 text-[#47462d]">Ambrosio</h3>
                <h4 class="text-justify text-[#47462d] mx-12 my-6">Ambrosio llegó al santuario después de ser utilizado en experimentos de laboratorio. Estaba traumatizado y rehuía el contacto humano. Con mucha paciencia y terapia, Ambrosio aprendió a confiar nuevamente. Ahora es un cerdo curioso que le encanta explorar su entorno.</h4>
                <button type="submit" class="w-full bg-[#47462d]/50 text-white p-2 rounded-md hover:bg-[#47462d] transition duration-300 mt-12">Amadríname</button>
            </div>
        
            <div class="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between hover:scale-105 transition-transform duration-300 mr-20">
                <img src="/public/HabitantesCerdosImages/8.png" alt="perfil toro marrón" class="object-cover mb-4">
                <h3 class="text-bold text-2xl text-center mx-12 my-6 text-[#47462d]">Jacinta</h3>
                <h4 class="text-justify text-[#47462d] mx-12 my-6">Jacinta fue encontrada en una granja abandonada, sola y asustada. Al principio, se mostraba agresiva debido al miedo. Con amor y cuidados constantes, Jacinta se transformó en una cerda dulce y cariñosa. Hoy es la "mamá" adoptiva de otros animales rescatados más jóvenes.</h4>
                <button type="submit" class="w-full bg-[#47462d]/50 text-white p-2 rounded-md hover:bg-[#47462d] transition duration-300 mt-12">Amadríname</button>
            </div>
        
        
            <div class="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between hover:scale-105 transition-transform duration-300 ml-20">
                <img src="/public/HabitantesCerdosImages/9.png" alt="vaca en hierba" class="object-cover mb-4">
                <h3 class="text-bold text-2xl text-center mx-12 my-6 text-[#47462d]">Roberta</h3>
                <h4 class="text-justify text-[#47462d] mx-12 my-6">Roberta fue rescatada de un criadero ilegal donde vivía en condiciones insalubres. Tenía problemas respiratorios y estaba muy débil. Gracias a la atención veterinaria y mucho cariño, Roberta se recuperó por completo. Ahora es conocida por su personalidad vivaz y su amor por los juguetes.</h4>
                <button type="submit" class="w-full bg-[#47462d]/50 text-white p-2 rounded-md hover:bg-[#47462d] transition duration-300 my-12">Amadríname</button>
            </div>
    </div>

    <div>
                <p class="socio text-[#47462d] text-2xl text-center mx-36 my-16">
                    Estas historias no solo reflejan el sufrimiento que enfrentaron estos cerdos antes de ser rescatados; también destacan la esperanza y la felicidad que han encontrado en PATOdalavida tras haber superado sus traumas pasados. Cada uno de ellos ahora vive libremente en un entorno lleno de amor y cuidado, recordándonos la importancia del respeto hacia todos los seres vivos.
                </p>
                <p class="socio text-[#47462d] text-2xl text-center mx-36 my-16">
                    En PATOdalavEn PATOdalavida hay muchas historias conmovedoras como las de Bacon, Panceta, Lola, Gertrudis, Hugo, Marcelo, Ambrosio, Jacinta y Roberta. Cada cerdo y cerda tiene su propio viaje hacia la libertad y la felicidad después de haber enfrentado sufrimientos inimaginables. El santuario no solo les ofrece un hogar seguro; también les brinda amor incondicional y el respeto que merecen por sus vidas.
                    Cada visita al santuario es una oportunidad para conocer a estos maravillosos animales y aprender sobre sus experiencias. Al interactuar con ellos, los visitantes pueden comprender la importancia del rescate animal y cómo cada uno de ellos ha superado sus traumas pasados. Juntos, podemos hacer una diferencia significativa en sus vidas y contribuir a su bienestar.
                </p>
            </div>
</template>


<script>
export default {
    name: 'HabitantesBurros',  
}
</script>


<style>
    
</style>