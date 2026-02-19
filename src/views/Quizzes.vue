<template>
  <main id="quizzes" class="page-shell">
    <section class="page-panel">
      <component v-if="componentToRender" :is="componentToRender" />
      <div v-else class="unknown-quiz">
        <h1>Quiz Not Found</h1>
        <p>This quiz route is not available yet.</p>
        <router-link to="/">
          <el-button type="primary">Back Home</el-button>
        </router-link>
      </div>
    </section>
  </main>
</template>

<script>
import RealOrFake from '@/components/Quizzes/RealOrFake.vue'

export default {
  name: 'Quizzes',
  data: () => ({
    componentMap: { 'real-or-fake': RealOrFake }
  }),
  computed: {
    componentToRender: function () {
      return this.componentMap[this.$route.params.id]
    }
  }
}
</script>

<style scoped>
.page-panel {
  width: min(980px, 100%);
  margin: 0 auto;
}

.unknown-quiz {
  width: 100%;
  min-height: 260px;
  display: grid;
  align-content: center;
  justify-items: center;
  text-align: center;
}

.unknown-quiz :deep(.el-button) {
  border-radius: 999px;
  font-weight: 700;
}
</style>
