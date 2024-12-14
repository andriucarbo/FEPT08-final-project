<template>
    <div>
        <div class="vaca_imagen">
                <img :src="'/public/HabitantesVacasImages/portadasvacas.png'" alt="imagen vaca de espaldas"
                    class=" bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center w-full">
            </div>
            <div>
                <h1 class="text-[#47462d] text-9xl text-center mt-20 mx-20">
                    Conoce a nuestras vacas
                </h1>
                <p class="dona text-[#47462d] text-2xl text-center mx-36 my-16">
                    ¡Aquí te explicamos una curiosidad sobre estos animales tan espectaculares!
                </p>
                <p class="socio text-[#47462d] text-2xl text-center mx-36 my-16">
                    Las vacas tienen un sentido del olfato excepcional; pueden detectar olores a una distancia de hasta 10 kilómetros. Esto les ayuda no solo a encontrar alimento, sino también a comunicarse entre ellas a través de feromonas.
                </p>
                <p class="socio text-[#47462d] text-2xl text-center mx-36 my-16 ">
                    Además, las vacas tienen una excelente memoria y pueden recordar rostros y lugares durante mucho tiempo. Esto les permite reconocer a sus cuidadores y compañeros, lo que refuerza sus lazos sociales.
                </p>
                <p class="socio text-[#47462d] text-2xl text-center mx-36 my-16">
                    Estas curiosidades muestran que las vacas son animales fascinantes con comportamientos únicos y características sorprendentes que merecen ser apreciadas y respetadas.
                </p>
            </div>

    </div>

    <!-- GRID ANIMALES + HISTORIA -->

    <div class="grid_habitantes grid grid-cols-2 gap-12">
        
            <div class="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between ml-20 hover:scale-105 transition-transform duration-300">
                <img src="/public/HabitantesVacasImages/1.png" alt="dos vacas en la montaña" class="object-cover mb-4">
                <h3 class="text-bold text-2xl text-center mx-12 my-6 text-[#47462d]">Margot</h3>
                <h4 class="text-justify text-[#47462d] mx-12 my-6">Margot fue rescatada de un matadero clandestino en las afueras de Valencia. Cuando la encontraron, estaba extremadamente delgada y con heridas por todo el cuerpo. Los veterinarios descubrieron que tenía una infección pulmonar grave debido a las pésimas condiciones en las que vivía. Gracias a los cuidados intensivos y al amor recibido en el Santuario PATOdalavida, Margot se recuperó completamente. Ahora disfruta pastando en los verdes prados y tomando el sol junto a su inseparable amiga Olivia.</h4>
                <button type="submit" class="w-full bg-[#47462d]/50 text-white p-2 rounded-md hover:bg-[#47462d] transition duration-300 mt-12">Amadríname</button>
            </div>
        
        
            <div class="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between hover:scale-105 transition-transform duration-300 mr-20">
                <img src="/public/HabitantesVacasImages/2.png" alt="dos vacas en la montaña" class="object-cover mb-4">
                <h3 class="text-bold text-2xl text-center mx-12 my-6 text-[#47462d]">Gaia</h3>
                <h4 class="text-justify text-[#47462d] mx-12 my-6">Gaia llegó al santuario tras ser abandonada en una carretera. Estaba tan débil que apenas podía mantenerse en pie. Los análisis revelaron que sufría una severa anemia y desnutrición. Con paciencia y una dieta especial, Gaia fue ganando peso y fuerza. Hoy en día, es conocida por su curiosidad y le encanta explorar cada rincón del santuario, siempre seguida por su fiel compañero, un perro llamado Max.</h4>
                <button type="submit" class="w-full bg-[#47462d]/50 text-white p-2 rounded-md hover:bg-[#47462d] transition duration-300 mt-12">Amadríname</button>
            </div>
        
        
            <div class="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between hover:scale-105 transition-transform duration-300 ml-20">
                <img src="/public/HabitantesVacasImages/5.png" alt="primer plano cara vaca" class="object-cover mb-4">
                <h3 class="text-bold text-2xl text-center mx-12 my-6 text-[#47462d]">Olivia</h3>
                <h4 class="text-justify text-[#47462d] mx-12 my-6">Olivia fue rescatada de una granja industrial donde la mantenían constantemente preñada para producir leche. Cuando llegó al santuario, estaba agotada y con una mastitis crónica. Tras meses de tratamiento y cuidados, Olivia se recuperó por completo. Ahora disfruta de largas siestas bajo los árboles y es la primera en acudir cuando los cuidadores traen fruta fresca.</h4>
                <button type="submit" class="w-full bg-[#47462d]/50 text-white p-2 rounded-md hover:bg-[#47462d] transition duration-300 mt-12">Amadríname</button>
            </div>
        
        
            <div class="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between hover:scale-105 transition-transform duration-300 mr-20">
                <img src="/public/HabitantesVacasImages/6.png" alt="vaca tumbada" class="object-cover mb-4">
                <h3 class="text-bold text-2xl text-center mx-12 my-6 text-[#47462d]">Valeria</h3>
                <h4 class="text-justify text-[#47462d] mx-12 my-6">Valeria fue encontrada atada a un árbol en un bosque, abandonada a su suerte. Tenía graves problemas en las pezuñas por falta de cuidado y una desnutrición severa. En el Santuario PATOdalavida, recibió tratamiento podológico y una alimentación adecuada. Hoy, Valeria es conocida por su dulzura y le encanta recibir caricias de los visitantes del santuario.</h4>
                <button type="submit" class="w-full bg-[#47462d]/50 text-white p-2 rounded-md hover:bg-[#47462d] transition duration-300 mt-12">Amadríname</button>
            </div>
        
        
            <div class="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between hover:scale-105 transition-transform duration-300 ml-20">
                <img src="/public/HabitantesVacasImages/7.png" alt="primer plano vaca marrón y blanca" class="object-cover mb-4">
                <h3 class="text-bold text-2xl text-center mx-12 my-6 text-[#47462d]">Manuela</h3>
                <h4 class="text-justify text-[#47462d] mx-12 my-6">Manuela llegó al santuario tras ser rescatada de una granja donde la utilizaban para espectáculos taurinos. Estaba aterrorizada y mostraba signos de estrés postraumático. Con mucha paciencia y terapia, Manuela aprendió a confiar de nuevo. Ahora es la protectora del grupo y siempre está pendiente de los nuevos rescatados que llegan al santuario.</h4>
                <button type="submit" class="w-full bg-[#47462d]/50 text-white p-2 rounded-md hover:bg-[#47462d] transition duration-300 mt-12">Amadríname</button>
            </div>
        
        
            <div class="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between hover:scale-105 transition-transform duration-300 mr-20">
                <img src="/public/HabitantesVacasImages/8.png" alt="primer plano vaca cara blanca" class="object-cover mb-4">
                <h3 class="text-bold text-2xl text-center mx-12 my-6 text-[#47462d]">Clara</h3>
                <h4 class="text-justify text-[#47462d] mx-12 my-6">Clara fue rescatada de un matadero en la provincia de Almería, donde estaba destinada a ser sacrificada. Cuando los rescatistas llegaron, Clara estaba aterrorizada y herida. Después de recibir atención veterinaria en el Santuario PATOdalavida, Clara comenzó a recuperar su salud y confianza. Hoy en día, es una vaca feliz que disfruta de paseos por el campo y juega con sus amigos.</h4>
                <button type="submit" class="w-full bg-[#47462d]/50 text-white p-2 rounded-md hover:bg-[#47462d] transition duration-300 mt-12">Amadríname</button>
            </div>


            <div class="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between hover:scale-105 transition-transform duration-300 ml-20">
                <img src="/public/HabitantesVacasImages/3.png" alt="primer plano toro marrón" class="object-cover mb-4">
                <h3 class="text-bold text-2xl text-center mx-12 my-6 text-[#47462d]">Emilio</h3>
                <h4 class="text-justify text-[#47462d] mx-12 my-6">Emilio fue rescatado siendo un ternero de una granja de producción de carne. Estaba tan débil que los veterinarios temían por su vida. Gracias a los cuidados intensivos y a la dedicación del equipo del santuario, Emilio sobrevivió. Hoy es un toro joven y juguetón que adora corretear por los prados y darse baños de barro en los días calurosos.</h4>
                <button type="submit" class="w-full bg-[#47462d]/50 text-white p-2 rounded-md hover:bg-[#47462d] transition duration-300 mt-12">Amadríname</button>
            </div>
        
            <div class="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between hover:scale-105 transition-transform duration-300 mr-20">
                <img src="/public/HabitantesVacasImages/4.png" alt="perfil toro marrón" class="object-cover mb-4">
                <h3 class="text-bold text-2xl text-center mx-12 my-6 text-[#47462d]">Vicente</h3>
                <h4 class="text-justify text-[#47462d] mx-12 my-6">Vicente llegó al santuario tras ser decomisado en una operación contra el maltrato animal. Tenía múltiples heridas y cicatrices por todo el cuerpo. Con mucho amor y paciencia, Vicente fue sanando no solo físicamente sino también emocionalmente. Ahora es conocido por su carácter tranquilo y le encanta tumbarse al sol mientras los pájaros se posan sobre su lomo.</h4>
                <button type="submit" class="w-full bg-[#47462d]/50 text-white p-2 rounded-md hover:bg-[#47462d] transition duration-300 mt-12">Amadríname</button>
            </div>
        
        
            <div class="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between hover:scale-105 transition-transform duration-300 ml-20">
                <img src="/public/HabitantesVacasImages/9.png" alt="vaca en hierba" class="object-cover mb-4">
                <h3 class="text-bold text-2xl text-center mx-12 my-6 text-[#47462d]">Catalina</h3>
                <h4 class="text-justify text-[#47462d] mx-12 my-6">Freser y Catalina fueron rescatados de una explotación ganadera donde eran utilizados para producir carne. Ambos estaban destinados al matadero cuando el Santuario PATOdalavida intervino. Al llegar, estaban asustados y en mal estado de salud. Tras meses de cuidados y atención, Freser y Catalina se recuperaron por completo. Ahora son inseparables y pasan sus días explorando juntos los prados del santuario.</h4>
                <button type="submit" class="w-full bg-[#47462d]/50 text-white p-2 rounded-md hover:bg-[#47462d] transition duration-300 my-12">Amadríname</button>
            </div>
    </div>

    <div>
                <p class="socio text-[#47462d] text-2xl text-center mx-36 my-16">
                    Estas historias destacan no solo las dificultades que enfrentan muchos animales antes de ser rescatados, sino también la esperanza y la felicidad que pueden encontrar en santuarios como PATOdalavida tras haber superado sus traumas pasados.
                </p>
                <p class="socio text-[#47462d] text-2xl text-center mx-36 my-16">
                    En PATOdalavida hay muchas historias como las de Margot, Catalina, Olivia, Valeria, Manuela, Emilio y Vicente. Cada vaca tiene su propio viaje hacia la libertad y la felicidad después del sufrimiento. El santuario no solo les ofrece un hogar seguro; también les brinda amor incondicional y respeto por sus vidas. Cada visita al santuario es una oportunidad para aprender sobre estos maravillosos animales y contribuir a su bienestar. Juntos podemos hacer una diferencia significativa en sus vidas. Estas historias conmovedoras pueden ayudar a sensibilizar sobre la importancia del rescate animal y el trabajo realizado por santuarios como PATOdalavida.
                </p>
            </div>
</template>
<script>
export default {
    name: 'HabitantesVacas',   
}
</script>
<style>
    
</style>