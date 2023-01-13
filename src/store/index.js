import { createStore } from 'vuex'

export default createStore({
  state: {
    sesionIniciada: 0,
    usuarioLogeado: '',
    usuario: null
  },
  getters: {
    sesionIniciada(state) {
      return state.sesionIniciada;
    },
    usuarioLogeado(state) {
      return state.usuarioLogeado;
    }
  },
  mutations: {
    logearUsuario(state){
      state.usuarioLogeado = state.usuario;
      state.sesionIniciada = 1;
    }
  },
  actions: {
    logearUsuarioAction(context){
      context.commit('logearUsuario');
    }
  },
  modules: {
  }
})
