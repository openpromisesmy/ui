<template>
  <main class="page-shell">
    <loading-spinner v-if="appStatus==='loading'" />
    <section v-else class="page-panel">
      <header class="view-header">
        <span class="label-chip">Collections</span>
        <h1 class="title">Lists</h1>
        <p>Promises grouped by themes.</p>
      </header>
      <lists-table :lists="lists"/>
    </section>
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
.page-panel {
  max-width: 1040px;
  margin: 0 auto;
}
</style>
