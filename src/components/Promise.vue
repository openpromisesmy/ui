<template>
  <main id="Promise">
    <template v-if="appStatus === 'loading'">
      <p>Loading promise...</p>
    </template>
    <template v-else>
      <h1>{{ promise.title }}</h1>
      <el-row v-for="(value, key) in displayedValues" :key="key" class="Promise_values">
        <el-col :span="12"><div class="grid-content"> <b>{{ key }} </b> </div></el-col>
        <el-col :span="12"><div class="grid-content"> {{ value }} </div></el-col>
      </el-row>
    </template>

  </main>
</template>

<script>
import { getPromise, getPolitician } from '@/api'
import { formatDate } from '@/utils'
import LoadingSpinner from '@/components/shared/LoadingSpinner'

export default {
  name: 'Promise',
  components: { LoadingSpinner },
  data () {
    return {
      appStatus: 'loading',
      politician: {},
      promise: {}
    }
  },
  methods: {
    // parsePolitician: (promises, politicians) => promises.map(promise =>
    //   ({
    //     ...promise,
    //     status: promise.status ? promise.status : 'Review Needed',
    //     source_date: moment(promise.source_date).format('D MMMM YYYY')
    //   })
    // )
  },
  computed: {
    displayedValues () {
      let data = { ...this.promise }
      return {
        'Source Date': formatDate(data.source_date),
        'Source URL': data.source_url,
        'Source Name': data.source_name,
        'Status': data.status,
        'Category': data.category,
        'Quote': data.quote
      }
    }
  },
  async created () {
    try {
      this.promise = await getPromise(this.$route.params.id)
      this.politician = await getPolitician(this.promise.politician_id)
      this.appStatus = ''
    } catch (e) {
      console.error(e)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#Promise {
  max-width: 900px
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.el-row {
  padding: 10px;
  border: 1px solid grey
}

.el-row:last-child {
  margin-bottom: 0;
}

.el-col {
  border-radius: 4px;
}

</style>
