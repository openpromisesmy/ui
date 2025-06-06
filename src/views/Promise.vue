<template>
  <section id="PromiseView">
    <promise-desktop
                    v-bind="{ promise, politician, appStatus, displayedValues, url }" />
    <promise-updates :promiseUpdates="promiseUpdates"
                     :promiseID="promise.id"
    />
    <facebook-comment id="facebook-comment" />
  </section>
</template>

<script>
import { getPromise, getPolitician, listPromiseUpdates } from '@/api'
import PromiseDesktop from '@/components/Promise/Desktop.vue'
import PromiseUpdates from '@/components/Promise/PromiseUpdates.vue'
import FacebookComment from '@/components/FacebookComment.vue'
import { formatDate, updateTitle } from '@/utils'

export default {
  name: 'Promise',
  components: { PromiseDesktop, PromiseUpdates, FacebookComment },
  data () {
    return {
      appStatus: 'loading',
      politician: '',
      promise: '',
      promiseUpdates: ''
    }
  },
  methods: {
    updateTitle
    // ,parsePolitician: (promises, politicians) => promises.map(promise =>
    //   ({
    //     ...promise,
    //     status: promise.status ? promise.status : 'Review Needed',
    //     source_date: moment(promise.source_date).format('D MMMM YYYY')
    //   })
    // )
  },
  computed: {
    url () {
      return location.href
    },
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
      updateTitle(this.promise.title)
      this.promiseUpdates = await listPromiseUpdates(`?promise_id=${this.$route.params.id}&orderBy=source_date`)
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
#PromiseView {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px
}
#facebook-comment {
  text-align: center
}
</style>
