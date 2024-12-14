<template>
  <div class="mainEquipo relative flex flex-col justify-center items-center w-full h-[400px] m bg-cover bg-center bg-no-repeat" style="background-image: url('/public/EquipoImages/CabeceraEquipo.png');"></div>
  
<!-- Grid de fotos del equipo -->
<div class="TeamContainer">
  <h1 class="equipo text-[#47462d] text-8xl text-center mt-20 mb-20">Nuestro equipo</h1>
  <div class="grid grid-cols-2 sm:grid-cols-4 gap-6 m-20 place-items-center">
      <div v-for="(teamMember, index) in teamMembers" :key="index" class="bg-white bg-opacity-50 rounded-lg shadow-md overflow-hidden">
        <img :src="teamMember.image" :alt="teamMember.name" class="w-full h-48 object-cover">
        <div class="p-4">
          <h3 class="text-xl font-thin mb-2">{{ teamMember.name }}</h3>
          <p class="text-gray-600 font-thin">{{ teamMember.position }}</p>
        </div>
      </div>
  </div>
    <h1 class="text-[#47462d] text-2xl text-center mx-36 my-16">🦆 ¿Te gustaría formar parte de nuestro equipo? 🦆 </h1>
    <h2 class="flex flex-col items-center">👇</h2>
    <div class="buttonContainer flex justify-center mt-6 md:mt-10">
    <button class="buttonnuestraHistoria text-xl p-4 mb-20 text-[#857a5c] rounded  border border-[#857a5c] bg-white hover:bg-neutral-50 hover:text-[#857a5c] focus:outline-none transition duration-300 ease-in-out transform hover:scale-105">¡Únete a nuestro equipo!</button>
    

  </div>
</div>





</template>

<script>
export default {
  name: 'Equipo',
  data() {
    return {
      teamMembers: [
        {
          image: '/public/EquipoImages/Vanessa&Ona(vc).png',
          name: 'Vanessa Cortés',
          position: 'Fundadora'
        },
        {
          image: '/public/EquipoImages/AndreayKokis(vc).png',
          name: 'Andrea Carbó',
          position: 'Fundadora'
        },
        {
          image: '/public/EquipoImages/MichaelTeam.png',
          name: 'Michael Pérez',
          position: 'Veterinario'
        },
        {
          image: '/public/EquipoImages/MartaTeam.png',
          name: 'Marta Rodríguez',
          position: 'Asistente de Administración'
        }
      ]
    }
  }
}
</script>

<style>
.grid-item {
  @apply bg-white rounded-lg shadow-md overflow-hidden;
}

.grid-item img {
  @apply w-full h-48 object-cover;
}

.grid-item .team-name {
  @apply text-xl font-semibold mb-2;
}

.grid-item .team-position {
  @apply text-gray-600;
}
</style>
