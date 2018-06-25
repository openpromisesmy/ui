<template>
  <main id="Promise">
    <template v-if="appStatus === 'loading'">
      <p>Loading promise...</p>
    </template>
    <template v-else>
      <h1>{{ promise.title }}</h1>
      <p v-for="(value, key) in displayedValues" :key="key" class="Promise_values"><b>{{ key }}: </b>{{ value }}</p>
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
      delete data.id
      delete data.title
      delete data.contributor_id
      delete data.updated_at
      delete data.created_at
      delete data.live
      delete data.politician_id
      data.source_date = formatDate(data.source_date)
      return data
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

.Promise_values{
  text-transform: capitalize
}

</style>
