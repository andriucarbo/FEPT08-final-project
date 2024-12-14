<template>
    <div class="encabezado">
        <div class="donativo_imagen">
            <img :src="'/public/OtrasDonacionesImages/OtrasDonacionesPortada.png'" alt="imagen vaca de espaldas"
                class="bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center w-full" />
        </div>
        <div class="dona_info">
            <h1 class="dona text-[#47462d] text-9xl text-center mt-20">
                Otras formas de colaborar
            </h1>
            <p class="dona text-[#47462d] text-2xl text-center mx-36 my-16">
                Hay muchas formas de ayudar a Fundación Santuario PATOdalavida y
                conseguir un impacto directo en la vida de los habitantes y en la de
                millones de animales que todavía aún sufren en las granjas y mataderos.
            </p>
            <p class="socio text-[#47462d] text-2xl text-center mx-36 my-16">
                Todas y cada una de vuestras donaciones son muy importantes para
                nosotras. No podríamos continuar nuestro trabajo de rescato y cuidados
                sin la ayuda de personas como vosotros.
            </p>
            <p class="socio text-[#47462d] text-2xl text-center mx-36 my-16">
                Recuerda que tu donación tiene beneficios fiscales.
            </p>
        </div>
    </div>


    <!-- CÓDIGO TARJETAS DINÁMICAS DONACIONES -->

    <div class="container mx-auto p-4">
        <div class="grid grid-cols-3 gap-4">
            <div v-for="(item, index) in items" :key="index"
                class="bg-[#f0ede8] p-4 rounded cursor-pointer hover:bg-[#d7d4d0] transition">

                <h3 class="font-bold text-lg mb-2 text-[#47462d] mt-6 ml-4">{{ item.title }}</h3>

                <p class="text-sm text-gray-600 mb-2 ml-4">{{ item.shortDescription }}</p>

                <button @click="toggleCard(index)" type="submit" class=" mt-6 mb-6 ml-4 bg-[#47462d]/50 text-white p-2 rounded-md hover:bg-[#47462d] transition duration-300">
                    Leer más
                </button>
            </div>
        </div>

        <div v-if="selectedItem !== null" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">

            <div class="bg-white p-6 rounded-lg shadow-xl max-w-4xl max-h-[90vh] overflow-y-auto">

                <h2 class="text-2xl font-bold mb-4">{{ items[selectedItem].title }}</h2>

                <div class="mb-6 text-gray-700">
                    <template v-for="(content, i) in items[selectedItem].fullDescription" :key="i">

                        <p v-if="content.type === 'text'" class="mb-4">
                            {{ content.value }}
                        </p>

                        <img v-else-if="content.type === 'image'" :src="content.value" :alt="content.alt"
                            class="mb-4 max-w-full h-auto" />

                        <table v-else-if="content.type === 'table'"
                            class="mb-4 w-full border-collapse border border-gray-300">

                            <tr v-for="(row, rowIndex) in content.value" :key="rowIndex">

                                <td v-for="(cell, cellIndex) in row" :key="cellIndex"
                                    class="border border-gray-300 p-2">
                                    {{ cell }}
                                </td>
                            </tr>
                        </table>
                    </template>
                </div>
                
                <button @click="closeCard" class="mt-6 mb-6 ml-4 bg-[#47462d]/50 text-white p-2 rounded-md hover:bg-[#47462d] transition duration-300">
                    Cerrar
                </button>
            </div>
        </div>

        <!-- VÍDEO FINAL -->
    </div>
    <div class="flex justify-center items-center mb-20 mt-20">
        <video ref="videoPlayer" autoplay loop muted class="w-1/2 ">
            <source :src="videoSource" type="video/mp4" class="w-1/2">
        </video>
    </div>
    <div class="flex justify-center text-center mb-20 mt-20">
        <p class="text-2xl mx-64">Con tus donaciones, haces que cabras como Clotilde y Morfeo puedan seguir creciendo en libertad y rodeadas de personas que se encargan de que lo hagan en un entorno lleno de cariño</p>
    </div>

</template>

<script>
import { ref, onMounted } from 'vue'

export default {
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
                    { type: 'text', value: 'Cualquier duda nos puedes escribir a patodalavida@info' }]
            },

            // BIZUM
            {
                title: 'Bizum',
                shortDescription: '¡Ahora puedes enviar dinero desde tu telédono!',
                fullDescription: [
                    { type: 'text', value: 'Ahora puedes colaborar con la Fundación Santuario PATOdalavida desde el móvil a través de Bizum. ' },
                    { type: 'image', value: '/public/OtrasDonacionesImages/BIZUM.png', alt: 'Descripción de la imagen' },
                    { type: 'text', value: 'Envía tu donación usando el códifo 02165 o buscando nuestro nombre en la aplicación.' },
                ]
            },

            // RECAUDACIÓN DE FONDOS INSTAGRAM Y FACEBOOK
            {
                title: 'Recaudación de fondos',
                shortDescription: '¡Nos encanta ver a nuestros seguidores ayudar a los animales del santuario de una manera creativa! ',
                fullDescription: [
                    { type: 'text', value: 'Estas son algunas de las formas en las que puedes recaudar fondos para Santuario PATOdalavida ' },
                    { type: 'image', value: '/public/OtrasDonacionesImages/FACEBOOK.png', alt: 'Descripción de la imagen' },
                ]
            },

            // DONACIÓN CRYPTOMONEDAS

            {
                title: 'Dona criptomonedas',
                shortDescription: '¡Convierte Tokens en animales rescatados! ',
                fullDescription: [
                    { type: 'text', value: 'Gracias a tu donación podemos dar lo cuidados, la alimentación, el espacio y la atención médica a los animales que necesitan nuestra ayuda.' },
                    { type: 'image', value: '/public/OtrasDonacionesImages/Token.png', alt: 'Descripción de la imagen' },
                ]
            },
        ])

        const selectedItem = ref(null)

        const toggleCard = (index) => {
            selectedItem.value = index
        }

        const closeCard = () => {
            selectedItem.value = null;
        };
        const videoSource = '/public/OtrasDonacionesImages/voluntariavideo.mp4';

        onMounted(() => {
            const videoPlayer = document.querySelector("video"); videoPlayer.play();
        });

        return {
            items,
            selectedItem,
            toggleCard,
            closeCard,
            videoSource
        }
    }
}
</script>
