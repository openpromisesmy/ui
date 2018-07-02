<template>
  <main id="promises">
    <h1>Most Recent Promises</h1>
    <template v-if="appStatus === 'loading'">
      <p>Loading promises...This will take 2-4 seconds.</p>
      <LoadingSpinner />
    </template>
    <template v-else>

    <el-card id="Promise_stats">
      <b>Promise Statistics:</b>
      <el-button v-for="stat in stats" :key="stat.value">
        <b>{{ stat.value }}</b> {{ stat.number }}
      </el-button>
    </el-card>

    <el-table
    :data="livePromises"
    :default-sort = "{prop: 'source_date', order: 'descending'}"
    border
    style="width: 100%">
    <el-table-column
      prop="title"
      label="Title"
      width="500"
    >
      <template slot-scope="scope">
        <router-link :to="'/promises/' + scope.row.id">{{ scope.row.title }}</router-link>
      </template>
    </el-table-column>
    <el-table-column
      prop="source_date"
      label="Source Date"
      width="150">
      <template slot-scope="scope">
        <p>{{ formatDate(scope.row.source_date) }}</p>
      </template>
    </el-table-column>
    <el-table-column
      prop="category"
      label="Category"
      width="180">
    </el-table-column>
    <el-table-column
      prop="politician_name"
      label="Politician"
      width="150">
    </el-table-column>
    <el-table-column
      prop="status"
      label="Status"
      width="125">
    </el-table-column>
  </el-table>
    <LoadingSpinner v-if="appStatus === 'loadingMore'" />
    <el-row class="Promises_pagination" v-else>
      <el-button type="primary" @click="loadMorePromise(livePromises[livePromises.length -1])">
        Load more >>
      </el-button>
    </el-row>
    </template>
  </main>
</template>

<script>
import { getLivePromises, getPoliticians } from '@/api'
import { generateStats, formatDate } from '@/utils'
import LoadingSpinner from '@/components/shared/LoadingSpinner'
import queryString from 'query-string'

export default {
  name: 'Promises',
  components: { LoadingSpinner },
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
    formatDate,
    queryString () {
      console.log('queryString ()', JSON.stringify(this.query, null, 2))
      return queryString.stringify(this.query)
    },
    async listPromisesHandler (queryString) {
      console.log('listPromisesHandler ()', queryString)
      this.appStatus = 'loading'
      const promises = await getLivePromises(queryString)
      if (promises.length === 0) return alert('no results')
      this.promises = this.parsePromises(promises, this.politicians)
      this.appStatus = ''
    },
    async loadMorePromise (startAfterPromise) {
      this.appStatus = 'loadingMore'
      this.pageNumber++
      this.query.reverse = true

      this.updateStartAfter(this.query.reverse)
      console.log(startAfterPromise.source_date)

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
        console.log('updateStartAfter()', JSON.stringify(this.query, null, 2), this.queryString())
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
