import moment from 'moment'
import { isEmpty, capitalize } from 'lodash'
import promiseStatusValues from './promiseStatusValues'
import updateTitle from './updateTitle'
import statusColorMap from './statusColorMap'
import quizSetting from './quizSetting'

function generateStats (promises) {
  let stats = {}
  promiseStatusValues.forEach(x => {
    stats[x] = 0
  })

  if (!Array.isArray(promises)) {
    return stats
  }

  promises.forEach(promise => {
    if (promiseStatusValues.includes(promise.status)) {
      return stats[promise.status]++
    } else {
      return stats['Review Needed']++
    }
  })
  return stats
}

function formatDate (date) {
  return moment(date).format('D MMMM YYYY')
}

// NOTE: 'promise' is the javascript promise, not politician's promise
async function updateCache (self, key, promise) {
  try {
    self.$store.commit(`cache${capitalize(key)}`, await promise)

    return self.$store.state[key]
  } catch (e) {
    console.error(e)
  }
}
// NOTE: 'promise' is the javascript promise, not politician's promise
async function loadCache (self, key, promise) {
  if (isEmpty(self.$store.state[key])) {
    return updateCache(self, key, promise)
  }

  return self.$store.state[key]
}

/**
 * 
 * @param {any} value 
 * @param {string} name 
 */

function assert(value, name) {
  if (!value) {
    console.warn(name + ' is not defined')
  }
}

export {
  assert,
  generateStats,
  formatDate,
  updateCache,
  loadCache,
  statusColorMap,
  updateTitle,
  quizSetting
}
