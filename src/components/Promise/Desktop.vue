<template>
  <main id="Promise">
    <template v-if="appStatus === 'loading'">
      <p>Loading promise...</p>
    </template>
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
    </template>

  <FacebookComment />
  </main>
</template>

<script>
import LoadingSpinner from '@/components/shared/LoadingSpinner'
import FacebookComment from '@/components/FacebookComment'
import { formatDate } from '@/utils'

export default {
  name: 'PromiseDesktop',
  props: [ 'promise', 'politician', 'appStatus', 'displayedValues' ],
  components: { LoadingSpinner, FacebookComment },
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
</style>
