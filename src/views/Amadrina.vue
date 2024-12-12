<template>
    <div class="contenedor_amadrina">
        <div class="amadrina">
            <div class="amadrina__imagen">
                <!-- IMAGEN PARTE SUPERIOR DEL SERVIDOR -->
                <img src="/public/AmadrinaImages/AmadrinaPortada.png" alt="mujer abrazando a conejo blanco" class="bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center w-full">
            </div>
            <!-- TEXTO CONTEXTUALIZACIÓN AMADRINA (PARTE IZQUIERDA DEL SERVIDOR) -->
            <div class="amadrina_texto flex justify-start mb-36 border-b-2 border-b-[#47462d]/50 mx-20 ml-20 ">
                <div class="w-1/2 text-[#47462d] text-l  mx-20 ,y-16">
                    <h1 class="madrina_title text-center mb-16 mt-14 text-5xl">Amadrina/Apadrina</h1>
                    <p class="madrina_text text-center mb-12">Tú puedes cambiar la vida de los animales maltratados que llegan a PATOdalavida</p>
                    <p class="madrina_text text-center mb-12">Los animales considerados de granja son de los animales más maltratados en el mundo. Sus vidas son habitualmente invisibilizadas y pocas veces tienen la oportunidad de salvarse y de vivir las vidas que les corresponden, pero con tu ayuda podemos cambiar eso.</p>
                    <p class="madrina_text text-center mb-12">Amadrinando o Apadrinando haces posible que puedan ser rescatados, que reciban atención veterinaria, una alimentación variada y saludable, un entorno de libertad y los cuidados necesarios para poder disfrutar del resto de sus vidas.</p>
                    <p class="madrina_text text-center mb-12">Ellos necesitan de esas personas que les hagan saber que sus vidas sí importan.</p>
                    <p class="madrina_text text-center mb-12">Po ese motivo, nuestros habitantes buscan madrinas y padrinos que quieran darles esa oportunidad. Tú puedes ser el apoyo que necesitamos para salvar vidas y defender los derechos de todos los animales.</p>
                </div>

                <!-- CAROUSSEL A LA DERECHA DEL TEXTO -->
                <div class="caroussel mt-48 ml-20 mb-20 w-full h-full">
                    <div class="caroussel_image">
                        <img :src="images[currentIndex]" alt="Imagen del caroussel" class="w-full h-full object-cover">
                        <!-- necesitamos que itere sobre las imágenes -->
                        <span v-for="(image,index) in images" :key="index" class="inline-block w-2 h-2 rounded-full mx-1"></span>
                    </div>
                </div>
            </div>

            <div class="amadrina_habitantes mx-20 mb-20">
                <div class="amadrina_habitantes_texto ml-20">
                    <h1 class="text-center mb-16 text-5xl">Amadrina un habitante de Santuario PATOdalavida</h1>
                    <p class="text-[#47462d] text-xl">Ser su madrina o padrino significa que nos das la oportunidad de ofrecerle todas las atenciones que necesita para tener una vida digna. Cada habitante puede tener varias madrinas o padrinos.</p>
                    <p class="text-[#47462d] text-xl">La aportación mínima es de 10€ al mes.</p>
                </div>
            </div>

            <!-- GRID IMÁGENES DE LOS HABITANTES/FORMATO BOTÓN QUE TE LLEVA A HABITANTES -->
            <div class="grid-habitantes border-b-2 border-b-[#47462d]/50 ml-20 mr-20 pb-20">
                <GridHabitantes/>
            </div>
            



            <!-- BENEFICIOS DE AMADRINAR (PEGATINA + CARTA + CORREOS ACTUALIZACIÓN AMADRINADO) -->

            <div class="beneficios_amadrinar px-20 py-20">
                <div class="beneficios_amadrinar_texto flex items-center">

                    <img src="/public/AmadrinaImages/certificado.png" alt="imagen certificado y pegatina" class="mr-14 w-1/2">

                    <p class="texto mb-14 text-center">Al amadrinar estarás salvando una vida y recibirás un certificado oficial de amadrinamiento con la foto a color de tu ahijada/o. Además, te enviaremos también una pegatina de "madrina/padrino orgulloso" totalmente exclusiva.</p>
                </div>
            </div>

                <div class=" flex flex-col items-center">
                    <p class="texto px-20 mb-4 text-center"> Ayudándonos obtendrás VENDAJAS FISCALES. Podrás desgravar el 80% de los primeros 150€ donados; a partir de ahí, desgravará un 35%.</p>
                    <p class="texto px-20 mb-16"> Contáctanos a patodalavida@info si tienes alguna duda para tu amadrinamiento.</p>
                    <button class="informacion_fiscales items-center mb-8 w-32 h-12  bg-[#857a5c] text-white rounded hover:bg-[#6e654c]  ">Más información</button>
                </div>

            
            <!-- CÓMO NOS AYUDAS AMADRINANDO A UN HABITANTE -->

            <div class="texto_ayuda">
                <h1 class="ayuda text-3xl font-bold text-center mb-16 mt-16">
                    ¿Cómo nos ayudas amadrinando a un habitante?
                </h1>
                <div class="grid-ayuda grid grid-cols-1 md:grid-cols-3 gap-4 mx-20 my-20"> 
                    <div class="bg-[#857a5c]  text-white  p-6 text-center rounded-lg shadow-md"> 
                        <img src="/public/carrot.svg" alt="carrot Icon" class="mb-4 mx-6  text-center"> 
                        <p>Recibe cada día una alimentación rica en nutrientes que le ayuda a mantenerse sano y disfrutar.
                        </p> 
                    </div> 

                    <div class="bg-[#857a5c]  text-white  p-6 text-center rounded-lg shadow-md"> 
                        <img src="/public/house.svg" alt="House Icon" class="mx-full mb-4"> 
                        <p>Se cubren los gastos de los tratamiento médicos y veterinarios para que esté sano.
                        </p> 
                    </div> 

                    <div class="bg-[#857a5c]  text-white  p-6 text-center rounded-lg shadow-md"> 
                        <img src="/public/heart-regular.svg" alt="Heart Icon" class="mx-6 mb-4"> 
                        <p>Les das un lugar donde vivir y sentirse protegido y seguro.
                        </p> 
                    </div>
                </div>
            </div>
            




        </div>
</div>

</template>



<script>

import GridHabitantes from '../components/GridHabitantes.vue'
export default {
    name: 'Amadrina',
    components:{
        GridHabitantes
    },
    data(){
        return{
            images:[
                "/public/AmadrinaImages/caroussel.amadrina.1.png",
                "/public/AmadrinaImages/caroussel.amadrina.2.png",
                "/public/AmadrinaImages/caroussel.amadrina.3.png",
                "/public/AmadrinaImages/caroussel.amadrina.4.png",
                "/public/AmadrinaImages/caroussel.amadrina.5.png",
                "/public/AmadrinaImages/caroussel.amadrina.6.png"
            ],
            // indica el índice de la imagen del caroussel
            currentIndex:0,
            //intervalo de tiempo para el cambio de imagen
            interval:null,
        };
        
    },
    mounted(){
        this.startCaroussel();
        // iniciar el caroussel cuando se active la vista
    },
    methods: {
        // método para cambiar la imagen del caroussel
        startCaroussel(){
            this.interval = setInterval(() => {
                this.nextImage();},3000);
            },
            nextImage(){
                this.currentIndex= (this.currentIndex + 1)% this.images.length;

            },
        },
        beforeUnmount(){
            clearInterval(this.interval);
        },      
};
        

</script>






<style>
    
</style>
