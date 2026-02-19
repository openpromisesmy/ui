<template>
  <main class="page-shell">
    <template v-if="appStatus === 'loading'">
      <LoadingSpinner/>
    </template>
    <section v-else class="page-panel list-panel">
      <el-row id="main_info" :gutter="12">
        <section id="List_info">
          <span class="label-chip">Promise List</span>
          <h1>{{ list.title }}</h1>
          <p>{{ list.description }}</p>
        </section>
        <section>
          <promise-stats v-if="promises != 'loading'" v-bind="{ promises }" />
        </section>
      </el-row>
      <el-row class="table-wrap">
        <promises-table :promises="promises" :exclude="['source_name', 'politician_name']"/>
      </el-row>
    </section>
  </main>
</template>

<script>
import PromisesTable from '@/components/PromisesTable.vue'
import LoadingSpinner from '@/components/LoadingSpinner.vue'
import PromiseStats from '@/components/PromiseStats.vue'
import { GET_PROMISE, GET_LIST } from '@/store/types'
import { mapActions } from 'vuex'

export default {
  name: 'List',
  data () {
    return {
      appStatus: 'loading',
      list: {},
      promises: []
    }
  },
  components: { LoadingSpinner, PromiseStats, PromisesTable },
  async created () {
    try {
      const getList = this[GET_LIST]
      const getPromise  = this[GET_PROMISE]

      this.list = await getList(this.$route.params.id)
      this.list.promise_ids.forEach(async promiseId => {
        // TODO: use promise.all
        const promise = await getPromise(promiseId)
        if (promise) {
          this.promises.push(promise)
        } else {
          console.error(`promise with ID ${promiseId} is undefined`)
        }
      })
      this.appStatus = ''
    } catch (e) {
      console.error(e)
    }
  },
  methods: {
    ...mapActions([ GET_PROMISE, GET_LIST ])
  }
}
</script>

<style scoped>
#List_info {
  text-align: left;
  max-width: 620px;
}

#List_info h1 {
  margin: 0.55rem 0 0.45rem;
  font-size: clamp(1.6rem, 2.4vw, 2.2rem);
}

.list-panel {
  max-width: 1080px;
  margin: 0 auto;
}

#main_info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  margin-bottom: 10px;
}

#main_info > section {
  flex: 1;
  margin: 8px;
}

.table-wrap {
  margin-top: 10px;
}

@media all and (max-width: 500px) {
  #main_info {
    flex-direction: column;
  }

  #List_info {
    text-align: center;
  }
}
</style>
