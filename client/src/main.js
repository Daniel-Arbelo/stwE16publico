import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import Vue from 'vue'
import VueRouter from 'vue-router'
import MovieDetails from './components/MovieDetails.vue'

createApp(App).use(router).use(store).mount('#app')

Vue.use(VueRouter)
const routes = [
    { path: '/movies/id', component: MovieDetails },
  ]

  const routers = new VueRouter({
    routes
  })
  
  new Vue({
    routers,
    render: h => h(App)
  }).$mount('#app')

  Vue.config.debug = true