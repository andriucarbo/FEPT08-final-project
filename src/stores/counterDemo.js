import {defineStore} from "pinia";

const useCounterDemoStore = defineStore('counterDemo', {
    //state,
    state: () => ({
        count:0,
        name: "Nicolás",
        title: "Hoy es 10 de diciembre",
    }),
    //getter,
    getters: {
        doubleCount:(state) => {return state.count * 2},
        multiplyFour:(state) => {return state.count * 4},
        halfCount:(state) => {return state.count / 2},
    },
    //actions
    actions:{
        increment(){
            return this.count ++;
        },
        decrement(){
            return this.count --;
        },
    },
});

export default useCounterDemoStore