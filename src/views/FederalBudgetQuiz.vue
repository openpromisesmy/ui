<template>
  <div class="container">
    <template>
      <el-row id="main_info">
        <section id="List_info">
          <h1>Federal Budget Malaysia 2020</h1>
          <p>Answer few question to know what is beneficial for you?</p>
        </section>
      </el-row>
      <el-row>
        <FederralBudgetMiniQuiz></FederralBudgetMiniQuiz>
      </el-row>
    </template>
  </div>
</template>

<script>
import FederralBudgetMiniQuiz from '@/components/Quizzes/FederralBudgetMiniQuiz'

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
#List_info {
  text-align: center;
}

#main_info {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

#main_info > section {
  flex: 1;
  margin: 10px;
}

@media all and (max-width: 500px) {
  #main_info {
    flex-direction: column;
  }
}
</style>
