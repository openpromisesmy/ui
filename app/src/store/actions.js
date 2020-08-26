import {
  GET_POLITICIAN, GET_POLITICIAN_PROMISES, SET_POLITICIAN, SET_POLITICIAN_PROMISES,
  GET_LISTS,
  SET_LISTS
} from './types'
import { getPolitician, getPoliticianPromises, listLists } from '../api/index'
// import { loadCache, updateCache } from "@/utils";
// ideally we implement caching using the above functions but the way to access can be multi level and those caching functions don't support that yet 

export default {
  [GET_POLITICIAN]: async function ({ commit, state }, id) {
    const inPoliticiansArray = state.politicians.find(x => x.id === id)
    if (inPoliticiansArray === undefined) {
      let politician = await getPolitician(id)
      commit(SET_POLITICIAN, politician)
      return politician
    } else {
      return inPoliticiansArray
    }
  },
  [GET_POLITICIAN_PROMISES]: async function ({ commit, state }, id) {
    const inStore = state.politicians.find(x => x.id === id).promises
    if (inStore === undefined) {
      let promises = await getPoliticianPromises(id)
      commit(SET_POLITICIAN_PROMISES, { promises, id })
      return promises
    } else {
      return inStore
    }
  },
  [GET_LISTS]: async function ({ commit, state }) {
    const inCache = state.lists
    if (inCache === undefined) {
      const lists = await listLists()
      commit(SET_LISTS, lists)
      return lists
    } else {
      return inCache
    }
  }
}
