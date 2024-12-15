<template>
    <div class="contenedor_amadrina">
        <div class="amadrina">
            <div class="amadrina__imagen">
                <img src="/public/AmadrinaImages/AmadrinaPortada.png" alt="mujer abrazando a conejo blanco"
                    class="w-full h-auto md:h-1/3 bg-cover bg-no-repeat bg-center">
            </div>

            <div class="texto">
                <h1 class="text-center mb-8 md:mb-16 mt-10 md:mt-20 text-4xl md:text-6xl lg:text-9xl">Amadrina/Apadrina
                </h1>
            </div>

            <div
                class="texto flex flex-col md:flex-row items-center mb-12 md:mb-36 border-b-2 border-b-[#47462d]/50 mx-4 md:mx-20">
                <div class="w-full md:w-1/2 text-[#47462d] mx-4 md:mx-20">
                    <p class="text-center mb-6 md:mb-12 text-lg md:text-2xl">Tú puedes cambiar la vida de los animales
                        maltratados que llegan a PATOdalavida</p>
                    <p class="text-center mb-6 md:mb-12 text-lg md:text-2xl">Los animales considerados de granja son de
                        los animales más maltratados en el mundo. Sus vidas son habitualmente invisibilizadas y pocas
                        veces tienen la oportunidad de salvarse y de vivir las vidas que les corresponden, pero con tu
                        ayuda podemos cambiar eso.</p>
                    <p class="text-center mb-6 md:mb-12 text-lg md:text-2xl">Amadrinando o Apadrinando haces posible que
                        puedan ser rescatados, que reciban atención veterinaria, una alimentación variada y saludable,
                        un entorno de libertad y los cuidados necesarios para poder disfrutar del resto de sus vidas.
                    </p>
                    <p class="text-center mb-6 md:mb-12 text-lg md:text-2xl">Ellos necesitan de esas personas que les
                        hagan saber que sus vidas sí importan.</p>
                    <p class="text-center mb-6 md:mb-12 text-lg md:text-2xl">Por ese motivo, nuestros habitantes buscan
                        madrinas y padrinos que quieran darles esa oportunidad. Tú puedes ser el apoyo que necesitamos
                        para salvar vidas y defender los derechos de todos los animales.</p>
                </div>

                <div class="caroussel mt-10 md:mt-20 md:ml-20 mb-10 md:mb-20 w-full md:w-1/2">
                    <div class="caroussel_image">
                        <img :src="images[currentIndex]" alt="Imagen del caroussel" class="w-full h-auto object-cover">
                        <span v-for="(image, index) in images" :key="index"
                            class="inline-block w-2 h-2 rounded-full mx-1"></span>
                    </div>
                </div>
            </div>

            <div class="mx-4 md:mx-20 mb-10 md:mb-20">
                <div class="texto md:ml-20">
                    <h1 class="text-center mb-8 md:mb-16 text-3xl md:text-5xl">Amadrina un habitante de Santuario
                        PATOdalavida</h1>
                    <p class="text-[#47462d] text-lg md:text-2xl text-center">Ser su madrina o padrino significa que nos
                        das la oportunidad de ofrecerle todas las atenciones que necesita para tener una vida digna.
                        Cada habitante puede tener varias madrinas o padrinos.</p>
                    <p class="text-[#47462d] text-lg md:text-2xl text-center mt-6 md:mt-12">La aportación mínima es de
                        10€ al mes.</p>
                </div>
            </div>

            <div class="grid-habitantes border-b-2 border-b-[#47462d]/50 mx-4 md:mx-20 pb-10 md:pb-20">
                <GridHabitantes />
            </div>

            <div class="beneficios_amadrinar px-4 md:px-20 py-10 md:py-20">
                <div class="beneficios_amadrinar_texto flex flex-col md:flex-row items-center">
                    <img src="/public/AmadrinaImages/certificado.png" alt="imagen certificado y pegatina"
                        class="mb-6 md:mb-0 md:mr-14 w-full md:w-1/2">
                    <p class="texto mb-8 md:mb-14 text-center text-lg md:text-2xl">Al amadrinar estarás salvando una
                        vida y recibirás un certificado oficial de amadrinamiento con la foto a color de tu ahijada/o.
                        Además, te enviaremos también una pegatina de "madrina/padrino orgulloso" totalmente exclusiva.
                    </p>
                </div>
            </div>

            <div class="flex flex-col items-center px-4 md:px-20">
                <p class="texto mb-4 text-center text-lg md:text-2xl">Ayudándonos obtendrás VENDAJAS FISCALES. Podrás
                    desgravar el 80% de los primeros 150€ donados; a partir de ahí, desgravará un 35%.</p>
                <p class="texto mb-8 md:mb-16 text-lg md:text-2xl">Contáctanos a patodalavida@info si tienes alguna duda
                    para tu amadrinamiento.</p>
            </div>


            <!-- BOTÓN QUE TE LLEVA A BENEFICIOS FISCALES -->

            <div class="texto flex justify-center mb-10 md:mb-20 text-xl md:text-2xl">
                <button type="submit" @click="navigateTo('/Colabora/BeneficiosFiscales')"
                    class="bg-[#47462d]/50 text-white rounded-md hover:bg-[#47462d] transition duration-300 p-3 md:p-4">Saber
                    más</button>
            </div>



            <div class="texto">
                <h1 class="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-16 mt-8 md:mt-16">
                    ¿Cómo nos ayudas amadrinando a un habitante?
                </h1>
                <div class="grid-ayuda grid grid-cols-1 md:grid-cols-3 gap-4 mx-4 md:mx-20 my-10 md:my-20">
                    <div class="bg-[#857a5c] text-white p-6 text-center rounded-lg shadow-md">
                        <img src="/public/carrot.svg" alt="carrot Icon" class="mb-4 mx-auto">
                        <p class="texto text-lg md:text-2xl">Recibe cada día una alimentación rica en nutrientes que le
                            ayuda a mantenerse sano y disfrutar.</p>
                    </div>
                    <div class="bg-[#857a5c] text-white p-6 text-center rounded-lg shadow-md">
                        <img src="/public/house.svg" alt="House Icon" class="mb-4 mx-auto">
                        <p class="texto text-lg md:text-2xl">Se cubren los gastos de los tratamiento médicos y
                            veterinarios para que esté sano.</p>
                    </div>
                    <div class="bg-[#857a5c] text-white p-6 text-center rounded-lg shadow-md">
                        <img src="/public/heart-regular.svg" alt="Heart Icon" class="mb-4 mx-auto">
                        <p class="texto text-lg md:text-2xl">Les das un lugar donde vivir y sentirse protegido y seguro.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<script>
