<template>
  <section class="lists-table">
    <el-input clearable placeholder="Search for a list" v-model="search" class="search"/>
    <p v-if="search.length > 0 && filteredLists.length > 0" class="results">
      <b>{{ filteredLists.length }}</b>
      list{{ filteredLists.length > 1 ? 's' : '' }} match your search.
    </p>
    <p v-if="filteredLists.length === 0" class="results empty">Sorry, no list matches your search.</p>

    <el-row class="lists-row">
      <el-col
        :xs="24"
        :sm="12"
        :lg="8"
        v-for="list in filteredLists"
        :key="list.id"
      >
        <router-link :to="/lists/ + list.id">
          <el-card class="list-card">
            <h3>{{ list.title }}</h3>
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
.lists-table {
  margin-top: 10px;
}

.search {
  width: min(420px, 96%);
  margin: 0 auto;
}

.search :deep(.el-input__wrapper) {
  border-radius: 999px;
}

.results {
  margin: 0.8rem 0 0.3rem;
  color: #3a5962;
}

.results.empty {
  color: #8f2540;
  font-weight: 700;
}

.list-card {
  min-height: 170px;
  margin: 8px 4px;
  text-align: left;
  border-radius: 14px;
  border: 1px solid rgba(20, 66, 71, 0.16);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.list-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 14px 26px rgba(15, 40, 44, 0.14);
}

.list-card h3 {
  margin: 0;
  font-size: 1.1rem;
}

.list-card p {
  margin-top: 0.55rem;
}

a {
  text-decoration: none;
  color: unset;
}
</style>
