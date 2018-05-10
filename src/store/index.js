import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  user: {
   authenticated: false
  }
}

export default new Vuex.Store({ state })