<template>
  <article class="Promise">
    <ContentLoader v-if="appStatus === 'loading'"
                   width="600"
                   height="500"
    >
      <rect x="0" y="0" rx="3" ry="3" width="600" height="150" />
      <rect x="0" y="160" rx="3" ry="3" width="600" height="150" />
      <rect x="0" y="320" rx="3" ry="3" width="600" height="150" />
    </ContentLoader>
    <template v-else>

      <el-card class="hero" :style="'background-color:' + bgColor">
        <span class="status">{{ promise.status }}</span>
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
        <img :src="promise.cover_image" />
      </el-card>

      <vue-goodshare-facebook
        :page_url="url"
        title_social="Share on Facebook"
        has_counter
        has_icon
      ></vue-goodshare-facebook>

    </template>

  </article>
</template>

<script>
// import LoadingSpinner from '@/components//LoadingSpinner'
import { formatDate, statusColorMap } from '@/utils'
import { ContentLoader } from 'vue-content-loader'
import VueGoodshareFacebook from 'vue-goodshare/src/providers/Facebook.vue'

export default {
  name: 'PromiseDesktop',
  computed: {
    bgColor: function () {
      return statusColorMap[this.promise.status || 'Review Needed']
    }
  },
  props: [ 'promise', 'politician', 'appStatus', 'displayedValues', 'url' ],
  components: { ContentLoader, VueGoodshareFacebook },
  methods: { formatDate }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Promise {
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

.hero {
  color: white;
}

.status {
  font-size: 0.8rem;
  font-weight: 900;
  text-transform: uppercase
}

.quote_source_link {
  text-align: right
}

.el-card {
  margin-bottom: 10px
}

.compound-card {
  display: flex;
  flex-wrap: wrap;
}
.compound-card div {
  margin-right: 50px;
  min-width: 50px;
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

a {
  text-decoration: none;
  color: unset;
}
</style>
