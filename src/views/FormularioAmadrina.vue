<template>
<!-- CONTENEDOR CENTRALIZADO DE TAMAÑO MÁXIMO -->

<div>
    <h1  class="text-[#47462d] text-7xl text-center mt-20 mx-20 mb-20">Formulario Amadrinamiento</h1>
</div>
    <div class="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
        <div>
            <!-- CREAMOS UNA SECCIÓN DE ENCABEZADO CON TÍTULO -->
        <h2 class="text-2xl font-bold mb-4 flex justify-center">Seleccionar el método de pago</h2>
        </div>
        <!-- SECCIÓN PARA BOTONES DE MÉTODOS DE PAGO -->
        <div class="flex space-x-4 mb-6"> 
            <!-- PARA CADA MÉTODO DE PAGO DE LA LISTA DE 'paymentMethods' -->
            <!-- SELECTPAYMENTMETHOD -->
            <button v-for="(method, index) in paymentMethods" 
                :key="index" 
                @click="selectPaymentMethod(index)" 
                :class="{'transform scale-125': selectedPaymentMethod === index}" class="transition duration-300" > 
                <!-- MOSTRAR LA IMAGEN DEL MÉTODO DE PAGO CON LA CLASE hover -->
                <img :src="method.src" :alt="method.alt" class="w-12 h-12 hover:bg-[#47462d]/50"> 
            </button> 
        </div> 

        <!-- Esta parte muestra un mensaje debajo de los botones si un método de pago está seleccionado -->
        <!-- SELECTEDPAYMENTMETHOD -->
        <div v-if="selectedPaymentMethod !== null" class="mt-4 text-2xl text-center text-[#47462d]"> 
        Has seleccionado como método de pago: {{ paymentMethods[selectedPaymentMethod].alt }} 
        </div>
    
<!-- CREAMOS UN FORMULARIO PARA LA INFORMACIÓN PERSONAL Y DE PAGO -->
    <form @submit.prevent="submitForm">
        <!-- Información personal -->
        <!-- NOMBRE -->
        <div class="mb-4">
            <label class="block text-gray-700">Nombre</label>
            <input type="text" v-model="form.nombre" class="w-full p-2 border border-gray-300 rounded-md">
        </div>

        <!-- APELLIDO -->
        <div class="mb-4">
            <label class="block text-gray-700">Apellidos</label>
            <input type="text" v-model="form.apellidos" class="w-full p-2 border border-gray-300 rounded-md">
        </div>

        <!-- DIRECCIÓN DE CORREO -->
        <div class="mb-4">
            <label class="block text-gray-700">Dirección de correo electrónico</label>
            <input type="email" v-model="form.email" class="w-full p-2 border border-gray-300 rounded-md">
        </div>

        <!-- NOMBRE DE LA EMPRESA -->
        <div class="mb-4">
            <label class="block text-gray-700">Nombre de empresa</label>
            <input type="text" v-model="form.empresa" class="w-full p-2 border border-gray-300 rounded-md">
        </div>

        <!-- NIF/CIF -->
        <div class="mb-4">
            <label class="block text-gray-700">NIF / CIF</label>
            <input type="text" v-model="form.nif" class="w-full p-2 border border-gray-300 rounded-md">
        </div>

        <!-- DIRECCIÓN POSTAL -->
        <div class="mb-4">
            <label class="block text-gray-700">Dirección postal completa</label>
            <input type="text" v-model="form.direccion" class="w-full p-2 border border-gray-300 rounded-md">
        </div>

        <!-- PROVINCIA -->
        <div class="mb-4">
            <label class="block text-gray-700">Provincia</label>
            <input type="text" v-model="form.provincia" class="w-full p-2 border border-gray-300 rounded-md">
        </div>

        <!-- CÓDIGO POSTAL -->
        <div class="mb-4">
            <label class="block text-gray-700">Código Postal</label>
            <input type="text" v-model="form.codigoPostal" class="w-full p-2 border border-gray-300 rounded-md">
        </div>
        <div class="mb-4">
        
        <!-- PAÍS -->
            <label class="block text-gray-700">País</label>
            <input type="text" v-model="form.pais" class="w-full p-2 border border-gray-300 rounded-md">
        </div>

        <!-- TELÉFONO -->
        <div class="mb-4">
            <label class="block text-gray-700">Teléfono (+00) 000 000 000</label>
            <input type="text" v-model="form.telefono" class="w-full p-2 border border-gray-300 rounded-md">
        </div>

        <!-- COMENTARIOS -->
        <div class="mb-4">
            <label class="block text-gray-700">Indica a quién quieres amadrinar:</label>
            <textarea v-model="form.comentario" class="w-full p-2 border border-gray-300 rounded-md"></textarea>
        </div>

        <!-- Información de pago -->
        <div class="mb-4">
            <label class="block text-gray-700">Número de tarjeta</label>
            <input type="text" v-model="form.tarjeta" class="w-full p-2 border border-gray-300 rounded-md">
        </div>

        <!-- Política de privacidad -->
        <div class="mb-4 flex items-center">
            <input type="checkbox" v-model="form.privacy" class="mr-2">
            <label class="text-gray-700">Acepto la política de privacidad</label>
        </div>

        <!-- BOTÓN PARA ENVIAR FORMULARIO -->
            <button type="submit" class="w-full bg-[#47462d]/50 text-white p-2 rounded-md hover:bg-[#47462d] transition duration-300">AMADRINA</button>
    </form>
</div>
</template>

<script>
export default {
    data() {
        return {
            // DEFINIMOS LA LISTA DE 'paymentMethods' CON OBJETOS QUE CONTIENEN: src Y alt para cada método de pago
            paymentMethods: [
            { src: "/PagosSocio/visa.svg", alt: "Visa" },
            { src: "/PagosSocio/mastercard.svg", alt: "MasterCard" },
            { src: "/PagosSocio/paypal.svg", alt: "PayPal" }
        ],
        // DEFINIMOS LA LISTA DE 'socialNetworks' COMO NULO
        selectedPaymentMethod: null,
        // DEFINIMOS EL OBJETO form CON CAMPOS PARA ALMACENAR LA INFORMACIÓN PERSONAL Y DE PAGO
        form: {
            nombre: '',
            apellidos: '',
            email: '',
            empresa: '',
            nif: '',
            direccion: '',
            provincia: '',
            codigoPostal: '',
            pais: '',
            telefono: '',
            comentario: '',
            tarjeta: '',
            privacy: false,
        }
        };
    },
    // DEFINIMOS MÉTODOS DEL COMPONENTE
    methods: {
        submitForm() {
            // MUESTRA EL FORMULARIO EN LA CONSOLA
            console.log('Formulario enviado:', this.form);
            // MUESTRA UNA ALERTA CON EL NOMBRE DEL FORMULARIO ENVIADO
            alert(`Formulario enviado con éxito para ${this.form.nombre}`);
        },
        // MÉTODO PARA SELECCIONAR UN MÉTODO DE PAGO
        selectPaymentMethod(index) {
        // ESTABLECER selecterPaymentMethod CON EL ÍNDICE DEL MÉTODO SELECCIONADO
            this.selectedPaymentMethod = index;
    }
    }
};

</script>

<style>
</style>
