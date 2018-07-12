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
      <el-button type="primary" @click="loadMorePromises(livePromises[livePromises.length -1])">
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
  name: 'PromisesDesktop',
  components: { LoadingSpinner },
  props: [ 'politicians', 'promises', 'stats', 'livePromises', 'appStatus', 'loadMorePromises' ],
  methods: {
      formatDate
  },
  data () {
    return {
      query: {
        pageSize: 10,
        orderBy: 'source_date',
        reverse: true
      }
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
