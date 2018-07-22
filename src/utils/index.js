import moment from 'moment'
import { isEmpty, capitalize } from 'lodash'

function generateStats (promises) {
  if (!Array.isArray(promises)) {
    return []
  }
  const statusOptions = new Set(promises.map(promise => promise.status))
  const stats = []
  statusOptions.forEach(statusOption => {
    const hits = promises.filter(promise => promise.status === statusOption)
    stats.push({ value: statusOption || 'undefined', number: hits.length })
  })
  return stats
}

function formatDate (date) {
  return moment(date).format('D MMMM YYYY')
}

async function updateCache (self, key, promise) {
  self.$store.commit(`cache${capitalize(key)}`, await promise)

  return self.$store.state[key]
}

async function loadCache (self, key, promise) {
  if (isEmpty(self.$store.state[key])) {
    return updateCache(self, key, promise)
  }

  return self.$store.state[key]
}

export {
  generateStats,
  formatDate,
  updateCache,
  loadCache
}
