<template style="background-color: black">
  <p><H1 style ="color: #2CBA79;"><b> 
    ¡Bienvenido a nuestro servicio de películas online!
  </b></H1></p>
  <hr>
  <p><H3 style ="color: #239560; background-color: #2c3e50; height:60px;"> 
    <br>Encontrarás un amplio catálogo de películas para elegir
  </H3></p>
  <p><H5 style ="color: #186642; background-color: #2c3e50; height:60px;margin-top:-20px;">
    Porfavor seleccione a continuación para Registrarse o Iniciar Sesión
  </H5></p>
  <hr>
  <router-link to="/registro">
    <button style="width:150px; height:45px; background-color: #641E16; color:white; font-size: 20px;">Register</button>
  </router-link>
  <router-link to="/login">
    <button style="margin: 10px; width:150px; height:45px; background-color: #641E16; color:white; font-size: 20px;">Login</button>
  </router-link>
</template>

<!-- background:linear-gradient(30deg, crimson,sienna, royalblue, indianred, purple); -->
<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
