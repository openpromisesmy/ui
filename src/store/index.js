import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  user: {
   authenticated: false
  }
}

const mutations = {
  login: (state, user) => ({ ...state, user: { ...user, authenticated: true } })
}

export default new Vuex.Store({ state })