<template>
  <article>
    <el-card>
      <div slot="header">
        <el-tag class="status">{{ promiseUpdate.status }}</el-tag>
        {{ formatDate(promiseUpdate.source_date) }}
        <span class="source">
          Source:
          <a :href="promiseUpdate.source_url">
            {{ promiseUpdate.source_name }}
          </a>
        </span>
      </div>
      <p>
      </p>
      <h1> {{ promiseUpdate.title }}</h1>
      <p>Description: {{ promiseUpdate.description }}</p>
      <p>Quote: {{ promiseUpdate.quote }}</p>
    </el-card>
  </article>
</template>

<script>
import { formatDate } from '@/utils'
// TODO: color code for the status tags
export default {
  name: 'PromiseUpdateCard',
  props: ['promiseUpdate'],
  methods: {
    formatDate
  }
}
</script>

<style scoped>
.status {
  margin-right: 20px
}
.source {
  float: right
}
</style>
