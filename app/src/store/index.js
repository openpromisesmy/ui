import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import actions from './actions'
import { SET_POLITICIAN, SET_POLITICIAN_PROMISES, SET_LISTS } from './types'

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
  cacheLists (state, lists) {
    state.lists = [...lists]
  },
  [SET_LISTS]: function (state, lists) {
    state.lists = [...lists]
  },
  [SET_POLITICIAN]: function (state, politician) {
    state.politicians.push(politician)
  },
  [SET_POLITICIAN_PROMISES]: function(state, { promises, id }) {
    state.politicians.find(x => x.id === id).promises = promises
  }
}

export default new Vuex.Store({ state, actions, mutations, plugins: [createPersistedState()] })
