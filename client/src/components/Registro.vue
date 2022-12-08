<template style="background-color: black">
    <p><H1 style ="color: black;"><b> 
      Registro
    </b></H1></p> 
    <hr>
    <label>Email</label><br>
    <input id="email" name="email" type="text" placeholder="Email del usuario" required><br><br>
    <label>Usuario</label><br>
    <input id="usuario" name="usuario" type="text" placeholder="Nombre del usuario" required><br><br>
    <label>Contraseña</label><br>
    <input id="contraseña" name="contraseña" type="password" placeholder="Contraseña del usuario" required>
    <br><br>
    <hr>
    <button style="width:150px; height:45px; background-color: #641E16; color:white; font-size: 20px;">Register</button>
  </template>
  
  <script>
  export default {
    name: 'Registro',
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