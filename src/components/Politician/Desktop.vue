<template>
  <main id="politician">
    <template v-if="politician === 'loading'">
      <p>Loading politician...</p>
    </template>
    <template v-else>
      <el-row id="main_info" :gutter="10">
        <el-col :sm="12">
          <politician-details :politician="politician"/>
        </el-col>
        <el-col :sm="12">
          <promise-stats v-if="promises != 'loading'" v-bind="{ stats }"/>
          <ContentLoader v-else width="300" height="280" >
            <rect x="0" y="0" rx="3" ry="3" width="300" height="280" />
          </ContentLoader>
        </el-col>
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
  </main>
</template>

<script>
import PoliticianDetails from '@/components/Politician/PoliticianDetails'
import LoadingSpinner from '@/components//LoadingSpinner'
import PromiseStats from './PromiseStats'
import { ContentLoader } from 'vue-content-loader'
import VueGoodshareFacebook from 'vue-goodshare/src/providers/Facebook.vue'

export default {
  name: 'PoliticianDesktop',
  components: { LoadingSpinner, PromiseStats, PoliticianDetails, ContentLoader, VueGoodshareFacebook },
  props: ['stats', 'politician', 'promises', 'url'],
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
#politician {
  text-align: center
}

#politician p b {
  display: inline-block
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
