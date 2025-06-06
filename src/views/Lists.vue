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
import ListsTable from '@/components/Lists/Table.vue'
import LoadingSpinner from '@/components/LoadingSpinner.vue'
import { mapActions } from 'vuex'
import { GET_LISTS } from '@/store/types'

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
    ...mapActions([ GET_LISTS ])
  },
  async created () {
    try {
      this.lists = await this[GET_LISTS]()
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
