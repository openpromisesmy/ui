<template>
  <main id="Promise">
    <template v-if="appStatus === 'loading'">
      <p>Loading promise...</p>
    </template>
    <template v-else>
      <h1>{{ promise.title }}</h1>
    </template>

  </main>
</template>

<script>
import { getPromise, getPolitician } from '@/api'
import moment from 'moment'
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

</style>
