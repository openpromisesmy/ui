<template>
  <promises-desktop v-bind="{ politicians, promises, stats, livePromises, appStatus, loadMorePromises }"
  />
</template>

<script>
import { getLivePromises, getPoliticians } from '@/api'
import { generateStats } from '@/utils'
import LoadingSpinner from '@/components/shared/LoadingSpinner'
import queryString from 'query-string'
import PromisesDesktop from '@/components/PromisesDesktop'

export default {
  name: 'Promises',
  components: { LoadingSpinner, PromisesDesktop },
  data () {
    return {
      appStatus: '',
      politicians: [],
      promises: [],
      pageNumber: 1,
      query: {
        pageSize: 10,
        orderBy: 'source_date',
        reverse: true
      }
    }
  },
  computed: {
    stats: function () {
      return generateStats(this.livePromises)
    },
    livePromises: function () {
      return this.parsePromises(this.promises, this.politicians)
    }
  },
  methods: {
    queryString () {
      return queryString.stringify(this.query)
    },
    async listPromisesHandler (queryString) {
      this.appStatus = 'loading'
      const promises = await getLivePromises(queryString)
      if (promises.length === 0) return alert('no results')
      this.promises = this.parsePromises(promises, this.politicians)
      this.appStatus = ''
    },
    async loadMorePromises (startAfterPromise) {
      this.appStatus = 'loadingMore'
      this.pageNumber++
      this.query.reverse = true

      this.updateStartAfter(this.query.reverse)

      const promises = await getLivePromises(this.queryString())
      if (promises.length === 0) return alert('no results')
      // sort ?
      this.promises = [...this.promises, ...promises]
      this.appStatus = ''
    },
    filterLivePoliticians (promises, politicians) {
      return promises.filter(promise => {
        const politicianIDs = politicians.map(politician => politician.id)
        return politicianIDs.includes(promise.politician_id)
      })
    },
    parsePromises (promises, politicians) {
      const filteredPromises = this.filterLivePoliticians(promises, politicians)
      return filteredPromises.map(promise =>
        ({
          ...promise,
          status: promise.status ? promise.status : 'Review Needed',
          politician_name: politicians.find(politician => politician.id === promise.politician_id).name
        })
      )
    },
    updateStartAfter (reverse) {
      if (this.pageNumber === 1) delete this.query.startAfter

      if (this.pageNumber > 1) {
        this.query.startAfter = reverse ? this.promises[this.promises.length - 1][this.query.orderBy] : this.promises[0][this.query.orderBy]
      }
    },
    nextPage () {
      this.pageNumber++
      this.query.reverse = true
      this.updateQuery()
    },
    previousPage () {
      if (this.pageNumber === 1) return
      this.pageNumber--
      this.query.reverse = false
      this.updateQuery()
    },
    updateQuery (obj) {
      this.query = { ...this.query, ...obj }
      this.updateStartAfter(this.query.reverse)
      this.listPromisesHandler(this.queryString())
    }
  },
  async created () {
    try {
      this.appStatus = 'loading'
      const politicians = await getPoliticians()
      this.politicians = politicians
      this.listPromisesHandler(this.queryString())
    } catch (e) {
      console.error(e)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  text-decoration: none;
}

.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
  object-fit: cover; /* Do not scale the image */
  object-position: top; /* Center the image within the element */
  height: 300px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: '';
}

.clearfix:after {
  clear: both;
}

.Promises_pagination {
  margin: 20px 0
}

</style>
