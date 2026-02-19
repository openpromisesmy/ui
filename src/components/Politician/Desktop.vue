<template>
  <article id="Politician">
    <template v-if="politician === 'loading'">
      <p>Loading politician...</p>
      <loading-spinner />
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
          <loading-spinner v-else />
        </section>
      </el-row>
    </template>

    <el-row class="share-wrap">
    <ShareNetwork
      class="facebook-share"
      network="facebook"
      :url="url"
      title="Share on Facebook"
    />
    </el-row>
  </article>
</template>

<script>
import PoliticianDetails from '@/components/Politician/PoliticianDetails.vue'
import LoadingSpinner from '@/components/LoadingSpinner.vue'
import PromiseStats from '@/components/PromiseStats.vue'
import ContactDetails from './ContactDetails.vue'
import { ShareNetwork } from 'vue3-social-sharing'

export default {
  name: 'PoliticianDesktop',
  components: { LoadingSpinner, PromiseStats, PoliticianDetails, ShareNetwork, ContactDetails },
  props: ['politician', 'promises', 'url'],
  data () {
    return {
      search: ''
    }
  },
  computed: {
    filteredPromises () {
      return this.promises.filter(promise => {
        return promise.title.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  }
}
</script>

<style scoped>
#main_info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
}

#main_info > section {
  flex: 1 1 280px;
  margin: 8px;
}

@media all and (max-width: 500px) {
  #main_info {
    flex-direction: column;
  }
}

.search {
  width: 320px;
  max-width: 90vw;
  margin: 10px
}

.facebook-share {
  margin: 10px !important;
  border-radius: 999px;
  padding: 9px 14px;
  background: rgba(15, 118, 110, 0.09);
  border: 1px solid rgba(15, 118, 110, 0.22);
  font-weight: 700;
}

.share-wrap {
  margin-top: 4px;
  justify-content: center;
}
</style>
