<template>
    <div class="container">
        <div class="card">
            <div class="imgbox">
                <img src="/public/AnimalesGridHomeView/burros1.png" alt="Imagen dos burros">
            </div>
            <div class="text">
                <h2>Platero</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, delectus? Error veniam sed quia voluptate distinctio possimus, laboriosam, vel non in eaque quaerat sunt! Necessitatibus magni distinctio non doloribus repudiandae.</p>
            </div>
        </div>

        <div class="card">
            <div class="imgbox">
                <img src="/public/AnimalesGridHomeView/gallinas1.png" alt="Imagen dos gallinas sobre una silla">
            </div>
            <div class="text">
                <h2>Nugget</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, delectus? Error veniam sed quia voluptate distinctio possimus, laboriosam, vel non in eaque quaerat sunt! Necessitatibus magni distinctio non doloribus repudiandae.</p>
            </div>
        </div>

        <div class="card">
            <div class="imgbox">
                <img src="/public/AnimalesGridHomeView/oveja3.png" alt="Imagen oveja lana rizado">
            </div>
            <div class="text">
                <h2>Margot</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, delectus? Error veniam sed quia voluptate distinctio possimus, laboriosam, vel non in eaque quaerat sunt! Necessitatibus magni distinctio non doloribus repudiandae.</p>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    mounted() {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
    card.addEventListener('mouseover', () => {
        const text = card.querySelector('.text');
        cards.forEach(c => c.querySelector('.text').style.display = 'none');
        text.style.display = 'block';
        });
    });

    cards.forEach((card) => {
    card.addEventListener('mouseout', () => {
        const text = card.querySelector('.text');
        text.style.display = 'none';
    });
    });
}
}
</script>
<style>
    
    .container{
        position: relative;
        width: 1100px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        padding:30px;
    }

    .container .card{
        position: relative;
        max-width: 300px;
        height:215px;
        background-color: white;
        margin:30px 10px;
        padding:20px 15px;
        display: flex;
        flex-direction: column;
        box-shadow: 0 5px 202px rgba(0,0,0,0,5);
        transition: 0.3s ease-in-out;
    }

    .container .card:hover{
        height:420px;
    }

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

    .container .card .text{
        position: relative;
        margin-top: -140px;
        padding: 10px 15px;
        text-align: center;
        color: black;
        display:none;
        /* visibility: hidden; */
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