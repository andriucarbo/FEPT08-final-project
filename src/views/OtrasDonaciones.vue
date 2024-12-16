<template>
    <div class="encabezado">
        <div class="donativo_imagen"> <img :src="'/OtrasDonacionesImages/OtrasDonacionesPortada.png'"
                alt="imagen vaca de espaldas"
                class="bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center w-full" /> </div>
        <div class="texto">
            <h1
                class="dona text-[#47462d] text-5xl sm:text-6xl md:text-7xl lg:text-9xl text-center mt-8 sm:mt-12 md:mt-16 lg:mt-20">
                Otras formas de colaborar </h1>
            <p
                class="dona text-[#47462d] text-base sm:text-lg md:text-xl lg:text-2xl text-center mx-4 sm:mx-8 md:mx-16 lg:mx-36 my-4 sm:my-8 md:my-12 lg:my-16">
                Hay muchas formas de ayudar a Fundación Santuario PATOdalavida y conseguir un impacto directo en la vida
                de los habitantes y en la de millones de animales que todavía aún sufren en las granjas y mataderos.
            </p>
            <p
                class="socio text-[#47462d] text-base sm:text-lg md:text-xl lg:text-2xl text-center mx-4 sm:mx-8 md:mx-16 lg:mx-36 my-4 sm:my-8 md:my-12 lg:my-16">
                Todas y cada una de vuestras donaciones son muy importantes para nosotras. No podríamos continuar
                nuestro trabajo de rescato y cuidados sin la ayuda de personas como vosotros. </p>
            <p
                class="socio text-[#47462d] text-base sm:text-lg md:text-xl lg:text-2xl text-center mx-4 sm:mx-8 md:mx-16 lg:mx-36 my-4 sm:my-8 md:my-12 lg:my-16">
                Recuerda que tu donación tiene beneficios fiscales. </p>
        </div>

        <!-- BOTÓN QUE TE LLEVA A BENEFICIOS FISCALES -->

        <div class="texto flex justify-center mb-10 md:mb-20 text-xl md:text-2xl">
            <button type="submit" @click="navigateTo('/Colabora/BeneficiosFiscales')"
                class="bg-[#47462d]/50 text-white rounded-md hover:bg-[#47462d] transition duration-300 p-3 md:p-4">Saber
                más</button>
        </div>
    </div>

    <!-- CÓDIGO TARJETAS DINÁMICAS DONACIONES -->

    <div class="container mx-auto px-4 py-6 sm:py-8 md:py-10 lg:py-12">
        <div class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            <div v-for="(item, index) in items" :key="index"
                class="bg-[#f0ede8] p-5 sm:p-6 md:p-7 lg:p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer">
                <h3 class="texto font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#47462d] mb-3 sm:mb-4">{{
                    item.title }}</h3>
                <p class="texto text-gray-600 text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-5">{{
                    item.shortDescription }}</p> <button @click="toggleCard(index)" type="button"
                    class="texto bg-[#47462d]/50 text-white px-4 py-2 rounded-md hover:bg-[#47462d] transition duration-300 text-sm sm:text-base md:text-lg lg:text-xl">
                    Leer más </button>
            </div>
        </div>
        <div v-if="selectedItem !== null"
            class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div
                class="texto bg-white rounded-lg shadow-2xl w-full max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-4xl max-h-[90vh] overflow-y-auto">
                <div class="p-5 sm:p-6 md:p-8 lg:p-10">
                    <h2 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">{{
                        items[selectedItem].title }}</h2>
                    <div class="text-gray-700 text-base sm:text-lg md:text-xl lg:text-2xl space-y-4 sm:space-y-6">
                        <template v-for="(content, i) in items[selectedItem].fullDescription" :key="i">
                            <p v-if="content.type === 'text'">{{ content.value }}</p> <img
                                v-else-if="content.type === 'image'" :src="content.value" :alt="content.alt"
                                class="max-w-full h-auto mx-auto rounded-lg shadow-md" />
                            <table v-else-if="content.type === 'table'"
                                class="w-full border-collapse border border-gray-300">
                                <tr v-for="(row, rowIndex) in content.value" :key="rowIndex">
                                    <td v-for="(cell, cellIndex) in row" :key="cellIndex"
                                        class="border border-gray-300 p-2 sm:p-3"> {{ cell }} </td>
                                </tr>
                            </table>
                        </template>
                    </div> <button @click="closeCard"
                        class="mt-6 sm:mt-8 bg-[#47462d]/50 text-white px-4 py-2 rounded-md hover:bg-[#47462d] transition duration-300 text-sm sm:text-base md:text-lg lg:text-xl">
                        Cerrar </button>
                </div>
            </div>
        </div>
    </div> <!-- VÍDEO FINAL -->
    <div class="flex justify-center items-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 mt-8 sm:mt-12 md:mt-16 lg:mt-20">
        <video ref="videoPlayer" autoplay loop muted class="w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
            <source :src="videoSource" type="video/mp4">
        </video>
    </div>
    <div class="texto flex justify-center text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 mt-8 sm:mt-12 md:mt-16 lg:mt-20">
        <p class="text-base sm:text-lg md:text-xl lg:text-2xl mx-4 sm:mx-8 md:mx-16 lg:mx-64">Con tus donaciones, haces
            que cabras como Clotilde y Morfeo puedan seguir creciendo en libertad y rodeadas de personas que se encargan
            de
            que lo hagan en un entorno lleno de cariño</p>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

