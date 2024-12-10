<template>
    <div>
        <h1 class="socio-view">Socio view</h1> 
    </div>

    <div class="contenedor_socio">
        <div class="socio">
            <div class="socio_imagen">
                <img :src="'/public/ColaboraImages/colabora_socio.png'" alt="imagen lechón" class=" bg-cover bg-no-repeat bg-center  flex flex-col justify-center items-center w-full">
            </div>
            <div class="socio_info">
                <h1 class="socio text-[#47462d] text-9xl text-center">
                    Hazte Socia/o
                </h1>
                <p class="socio text-[#47462d] text-2xl text-center mx-36 my-16">
                    Las socias y socios proporcionan un fuerte pilar de apoyo para Santuario PATOdalavida para poder llevar a cabo todo el trabajo de rescate y rehabilitación de los animales.
                </p>
                <p class="socio text-[#47462d] text-2xl text-center mx-36 my-16">
                    Al ser socio/a, podrás participar en las actividades de la organización, recibir información de última hora sobre los animales que están en nuestro cuidado y estar al tanto de las últimas noticias de la organización.
                </p>
                <p class="socio text-[#47462d] text-2xl text-center mx-36 my-16">
                    Únete hoy para hacer tu aportación mensual. Recuerda que tu donación tiene beneficios fiscales.
                </p>
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

        <FormSocio></FormSocio>

</template>




<script>
import FormSocio from '../components/FormSocio.vue';
export default {
    components: { FormSocio },
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