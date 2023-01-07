<template>
    <br>
    <div class="container">
        <h1>Detalles de la Pelicula </h1>
        <MovieDetails />
    </div>
</template>

<script>
import MovieDetails from '@/components/MovieDetails.vue'

export default{
    components:{
        MovieDetails
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