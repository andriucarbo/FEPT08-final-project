<template>
    <div>
        <div class="texto">
            <div class="beneficios_imagen">
                <img :src="'/BeneficiosImages/BeneficiosPortada.png'" alt="imagen lechón"
                    class="bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center w-full h-1/3 sm:h-1/2 md:h-2/3 lg:h-full">
            </div>
            <div>
                <h1
                    class="beneficios text-[#47462d] text-5xl sm:text-6xl md:text-7xl lg:text-9xl text-center mt-8 sm:mt-12 md:mt-16 lg:mt-20">
                    Beneficios Fiscales
                </h1>
            </div>

            <div class="beneficios_info">
                <div>
                    <p
                        class="beneficios text-[#47462d] text-base sm:text-lg md:text-xl lg:text-2xl text-center mx-4 sm:mx-8 md:mx-16 lg:mx-36 my-4 sm:my-8 md:my-12 lg:my-16">
                        Es importante que contactes con nosotros antes de finalizar el año a
                        padodalavida.donaciones@info y que indiques correctamente los siguientes datos: Nombre completo,
                        DNI, Provincia, total de aportaciones realizadas durante el año (con justificantes bancarios)
                    </p>
                    <p
                        class="beneficios text-[#47462d] text-base sm:text-lg md:text-xl lg:text-2xl text-center mx-4 sm:mx-8 md:mx-16 lg:mx-36 my-4 sm:my-8 md:my-12 lg:my-16">
                        Durante el mes de enero se enciarán a la Hacienda Tributaria para que así, al realizar tu
                        declaración de la renta, consten tus aportaciones a nuestra fundación.
                    </p>
                    <p
                        class="beneficios text-[#47462d] text-base sm:text-lg md:text-xl lg:text-2xl text-center mx-4 sm:mx-8 md:mx-16 lg:mx-36 my-4 sm:my-8 md:my-12 lg:my-16">
                        Para más información contacta con nosotros a padodalavida.donaciones@info
                    </p>
                </div>
            </div>

            <div
                class="beneficios_info flex flex-col sm:flex-row justify-evenly items-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
                <img src="/BeneficiosImages/personaFisica.png" alt="Beneficios fiscales persona física"
                    class="rounded-md mb-4 sm:mb-0 w-full sm:w-auto">
                <img src="/BeneficiosImages/personaJuridica.png" alt="Beneficios persona jurídica"
                    class="rounded-md w-full sm:w-auto">
            </div>
        </div>
    </div>

    <!-- FORMULARIO SOLICITUD DE BENEFICIOS FISCALES -->

    <div class="texto flex flex-col items-center justify-center mb-8">
        <div
            class="bg-[#f3eee4] p-4 sm:p-6 md:p-8 rounded-lg shadow-lg mb-4 sm:mb-6 md:mb-8 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 text-base sm:text-lg md:text-xl lg:text-2xl">
            <h2 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-center"> Certificado de donación
            </h2>
            <p class="mb-4">El Santuario PATOdalavida se encuentra incuida entre las fundaciones reguladas en el art. 16
                de la "Ley
                49/2002, de 23 de diciembre de régimen fiscal de las entidades sin fines lucrativos y de los incentivos
                fiscales al mecenazgo" por lo que podemos realizar un certificado de donación que puedes desgrabarte en
                la declaración de la renta.</p>
            <p class="uppercase mb-4">Fecha límite para rellenar el formulario es el 20 de enero de 2025</p>
            <p>Para ello requerimos algunos datos personales</p>
        </div>

        <div
            class="bg-[#f3eee4] p-4 sm:p-6 md:p-8 rounded-lg shadow-lg mb-4 sm:mb-6 md:mb-8 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 text-base sm:text-lg md:text-xl lg:text-2xl">
            <form>
                <div class="mb-6">
                    <label for="mail" class="block font-medium mb-2">Mail de contacto:</label>
                    <input type="text" id="mail" v-model="mail" class="w-full p-2 border border-gray-300 rounded-md"
                        required />
                </div>
            </form>
        </div>

        <div
            class="bg-[#f3eee4] p-4 sm:p-6 md:p-8 rounded-lg shadow-lg mb-4 sm:mb-6 md:mb-8 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 text-base sm:text-lg md:text-xl lg:text-2xl">
            <form>
                <div class="mb-6">
                    <label for="name" class="block font-medium mb-2">Nombre:</label>
                    <input type="text" id="name" v-model="name" class="w-full p-2 border border-gray-300 rounded-md"
                        required />
                </div>
            </form>
        </div>

        <div
            class="bg-[#f3eee4] p-4 sm:p-6 md:p-8 rounded-lg shadow-lg mb-4 sm:mb-6 md:mb-8 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 text-base sm:text-lg md:text-xl lg:text-2xl">
            <form>
                <div class="mb-6">
                    <label for="surname" class="block font-medium mb-2">Apellidos:</label>
                    <input type="text" id="surname" v-model="surname"
                        class="w-full p-2 border border-gray-300 rounded-md" required />
                </div>
            </form>
        </div>

        <div
            class="bg-[#f3eee4] p-4 sm:p-6 md:p-8 rounded-lg shadow-lg mb-4 sm:mb-6 md:mb-8 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 text-base sm:text-lg md:text-xl lg:text-2xl">
            <form>
                <div class="mb-6">
                    <label for="dni" class="block font-medium mb-2">DNI/CIF:</label>
                    <input type="number" id="dni" v-model="dni" class="w-full p-2 border border-gray-300 rounded-md"
                        required />
                </div>
            </form>
        </div>

        <div
            class="bg-[#f3eee4] p-4 sm:p-6 md:p-8 rounded-lg shadow-lg mb-4 sm:mb-6 md:mb-8 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 text-base sm:text-lg md:text-xl lg:text-2xl">
            <form>
                <div class="mb-6">
                    <label for="location" class="block font-medium mb-2">Dirección completa:</label>
                    <input type="text" id="location" v-model="location"
                        class="w-full p-2 border border-gray-300 rounded-md" required />
                </div>
            </form>
        </div>

        <div
            class="bg-[#f3eee4] p-4 sm:p-6 md:p-8 rounded-lg shadow-lg mb-4 sm:mb-6 md:mb-8 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 text-base sm:text-lg md:text-xl lg:text-2xl">
            <form>
                <div class="mb-6">
                    <label for="cp" class="block font-medium mb-2">Código Postal:</label>
                    <input type="number" id="cp" v-model="cp" class="w-full p-2 border border-gray-300 rounded-md"
                        required />
                </div>
            </form>
        </div>

        <div
            class="bg-[#f3eee4] p-4 sm:p-6 md:p-8 rounded-lg shadow-lg mb-4 sm:mb-6 md:mb-8 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 text-base sm:text-lg md:text-xl lg:text-2xl">
            <form @submit.prevent="submitForm">
                <p class="mb-4">¿Por qué pides la desgravación?</p>
                <div class="mb-4">
                    <label class="block mb-2">
                        <input type="radio" name="voluntariado" value="visita" v-model="visita" class="mr-2" />
                        Visita
                    </label>
                    <label class="block mb-2">
                        <input type="radio" name="voluntariado" value="donacionPuntual" v-model="donacionPuntual"
                            class="mr-2" />
                        Donación puntual
                    </label>
                    <label class="block mb-2">
                        <input type="radio" name="voluntariado" value="colegios" v-model="colegios" class="mr-2" />
                        Colegios, escuelas o entidades
                    </label>
                    <label class="block mb-2">
                        <input type="radio" name="voluntariado" value="padrinos" v-model="padrinos" class="mr-2" />
                        Madrinas, padrinos, socios o teamers
                    </label>
                </div>
            </form>
        </div>

        <div
            class="bg-[#f3eee4] p-4 sm:p-6 md:p-8 rounded-lg shadow-lg mb-4 sm:mb-6 md:mb-8 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 text-base sm:text-lg md:text-xl lg:text-2xl">
            <form>
                <div class="mb-6">
                    <label for="renta" class="block font-medium mb-2">Donación realizada en el año 2023 (compararemos
                        estos datos)</label>
                    <input type="text" id="renta" v-model="renta" class="w-full p-2 border border-gray-300 rounded-md"
                        required />
                </div>
            </form>
        </div>

        <div
            class="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 md:gap-12 mx-4 sm:mx-8 md:mx-12 my-4 sm:my-8 md:my-12 text-base sm:text-lg md:text-xl lg:text-2xl">
            <button @click="submitForm"
                class="bg-[#47462d]/50 text-white p-2 rounded-md hover:bg-[#47462d] transition duration-300 w-full sm:w-auto mb-4 sm:mb-0">Enviar
                formulario</button>
            <button @click="resetForm"
                class="bg-[#47462d]/50 text-white p-2 rounded-md hover:bg-[#47462d] transition duration-300 w-full sm:w-auto">Borrar
                formulario</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "VoluntariadoForm",
    data() {
        return {
            voluntariado: "",
            fields: [
                { id: "mail", label: "Mail de contacto:", type: "text", model: "" },
                { id: "name", label: "Nombre:", type: "text", model: "" },
                { id: "surname", label: "Apellidos:", type: "text", model: "" },
                { id: "dni", label: "dni:", type: "number", model: "" },
                { id: "location", label: "Dirección completa:", type: "text", model: "" },
                { id: "cp", label: "Código Postal:", type: "number", model: "" },
                { id: "renta", label: "Donación realizada en el año 2023 (compararemos estos datos)", type: "text", model: "" },
            ],
        };
    },
    methods: {
        submitForm() {
            // Lógica para manejar el envío del formulario
            console.log("Voluntariado:", this.voluntariado);
            this.fields.forEach(field => {
                console.log(field.label, field.model);
            });
            alert("Formulario enviado");
        },
        resetForm() {
            this.voluntariado = "";
            this.fields.forEach(field => {
                field.model = "";
            }); alert("Formulario borrado");
        },
    },
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

<!-- v-model permite recoger los datos que se rellenen en el formulario -->
