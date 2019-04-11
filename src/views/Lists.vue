<template>
  <main>
    <loading-spinner v-if="appStatus==='loading'" />
    <template v-else>
      <header>
        <h1>Lists</h1>
        <p>Promises grouped by themes.</p>
      </header>
      <lists-table :lists="lists"/>
    </template>
  </main>
</template>

<script>
import { listLists } from '@/api'
import ListsTable from '@/components/Lists/Table'
import LoadingSpinner from '@/components/LoadingSpinner'

export default {
  name: 'Lists',
  components: { ListsTable, LoadingSpinner },
  data () {
    return {
      appStatus: 'loading',
      lists: []
    }
  },
  methods: {
    async listListsHandler () {
      return listLists()
    }
  },
  async created () {
    try {
      this.lists = await this.listListsHandler()
      this.appStatus = ''
    } catch (e) {
      console.error(e)
    }
  }
}
</script>

<style scoped>
main {
  padding: 0 10%;
  text-align: center;
}
header {
  text-align: center;
}
</style>
