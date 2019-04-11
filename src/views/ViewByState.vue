<template>
  <main id="states">
  <h1>Promises relating to {{ this.$route.params.state }}</h1>

  <loading-spinner v-if="appStatus === 'loading'" />
  <promises-table v-else :promises="promises" :exclude="['live', 'created_at', 'politician_name']" />

  </main>
</template>

<script>
import malaysianStates from '@/utils/malaysianStates'
import { getLivePromises } from '@/api'
import PromisesTable from '@/components/PromisesTable'
import LoadingSpinner from '@/components//LoadingSpinner'

export default {
  name: 'Politicians',
  components: { PromisesTable, LoadingSpinner },
  data () {
    return {
      malaysianStates,
      appStatus: 'loading',
      promises: []
    }
  },
  async created () {
    const { state } = this.$route.params
    this.promises = await getLivePromises(`state=${state}`)
    this.appStatus = ''
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
main {
  text-align: center
}

.state {
  padding: 20px
}

</style>
