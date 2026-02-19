<template>
  <article class="Promise">
    <div v-if="appStatus === 'loading'" class="loading-wrap">
      <loading-spinner />
    </div>
    <template v-else>

      <el-card class="hero" :style="'background-color:' + bgColor">
        <span class="status">{{ promise.status || "Review Needed" }}</span>
        <router-link :to="/politician/ + politician.id">
          <p class="card-title">{{ politician.name }}</p>
        </router-link>
        <h1>{{ promise.title }}</h1>
        <p class="Promise_Mobile_date">{{ formatDate(promise.source_date) }}</p>
      </el-card>

      <el-card class="Promise_Mobile_quote">
        <p class="card-title"> <b> Quote </b></p>
        <p> {{ promise.quote }} </p>
        <a :href="promise.source_url" target="_blank">
          <p class="quote_source_link" >Source: {{ promise.source_name }} </p>
        </a>

        <template v-if="promise.description">
          <p class="card-title"> <b> Description </b></p>
          <p> {{ promise.description }} </p>
        </template>

        <template v-if="promise.elaboration">
          <p class="card-title"> <b> Elaboration </b></p>
          <p> {{ promise.elaboration }} </p>
        </template>

        <template v-if="promise.context">
          <p class="card-title"> <b> Context </b></p>
          <p> {{ promise.context }} </p>
        </template>
      </el-card>

      <el-card v-if="promise.state || promise.category">
        <div class="compound-card">
          <div v-if="promise.state">
            <p class="card-title"> <b> State </b></p>
            <p> {{ promise.state }} </p>
          </div>

          <div v-if="promise.category">
            <p class="card-title"> <b> Category </b></p>
            <p> {{ promise.category }} </p>
          </div>

          <div>
            <p class="card-title"> <b> Status </b></p>
            <p>{{ promise.status || 'Review Needed' }}</p>
          </div>

          <div v-if="promise.deadline">
            <p class="card-title"> <b> Deadline </b></p>
            <p>{{ formatDate(promise.deadline) }}</p>
          </div>
        </div>
      </el-card>

      <template v-if="promise.clauses">
      <el-card v-if="promise.clauses.broken || promise.clauses.fulfilled">
        <template v-if="promise.clauses.fulfilled">
          <p class="card-title"> <b> Fulfilled Clause</b></p>
          <p>{{ promise.clauses.fulfilled }}</p>
        </template>
        <template v-if="promise.clauses.broken">
          <p class="card-title"> <b> Broken Clause</b></p>
          <p>{{ promise.clauses.broken }}</p>
        </template>
      </el-card>
      </template>

      <el-card v-if="promise.cover_image" class="Promise_card_image">
        <p class="card-title"> <b> Image </b></p>
        <img :src="promise.cover_image" :alt="promise.title" />
      </el-card>

      <ShareNetwork network="facebook" :url="url" title="Share on Facebook" class="share-button" />

    </template>

  </article>
</template>

<script>
// import LoadingSpinner from '@/components//LoadingSpinner'
import { formatDate, statusColorMap } from '@/utils'
import { ShareNetwork } from 'vue3-social-sharing'
import LoadingSpinner from '@/components/LoadingSpinner.vue'

export default {
  name: 'PromiseDesktop',
  computed: {
    bgColor: function () {
      return statusColorMap[this.promise.status || 'Review Needed']
    }
  },
  props: [ 'promise', 'politician', 'appStatus', 'displayedValues', 'url' ],
  components: { LoadingSpinner, ShareNetwork },
  methods: { formatDate }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Promise {
  max-width: 900px;
  width: 100%;
}

.loading-wrap {
  min-height: 260px;
  display: grid;
  place-items: center;
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
  text-align: right;
  color: rgba(255, 255, 255, 0.9);
}

.hero {
  color: white;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.22);
}

.status {
  font-size: 0.8rem;
  font-weight: 900;
  text-transform: uppercase;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.35);
  padding: 4px 10px;
  display: inline-block;
}

.quote_source_link {
  text-align: right;
  color: #104865;
  font-weight: 700;
}

.el-card {
  margin-bottom: 10px;
  border-radius: 14px;
  border: 1px solid rgba(21, 66, 72, 0.14);
}

.compound-card {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.compound-card div {
  margin-right: 0;
  min-width: 50px;
  background: rgba(13, 78, 81, 0.06);
  border: 1px solid rgba(13, 78, 81, 0.12);
  border-radius: 10px;
  padding: 6px 10px;
}

.card-title {
  text-align: left;
  margin: 0 0 0.35rem;
}

.Promise_card_image img {
  display: block;
  margin: 0 auto;
  width: min(100%, 420px);
  text-align: center;
  border-radius: 10px;
  border: 1px solid rgba(15, 73, 75, 0.2);
}

a {
  text-decoration: none;
  color: unset;
}

.share-button {
  margin: 10px 0;
  display: inline-flex;
  align-items: center;
  border-radius: 999px;
  padding: 9px 14px;
  font-weight: 700;
  border: 1px solid rgba(15, 118, 110, 0.2);
  background: rgba(15, 118, 110, 0.08);
}
</style>
