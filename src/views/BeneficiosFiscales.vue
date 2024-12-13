<template>
    <div>
        <div class="container_beneficios">
            <div class="beneficios_imagen">
                <img :src="'/public/BeneficiosImages/BeneficiosPortada.png'" alt="imagen lechón"
                    class=" bg-cover bg-no-repeat bg-center  flex flex-col justify-center items-center w-full">
            </div>
            <div>
                <h1 class="beneficios text-[#47462d] text-9xl text-center mt-20">
                    Beneficios Fiscales
                </h1>
            </div>

            <div class="beneficios_info">
                <div>
                    <p class="beneficios text-[#47462d] text-2xl text-center mx-36 my-16">
                        Es importante que contactes con nosotros antes de finalizar el año a
                        padodalavida.donaciones@info y que indiques correctamente los siguientes datos: Nombre completo,
                        DNI, Provincia, total de aportaciones realizadas durante el año (con justificantes bancarios)
                    </p>
                    <p class="beneficios text-[#47462d] text-2xl text-center mx-36 my-16">
                        Durante el mes de enero se enciarán a la Hacienda Tributaria para que así, al realizar tu
                        declaración de la renta, consten tus aportaciones a nuestra fundación.
                    </p>
                    <p class="beneficios text-[#47462d] text-2xl text-center mx-36 my-16">
                        Para más información contacta con nosotros a padodalavida.donaciones@info
                    </p>
                </div>
            </div>

            <div class="beneficios_info flex flex-row justify-evenly items-center mb-20">
                <img src="/public/BeneficiosImages/personaFisica.png" alt="Beneficios fiscales persona física"
                    class="rounded-md">
                <img src="/public/BeneficiosImages/personaJuridica.png" alt="Beneficios persona jurídica"
                    class="rounded-md">
            </div>
        </div>
    </div>


    <!-- FORMULARIO SOLICITUD DE BENEFICIOS FISCALES -->

    <div class="flex flex-col items-center justify-center mb-8">
        <div class="bg-[#f3eee4] p-8 rounded-lg shadow-lg ml-54 mb-8 w-1/2">
            <h2 class="text-2xl font-bold mb-4 text-center"> Certificado de donación </h2>
            <p>El Santuario PATOdalavida se encuentra incuida entre las fundaciones reguladas en el art. 16 de la "Ley
                49/2002, de 23 de diciembre de régimen fiscal de las entidades sin fines lucrativos y de los incentivos
                fiscales al mecenazgo" por lo que podemos realizar un certificado de donación que puedes desgrabarte en
                la declaración de la renta.</p>
            <p class="uppercase">Fecha límite para rellenar el formulario es el 20 de enero de 2025</p>
            <p>Para ello requerimos algunos datos personales</p>
        </div>

        <div class="bg-[#f3eee4] p-8 rounded-lg shadow-lg ml-54 mb-8 w-1/2">
            <form>
                <div class="mb-6">
                    <label for="mail" class="block text-lg font-medium mb-2">Mail de contacto:</label>
                    <input type="text" id="mail" v-model="mail" class="w-full p-2 border border-gray-300 rounded-md"
                        required />
                </div>
            </form>
        </div>

        <div class="bg-[#f3eee4] p-8 rounded-lg shadow-lg ml-54 mb-8 w-1/2">
            <form>
                <div class="mb-6">
                    <label for="name" class="block text-lg font-medium mb-2">Nombre:</label>
                    <input type="text" id="name" v-model="name" class="w-full p-2 border border-gray-300 rounded-md"
                        required />
                </div>
            </form>
        </div>

        <div class="bg-[#f3eee4] p-8 rounded-lg shadow-lg ml-54 mb-8 w-1/2">
            <form>
                <div class="mb-6">
                    <label for="surname" class="block text-lg font-medium mb-2">Apellidos:</label>
                    <input type="text" id="surname" v-model="surname"
                        class="w-full p-2 border border-gray-300 rounded-md" required />
                </div>
            </form>
        </div>

        <div class="bg-[#f3eee4] p-8 rounded-lg shadow-lg ml-54 mb-8 w-1/2">
            <form>
                <div class="mb-6">
                    <label for="dni" class="block text-lg font-medium mb-2">DNI/CIF:</label>
                    <input type="number" id="dni" v-model="dni" class="w-full p-2 border border-gray-300 rounded-md"
                        required />
                </div>
            </form>
        </div>

        <div class="bg-[#f3eee4] p-8 rounded-lg shadow-lg ml-54 mb-8 w-1/2">
            <form>
                <div class="mb-6">
                    <label for="location" class="block text-lg font-medium mb-2">Dirección completa:</label>
                    <input type="text" id="location" v-model="location" class="w-full p-2 border border-gray-300 rounded-md"
                        required />
                </div>
            </form>
        </div>

        <div class="bg-[#f3eee4] p-8 rounded-lg shadow-lg ml-54 mb-8 w-1/2">
            <form>
                <div class="mb-6">
                    <label for="cp" class="block text-lg font-medium mb-2">Código Postal:</label>
                    <input type="number" id="cp" v-model="cp"
                        class="w-full p-2 border border-gray-300 rounded-md" required />
                </div>
            </form>
        </div>

        <div class="bg-[#f3eee4] p-8 rounded-lg shadow-lg ml-54 mb-8 w-1/2">
            <form @submit.prevent="submitForm">
                <p class="mb-4 text-lg">¿Por qué pides la desgravación?</p>
                <div class="mb-4">
                    <label class="block mb-2">
                        <input type="radio" name="voluntariado" value="visita" v-model="visita" class="mr-2" />
                        Visita
                    </label>
                    <label class="block mb-2">
                        <input type="radio" name="voluntariado" value="donacionPuntual" v-model="donacionPuntual" class="mr-2" />
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

        <div class="bg-[#f3eee4] p-8 rounded-lg shadow-lg ml-54 mb-8 w-1/2">
            <form>
                <div class="mb-6">
                    <label for="renta" class="block text-lg font-medium mb-2">Donación realizada en el año 2023 (compararemos estos datos)</label>
                    <input type="text" id="renta" v-model="renta" class="w-full p-2 border border-gray-300 rounded-md"
                        required />
                </div>
            </form>
        </div>

        <div class="flex justify-center gap-12 mx-12 my-12"> 
                <button @click="submitForm" class="bg-[#47462d]/50 text-white p-2 rounded-md hover:bg-[#47462d] transition duration-300">Enviar formulario</button> 
                <button @click="resetForm" class="bg-[#47462d]/50 text-white p-2 rounded-md hover:bg-[#47462d] transition duration-300">Borrar formulario</button> 
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
<style></style>

<!-- v-model permite recoger los datos que se rellenen en el formulario -->
