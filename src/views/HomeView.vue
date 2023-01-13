<template>
  <div class="home">
    <br><br>
    <img alt="Vue logo" src="../assets/logo.png" style="width:20%;">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
