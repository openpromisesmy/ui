<template>
  <div class="container">
    <template v-if="appStatus === 'loading'">
      <LoadingSpinner/>
    </template>
    <template v-else>
      <el-row id="main_info">
        <section id="List_info">
          <h1>{{ list.title }}</h1>
          <p>{{ list.description }}</p>
        </section>
        <section>
          <promise-stats v-if="promises != 'loading'" v-bind="{ promises }"/>
        </section>
      </el-row>
      <el-row>
        <promises-table :promises="promises" :exclude="['source_name', 'politician_name']"/>
      </el-row>
    </template>
  </div>
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
  text-align: center;
}

#main_info {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

#main_info > section {
  flex: 1;
  margin: 10px;
}

@media all and (max-width: 500px) {
  #main_info {
    flex-direction: column;
  }
}
</style>
