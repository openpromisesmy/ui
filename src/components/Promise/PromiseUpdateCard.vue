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
      <p><b>Description:</b> {{ promiseUpdate.description }}</p>
      <p><b>Quote:</b> "{{ promiseUpdate.quote }}"</p>

      <template v-if="promiseUpdate.cover_image">
        <p><b>Image</b></p>
        <img :src="promiseUpdate.cover_image" class="PromiseUpdate_image"/>
      </template>

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
.el-card {
  text-align: left;
  margin-bottom: 10px
}

.PromiseUpdate_image {
  width: 50%;
  border-radius: 2%;
  display: block;
  margin: 0 auto
}
</style>
