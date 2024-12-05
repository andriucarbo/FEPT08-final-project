<template>
    <div class="flex items-center justify-center h-screen bg-gray-100">
    <div class="text-4xl font-bold text-gray-800">
        {{ count }}
    </div>
    </div>
</template>


<script>
    export default {
        data() {
            return {
                count: 0,
                target: 350
            };
        },
        mounted() {
            this.startCounter();
        },
    methods: {
        startCounter() {
            if (this.count < this.target) {
            this.incrementCounter();
            }
        },
        incrementCounter() {
            setTimeout(() => {
            if (this.count < this.target) {
            this.count++;
            this.incrementCounter();
        }
    },);
}
}
};
</script>

<style>
</style>