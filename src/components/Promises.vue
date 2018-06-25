<template>
  <main id="promises">
    <h1>Promises {{ promises.length > 0 ? `- ${promises.length}` : '' }}</h1>
    <template v-if="promises.length === 0">
      <p>Loading promises...This will take 3-5 seconds.</p>
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
    :data="promises"
    border
    style="width: 100%">
    <el-table-column
      prop="title"
      label="Title"
      width="180">
      <template slot-scope="scope">
        <router-link :to="'/promises/' + scope.row.id">{{ scope.row.title }}</router-link>
      </template>
    </el-table-column>
    <el-table-column
      prop="source_date"
      label="Date"
      width="150">
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
      prop="source_name"
      label="Source">
    </el-table-column>
    <el-table-column
      prop="status"
      label="Status"
      width="125">
    </el-table-column>
  </el-table>
    </template>
  </main>
</template>

<script>
import { getLivePromises, getPoliticians } from '@/api'
import { generateStats } from '@/utils'
import moment from 'moment'
import LoadingSpinner from '@/components/shared/LoadingSpinner'

export default {
  name: 'Promises',
  components: { LoadingSpinner },
  data () {
    return {
      politicians: [],
      promises: []
    }
  },
  computed: {
    stats: function () {
      return generateStats(this.promises)
    }
  },
  methods: {
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
          source_date: moment(promise.source_date).format('D MMMM YYYY'),
          politician_name: politicians.find(politician => politician.id === promise.politician_id).name
        })
      )
    }
  },
  async created () {
    try {
      const promises = await getLivePromises()
      const politicians = await getPoliticians()
      this.politicians = politicians
      this.promises = this.parsePromises(promises, politicians)
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
</style>
