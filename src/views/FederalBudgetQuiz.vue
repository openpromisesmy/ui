<template>
  <main class="page-shell">
    <section class="page-panel">
      <header id="List_info" class="view-header">
        <span class="label-chip">Quiz</span>
        <h1 class="title">Federal Budget Malaysia 2020</h1>
        <p>Answer a few questions to understand which budget allocations affect you.</p>
      </header>
      <el-row>
        <FederralBudgetMiniQuiz></FederralBudgetMiniQuiz>
      </el-row>
    </section>
  </main>
</template>

<script>
import FederralBudgetMiniQuiz from '@/components/Quizzes/FederralBudgetMiniQuiz.vue'

export default {
  name: 'FederalBudgetQuiz',
  data () {
    return {
      appStatus: 'loading'
    }
  },
  components: {FederralBudgetMiniQuiz},
  async created () {
  }
}
</script>

<style scoped>
.page-panel {
  max-width: 960px;
  margin: 0 auto;
}
</style>
