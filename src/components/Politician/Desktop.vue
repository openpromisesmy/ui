<template>
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
          <ContentLoader v-else width="300" height="280" >
            <rect x="0" y="0" rx="3" ry="3" width="300" height="280" />
          </ContentLoader>
        </section>
      </el-row>
    </template>

    <el-row>
    <vue-goodshare-facebook
      class="facebook-share"
      :page_url="url"
      title_social="Share on Facebook"
      has_counter
      has_icon
    ></vue-goodshare-facebook>
    </el-row>
  </article>
</template>

<script>
import PoliticianDetails from '@/components/Politician/PoliticianDetails'
import LoadingSpinner from '@/components/LoadingSpinner'
import PromiseStats from '@/components/PromiseStats'
import ContactDetails from './ContactDetails'
import { ContentLoader } from 'vue-content-loader'
import VueGoodshareFacebook from 'vue-goodshare/src/providers/Facebook.vue'

export default {
  name: 'PoliticianDesktop',
  components: { LoadingSpinner, PromiseStats, PoliticianDetails, ContentLoader, VueGoodshareFacebook, ContactDetails },
  props: [ 'politician', 'promises', 'url'],
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
  justify-content: space-around
}

#main_info > section {
  flex: 1;
  margin: 10px
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
  margin: 20px !important
}

</style>
