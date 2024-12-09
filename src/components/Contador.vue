<template>
<div class="#e2d9c7 flex flex-col justify-center items-center space-y-8 p-4">
    <!-- PRIMER CONTADOR -->
    <div class="flex flex-col items-center">
        <div class="text-5xl font-bold text-[#47462d]">
            +{{ count325 }}  
        </div>
        <div>
            <p class="text-2xl  text-[#47462d] text-center">Animales rescatados</p>
        </div>
    </div>
    <!-- SEGUNDO CONTADOR -->
    <div class="flex flex-col items-center">
        <div class="text-5xl font-bold text-[#47462d]">
            +{{ count238 }} 
        </div>
        <div>
            <p class="text-2xl text-[#47462d] text-center">Habitantes en el Santuario</p>
        </div>
    </div>
    
</div>
</template>



<script>
export default {
    data() {
    return {
        count325: 0,
        target325: 325,
        count238: 0,
        target238: 238,
        intervalId325: null,
        intervalId238: null,
    };
    },
    mounted() {
    this.startCounter325();
    this.startCounter238();
    },
    methods: { 
        startCounter325() { 
            this.intervalId325 = setInterval(() => { 
                if (this.count325 < this.target325) { 
                    this.count325++; } 
                    else { 
                        clearInterval(this.intervalId325); 
                        setTimeout(() => { 
                            this.count325 = 0; // Reinicia el contador a 0 
                            this.startCounter325(); // Inicia el contador nuevamente 
                            }, 2000); // Pausa de 3 segundos 
                            } }, 10); // Actualiza cada 10 milisegundos para alcanzar 325 más rápido 
                            }, startCounter238() { 
                                this.intervalId238 = setInterval(() => { 
                                    if (this.count238 < this.target238) { this.count238++; 
                                    } else { 
                                        clearInterval(this.intervalId238); 
                                        setTimeout(() => { 
                                            this.count238 = 0; // Reinicia el contador a 0 
                                            this.startCounter238(); // Inicia el contador nuevamente 
                                            }, 3000); // Pausa de 3 segundos 
                                            } }, 10); // Actualiza cada 10 milisegundos para alcanzar 238 más rápido 
                                            } } };
</script>

<style>
</style>


<!-- PASOS PARA DISEÑAR EL CÓDIGO DEL CONTADOR DEL APARTADO COLABORA DE LA HOME -->
<!-- Data (Datos):

1. Define variables para contar (count325, count238) y sus objetivos (target325, target238).

2. Define variables para almacenar los intervalos (intervalId325, intervalId238).

3. Mounted (Montado):

    3.1 Esta función se ejecuta automáticamente cuando la página se carga.

    3.2 Llama a dos funciones (startCounter325 y startCounter238) para iniciar los contadores.

5. Methods (Métodos):

    5.1 startCounter325: Inicia un temporizador que incrementa count325 hasta que alcanza target325.

    5.2 Si count325 es menor que target325, se incrementa en 1 cada 10 milisegundos.

    5.3 Si count325 alcanza target325, detiene el temporizador, espera 3 segundos y reinicia el contador desde 0.

    5.4 startCounter238: Hace lo mismo que startCounter325 pero para count238. -->
