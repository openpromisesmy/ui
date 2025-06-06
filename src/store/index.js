import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import actions from './actions'
import {
  SET_POLITICIAN, SET_POLITICIAN_PROMISES,
  SET_LIST,
  SET_LISTS,
  SET_PROMISE
 } from './types'


const state = {
  user: {
    authenticated: false
  },
  politicians: [], // maybe this should be an object, caching lookup will be more starightforward
  promises: {}
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
    state.lists = [...lists ]
  },
  [SET_PROMISE]: function (state, { promise, id }) {
    state.promises[id] = promise
  },
  [SET_LIST]: function(state, list) {
    state.lists = [ ...state.list.filter(x => x.id !== list.id).push(list) ]
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

export default createStore({
  state,
  actions,
  mutations,
  plugins: [createPersistedState()]
})
