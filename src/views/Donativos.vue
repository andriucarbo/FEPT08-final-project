<template>
    <div class="contenedor_donativo">
        <div class="donativo">
            <div class="donativo_imagen">
                <img :src="'/public/DonaImages/DonaPortada.png'" alt="imagen vaca de espaldas"
                    class="w-full h-auto bg-cover bg-no-repeat bg-center">
            </div>
            <div class="texto px-4 md:px-20 lg:px-36">
                <h1 class="dona text-[#47462d] text-4xl sm:text-6xl lg:text-9xl text-center mt-8 md:mt-16">
                    Dona hoy
                </h1>
                <p class="dona text-[#47462d] text-lg sm:text-xl lg:text-2xl text-center my-8 md:my-16">
                    Gracias a tu donación podemos dar los cuidados, la alimentación, el espacio y los gastos
                    veterinarios a animales que han sufrido la explotación y maltrato.
                </p>
                <p class="socio text-[#47462d] text-lg sm:text-xl lg:text-2xl text-center my-8 md:my-16">
                    Cada año millones de animales son sacrificados en mataderos y sufren en granjas. En Santuario
                    PATOdalavida no solo reciben los cuidados, sino que se convierten en embajadores de un mundo mejor.
                </p>
                <p class="socio text-[#47462d] text-lg sm:text-xl lg:text-2xl text-center my-8 md:my-16">
                    Recuerda que tu donación tiene beneficios fiscales.
                </p>
            </div>

            <!-- BOTÓN QUE TE LLEVA A BENEFICIOS FISCALES -->
            <div class="texto flex justify-center mb-10 md:mb-20 text-xl md:text-2xl">
                <button type="submit" @click="navigateTo('/Colabora/BeneficiosFiscales')"
                    class="bg-[#47462d]/50 text-white rounded-md hover:bg-[#47462d] transition duration-300 p-3 md:p-4">Saber
                    más</button>
            </div>
        </div>

        <div class="texto button_donacion flex flex-wrap justify-evenly mb-10 md:mb-20 mx-4 md:mx-20">
            <button v-for="amount in amounts" :key="amount" @click="selectAmount(amount)"
                :class="['monto', 'text-2xl md:text-4xl', 'p-3 md:p-4', 'border', 'border-[#47462d]', 'hover:border-2', 'hover:border-[#47462d]', { 'bg-[#47462d]': selectedAmount === amount, 'text-white': selectedAmount === amount }]">
                {{ amount }}
            </button>
        </div>

        <div class="mb-4 mx-4 md:mx-20">
            <label class="block text-gray-700">Cantidad Voluntaria (€/mes)</label>
            <input type="number" v-model="customAmount" @input="selectAmount(customAmount)"
                class="w-full p-2 border border-gray-300 rounded-md">
        </div>

        <div v-if="selectedAmount" class="mt-4 mb-10 md:mb-20 text-2xl md:text-4xl text-center text-[#47462d]">
            Has seleccionado una cuota de {{ selectedAmount }}.
        </div>
    </div>

    <FormDona></FormDona>
</template>




<script>
import FormDona from '../components/FormDona.vue';
import { useRouter } from 'vue-router';

export default {
    components: { FormDona },
    data() {
        return {
            amounts: ["10€/mes", "15€/mes", "25€/mes", "50€/mes", "100€/mes", "Otra cantidad"],
            selectedAmount: null,
            customAmount: null,
        };
        
    },
    setup() { 
        const router = useRouter(); 
        const navigateTo = (route) => { 
            router.push(route); 
        }; return { navigateTo 

        }; 
    },
    methods: {
        selectAmount(amount) {
            this.selectedAmount = amount;
        }
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