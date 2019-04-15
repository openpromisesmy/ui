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
import { getList, getPromise } from '@/api'
import PromisesTable from '@/components/PromisesTable'
import LoadingSpinner from '@/components/LoadingSpinner'
import PromiseStats from '@/components/PromiseStats'

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
      this.list = await this.getListHandler(this.$route.params.id)
      this.list.promise_ids.forEach(async promiseId => {
        this.promises.push(await getPromise(promiseId))
      })
      this.appStatus = ''
    } catch (e) {
      console.error(e)
    }
  },
  methods: {
    async getListHandler (id) {
      return getList(id)
    },
    async getPromiseHandler (id) {
      return getPromise(id)
    }
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
</style>
