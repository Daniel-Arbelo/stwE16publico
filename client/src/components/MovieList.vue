<template>
  <div class="movies-list">
    <router-link v-for="movie in movies" v-bind:key="movie.id" v-bind:to="`/movies/${movie.id}`">
      <Movie v-bind:title="movie.title" v-bind:poster="movie.poster" />
    </router-link>
  </div>
</template>

<script>
import Movie from './MovieE.vue'

export default {
  name: 'MoviesList',
  components: {
    Movie
  },
  data() {
    return {
      movies: [
          {id: 1, title: 'Star Wars', description: 'Pelicula de acción', poster: '../assets/starwars.jpg'},
          {id: 2, title: 'Intocable', description: 'Comedia francesa', poster: '../assets/starwars.jpg'},
          {id: 3, title: 'Coco', description: 'Pelicula de Pixar', poster: '../assets/starwars.jpg'},
          {id: 3, title: 'Coco', description: 'Pelicula de Pixar', poster: '../assets/starwars.jpg'} ,
          {id: 3, title: 'Coco', description: 'Pelicula de Pixar', poster: '../assets/starwars.jpg'} ,
          {id: 3, title: 'Coco', description: 'Pelicula de Pixar', poster: '../assets/starwars.jpg'} ,
          {id: 3, title: 'Coco', description: 'Pelicula de Pixar', poster: '../assets/starwars.jpg'} ,
          {id: 3, title: 'Coco', description: 'Pelicula de Pixar', poster: '../assets/starwars.jpg'} ,
          {id: 3, title: 'Coco', description: 'Pelicula de Pixar', poster: '../assets/starwars.jpg'} ,
          {id: 3, title: 'Coco', description: 'Pelicula de Pixar', poster: '../assets/starwars.jpg'} ,
          {id: 3, title: 'Coco', description: 'Pelicula de Pixar', poster: '../assets/starwars.jpg'} ,
          {id: 3, title: 'Coco', description: 'Pelicula de Pixar', poster: '../assets/starwars.jpg'} ,
         
      ]
    }
  }
}
</script>

<style>
.movies-list {
  display: flex;
  flex-direction:row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;  /* Ajusta el ancho del contenedor padre */
  margin: 15;  /* Centra el contenedor */
}
</style>
