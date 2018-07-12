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
import { formatDate } from '@/utils'
import LoadingSpinner from '@/components/shared/LoadingSpinner'

export default {
  name: 'PromisesDesktop',
  components: { LoadingSpinner },
  props: [ 'politicians', 'promises', 'stats', 'livePromises', 'appStatus', 'loadMorePromises' ],
  methods: {
    formatDate
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

.Promises_pagination {
  margin: 20px 0
}

</style>
