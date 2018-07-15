import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const state = {
  user: {
    authenticated: false
  },
  politicians: []
}

const mutations = {
  login (state, user) {
    state.user = { ...user, authenticated: true }
  },
  logout (state) {
    state.user = {}
  },
  loadPoliticians (state, politicians) {
    state.politicians = [ ...politicians ]
  }
}

export default new Vuex.Store({ state, mutations, plugins: [createPersistedState()] })
