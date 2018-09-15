<template>
  <main id="Promise">

    <template v-if="appStatus === 'loading'">
      <ContentLoader height="350" width="300">
        <rect x="50" y="0" rx="3" ry="3" width="200" height="100" />
        <rect x="50" y="110" rx="3" ry="3" width="200" height="80" />
        <rect x="50" y="200" rx="3" ry="3" width="200" height="80" />
      </ContentLoader>
    </template>

    <template v-else>

      <el-card v-if="promise.cover_image" class="Promise_card_image" :style="{ backgroundImage: 'url(' + promise.cover_image + ')' }">
      </el-card> 

      <el-card class="Promise_Mobile_hero">
        <p>{{ politician.name }}</p>
        <h1>{{ promise.title }}</h1>
        <p class="Promise_Mobile_date">{{ formatDate(promise.source_date) }}</p>
      </el-card>

      <el-card class="Promise_Mobile_quote">
        <p> <b> Quote </b></p>
        <p> {{ promise.quote }} </p>
        <a :href="promise.source_url" target="_blank">
          <p class="quote_source_link" >Source: {{ promise.source_name }} </p>
        </a>
      </el-card>

      <el-card>
      <p> <b> Category </b></p>
      <p> {{ promise.category }} </p>
      </el-card>

      <el-card>
      <p> <b> Status </b></p>
      <p>{{ promise.status || 'Review Needed' }}</p>
      </el-card>

    </template>
  </main>
</template>

<script>
import LoadingSpinner from '@/components/shared/LoadingSpinner'
import { formatDate } from '@/utils'
import { ContentLoader } from 'vue-content-loader'

export default {
  name: 'PromiseMobile',
  props: [ 'promise', 'politician', 'appStatus', 'displayedValues' ],
  components: { LoadingSpinner, ContentLoader },
  methods: {
    formatDate
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.el-row {
  padding: 10px
}

.el-col {
  border-radius: 4px;
}

p {
    text-align: left
}

.Promise_Mobile_date {
  text-align: right
}

.Promise_Mobile_hero {
  background-color: darkslategrey;
  color: white;
}

.quote_source_link {
  text-align: right
}

.el-card {
  margin-bottom: 10px
}

.Promise_card_image {
  height: 80vw;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

</style>
