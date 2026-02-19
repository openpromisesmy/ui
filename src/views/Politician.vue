<template>
  <main class="page-shell">
    <section class="page-panel detail-panel">
      <politician-desktop v-bind="{ politician, promises, url }" />
    </section>

    <section class="page-panel">
      <header class="view-header">
        <h2>Promises by {{ politician.name }}</h2>
      </header>
      <promises-table :promises="promises" :exclude="['politician_name']"/>
    </section>
  </main>
</template>

<script>
import { updateTitle } from '@/utils'
import moment from 'moment'
import PoliticianDesktop from '@/components/Politician/Desktop.vue'
import PromisesTable from '@/components/PromisesTable.vue'
import { mapActions } from 'vuex'
import { GET_POLITICIAN, GET_POLITICIAN_PROMISES } from '@/store/types' 

export default {
  name: 'Politician',
  components: { PoliticianDesktop, PromisesTable },
  data () {
    return {
      politician: {},
      promises: []
    }
  },
  computed: {
    url () {
      return location.href
    }
  },
  methods: {
    ...mapActions([ GET_POLITICIAN, GET_POLITICIAN_PROMISES ]),
    updateTitle,
    parsePromises: (promises) => promises.map(promise =>
      ({
        ...promise,
        status: promise.status ? promise.status : 'Review Needed',
        source_date: moment(promise.source_date).format('D MMMM YYYY')
      })
    )
  },
  async created () {
    try {
      this.politician = await this[GET_POLITICIAN](this.$route.params.id)
      updateTitle(this.politician.name)
      const promises = await this[GET_POLITICIAN_PROMISES](this.$route.params.id)
      this.promises = this.parsePromises(promises)
    } catch (e) {
      console.error(e)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.detail-panel {
  max-width: 1080px;
  margin: 0 auto;
}

.view-header h2 {
  font-size: clamp(1.4rem, 2vw, 1.9rem);
}
</style>
