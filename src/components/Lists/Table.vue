<template>
  <section>
    <template>
      <el-input clearable placeholder="Search for a list" v-model="search" class="search"/>
      <p v-if="search.length > 0 && filteredLists.length > 0">
        <b>{{ filteredLists.length }}</b>
        list{{filteredLists.length > 1 ? 's' : ''}} matches your search.
      </p>
      <p v-if="filteredLists.length === 0">Sorry, no list matches your search.</p>
    </template>
    <el-table :data="filteredLists" border style="width: 100%">
      <el-table-column prop="title" label="Title">
        <template slot-scope="scope">
          <router-link :to="'/lists/' + scope.row.id">
            <p class="list-title">{{ scope.row.title }}</p>
          </router-link>
        </template>
      </el-table-column>
      <el-table-column prop="description" label="Description">
        <template slot-scope="scope">
          <p class="list-title">{{ scope.row.description }}</p>
        </template>
      </el-table-column>
    </el-table>
  </section>
</template>

<script>
import LoadingSpinner from '@/components//LoadingSpinner'
import { formatDate } from '@/utils'

export default {
  name: 'ListsTable',
  components: { LoadingSpinner },
  props: {
    lists: { type: Array },
    exclude: { type: Array, default: () => [] }
  },
  data: () => ({
    search: ''
  }),
  methods: { formatDate },
  computed: {
    filteredLists () {
      return this.lists.filter(list => {
        return list.title.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list-title {
  word-break: normal;
}
.el-input {
  padding: 10px 0;
}
</style>
