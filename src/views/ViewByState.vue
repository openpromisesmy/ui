<template>
  <main>
    <el-row id="main_info">
          <section id="page-title">
              <h1>Promises relating to {{ stateName }}</h1>
              <img class="state-image" :src="stateObject.image" :alt="stateName + ' image'">
          </section>
          <section>
              <loading-spinner v-if="appStatus === 'loading'" />
              <promise-stats v-else v-bind="{ promises }"/>
          </section>
    </el-row>
    <el-row>
      <promises-table :promises="promises" :exclude="['live', 'created_at', 'politician_name']" />
    </el-row>
  </main>
</template>

<script>
import malaysianStates from '@/utils/malaysianStates'
import { getLivePromises } from '@/api'
import PromisesTable from '@/components/PromisesTable.vue'
import LoadingSpinner from '@/components/LoadingSpinner.vue'
import PromiseStats from '@/components/PromiseStats.vue'

export default {
  name: 'Politicians',
  components: { LoadingSpinner, PromisesTable, PromiseStats },
  data () {
    return {
      malaysianStates,
      appStatus: 'loading',
      promises: []
    }
  },
  computed: {
    stateObject () {
      return this.malaysianStates.find(x => x.name === this.stateName)
    },
    stateName () {
      return this.$route.params.state
    }
  },
  async created () {
    this.promises = await getLivePromises(`state=${this.stateName}`)
    this.appStatus = ''
  }
}
</script>

<style scoped>
#main_info {
  display: flex;
  flex-direction: row;
  justify-content: space-around
}

#main_info > section {
  flex: 1;
  margin: 10px
}

@media all and (max-width: 500px) {
  #main_info {
    flex-direction: column;
  }
}

.state {
  padding: 20px
}

.state-image{
  max-width: 100%;
}

#page-title {
  text-align: center
}

</style>
