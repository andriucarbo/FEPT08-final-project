<template>
    <div class="contenedor_voluntario">
        <div class="voluntario">
            <div class="voluntarioVo_imagen">
                <img :src="'/VoluntariadoImages/VoluntarioPortada.png'" alt="imagen lechón"
                    class="bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center w-full" />
            </div>
            <div class="texto mb-20">
                <h1
                    class="voluntario text-[#47462d] text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center mt-10 sm:mt-20">
                    Voluntariado Santuario PATOdalavida 2025
                </h1>
                <p
                    class="voluntario text-[#47462d] text-xl sm:text-2xl text-center mx-4 sm:mx-8 md:mx-16 lg:mx-36 my-8 sm:my-16">
                    ¡Te agradecemos mucho que te hayas interesado en formar parte de nuestra familia del Santuario
                    PATOdalavia y querer aportar tu tiempo y tus ganas!
                </p>
                <p
                    class="voluntario text-[#47462d] text-xl sm:text-2xl text-center mx-4 sm:mx-8 md:mx-16 lg:mx-36 my-8 sm:my-16">
                    En primer lugar, queremos presentarte los detalles de nuestro voluntariado para que veas si encaja o
                    no con lo que estás buscando y después te haremos unas preguntas para conocerte mejor ☺️.
                </p>
                <p
                    class="voluntario text-[#47462d] text-xl sm:text-2xl text-center mx-4 sm:mx-8 md:mx-16 lg:mx-36 my-8 sm:my-16">
                    Tenemos dos tipos de voluntariado, pero en ambos casos se pide un compromiso mínimo de 3 meses que
                    pueden ser prorrogables.
                </p>
                <ul class="voluntario text-[#47462d] text-xl sm:text-2xl text-center list-disc">
                    <li>Voluntariado Semanal: Miércoles y/o Domingos</li>
                    <li>Voluntario Residente: Estancia de 3 meses</li>
                </ul>
            </div>
            <div>

                <!-- TARJETA EXPLICATIVA CONDICIONES GENERALES -->
                <div class="texto flex flex-col items-center justify-center mb-8">
                <div class="texto overscroll-contain p-4 sm:p-6 md:p-8 bg-[#f3eee4] rounded-lg shadow-lg overflow-y-auto mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32">
                    <p
                        class="voluntario text-[#47462d] text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6 md:mb-8">
                        Te contamos un poco más 🙂
                    </p>
                    <p
                        class="voluntario text-[#47462d] text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6 md:mb-8">
                        ¿Qué ofrecemos?</p>
                    <ul
                        class="list-disc ml-4 sm:ml-6 mb-4 sm:mb-6 voluntario text-[#47462d] text-sm sm:text-base md:text-lg lg:text-xl">
                        <li>Formación en manejo y bienestar en animales de granja</li>
                        <li>Primeros auxilios en animales de granja</li>
                        <li>Prácticas específicas en conservación y centros de rescate</li>
                        <li>Espacio de cocina, cafés y muy buen ambiente 🤪</li>
                        <li>Facilitación de estancia (Voluntario Residente)</li>
                    </ul>
                    <p
                        class="voluntario text-[#47462d] text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6 md:mb-8">
                        ¿Cuáles serán tus tareas?
                    </p>
                    <ul
                        class="list-disc ml-4 sm:ml-6 voluntario text-[#47462d] text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 md:mb-8">
                        <li>Rutinas de limpieza y adecuación de hábitats</li>
                        <li>Preparación y reparto de dietas</li>
                        <li>Protocolos de entrenamiento veterinario (rehabilitación y preventivo de manejo)</li>
                        <li>Gestión de talleres y otras actividades que se realicen desde la reserva</li>
                    </ul>
                    <p
                        class="voluntario text-[#47462d] text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6 md:mb-8">
                        ¿Cuál es el horario?
                    </p>
                    <ul
                        class="list-disc ml-4 sm:ml-6 voluntario text-[#47462d] text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 md:mb-8">
                        <li class="voluntario text-[#47462d] text-sm sm:text-base md:text-lg lg:text-xl">
                            Martes: 8:00 - 14:00
                        </li>
                        <li class="voluntario text-[#47462d] text-sm sm:text-base md:text-lg lg:text-xl">
                            Domingo: 8:30 - 15:30
                        </li>
                        <li class="voluntario text-[#47462d] text-sm sm:text-base md:text-lg lg:text-xl">
                            Residentes: 8:00 - 14:00 / 17:30-19:30 + urgencias. Dos días libres a la semana
                        </li>
                    </ul>
                </div>
                <div class="texto">
                    <p
                        class="voluntario text-[#47462d] text-base sm:text-lg md:text-xl lg:text-2xl text-center mb-4 sm:mb-6 md:mb-8 mt-4 sm:mt-6 md:mt-8">
                        Si has llegado hasta aquí y aún estás interesada/o en formar parte de nuestra familia...nos toca
                        conocerte un poco más, así que ¡Cuéntanos!
                    </p>
                </div>
            </div>

            <!-- FINAL TARJETA EXPLICATIVA -->

            </div>
            <div class="texto">
                <p class="voluntario text-[#47462d] text-xl sm:text-2xl text-center mb-6 sm:mb-10 mt-6 sm:mt-10">
                    Si has llegado hasta aquí y aún estás interesada/o en formar parte de nuestra familia...nos toca
                    conocerte un poco más, así que ¡Cuéntanos!
                </p>
            </div>



            <!-- FORMULARIO TIPO GOOGLE FORMS -->
            <div class="texto flex flex-col items-center justify-center mb-8">
                <div class="bg-[#f3eee4] p-4 sm:p-8 rounded-lg shadow-lg mb-8 w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
                    <h2 class="text-xl sm:text-2xl font-bold mb-4 text-center">
                        Formulario de Voluntariado
                    </h2>
                    <form @submit.prevent="submitForm">
                        <p class="mb-4 text-xl sm:text-2xl">¿Cuándo estarías interesado en participar en un programa de
                            voluntariado en el año 2025?</p>
                        <div class="mb-4 text-xl sm:text-2xl">
                            <label class="block mb-2">
                                <input type="radio" name="voluntariado" value="spring" v-model="voluntariado"
                                    class="mr-2" />
                                Voluntariado Spring 2025 (Marzo - Mitad de junio)
                            </label>
                            <label class="block mb-2">
                                <input type="radio" name="voluntariado" value="summer" v-model="voluntariado"
                                    class="mr-2" />
                                Voluntariado Summer 2025 (Mitad de junio - Agosto)
                            </label>
                            <label class="block mb-2">
                                <input type="radio" name="voluntariado" value="autumn" v-model="voluntariado"
                                    class="mr-2" />
                                Voluntariado Autumn 2025 (Septiembre - Mitad noviembre)
                            </label>
                            <label class="block mb-4">
                                <input type="radio" name="voluntariado" value="winter" v-model="voluntariado"
                                    class="mr-2" />
                                Voluntariado Winter 2025 (Mitad noviembre - Febrero)
                            </label>
                        </div>
                    </form>
                </div>
                <div class="texto bg-[#f3eee4] p-4 sm:p-8 rounded-lg shadow-lg mb-8 w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
                    <form>
                        <div class="mb-6">
                            <label for="name" class="block font-medium mb-2 text-xl sm:text-2xl">Nombre:</label>
                            <input type="text" id="name" v-model="name"
                                class="w-full p-2 border border-gray-300 rounded-md" required />
                        </div>
                    </form>
                </div>
                <div
                    class="texto text-xl sm:text-2xl bg-[#f3eee4] p-4 sm:p-8 rounded-lg shadow-lg mb-8 w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
                    <form>
                        <div class="mb-6">
                            <label for="surname" class="block text-xl sm:text-2xl font-medium mb-2">Apellidos:</label>
                            <input type="text" id="surname" v-model="surname"
                                class="w-full p-2 border border-gray-300 rounded-md" required />
                        </div>
                    </form>
                </div>
                <div class="texto bg-[#f3eee4] p-4 sm:p-8 rounded-lg shadow-lg mb-8 w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
                    <form>
                        <div class="mb-6">
                            <label for="age" class="block text-xl sm:text-2xl font-medium mb-2">Edad:</label>
                            <input type="number" id="age" v-model="age"
                                class="w-full p-2 border border-gray-300 rounded-md" required />
                        </div>
                    </form>
                </div>
                <div class="texto bg-[#f3eee4] p-4 sm:p-8 rounded-lg shadow-lg mb-8 w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
                    <form>
                        <div class="mb-6">
                            <label for="mail" class="block text-xl sm:text-2xl font-medium mb-2">Mail de
                                contacto:</label>
                            <input type="text" id="mail" v-model="mail"
                                class="w-full p-2 border border-gray-300 rounded-md" required />
                        </div>
                    </form>
                </div>
                <div class="texto bg-[#f3eee4] p-4 sm:p-8 rounded-lg shadow-lg mb-8 w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
                    <form>
                        <div class="mb-6">
                            <label for="phone" class="block text-xl sm:text-2xl font-medium mb-2">Número de
                                teléfono:</label>
                            <input type="number" id="phone" v-model="phone"
                                class="w-full p-2 border border-gray-300 rounded-md" required />
                        </div>
                    </form>
                </div>
                <div class="texto bg-[#f3eee4] p-4 sm:p-8 rounded-lg shadow-lg mb-8 w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
                    <form>
                        <div class="mb-6">
                            <label for="job" class="block text-xl sm:text-2xl font-medium mb-2">¿A qué te dedicas en
                                este momento?/ ¿Cuál es tu formación?:</label>
                            <input type="text" id="job" v-model="job"
                                class="w-full p-2 border border-gray-300 rounded-md" required />
                        </div>
                    </form>
                </div>
                <div class="texto bg-[#f3eee4] p-4 sm:p-8 rounded-lg shadow-lg mb-8 w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
                    <form>
                        <div class="mb-6">
                            <label for="experience" class="block text-xl sm:text-2xl font-medium mb-2">¿Qué experiencia
                                tienes en el cuidado de animales o mantenimiento de espacios rurales?:</label>
                            <input type="text" id="experience" v-model="experience"
                                class="w-full p-2 border border-gray-300 rounded-md" required />
                        </div>
                    </form>
                </div>
                <div class="texto bg-[#f3eee4] p-4 sm:p-8 rounded-lg shadow-lg mb-8 w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
                    <form @submit.prevent="submitForm">
                        <p class="mb-4 text-xl sm:text-2xl">¿Tienes carnet de conducir?</p>
                        <div class="mb-4">
                            <label class="block mb-2">
                                <input type="radio" name="voluntariado" value="yes" v-model="carnet" class="mr-2" />
                                Sí
                            </label>
                            <label class="block mb-2">
                                <input type="radio" name="voluntariado" value="no" v-model="carnet" class="mr-2" />
                                No
                            </label>
                        </div>
                    </form>
                </div>
                <div class="texto bg-[#f3eee4] p-4 sm:p-8 rounded-lg shadow-lg mb-8 w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
                    <form @submit.prevent="submitForm">
                        <p class="mb-4 text-xl sm:text-2xl">¿Tienes coche para llegar a la reserva?</p>
                        <div class="mb-4">
                            <label class="block mb-2">
                                <input type="radio" name="voluntariado" value="yes" v-model="car" class="mr-2" />
                                Sí
                            </label>
                            <label class="block mb-2">
                                <input type="radio" name="voluntariado" value="no" v-model="car" class="mr-2" />
                                No
                            </label>
                        </div>
                    </form>
                </div>

                <div class="texto bg-[#f3eee4] p-4 sm:p-8 rounded-lg shadow-lg mb-8 w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
                    <form>
                        <div class="mb-6">
                            <label for="location" class="block text-xl sm:text-2xl font-medium mb-2">¿Dónde
                                vives?:</label>
                            <input type="text" id="location" v-model="location"
                                class="w-full p-2 border border-gray-300 rounded-md" required />
                        </div>
                    </form>
                </div>

                <div class="texto bg-[#f3eee4] p-4 sm:p-8 rounded-lg shadow-lg ml-54 mb-8 w-1/2">
                    <form>
                        <div class="mb-6">
                            <label for="resume" class="block text-2xl font-medium mb-2">¡Ahora lo más emocionante!
                                Cuéntanos un poco más sobre ti, ¡Te
                                leemos!:</label>
                            <input type="text" id="resume" v-model="resume"
                                class="w-full p-2 border border-gray-300 rounded-md" required />
                        </div>
                    </form>
                </div>
            </div>

            <div
                class="texto flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 md:gap-12 mx-4 sm:mx-8 md:mx-12 my-6 sm:my-8 md:my-12 text-lg sm:text-xl md:text-2xl">
                <button @click="submitForm"
                    class="bg-[#47462d]/50 text-white p-2 sm:p-3 rounded-md hover:bg-[#47462d] transition duration-300 w-full sm:w-auto mb-4 sm:mb-0">
                    Enviar formulario
                </button>
                <button @click="resetForm"
                    class="bg-[#47462d]/50 text-white p-2 sm:p-3 rounded-md hover:bg-[#47462d] transition duration-300 w-full sm:w-auto">
                    Borrar formulario
                </button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "VoluntariadoForm",
    data() {
        return {
            voluntariado: "",
            carnet: "",
            car: "",
            fields: [
                { id: "name", label: "Nombre:", type: "text", model: "" },
                { id: "surname", label: "Apellidos:", type: "text", model: "" },
                { id: "age", label: "Edad:", type: "number", model: "" },
                { id: "mail", label: "Mail de contacto:", type: "email", model: "" },
                { id: "phone", label: "Número de teléfono:", type: "tel", model: "" },
                { id: "job", label: "¿A qué te dedicas en este momento?/ ¿Cuál es tu formación?:", type: "text", model: "" },
                { id: "experience", label: "¿Qué experiencia tienes en el cuidado de animales o mantenimiento de espacios rurales?:", type: "text", model: "" },
                { id: "location", label: "¿Dónde vives?:", type: "text", model: "" },
                { id: "resume", label: "¡Ahora lo más emocionante! Cuéntanos un poco más sobre ti, ¡Te leemos!:", type: "text", model: "" },
            ],
        };
    },
    methods: {
        submitForm() {
            // Lógica para manejar el envío del formulario
            console.log("Voluntariado:", this.voluntariado);
            console.log("Nombre:", this.name);
            console.log("Coche:", this.car);
            this.fields.forEach(field => {
                console.log(field.label, field.model);
            });
            alert("Formulario enviado");
        },
        resetForm() {
            this.voluntariado = "";
            this.carnet = "";
            this.car = "";
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
