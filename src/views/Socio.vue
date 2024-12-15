<template>
    <div class="contenedor_socio">
        <div class="socio">
            <div class="socio_imagen">
                <img src="/public/ColaboraImages/colabora_socio.png" alt="imagen niño y pollito con las cabezas juntas"
                    class="w-full h-auto md:h-1/4 bg-cover bg-no-repeat bg-center">
            </div>
            <div class="socio">
                <h1 class="text-[#47462d] text-5xl sm:text-7xl lg:text-9xl text-center mt-10 sm:mt-20">
                    Hazte Socia/o
                </h1>
                <p
                    class="text-[#47462d] text-xl sm:text-2xl lg:text-3xl text-center mx-4 sm:mx-16 lg:mx-36 my-8 sm:my-16">
                    Las socias y socios proporcionan un fuerte pilar de apoyo para Santuario PATOdalavida para poder
                    llevar a cabo todo el trabajo de rescate y rehabilitación de los animales.
                </p>
                <p
                    class="text-[#47462d] text-xl sm:text-2xl lg:text-3xl text-center mx-4 sm:mx-16 lg:mx-36 my-8 sm:my-16">
                    Al ser socio/a, podrás participar en las actividades de la organización, recibir información de
                    última hora sobre los animales que están en nuestro cuidado y estar al tanto de las últimas noticias
                    de la organización.
                </p>
                <p
                    class="text-[#47462d] text-xl sm:text-2xl lg:text-3xl text-center mx-4 sm:mx-16 lg:mx-36 my-8 sm:my-16">
                    Únete hoy para hacer tu aportación mensual. Recuerda que tu donación tiene beneficios fiscales.
                </p>
            </div>
        </div>

        <div class="button_donacion flex flex-wrap justify-evenly mb-10 sm:mb-20 mx-4 sm:mx-20">
            <button v-for="amount in amounts" :key="amount" @click="selectAmount(amount)"
                :class="['monto', 'text-2xl sm:text-3xl lg:text-4xl', 'p-2 sm:p-4', 'border', 'border-[#47462d]', 'hover:border-2', 'hover:border-[#47462d]', { 'bg-[#47462d]': selectedAmount === amount, 'text-white': selectedAmount === amount }]">
                {{ amount }}
            </button>
        </div>

        <div class="mb-4 mx-4 sm:mx-20">
            <label class="block text-gray-700">Cantidad Voluntaria (€/mes)</label>
            <input type="number" v-model="customAmount" @input="selectAmount(customAmount)"
                class="w-full p-2 border border-gray-300 rounded-md">
        </div>

        <div v-if="selectedAmount"
            class="mt-4 mb-10 sm:mb-20 text-2xl sm:text-3xl lg:text-4xl text-center text-[#47462d]">
            Has seleccionado una cuota de {{ selectedAmount }}.
        </div>

        <FormSocio></FormSocio>
    </div>
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
.socio {
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