<template>
  <main id="Promise">
    <template v-if="appStatus === 'loading'">
      <p>Loading promise...</p>
    </template>
    <template v-else>

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

      <p> <b> Category </b></p>
      <p> {{ promise.category }} </p>

      <p> <b> Status </b> {{ promise.status || 'Review Needed' }}  </p>

    </template>
  <FacebookComment />
  </main>
</template>

<script>
import LoadingSpinner from '@/components/shared/LoadingSpinner'
import FacebookComment from '@/components/FacebookComment'
import { formatDate } from '@/utils'

export default {
  name: 'PromiseMobile',
  props: [ 'promise', 'politician', 'appStatus', 'displayedValues' ],
  components: { LoadingSpinner, FacebookComment },
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
  margin-bottom: 20px
}

.quote_source_link {
  text-align: right
}

</style>
