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
      <div>
        <p> <b> Source URL </b></p>
        <p> {{ promise.source_url }} </p>
        <p> <b> Source Name </b></p>
        <p> {{ promise.source_name }} </p>
        <p> <b> Status </b></p>
        <p> {{ promise.status || 'Review Needed' }} </p>
        <p> <b> Category </b></p>
        <p> {{ promise.category }} </p>
        <p> <b> Quote </b></p>
        <p> {{ promise.quote }} </p>
      </div>
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
  color: white
}

</style>
