<template>
  <main>
    <header>
      <h1>Lists</h1>
      <p>Promises grouped by themes.</p>
    </header>
    <lists-table :lists="lists"/>
  </main>
</template>

<script>
import { listLists } from '@/api'
import ListsTable from '@/components/Lists/Table'

export default {
  name: 'Lists',
  components: { ListsTable },
  data () {
    return {
      appStatus: '',
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
      this.appStatus = 'loading'
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
