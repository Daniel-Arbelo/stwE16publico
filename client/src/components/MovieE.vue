<template>
    <div class="movie-e">
      <img src="../assets/starwars.jpg" alt="Poster" v-bind:style="{ width: '55%' }">
      <h1>{{ title }}</h1>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MovieE',
    props: ['title', 'poster'],
    data() {
      return {
      }
    }
  }
  </script>
  
  <style>
  .movie-e {
    display: flex;
    flex-direction: column;
    align-items: center;
    width:9cm;
    height:9cm;
  }

  .movie-e h1{
    font-size: 20px; 
  }
  </style>
  