<template>
  <div>
    <politician-mobile v-if="$mq === 'sm'"
      v-bind="{ politician, promises, stats, url }" />
    <politician-desktop v-else
      v-bind="{ politician, promises, stats,url }" />
  </div>
</template>

<script>
import { getPolitician, getPoliticianPromises } from '@/api'
import { generateStats } from '@/utils'
import moment from 'moment'
import PoliticianDesktop from '@/components/Politician/Desktop'
import PoliticianMobile from '@/components/Politician/Mobile'

export default {
  name: 'Politician',
  components: { PoliticianDesktop, PoliticianMobile },
  data () {
    return {
      politician: 'loading',
      promises: 'loading'
    }
  },
  computed: {
    stats: function () {
      return generateStats(this.promises)
    },
    url () {
      return location.href
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
