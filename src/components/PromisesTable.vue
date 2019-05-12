<template>
  <section>
    <template>
      <el-row>
        <el-col :xs="24" :sm="12">
          <el-input clearable placeholder="Search for a promise" v-model="search" class="search"/>
        </el-col>
        <el-col :xs="24" :sm="8">
          <el-select v-model="filterStatus" filterable placeholder="Search by status">
            <el-option
              v-for="item in statusOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-col>
      </el-row>
      <p v-if="search.length > 0 && filteredPromises.length > 0">
        <b>{{ filteredPromises.length }}</b>
        promise{{filteredPromises.length > 1 ? 's' : ''}} matches your search.
      </p>
      <p v-if="filteredPromises.length === 0">Sorry, no promise matches your search.</p>
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
    statusOptions: [
    {
      value: '',
      label: 'All'
    }, {
      value: 'Review Needed',
      label: 'Review Needed'
    }, {
      value: 'Not Started',
      label: 'Not Started'
    }, {
      value: 'In Progress',
      label: 'In Progress'
    }, {
      value: 'Fulfilled',
      label: 'Fulfilled'
    }, {
      value: 'Partially Fulfilled',
      label: 'Partially Fulfilled'
    }, {
      value: 'At Risk',
      label: 'At Risk'
    }, {
      value: 'Retracted',
      label: 'Retracted'
    }, {
      value: 'Broken',
      label: 'Broken'
    }],
  }),
  methods: { formatDate },
  computed: {
    filteredPromises () {
      let results = this.promises.filter(promise => {
        return promise.title.toLowerCase().includes(this.search.toLowerCase())
      })
      results = results.filter(promise => {
        return this.filterStatus == '' || promise.status == this.filterStatus;
      })
      return results;
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
</style>
