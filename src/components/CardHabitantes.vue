<template>
    <div class="container">
        <div class="card">
            <div class="imgbox">
                <img src="/public/AnimalesGridHomeView/burros1.png" alt="Imagen dos burros">
            </div>
            <div class="text">
                <h2>Platero</h2>
                <p>Platero (el guaperas de la izquierda) es un burro que nació en una explotación de ovejas de Girona. El pastor había...</p>
                <button class="btn text-l p-3 mt-5 bg-[#857a5c] text-slate-50 rounded hover:text-slate-50 hover:bg-[#6e654c] focus:outline-none ">Amadríname</button>
            </div>
        </div>

        <div class="card">
            <div class="imgbox">
                <img src="/public/AnimalesGridHomeView/gallinas1.png" alt="Imagen dos gallinas sobre una silla">
            </div>
            <div class="text">
                <h2>Nugget</h2>
                <p>Nugget llegó al refugio en un penoso estado de salud.Como muchas gallinas, fue fruto de una explotación... .</p>
                <button class="btn text-l p-3 mt-5 bg-[#857a5c] text-slate-50 rounded  hover:text-slate-50 hover:bg-[#6e654c] focus:outline-none ">Amadríname</button>
            </div>
        </div>

        <div class="card">
            <div class="imgbox">
                <img src="/public/AnimalesGridHomeView/oveja3.png" alt="Imagen oveja lana rizado">
            </div>
            <div class="text">
                <h2>Margot</h2>
                <p>Margot es una corderita rescatada de una explotación en la que también estaba su madre, pero ésta murió antes de...</p>
                <button class="btn text-l p-3 mt-5 bg-[#857a5c] text-slate-50 rounded hover:text-slate-50 hover:bg-[#6e654c] focus:outline-none ">Amadríname</button>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    mounted() {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
    card.addEventListener('click', () => {
        const text = card.querySelector('.text');
        cards.forEach(c => c.querySelector('.text').style.display = 'none');
        text.style.display = 'block';
        });
    });

    // cards.forEach((card) => {
    // card.addEventListener('mouseout', () => {
    //     const text = card.querySelector('.text');
    //     text.style.display = 'none';
    // });
    // });
    // ANULO ESTE CÓDIGO PORQUE DESAPARECÍA EL TEXTO SI EL CURSOR SALÍA DE LA CARD...NO PODÍAN HACER CLICK EN AMADRÍNAME 
}
}
</script>
<style>

/* modifica el texto del botón de las targetas */
    .btn{
        font-family: 'Crimson Text', serif;
    }
/* modifica el texto de las tarjetas */

    .text{
        font-family: 'Crimson Text', serif;
    }

/* Estilos para el contenedor y las tarjetas */
    
    .container{
        position: relative;
        width: 1600px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding:30px;
    }

/* Estilos para cada tarjeta */

    .container .card{
        position: relative;
        max-width: 400px;
        height:400px;
        background-color: white;
        margin:30px 10px;
        padding:20px 15px;
        display: flex;
        flex-direction: column;
        box-shadow: 0 5px 202px rgba(0,0,0,0,5);
        transition: 0.3s ease-in-out;
    }

/* Estilos para cuando se pasa el cursor sobre una  tarjeta */

    .container .card:hover{
        height:500px;
        cursor: pointer;
        
    }

/* Estilos para la imagen de cada tarjeta */

    .containter .card .imgbox{
        position: relative;
        width:260px;
        height:260px;
        top:-60px;
        left:20px;
        z-index: 1;
        box-shadow: 0 5px 20px rgba(0,0,0,0.5);
        transition: height 0.3s ease-in-out;
    }

    .container .card .imgbox img {
        max-width: 100%;
        border-radius: 4px;
    }

/* Estilos para el texto de cada tarjeta */

    .container .card .text{
        position: relative;
        margin-top: -140px;
        padding: 10px 15px;
        text-align: center;
        color: black;
        display:none;
        opacity:0;  
        transition: opacity 0.3s ease-in-out;
    }

    .container .card.expanded .text,
    .container .card:hover .text {
        opacity: 1;
        margin-top: 0;
        transform: translateY(0);
    }

    .container .card .imgbox img {
        max-width: 100%;
        border-radius: 4px;
    } 

    .container .card .text{
    opacity:0;   
    display:none;
    transition: 0.3s ease-in-out,transform 0.3s ease-in-out;
} 

</style>

<!-- pasos para crear código CardHabitantes -->
<!-- APARTADO TEMPLATE -->
<!-- paso 1: crear un div con la clase container -->
<!-- paso 2: crear un div con la clase card -->
<!-- paso 3: crear un div con la clase imgbox -->
<!-- paso 4: crear un img con la clase img -->
<!-- paso 5: crear un div con la clase text -->
<!-- RESUMEN HASTA AQUÍ: Crear tres unidades <div></div>, cada una con un contenido de: imagen, nombre y texto descriptivo sobre un animal del santuario -->

<!-- APARTADO SCRIPT -->
<!-- paso 6: crear un script que permita mostrar y ocultar el texto descriptivo sobre el animal -->
<!-- paso 7: en este caso, se crea la función mounted() para que se ejecute al cargar la página  y que se muestre el texto del animal y se despliegue la carta solo si se hace click sobre ella-->
<!-- paso 8: se crea el evento addEventListener (mouseout) para que se oculte el texto cuando el mouse no está sobre la zona de la carta -->

<!-- APARTADO STYLE: Estos estilos definen cómo se ven las tarjetas y sus elementos:

Se centran en la pantalla.
Cada tarjeta tiene un tamaño máximo y sombra para dar profundidad.
Cuando se pasa el cursor sobre una tarjeta, se expande su altura.
El texto está inicialmente oculto y se muestra cuando se presiona una tarjeta. -->

