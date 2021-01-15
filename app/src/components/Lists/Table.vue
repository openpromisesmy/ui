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
    <!-- TODO: extract to ListCard component -->
    <el-row class="lists-row">
      <el-col
        :xs="24"
        :sm="12"
        :lg="8"
        v-for="list in filteredLists"
        :key="list.id"
      >
        <router-link :to="/lists/ + list.id">
          <el-card>
            <a href="">{{ list.title }}</a>
            <p>{{ list.description }}</p>
          </el-card>
        </router-link>
      </el-col>
    </el-row>
  </section>
</template>

<script>
// import LoadingSpinner from '@/components//LoadingSpinner'
import { formatDate } from '@/utils'

export default {
  name: 'ListsTable',
  // components: { LoadingSpinner },
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
.el-card {
  height: 150px;
  margin: 5px;
  text-align: left;
  padding: 10px 5px
}
a {
  text-decoration: none;
}
</style>
