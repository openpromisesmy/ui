<template>
  <router-link :to="'/promises/' + promise.id">
  <el-card class="promise-card" :style="'background-color:' + statusColorMap[promise.status]">
    <header>
      <span class="status">{{ promise.status }}</span>
      <span class="source-date">{{ formatDate(promise.source_date) }}</span>
    </header>
    <h1>{{ promise.title }}</h1>
    <p class="category">{{ promise.category }}</p>
  </el-card>
  </router-link>
</template>

<script>
import { formatDate, statusColorMap } from '@/utils'

export default {
  name: 'PromiseCard',
  props: ['promise'],
  data: () => ({
    statusColorMap
  }),
  methods: {
    formatDate
  }
}
</script>

<style scoped>
a {
  text-decoration: none
}
.promise-card {
  width: 250px;
  height: 300px;
  color: white;
  position: relative;
  margin: 10px auto;
}
header {
  font-size: 0.8rem;
}
.status {
  font-weight: 900;
  text-transform: uppercase
}
.source-date {
  float: right
}
.category {
  position: absolute;
  bottom: 0;
}

</style>
