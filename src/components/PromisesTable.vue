<template>
  <section>
    <template>
      <el-card class="filters">
      <el-row>
        <el-col :xs="24" :sm="12">
          <span>Filter by title</span>
          <el-input clearable placeholder="Search for a promise" v-model="search" class="search" />
        </el-col>
        <el-col :xs="24" :sm="12">
          <span>Filter by status</span>
          <el-select v-model="filterStatus" clearable filterable placeholder="Search by status">
            <el-option
              v-for="status in statusOptions"
              :key="status"
              :label="status"
              :value="status">
            </el-option>
            <template slot="prepend">Filter by title</template>
          </el-select>
        </el-col>
      </el-row>
      </el-card>
      <p v-if="search.length > 0 && filteredPromises.length > 0" id="filter-result-statement">
        <b>{{ filteredPromises.length }}</b>
        promise{{filteredPromises.length > 1 ? 's' : ''}} matches your search.
      </p>
      <p v-if="promises.length === 0" align="center">There have been no promises uploaded yet for this politician. Did we miss a promise? <router-link to="/submit">Submit a promise</router-link> now to help us fill that gap</p>
      <p v-else-if="promises.length > 0 && filteredPromises.length === 0" align="center">There have been no promises about {{ search }}. Did we miss a promise? <router-link to="/submit">Submit a promise</router-link> now to help us fill that gap</p>
    </template>
    <el-row class="promise-cards-container">
      <el-col :xs="24" :sm="8" :md="6" :lg="6" :xl="4" v-for="promise in filteredPromises" :key="promise.id" >
        <promise-card :promise="promise" />
      </el-col>
    </el-row>
    <!-- <el-table
      :data="filteredPromises"
      :default-sort="{prop: 'created_at', order: 'descending'}"
      border
      style="width: 100%"
    >
      <el-table-column
        sortable
        v-if="!exclude.includes('status')"
        prop="status"
        label="Status"
        width="125"
      ></el-table-column>
      <el-table-column prop="title" label="Title">
        <template slot-scope="scope">
          <router-link :to="'/promises/' + scope.row.id">
            <p class="promise-title">{{ scope.row.title }}</p>
          </router-link>
        </template>
      </el-table-column>
      <el-table-column
        v-if="!exclude.includes('source_name') && !(this.$mq === 'sm')"
        prop="source_name"
        label="Source Name"
        width="200"
      ></el-table-column>
      <el-table-column
        sortable
        v-if="!exclude.includes('source_date') && !(this.$mq === 'sm')"
        prop="source_date"
        label="Source Date"
        width="150"
      >
        <template slot-scope="scope">
          <p>{{ formatDate(scope.row.source_date) }}</p>
        </template>
      </el-table-column>
      <el-table-column
        v-if="!exclude.includes('category') && !(this.$mq === 'sm')"
        prop="category"
        label="Category"
        width="180"
      ></el-table-column>
      <el-table-column
        v-if="!exclude.includes('politician_name') && !(this.$mq === 'sm')"
        prop="politician_name"
        label="Politician"
        width="150"
      ></el-table-column>
    </el-table> -->
  </section>
</template>

<script>
import LoadingSpinner from '@/components//LoadingSpinner'
import { formatDate } from '@/utils'
import PromiseCard from '@/components/PromiseCard'
import promiseStatusValues from '../utils/promiseStatusValues'

export default {
  name: 'PromisesTable',
  components: { LoadingSpinner, PromiseCard },
  props: {
    promises: { type: Array },
    exclude: { type: Array, default: () => [] }
  },
  data: () => ({
    search: '',
    filterStatus : '',
    statusOptions : [...promiseStatusValues]
  }),
  methods: { formatDate },
  computed: {
    filteredPromises () {
      const textFiltered = this.promises.filter(promise => {
        return promise.title.toLowerCase().includes(this.search.toLowerCase())
      })
      const textAndStatusFiltered = textFiltered.filter(promise => {
        return this.filterStatus == '' || promise.status == this.filterStatus
      })
      return textAndStatusFiltered
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.promise-title {
  word-break: normal;
}
.el-input {
  margin-bottom: 20px;
}
.promise-cards-container {
  width: 100%;
  /* margin: 0 auto */
}
.search {
  width: 70%;
}
.filters {
  margin: 10px
}
#filter-result-statement {
  text-align: center
}
</style>
