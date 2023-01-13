<template style="background-color: black">
  <div>
    <p><H1 id="title" style ="color: black;"><b> 
      Registro
    </b></H1></p> 
    <hr>
    <label>Email</label><br>
    <input id="email" name="email" type="text" placeholder="Email del usuario" required v-model="gmail"><br><br>
    <label>Usuario</label><br>
    <input id="usuario" name="usuario" type="text" placeholder="Nombre del usuario" required v-model="usuario"><br><br>
    <label>Contraseña</label><br>
    <input id="contraseña" name="contraseña" type="password" placeholder="Contraseña del usuario" required v-model="contrasena">
    <br><br>
    <hr>
    <button id="btn-registro" v-on:click="createUser" style="width:150px; height:45px; background-color: #641E16; color:white; font-size: 20px;">Register</button>
    {{ error }}
  </div>
  </template>
  
  <script>
  import CreateAcountService from '../CreateAcountService';
  import axios from 'axios';

  export default {
    name: 'RegistroUser',
    data() {
      return {
        users: [],
        error: '',
        gmail: '',
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
      async createUser() {
        let newUser = {
          usuario: this.usuario,
          gmail: this.gmail,
          contrasena: this.contrasena
        }
        axios.post('http://localhost:5000/signup', newUser)
          .then( res => {
            this.error = res;
            this.$router.push('/login');
            this.error = '';
          }, err => {
            console.log(err.response)
            this.error = err.response.data.error
          })
        
      
        
        /*
        await CreateAcountService.insertUser(this.gmail, this.usuario, this.contrasena);
        this.users = await CreateAcountService.getAcounts();
        this.gmail = '';
        this.usuario = '';
        this.contrasena = '';
        confirm("Cuenta creada");*/
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