<template>
  <router-link :to="'/promises/' + promise.id">
    <el-card class="promise-card" :style="'background-color:' + statusColorMap[promise.status]">
      <header>
        <span class="status">{{ promise.status === 'TBC' ? 'Review Needed' : promise.status }}</span>
        <span class="source-date">{{ formatDate(promise.source_date) }}</span>
      </header>
      <h3>{{ promise.title }}</h3>
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

.el-card {
  border: none;
}

.promise-card {
  width: min(100%, 280px);
  min-height: 250px;
  color: white;
  position: relative;
  margin: 8px auto;
  border-radius: 14px;
  box-shadow: 0 16px 26px rgba(17, 35, 45, 0.2);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.promise-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 20px 28px rgba(17, 35, 45, 0.28);
}

header {
  font-size: 0.78rem;
}

.status {
  font-weight: 900;
  text-transform: uppercase
}

.source-date {
  float: right
}

.promise-card h3 {
  margin: 0.9rem 0 0;
  font-size: 1.22rem;
  color: #ffffff;
  line-height: 1.3;
}

.category {
  position: absolute;
  bottom: 0;
  margin-bottom: 0;
  font-weight: 700;
  opacity: 0.95;
}

</style>