import GridHabitantes from '../components/GridHabitantes.vue';
import { useRouter } from 'vue-router';

export default {
    name: 'Amadrina',
    components: {
        GridHabitantes
    },
    data() {
        return {
            images: [
                "/public/AmadrinaImages/caroussel.amadrina.1.png",
                "/public/AmadrinaImages/caroussel.amadrina.2.png",
                "/public/AmadrinaImages/caroussel.amadrina.3.png",
                "/public/AmadrinaImages/caroussel.amadrina.4.png",
                "/public/AmadrinaImages/caroussel.amadrina.5.png",
                "/public/AmadrinaImages/caroussel.amadrina.6.png"
            ],
            // indica el índice de la imagen del caroussel
            currentIndex: 0,
            // intervalo de tiempo para el cambio de imagen
            interval: null,
            selectedAmount: null,
        };
    },
    mounted() {
        this.startCaroussel();
        // iniciar el caroussel cuando se active la vista
    },
    methods: {
        // método para cambiar la imagen del caroussel
        startCaroussel() {
            this.interval = setInterval(() => {
                this.nextImage();
            }, 3000);
        },
        nextImage() {
            this.currentIndex = (this.currentIndex + 1) % this.images.length;
        },
        selectAmount(amount) {
            this.selectedAmount = amount;
        }
    },
    beforeUnmount() {
        clearInterval(this.interval);
    },
    setup() {
        const router = useRouter();
        const navigateTo = (route) => {
            router.push(route);
        };
        return { navigateTo };
    }
};
</script>


<style>
.texto {
    font-family: 'Crimson Text', serif;
}

@media (min-width: 600px) {
    /* Estilos para pantallas de 600px y más */
}

@media (min-width: 992px) {
    /* Estilos para pantallas de 992px y más */
}

@media (min-width: 1200px) {
    /* Estilos para pantallas de 1200px y más */
}
</style>
