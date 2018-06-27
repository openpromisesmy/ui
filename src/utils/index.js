import moment from 'moment'

function generateStats (promises) {
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

export {
  generateStats,
  formatDate
}
