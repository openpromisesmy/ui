<template>
  <main id="Promise">
    <ContentLoader v-if="appStatus === 'loading'"
                   width="600"
                   height="500"
    >
      <rect x="0" y="0" rx="3" ry="3" width="600" height="150" />
      <rect x="0" y="160" rx="3" ry="3" width="600" height="150" />
      <rect x="0" y="320" rx="3" ry="3" width="600" height="150" />
    </ContentLoader>
    <template v-else>

      <el-card class="Promise_Mobile_hero">
        <p class="card-title">{{ politician.name }}</p>
        <h1>{{ promise.title }}</h1>
        <p class="Promise_Mobile_date">{{ formatDate(promise.source_date) }}</p>
      </el-card>

      <el-card class="Promise_Mobile_quote">
        <p class="card-title"> <b> Quote </b></p>
        <p> {{ promise.quote }} </p>
        <a :href="promise.source_url" target="_blank">
          <p class="quote_source_link" >Source: {{ promise.source_name }} </p>
        </a>
      </el-card>

      <el-card>
        <p class="card-title"> <b> Category </b></p>
        <p> {{ promise.category }} </p>
      </el-card>

      <el-card>
        <p class="card-title"> <b> Status </b></p>
        <p>{{ promise.status || 'Review Needed' }}</p>
      </el-card>

      <el-card v-if="promise.cover_image" class="Promise_card_image">
        <p class="card-title"> <b> Image </b></p>
        <img :src="promise.cover_image" />
      </el-card> 

    </template>

  </main>
</template>

<script>
import LoadingSpinner from '@/components/shared/LoadingSpinner'
import { formatDate } from '@/utils'
import { ContentLoader } from 'vue-content-loader'

export default {
  name: 'PromiseDesktop',
  props: [ 'promise', 'politician', 'appStatus', 'displayedValues' ],
  components: { LoadingSpinner, ContentLoader },
  methods: { formatDate }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#Promise {
  max-width: 900px
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.el-row {
  padding: 10px;
}

.el-col {
  border-radius: 4px;
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

.card-title {
  text-align: left
}

.Promise_card_image img {
  display: block;
  margin: 0 auto;
  width: 50%;
  text-align: center;
  border-radius: 5%
}
</style>
