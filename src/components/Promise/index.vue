<template>
  <promise-mobile v-if="$mq === 'sm'" v-bind="{ promise, politician, appStatus, displayedValues }" />
  <promise-desktop v-else v-bind="{ promise, politician, appStatus, displayedValues }" />
</template>

<script>
import { getPromise, getPolitician } from '@/api'
import PromiseDesktop from '@/components/Promise/Desktop'
import PromiseMobile from '@/components/Promise/Mobile'
import { formatDate } from '@/utils'

export default {
  name: 'Promise',
  components: { PromiseDesktop, PromiseMobile },
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
</style>
