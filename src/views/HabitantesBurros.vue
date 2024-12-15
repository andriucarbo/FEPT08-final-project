<template>
    <div>
        <div class="burro_imagen">
                <img :src="'/public/HabitantesBurrosImages/PortadaBurros(vc).png'" alt="imagen burro comiendo"
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
                <img src="/public/HabitantesBurrosImages/Lucas.png" alt="cabeza de un burrito" class="object-cover mb-4">
                <h3 class="text-bold text-2xl text-center mx-12 my-6 text-[#47462d]">Lucas</h3>
                <h4 class="text-justify text-[#47462d] mx-12 my-6">Lucas fue rescatado de un entorno de abandono. Pasó meses sin contacto con humanos y con pocos recursos para alimentarse. Hoy en día, es el burro más cariñoso del refugio, siempre buscando a las personas para recibir mimos y paseos tranquilos.</h4>
                <button type="submit" class="w-full bg-[#47462d]/50 text-white p-2 rounded-md hover:bg-[#47462d] transition duration-300 mt-12">Amadríname</button>
            </div>
        
        
            <div class="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between hover:scale-105 transition-transform duration-300 mr-20">
                <img src="/public/HabitantesBurrosImages/Maria.png" alt="dos vacas en la montaña" class="object-cover mb-4">
                <h3 class="text-bold text-2xl text-center mx-12 my-6 text-[#47462d]">Maria</h3>
                <h4 class="text-justify text-[#47462d] mx-12 my-6">Maria llegó al santuario con heridas graves. Su valentía y el cuidado amoroso de nuestro equipo han ayudado a sanarla. Ahora, disfruta de largos días pastando y mostrando su alegría a quienes la visitan.</h4>
                <button type="submit" class="w-full bg-[#47462d]/50 text-white p-2 rounded-md hover:bg-[#47462d] transition duration-300 mt-12">Amadríname</button>
            </div>
        
        
            <div class="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between hover:scale-105 transition-transform duration-300 ml-20">
                <img src="/public/habitantesBurrosImages/Tobias.png" alt="primer plano cara vaca" class="object-cover mb-4">
                <h3 class="text-bold text-2xl text-center mx-12 my-6 text-[#47462d]">Tobias</h3>
                <h4 class="text-justify text-[#47462d] mx-12 my-6">Tobias fue rescatado después de ser encontrado errante en una carretera rural. Con mucha paciencia, ha aprendido a confiar nuevamente en los humanos y es un excelente compañero para quienes buscan paz y tranquilidad.</h4>
                <button type="submit" class="w-full bg-[#47462d]/50 text-white p-2 rounded-md hover:bg-[#47462d] transition duration-300 mt-12">Amadríname</button>
            </div>
        
        
            <div class="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between hover:scale-105 transition-transform duration-300 mr-20">
                <img src="/public/habitantesBurrosImages/Margarita.png" alt="vaca tumbada" class="object-cover mb-4">
                <h3 class="text-bold text-2xl text-center mx-12 my-6 text-[#47462d]">Margarita</h3>
                <h4 class="text-justify text-[#47462d] mx-12 my-6">Margarita llegó al refugio embarazada. Gracias a los cuidados amorosos, tuvo una hermosa cría que ahora crece bajo el amor de su madre y el cuidado de todos en el santuario.</h4>
                <button type="submit" class="w-full bg-[#47462d]/50 text-white p-2 rounded-md hover:bg-[#47462d] transition duration-300 mt-12">Amadríname</button>
            </div>
        
        
            <div class="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between hover:scale-105 transition-transform duration-300 ml-20">
                <img src="/public/HabitantesBurrosImages/Felipe.png" alt="primer plano vaca marrón y blanca" class="object-cover mb-4">
                <h3 class="text-bold text-2xl text-center mx-12 my-6 text-[#47462d]">Felipe</h3>
                <h4 class="text-justify text-[#47462d] mx-12 my-6">Felipe vivió gran parte de su vida como parte de un trabajo forzado. Desde que fue rescatado, ha mostrado un espíritu curioso y amigable, y su risa es contagiosa.</h4>
                <button type="submit" class="w-full bg-[#47462d]/50 text-white p-2 rounded-md hover:bg-[#47462d] transition duration-300 mt-12">Amadríname</button>
            </div>
        
        
            <div class="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between hover:scale-105 transition-transform duration-300 mr-20">
                <img src="/public/HabitantesBurrosImages/Enrique.png" alt="primer plano vaca cara blanca" class="object-cover mb-4">
                <h3 class="text-bold text-2xl text-center mx-12 my-6 text-[#47462d]">Enrique</h3>
                <h4 class="text-justify text-[#47462d] mx-12 my-6">Enrique llegó al santuario con mucho miedo a las personas. Con el tiempo, ha descubierto que los humanos pueden ser amigos. Hoy disfruta siendo parte de paseos tranquilos y apreciando el contacto con la naturaleza.</h4>
                <button type="submit" class="w-full bg-[#47462d]/50 text-white p-2 rounded-md hover:bg-[#47462d] transition duration-300 mt-12">Amadríname</button>
            </div>


            <div class="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between hover:scale-105 transition-transform duration-300 ml-20">
                <img src="/public/HabitantesBurrosImages/Amelia.png" alt="primer plano toro marrón" class="object-cover mb-4">
                <h3 class="text-bold text-2xl text-center mx-12 my-6 text-[#47462d]">Amelia</h3>
                <h4 class="text-justify text-[#47462d] mx-12 my-6">Amelia fue rescatada de un lugar donde el maltrato era común. Su historia de recuperación inspira a todos, y ahora pasa sus días relajada, disfrutando de los cuidados amorosos de quienes la rodean.</h4>
                <button type="submit" class="w-full bg-[#47462d]/50 text-white p-2 rounded-md hover:bg-[#47462d] transition duration-300 mt-12">Amadríname</button>
            </div>
        
            <div class="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between hover:scale-105 transition-transform duration-300 mr-20">
                <img src="/public/HabitantesBurrosImages/Felicia.png" alt="perfil toro marrón" class="object-cover mb-4">
                <h3 class="text-bold text-2xl text-center mx-12 my-6 text-[#47462d]">Felicia</h3>
                <h4 class="text-justify text-[#47462d] mx-12 my-6">Felicia fue rescatada con sus crías. Juntas, forman una hermosa familia en el santuario. Su amor mutuo se refleja en cada paso que dan.</h4>
                <button type="submit" class="w-full bg-[#47462d]/50 text-white p-2 rounded-md hover:bg-[#47462d] transition duration-300 mt-12">Amadríname</button>
            </div>
        
        
            <div class="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between hover:scale-105 transition-transform duration-300 ml-20">
                <img src="/public/HabitantesBurrosImages/Jose.png" alt="vaca en hierba" class="object-cover mb-4">
                <h3 class="text-bold text-2xl text-center mx-12 my-6 text-[#47462d]">Jose</h3>
                <h4 class="text-justify text-[#47462d] mx-12 my-6">José es uno de los burros más viejos del refugio. A lo largo de los años, ha compartido su sabiduría y calma con los más jóvenes, convirtiéndose en el líder espiritual del grupo.

</h4>
                <button type="submit" class="w-full bg-[#47462d]/50 text-white p-2 rounded-md hover:bg-[#47462d] transition duration-300 my-12">Amadríname</button>
            </div>
    </div>

            <div>
                <p class="socio text-[#47462d] text-2xl text-center mx-36 my-16">
                    Cada uno de nuestros burros tiene una historia única de resiliencia y superación. Aunque sus caminos hacia el santuario fueron diferentes, todos comparten algo en común: ahora tienen un hogar seguro donde son amados y cuidados. En este refugio, trabajan juntos para recordarnos la importancia de la empatía, la compasión y el respeto hacia todos los seres vivos.
                </p>
                <p class="socio text-[#47462d] text-2xl text-center mx-36 my-16">
                    Ven a PATOdalavida y conoce a Lucas, Lola, Tobias y todos los demás en persona. Al apoyar nuestro santuario, te conviertes en parte de sus historias, ayudándonos a ofrecerles una vida digna y llena de amor.
                    <br> 
                    ❤️
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