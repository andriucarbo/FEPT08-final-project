<template>
    <div class="contenedor_donativo">
        <div class="donativo">
            <div class="donativo_imagen">
                <img :src="'/public/DonaImages/DonaPortada.png'" alt="imagen vaca de espaldas" class=" bg-cover bg-no-repeat bg-center  flex flex-col justify-center items-center w-full">
            </div>
            <div class="dona_info">
                <h1 class="dona text-[#47462d] text-9xl text-center">
                    Dona hoy
                </h1>
                <p class="dona text-[#47462d] text-2xl text-center mx-36 my-16">
                Gracias a tu donación podemos dar los cuidados, la alimentación, el espacio y los gastos veterinarios a animales que han sufrido la explotación y maltrato.
                </p>
                <p class="socio text-[#47462d] text-2xl text-center mx-36 my-16">
                Cada año millones de animales son sacrificados en mataderos y sufren en granjas. En Santuario PATOdalavida no solo reciben los cuidados, sino que se convierten en embajadores de un mundo mejor.
                </p>
                <p class="socio text-[#47462d] text-2xl text-center mx-36 my-16 ">
                Recuerda que tu donación tiene beneficios fiscales.
                </p>
            </div>

            <div class="button flex justify-center mb-20">
                <button type="submit" class=" bg-[#47462d]/50 text-white p-2 rounded-md hover:bg-[#47462d] transition duration-300">Saber más</button>
            </div>
        </div>

        <div class="button_donacion flex flex-wrap justify-evenly mb-20 mx-20">
            <!-- Botones que se modifica el bg al hacer click y aparece un mensaje indicando la cantidad escogida -->
            <button v-for="amount in amounts" 
                :key="amount" 
                @click="selectAmount(amount)" 
                :class="['monto', 'text-4xl', 'p-4', 'border', 'border-[#47462d]', 'hover:border-2', 'hover:border-[#47462d]', { 'bg-[#47462d]': selectedAmount === amount, 'text-white': selectedAmount === amount }]" 
                > 
                {{ amount }} 
            </button> 
            </div> 

            <!-- Campo para ingresar una cantidad voluntaria --> 
            <div class="mb-4 mx-20"> 
                <label class="block text-gray-700">Cantidad Voluntaria (€/mes)</label> 
                <input type="number" v-model="customAmount" @input="selectAmount(customAmount)" class="w-full p-2 border border-gray-300 rounded-md"> 
            </div>

            <!-- texto que indica el monto -->
            <div v-if="selectedAmount" class="mt-4 mb-20 text-4xl text-center text-[#47462d]"> Has seleccionado una cuota de {{ selectedAmount }}.
            </div>
        </div>

        <FormDona></FormDona>

</template>




<script>
import FormDona from '../components/FormDona.vue';

export default {
    components: { FormDona },
    data() {
        return {
        amounts: ["10€/mes", "15€/mes", "25€/mes", "50€/mes", "100€/mes", "Otra cantidad"],
        selectedAmount: null,
        customAmount: null,
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
    
</style>