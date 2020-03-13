<template>
  <div class="container">
    <template>
      <el-row>
        <el-col :xs="{span: 24, offset: 0}" :md="{span: 6, offset: 9}">
          <el-form :model="quizchoices" label-width="100px" class="quizzForm">
            <div v-for="(quiz, index) in quizzes" :key="index">
              <h2>{{ quiz.title }}</h2>
              <el-collapse v-model="collapseActive" accordion>
                <el-collapse-item
                  v-for="(question, index) in quiz.questions"
                  :title="question.name"
                  :name="index"
                  :key="index"
                >
                  <el-select
                    v-model="quizchoices[question.name]"
                    placeholder="Select option"
                    @change="updateBenefit($event)"
                  >
                    <el-option
                      v-for="(choice, index) in question.choices"
                      :label="choice.title"
                      :value="choice.value"
                      :key="index"
                    ></el-option>
                  </el-select>
                </el-collapse-item>
              </el-collapse>
            </div>
          </el-form>
        </el-col>
      </el-row>
      <el-row>
        <el-col :xs="{span: 24, offset: 0}" :md="{span: 6, offset: 9}">
          <el-card v-for="(benefit, index) in quizBenefit" :key="index" class="box-card">
            <div class="text item">{{benefit}}</div>
          </el-card>
        </el-col>
      </el-row>
    </template>
  </div>
</template>

<script>
import { quizSetting } from '@/utils'

export default {
  name: 'FederralBudgetMiniQuiz',
  data () {
    return {
      collapseActive: null,
      quizchoices: {},
      quizResult: {},
      quizBenefit: {}
    }
  },
  components: {},
  async created () {},
  methods: {
    updateBenefit () {
      this.quizResult = {}
      Object.values(this.quizzes).map((quiz, index) => {
        Object.values(quiz.questions).map((question, index) => {
          let choosen = this.quizchoices[question.name]
          if (choosen) {
            question.choices.map(choice => {
              if (choosen === choice.value) {
                if (
                  !this.quizResult[quiz.title] ||
                  choosen > this.quizResult[quiz.title]
                ) {
                  this.quizResult[quiz.title] = choosen
                  this.quizBenefit[quiz.title] = quiz.result[choosen]
                }
              }
            })
          }
        })
      })
    }
  },
  computed: {
    quizzes () {
      return quizSetting
    }
  }
}
</script>

<style scoped>
.el-select-dropdown__item.selected {
  color: #606266;
  font-weight: normal;
}
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

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
}

@media all and (max-width: 500px) {
  #main_info {
    flex-direction: column;
  }
}
</style>
