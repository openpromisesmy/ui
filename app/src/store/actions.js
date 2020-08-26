import { GET_POLITICIAN, SET_POLITICIAN } from './types'
import { getPolitician } from '../api/index'

export default {
  [GET_POLITICIAN]: async function ({ commit, state }, id) {
    // TODO: loadCache
    // if not available, call api and then update cache
    const inPoliticiansArray = state.politicians.find(x => x.id === id)
    if (inPoliticiansArray === undefined) {
      let politician = await getPolitician(id)
      commit(SET_POLITICIAN, politician)
      return politician
    } else {
      return inPoliticiansArray
    }
  }
}
