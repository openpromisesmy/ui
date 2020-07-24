<template>
  <section>
     <article id="Politician">
    <template v-if="politician === 'loading'">
      <p>Loading politician...</p>
    </template>
    <template v-else>
      <el-row id="main_info" :gutter="10">
        <section>
          <politician-details :politician="politician"/>
        </section>
        <section v-if="politician.contact_details">
          <contact-details
            :email="politician.contact_details.email"
            :facebook_url="politician.contact_details.facebook_url"
            :phone_number="politician.contact_details.phone_number"
            :twitter_url="politician.contact_details.twitter_url"
          />
        </section>
        <section>
          <promise-stats v-if="promises != 'loading'" v-bind="{ promises }"/>
        </section>
      </el-row>
    </template>
  </article>
    <h2>Promises by {{ politician.name }} </h2>
    <promises-table :promises="promises" :exclude="['politician_name']"/>
  </section>
</template>

<script>
import { getPolitician, getPoliticianPromises } from '@/services/api'
import { updateTitle } from '@/utils'
import moment from 'moment'
import PromisesTable from '@/components/PromisesTable'
import PoliticianDetails from "@/components/Politician/PoliticianDetails"
import ContactDetails from "@/components/Politician/ContactDetails"
import PromiseStats from "@/components/PromiseStats"

export default {
  name: 'SinglePolitician',
  components: { ContactDetails, PoliticianDetails, PromiseStats, PromisesTable },
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
      this.politician = await getPolitician(this.$route.params.id)
      updateTitle(this.politician.name)
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
h2 {
  text-align: center
}
</style>
