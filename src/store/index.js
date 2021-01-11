import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    aQuiz: []
  },
  mutations: {
    saveQuiz (state, payload) {
      state.aQuiz = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
