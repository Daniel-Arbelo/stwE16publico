<template>
    <br>
    <div class="container">

        <h1>Peliculas Disponibles</h1>

        <Films />
    </div>
</template>

<script>
import Films from '@/components/MovieList.vue'

export default{
    components:{
        Films
    }
}
</script>

<style>
.container{
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
}
</style>