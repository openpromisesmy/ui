<template>
  <main id="politicians">
    <template v-if="politician === 'loading'">
      <div>
      <ContentLoader height="350" width="300">
        <rect x="25" y="0" rx="3" ry="3" width="250" height="30" />
        <rect x="50" y="40" rx="3" ry="3" width="200" height="200" />
        <rect x="25" y="250" rx="3" ry="3" width="250" height="30" />
        <rect x="25" y="290" rx="3" ry="3" width="250" height="20" />
        <rect x="25" y="320" rx="3" ry="3" width="250" height="20" />
      </ContentLoader>
      </div>
    </template>
    <template v-else>
      <h1>{{ politician.name }}</h1>
      <img class="image" :src="politician.profile_image" v-on:load="imgDoneLoading">
      <ContentLoader v-if="!imgLoaded" height="200" width="300">
        <rect x="50" y="0" rx="3" ry="3" width="200" height="200" />
      </ContentLoader>
      <p><b>{{ politician.primary_position }}</b></p>
      <p>{{ politician.brief }}</p>
    </template>

    <template v-if="promises === 'loading'">
      <ContentLoader height="310" width="500">
        <rect x="25" y="0" rx="3" ry="3" width="450" height="40"/>
        <rect x="25" y="50" rx="3" ry="3" width="450" height="40"/>
        <rect x="25" y="100" rx="3" ry="3" width="450" height="40"/>
        <rect x="25" y="150" rx="3" ry="3" width="450" height="40"/>
        <rect x="25" y="200" rx="3" ry="3" width="450" height="40"/>
        <rect x="25" y="250" rx="3" ry="3" width="450" height="40"/>
      </ContentLoader>
    </template>
    <template v-else>

    <promise-stats v-bind="{ stats }"/>
    
    <h2>Promises by {{ politician.name }} </h2>
    <el-table
      :data="promises"
      border
      style="width: 100%">
    <el-table-column
      prop="title"
      label="Title">
      <template slot-scope="scope">
        <router-link :to="'/promises/' + scope.row.id">{{ scope.row.title }}</router-link>
      </template>
    </el-table-column>
  </el-table>
    </template>
  </main>
</template>

<script>
import LoadingSpinner from '@/components/shared/LoadingSpinner'
import { ContentLoader } from 'vue-content-loader'
import PromiseStats from './PromiseStats'

export default {
  name: 'PoliticianMobile',
  components: { LoadingSpinner, ContentLoader, PromiseStats },
  props: ['stats', 'politician', 'promises'],
  data () {
    return {
      imgLoaded: false
    }
  },
  methods: {
    imgDoneLoading () {
      this.imgLoaded = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.image {
  min-width: 30%;
  display: inline-block;
  object-fit: cover; /* Do not scale the image */
  object-position: top; /* Center the image within the element */
  width: 60%
}

#politicians p b {
  display: inline-block
}

</style>
