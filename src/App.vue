<template>
  <div>
    <h1 class="text-8xl font-black text-emerald-800">{{ title }}</h1>

    <p>hOLA</p>

    <h2 class="text-6xl text-pink-700">bon dia</h2>


    <Router-view/>
    
  </div>
</template>

<script>
export default {
  name:"App",
  data(){
    return{
      title:"holaaa! 🐷🐷 "
    }
  }
  
}
</script>

<style>
  
</style>