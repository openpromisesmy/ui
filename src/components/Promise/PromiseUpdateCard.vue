<template>
  <article>
    <el-card class="update-card">
      <template #header>
        <div class="update-head">
          <el-tag class="status">{{ promiseUpdate.status }}</el-tag>
          {{ formatDate(promiseUpdate.source_date) }}
          <span class="source">
            Source:
            <a :href="promiseUpdate.source_url" target="_blank" rel="noopener noreferrer">
              {{ promiseUpdate.source_name }}
            </a>
          </span>
        </div>
      </template>
      <h3>{{ promiseUpdate.title }}</h3>
      <p><b>Description:</b> {{ promiseUpdate.description }}</p>
      <p><b>Quote:</b> "{{ promiseUpdate.quote }}"</p>

      <template v-if="promiseUpdate.cover_image">
        <p><b>Image</b></p>
        <img
          :src="promiseUpdate.cover_image"
          class="PromiseUpdate_image"
          :alt="promiseUpdate.title"
        />
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
  margin-right: 10px;
  border-radius: 999px;
  font-weight: 700;
}
.source {
  float: right;
}

.update-card {
  text-align: left;
  margin-bottom: 10px;
  border-radius: 14px;
  border: 1px solid rgba(20, 63, 71, 0.14);
}

.update-head {
  font-size: 0.9rem;
}

.PromiseUpdate_image {
  width: min(100%, 420px);
  border-radius: 10px;
  border: 1px solid rgba(15, 73, 77, 0.18);
  display: block;
  margin: 0 auto;
}

h3 {
  margin: 0 0 0.65rem;
  font-size: 1.25rem;
}

@media (max-width: 700px) {
  .source {
    float: none;
    display: block;
    margin-top: 4px;
  }
}
</style>
