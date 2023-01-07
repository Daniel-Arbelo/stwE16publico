<template>
  <div class="movie-details">
    <!-- <img v-bind:src="poster" alt="Poster">-->
    <img src="../assets/starwars.jpg" alt="Imagen">
    <h1>{{ title }} Star Wars III</h1>
    <p>{{ description }} ¡Guerra! La República se desmorona bajo los ataques del despiadado Lord Sith, el conde Dooku. Hay héroes en ambos bandos, pero el mal está por doquier. En una contundente jugada, el diabólico líder droide, el general Grievous, ha irrumpido en la capital de la República y ha secuestrado al Canciller Palpatine, líder del senado Galáctico. Mientras el ejército droide separatista trata de huir con su valioso rehén, dos caballeros Jedi inician una misión desesperada para liberar al Canciller cautivo.</p>
    <hr>
    <div class="details">
      <hr class="vertical-line">
      <h2>Year</h2>
      <p>2005</p>
      <hr class="vertical-line">
      <h2>Country</h2>
      <p>United States of America</p>
      <hr class="vertical-line">
      <h2>Duration</h2>
      <p>140 min</p>
      <hr class="vertical-line">
    </div>
    <hr>
    <button>Añadir a la cesta</button>
    <br>
  </div>
</template>

<script>
export default {
  name: 'MovieDetails',
  props: ['title', 'description', 'poster', 'year', 'duration', 'country'],
  data() {
    return {
    }
  }
}
</script>

<style>
  
  .movie-details img {
    width: 200px;
    height: 300px;
  }

  .movie-details h1 {
    margin: 10px 0;
    font-size: 24px;
    text-align: center;
  }

  .movie-details p {
    margin: 0;
    font-size: 16px;
    text-align: center;
  }
  
  .vertical-line {
    transform: rotate(90deg);
    height: 0.1px;
    width: 35px;
    background-color: black;
  }

  .details{
    display: flex;
    flex-direction: row;
    justify-content:center;
  }

  .details h2{
    margin: 0;
    font-size: 17px;
    text-align: center;
    margin-right: 15px;
  }

  .detials p{
    margin: 0;
    font-size: 15px;
    text-align: center;
  }

  .movie-details button{
    background-color: #4caf50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  }
</style>
