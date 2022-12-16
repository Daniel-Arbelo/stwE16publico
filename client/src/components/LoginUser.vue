<template style="background-color: black">
    <p><H1 style ="color: black;"><b> 
      Login
    </b></H1></p> 
    <hr>
    <label>Usuario</label><br>
    <input id="usuario" name="usuario" type="text" placeholder="Nombre del usuario" required v-model="usuario"><br><br>
    <label>Contraseña</label><br>
    <input id="contraseña" name="contraseña" type="password" placeholder="Contraseña del usuario" required v-model="contrasena">
    <br><br>
    <hr>
    
    <button v-on:click="loginUser" style="width:150px; height:45px; background-color: #641E16; color:white; font-size: 20px;">Login</button>
  </template>
  
  <script>
  import CreateAcountService from '../CreateAcountService';

  export default {
    name: 'LoginUser',
    data() {
      return {
        usuariocorrecto: 0,
        users: [],
        error: '',
        usuario: '',
        contrasena: ''
      }
    },
    async created() {
      try {
        this.users = await CreateAcountService.getAcounts();
      } catch(err) {
        this.error = err.message;
      }
    },
    methods: {
      async loginUser() {

        this.users = await CreateAcountService.getAcounts();
        this.users.forEach(elemento => {
          
          if(elemento.usuario == this.usuario && elemento.contrasena == this.contrasena){
            this.usuariocorrecto = 1;
          }
        });
        if(this.usuariocorrecto == 1){
          confirm("Secion iniciada correctamente");
          this.$store.state.usuario = this.usuario;
          this.$store.dispatch('logearUsuarioAction');
          this.usuario = '';
          this.contrasena = '';
        }else{
          confirm("Error al iniciar secion usuario o contrasena incorrectos");
          this.usuario = '';
          this.contrasena = '';
        }
        
      }
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