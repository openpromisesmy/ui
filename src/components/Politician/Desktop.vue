<template>
  <main id="politician">
    <template v-if="politician === 'loading'">
      <p>Loading politician...</p>
    </template>
    <template v-else>
      <el-row id="main_info">
        <el-col :md="16">
          <politician-details :politician="politician"/>
        </el-col>
        <el-col :md="8">
          <promise-stats v-if="promises != 'loading'" v-bind="{ stats }"/>
          <ContentLoader v-else width="300" height="280" >
            <rect x="0" y="0" rx="3" ry="3" width="300" height="280" />
          </ContentLoader>
        </el-col>
      </el-row>
    </template>

    <vue-goodshare-facebook
      class="facebook-share"
      :page_url="url"
      title_social="Share on Facebook"
      has_counter
      has_icon
    ></vue-goodshare-facebook>

    <template v-if="promises === 'loading'">
      <p>Loading promises...This will take 2-4 seconds.</p>
      <LoadingSpinner />
    </template>
    <template v-else>
    <h2>Promises by {{ politician.name }}</h2>
    <template v-if="promises != 'loading'">
      <el-input clearable placeholder="Search for a promise" v-model="search" class="search" />
      <p v-if="search.length > 0 && filteredPromises.length > 0"><b>{{ filteredPromises.length }}</b> promise{{filteredPromises.length > 1 ? 's' : ''}} matches your search.</p>
      <p v-if="filteredPromises.length === 0">Sorry, no promise matches your search.</p>
      <desktop-promise-list :promises="filteredPromises"/>
    </template>
    <ContentLoader v-else width="600" height="500" >
      <rect x="0" y="0" rx="3" ry="3" width="600" height="20" />
      <rect x="0" y="25" rx="3" ry="3" width="600" height="20" />
      <rect x="0" y="50" rx="3" ry="3" width="600" height="20" />
      <rect x="0" y="75" rx="3" ry="3" width="600" height="20" />
    </ContentLoader>
    </template>
  </main>
</template>

<script>
import PoliticianDetails from '@/components/Politician/PoliticianDetails'
import LoadingSpinner from '@/components//LoadingSpinner'
import PromiseStats from './PromiseStats'
import DesktopPromiseList from './DesktopPromiseList'
import { ContentLoader } from 'vue-content-loader'
import VueGoodshareFacebook from 'vue-goodshare/src/providers/Facebook.vue'

export default {
  name: 'PoliticianDesktop',
  components: { LoadingSpinner, PromiseStats, PoliticianDetails, ContentLoader, DesktopPromiseList, VueGoodshareFacebook },
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

#main_info {
  display: flex
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
