<template>
    <div class="carousel bg-white">
        <slot></slot>

        <button @click="next" class="next arrow-button absolute h-4 w-5 transition-all duration-300 ease-in-out ">
            <span>></span>
       
        </button>
        <button @click="prev" class="prev arrow-button absolute h-4 w-5 transition-all duration-300 ease-in-out ">
            <span><</span>
        
        </button>
        
    </div>
</template>


<script>
export default {
    data(){
        return {

        }
    },
    methods: {
        next(){
            this.$emit('next')
        },
        prev(){
            this.$emit('prev')
        }
    }
}


</script>


<style>
    .carousel {
        position: relative;
        width: 900px;
        height: 450px;
        overflow: hidden;
        
    }
    
    button.next {
        position: absolute;
        height: 40px;
        width: 50px;
        top: calc(50% - 20px);
        /* background-color: rgba(0, 0, 0, 0.5); */
        border: none;
        right: 0;
        

    }
    button.prev{
        position: absolute;
        height: 40px;
        width: 50px;
        top: calc(50% - 20px);
        /* background-color: rgba(0, 0, 0, 0.5); */
        border: none;
        left: 0;
        
    }

    button:focus, button:hover {
        outline: none;
        cursor: pointer;
    }
   


    .arrow-button span {
    font-size: 30px;
    font-weight: bold;
    color: rgba(245, 245, 245, 0.574);
    }

.arrow-button:hover {
    @apply scale-x-125 scale-y-125 transform-gpu;
    /* transform-gpu sirve para mejorar el rendimiento en dispositivos móviles */
}




</style>