export default {
    name: 'YourComponentName',
    setup() {
        const items = ref([
            // Regala un amadrinamiento
            {
                title: 'Regala un Amadrinamiento',
                shortDescription: '¡Ahora puedes regalar un amadrinamiento a esa persona tan especial!',
                fullDescription: [
                    { type: 'text', value: 'El destinatario del regalo recibirá un certificado de amadrinamiento y el boletín informativo de Santuario PATOdalavida.' },
                    { type: 'image', value: '/public/OtrasDonacionesImages/regala amadrinamiento.png', alt: 'Descripción de la imagen' },
                    { type: 'text', value: 'Los amadrinamientos de regalo duran un año y tienen un coste de 120€ en una sola cuota.' },
                    { type: 'text', value: 'Para solicitar un amadrinamiento de regalo, contáctanos a: patodalavida@info.' }
                ]
            },
            // Herencias y legados
            {
                title: 'Herencias y legados',
                shortDescription: 'Marca la diferencia...',
                fullDescription: [
                    { type: 'text', value: 'Continúa cambiando el mundo. Deja un legado que perdure.' },
                    { type: 'text', value: 'Incluir a los animales en el testamento o dejar una parte de tu patrimonio a través del legado abre una puerta a cambios notables. Es una manera fácil y significativa de seguir cambiando el mundo de los animales y asegurarte de que sigan teniendo un espacio seguro por mucho tiempo. El procedimiento es muy sencillo, tan solo tienes que incluirnos en tu testamento con los siguientes datos de Santuario PATOdalavida' },
                    {
                        type: 'table', value: [
                            ['NIF:', 'B-5483493455'],
                            ['Nº de resgistro:', '293433JSO'],
                            ['Domicilio', 'CP0000 (Girona)']
                        ]
                    },
                    { type: 'text', value: 'Cualquier duda nos puedes escribir a patodalavida@info' }
                ]
            },
            // BIZUM
            {
                title: 'Bizum',
                shortDescription: '¡Ahora puedes enviar dinero desde tu teléfono!',
                fullDescription: [
                    { type: 'text', value: 'Ahora puedes colaborar con la Fundación Santuario PATOdalavida desde el móvil a través de Bizum.' },
                    { type: 'image', value: '/OtrasDonacionesImages/BIZUM.png', alt: 'Descripción de la imagen' },
                    { type: 'text', value: 'Envía tu donación usando el código 02165 o buscando nuestro nombre en la aplicación.' }
                ]
            },
            // Recaudación de fondos Instagram y Facebook
            {
                title: 'Recaudación de fondos',
                shortDescription: '¡Nos encanta ver a nuestros seguidores ayudar a los animales del santuario de una manera creativa!',
                fullDescription: [
                    { type: 'text', value: 'Estas son algunas de las formas en las que puedes recaudar fondos para Santuario PATOdalavida' },
                    { type: 'image', value: '/OtrasDonacionesImages/FACEBOOK.png', alt: 'Descripción de la imagen' }
                ]
            },
            // Donación criptomonedas
            {
                title: 'Dona criptomonedas',
                shortDescription: '¡Convierte Tokens en animales rescatados!',
                fullDescription: [
                    { type: 'text', value: 'Gracias a tu donación podemos dar cuidados, la alimentación, el espacio y la atención médica a los animales que necesitan nuestra ayuda.' },
                    { type: 'image', value: '/OtrasDonacionesImages/Token.png', alt: 'Descripción de la imagen' }
                ]
            }
        ]);

        const selectedItem = ref(null);
        const videoSource = '/OtrasDonacionesImages/voluntariavideo.mp4';
        const router = useRouter();

        const toggleCard = (index) => {
            selectedItem.value = index;
        };

        const closeCard = () => {
            selectedItem.value = null;
        };

        const navigateTo = (route) => {
            router.push(route);
        };

        onMounted(() => {
            const videoPlayer = document.querySelector('video');
            if (videoPlayer) {
                videoPlayer.play();
            }
        });

        return {
            items,
            selectedItem,
            toggleCard,
            closeCard,
            videoSource,
            navigateTo
        };
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
