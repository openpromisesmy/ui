import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import actions from './actions'
import { SET_POLITICIAN } from './types'

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
  cachePoliticians (state, politicians) {
    state.politicians = [ ...politicians ]
  },
  [SET_POLITICIAN]: function (state, politician) {
    state.politicians.push(politician)
  }
}

export default new Vuex.Store({ state, actions, mutations, plugins: [createPersistedState()] })
