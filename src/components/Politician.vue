<template>
  <politician-desktop v-bind="{ politician, promises, stats }" />
</template>

<script>
import { getPolitician, getPoliticianPromises } from '@/api'
import { generateStats } from '@/utils'
import moment from 'moment'
import PoliticianDesktop from '@/components/PoliticianDesktop'

export default {
  name: 'Politician',
  components: { PoliticianDesktop },
  data () {
    return {
      politician: {},
      promises: 'loading'
    }
  },
  computed: {
    stats: function () {
      return generateStats(this.promises)
    }
  },
  methods: {
    parsePromises: (promises, politicians) => promises.map(promise =>
      ({
        ...promise,
        status: promise.status ? promise.status : 'Review Needed',
        source_date: moment(promise.source_date).format('D MMMM YYYY')
      })
    )
  },
  async created () {
    try {
      this.politician = await getPolitician(this.$route.params.id)
      const promises = await getPoliticianPromises(this.$route.params.id)
      promises.forEach(promise => console.log(promise.status))
      this.promises = this.parsePromises(promises)
    } catch (e) {
      console.error(e)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
