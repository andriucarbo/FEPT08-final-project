<template>

    <div class="cabeceraMision relative flex flex-col justify-center items-center w-full h-[400px] m bg-cover bg-center bg-no-repeat" style="background-image: url('/MisionImages/caminoMision.png');">
        <!-- Cabecera de la misión -->
    </div>

    <div class="misionContainer p-6 rounded-lg shadow-md">
        <h1 class="titulo1 text-[#47462d] text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-center mt-10 sm:mt-14 lg:mt-20">Misión y valores</h1>
    
    <div class="mainValores flex flex-col items lg:flex-row items-stretch m-4 lg:m-10" >
        
    <div class="carousel-container flex-1 p-4 bg-white bg-opacity-40 rounded-md shadow-md mt-20">
        <carousel 
            @next="next"
            @prev="prev"
        >
            <carousel-slide v-for="(slide, index) in slides" 
                :key="slide" 
                :index="index"
                :visibleSlide="visibleSlide"
                :direction="direction"
                >
                <img :src="slide" class="w-full h-auto object-cover"/>
            </carousel-slide>
        </carousel>

        <div class="w-full lg:w-1/2 p-8 text-[#857a5c]">
            <div class="text-center">
                <p class="text-4xl m-4 "><strong>Misión</strong></p>
                <p class="text-center ">Preservar y recuperar el ecosistema de fauna y flora salvaje de nuestra zona tratando que haya el menor impacto humano. Educar a las personas para que nuestra misión llegue más lejos y pueda tener mayor impacto en la naturaleza.</p>
                <p class="text-4xl m-10"><strong>Visión</strong></p>
                <p class="text-center ">La naturaleza es perfecta y tiene sus propios sistemas de autorregulación, muchas veces incompresibles para la mente humana. El impacto de nuestra civilización no hace más que perjudicar el frágil equilibrio de nuestro planeta. Por ello nuestra visión es de máximo respeto y mínimo impacto para la naturaleza.</p>
                <p class="text-4xl m-10"><strong>Valores</strong></p>
                <p class="text-center">*Respeto hacia el medio natural*Responsabilidad*<br>*Concienciación*Compromiso*<br>*Desarrollo humano*</p>
            </div>
        </div>


    </div>
        
        
</div>
</div>

</template>


<script>
import Carousel from '../components/Carousel.vue';
import CarouselSlide from '../components/CarouselSlide.vue'; 
export default {
    name: 'Mision',
    components: {Carousel, CarouselSlide},
    data(){
        return{
            slides: [
                '/CarouselPics/hens (Sitio web).png',
                '/CarouselPics/baby goat (Sitio web).png',
                '/CarouselPics/vacas grupo (Sitio web).png',
                '/CarouselPics/goats comiendo (Sitio web).png',
                '/CarouselPics/caballos (Sitio web).png'
            ],
            visibleSlide : 0, //en el principio muestrame la primera imagen
            direction: 'left',
        }
    },
    computed: {
        slidesLen(){
            return this.slides.length;
        }
    },

    methods: {
        next(){
            if(this.visibleSlide >= this.slidesLen - 1){
                this.visibleSlide = 0;
            }else{
                this.visibleSlide++;
            }
            this.direction = "left"
        },
        prev(){
            if(this.visibleSlide <= 0){
                this.visibleSlide = this.slidesLen - 1;
            }else{
                this.visibleSlide--;
            }
            this.direction = "right"
        },}
}
</script>



<style>
    
</style>