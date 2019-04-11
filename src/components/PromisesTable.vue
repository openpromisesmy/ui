<template>
  <section>
    <template>
      <el-input clearable placeholder="Search for a promise" v-model="search" class="search" />
      <p v-if="search.length > 0 && filteredPromises.length > 0"><b>{{ filteredPromises.length }}</b> promise{{filteredPromises.length > 1 ? 's' : ''}} matches your search.</p>
      <p v-if="filteredPromises.length === 0">Sorry, no promise matches your search.</p>
    </template>
    <el-table
    :data="filteredPromises"
    :default-sort = "{prop: 'created_at', order: 'descending'}"
    border
    style="width: 100%">
      <el-table-column
        prop="live"
        label="Live"
        width="125">
        <template slot-scope="scope">
          <el-button v-if="scope.row.live" type="success" icon="el-icon-check" circle></el-button>
          <span v-else>
            {{ scope.row.live.toString() }}
          </span>
        </template>
      </el-table-column>
      <el-table-column
        prop="created_at"
        label="Created At"
        width="150"
      >
        <template slot-scope="scope">
          <p>{{ formatDate(scope.row.created_at) }}</p>
        </template>
      </el-table-column>
      <el-table-column
        prop="title"
        label="Title"
      >
        <template slot-scope="scope">
          <router-link :to="'/promises/' + scope.row.id">
          <p class="promise-title">{{ scope.row.title }}</p>
          </router-link>
        </template>
      </el-table-column>
      <el-table-column
        prop="description"
        label="Description"
      >
        <template slot-scope="scope">
          <p class="promise-title">{{ scope.row.quote }}</p>
        </template>
      </el-table-column>
      <el-table-column
        v-if="!exclude.includes('source_name') && !(this.$mq === 'sm')"
        prop="source_name"
        label="Source Name"
        width="200">
      </el-table-column>
      <el-table-column
        sortable
        v-if="!exclude.includes('source_date') && !(this.$mq === 'sm')"
        prop="source_date"
        label="Source Date"
        width="150">
        <template slot-scope="scope">
          <p>{{ formatDate(scope.row.source_date) }}</p>
        </template>
      </el-table-column>
      <el-table-column
        v-if="!exclude.includes('category') && !(this.$mq === 'sm')"
        prop="category"
        label="Category"
        width="180">
      </el-table-column>
      <el-table-column
        v-if="!exclude.includes('politician_name') && !(this.$mq === 'sm')"
        prop="politician_name"
        label="Politician"
        width="150">
      </el-table-column>
      <el-table-column
        sortable
        v-if="!exclude.includes('status') && !(this.$mq === 'sm')"
        prop="status"
        label="Status"
        width="125">
      </el-table-column>
    </el-table>
  </section>
</template>

<script>
import LoadingSpinner from '@/components//LoadingSpinner'
import { formatDate } from '@/utils'

export default {
  name: 'PromisesTable',
  components: { LoadingSpinner },
  props: {
    promises: { type: Array },
    exclude: { type: Array, default: () => [] }
  },
  data: () => ({
    search: ''
  }),
  methods: { formatDate },
  computed: {
    filteredPromises () {
      return this.promises.filter(promise => {
        return promise.title.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.promise-title {
  word-break: normal
}
.el-input {
  margin-bottom: 20px
}
</style>
