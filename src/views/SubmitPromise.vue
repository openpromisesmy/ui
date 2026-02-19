<template>
  <main class="page-shell submit-page">
    <section class="page-panel submit-panel">
      <header class="view-header">
        <span class="label-chip">Contribute</span>
        <h1 class="title">Submit A Promise</h1>
        <p>Help improve the record by adding a sourced and verifiable promise.</p>
      </header>

      <p v-if="this.$store.state.user.email" class="session-note">
        You are logged in as <b>{{ this.$store.state.user.email }}</b>
      </p>
      <Auth v-if="!this.$store.state.user.authenticated"></Auth>

      <template v-if="this.$store.state.user.authenticated && (appStatus === 'editingPromise')">
        <p v-if="politicians.length == 0">Loading form...</p>
        <el-form
          v-else
          class="submit-form"
          v-on:submit.prevent="onSubmit"
          :rules="rules"
          label-position="top"
          ref="form"
          :model="promise"
        >
          <el-row :gutter="10">
            <el-col :xs="24" :sm="12">
              <el-form-item label="Politician" prop="politician_id">
                <el-select v-model="promise.politician_id">
                  <el-option
                    default-first-option
                    v-for="politician in politicians"
                    :value="politician.id"
                    :key="politician.id"
                    :label="politician.name"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="12">
              <el-form-item label="Category" prop="category">
                <el-input type="text" placeholder="Enter category" v-model="promise.category"></el-input>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="12">
              <el-form-item label="Title" prop="title">
                <el-input type="text" placeholder="Enter promise title" v-model="promise.title"></el-input>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="12">
              <el-form-item label="Status" prop="status">
                <el-select v-model="promise.status" placeholder="Select status">
                  <el-option
                    v-for="status in statusOptions"
                    :key="status"
                    :label="status"
                    :value="status"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="12">
              <el-form-item label="Cover Image" prop="cover_image">
                <el-input type="text" placeholder="Image URL (optional)" v-model="promise.cover_image"></el-input>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="12">
              <el-form-item label="Source URL" prop="source_url">
                <el-input type="text" placeholder="https://..." v-model="promise.source_url"></el-input>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="12">
              <el-form-item label="Source Name" prop="source_name">
                <el-input type="text" placeholder="Publication or source" v-model="promise.source_name"></el-input>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="12">
              <el-form-item label="Source Date" prop="source_date">
                <el-date-picker
                  v-model="promise.source_date"
                  type="date"
                  placeholder="Indicate source date"
                >
                </el-date-picker>
              </el-form-item>
            </el-col>

            <el-col :span="24">
              <el-form-item label="Quote" prop="quote">
                <el-input
                  type="textarea"
                  :rows="4"
                  placeholder="Direct quote that supports this promise"
                  v-model="promise.quote"
                ></el-input>
              </el-form-item>
            </el-col>

            <el-col :span="24">
              <el-form-item label="Notes" prop="notes">
                <el-input
                  type="textarea"
                  :rows="3"
                  placeholder="Optional contextual notes"
                  v-model="promise.notes"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <div class="submit-actions">
            <el-button type="primary" v-on:click="onSubmit">Submit Promise</el-button>
          </div>
        </el-form>
      </template>

      <template v-if="appStatus === 'submittingPromise'">
        <el-alert title="Submitting promise..." type="info" :closable="false" show-icon />
      </template>

      <template v-if="appStatus === 'submittedPromise'">
        <el-alert title="Thank you. The promise has been submitted." type="success" :closable="false" show-icon />
      </template>

      <template v-if="appStatus === 'submissionError'">
        <el-alert
          v-if="response"
          title="Submission failed"
          type="error"
          :description="response"
          :closable="false"
          show-icon
        />
      </template>
    </section>
  </main>
</template>

<script>
import { getPoliticians, postPromise } from '@/api'
import Auth from '@/components/Auth.vue'

const appStatus = {
  editingPromise: 'editingPromise',
  submittedPromise: 'submittedPromise',
  submittingPromise: 'submittingPromise',
  submissionError: 'submissionError'
}

export default {
  name: 'SubmitPromise',
  async created () {
    this.politicians = await getPoliticians()
  },
  components: { Auth },
  computed: {
    user () { return this.$store.state.user }
  },
  data () {
    return {
      appStatus: appStatus.editingPromise,
      response: '',
      politicians: [],
      statusOptions: [
        'Review Needed',
        'Fulfilled',
        'Broken',
        'Partially Fulfilled',
        'In Progress',
        'Not Started',
        'At Risk',
        'Retracted'
      ],
      promise: {
        politician_id: undefined,
        title: undefined,
        source_url: undefined,
        source_name: undefined,
        source_date: undefined,
        category: undefined,
        cover_image: undefined,
        quote: undefined,
        notes: undefined,
        status: undefined
      },
      rules: {
        politician_id: [{ required: true, message: 'Please select a politician', trigger: 'blur' }],
        title: [{ required: true, message: 'Please indicate title of Promise', trigger: 'blur' }],
        source_url: [{ required: true, type: 'url', message: 'Please input a valid url for the source', trigger: 'blur' }],
        source_name: [{ required: true, message: 'Please indicate name of source', trigger: 'blur' }],
        source_date: [{ required: true, message: 'Please indicate source date', trigger: 'blur' }],
        category: [{ required: true, message: 'Please state the category of the promise', trigger: 'blur' }],
        cover_image: [{ type: 'url', message: 'Please input a valid URL to an image for the promise', trigger: 'blur' }],
        quote: [{ required: true, message: 'Please indicate the quote that implies the promise', trigger: 'blur' }],
        notes: [{ type: 'string' }],
        status: [{ type: 'string' }]
      }
    }
  },
  methods: {
    onSubmit () {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.appStatus = appStatus.submittingPromise
          this.postPromiseHandler(this.promise)
        } else {
          return false
        }
      })
    },
    postPromiseHandler: async function (promise) {
      try {
        const { user } = this.$store.state
        promise.contributor_id = this.user.id
        const response = await postPromise({ user, promise })
        this.appStatus = appStatus.submittedPromise
        this.response = JSON.stringify(response)
      } catch (e) {
        this.appStatus = appStatus.submissionError
        this.response = JSON.stringify(e)
      }
    }
  }
}
</script>

<style scoped>
.submit-panel {
  max-width: 1000px;
  margin: 0 auto;
}

.session-note {
  text-align: center;
  margin: 0.35rem 0 1rem;
}

.submit-form {
  margin-top: 12px;
}

.submit-form :deep(.el-select),
.submit-form :deep(.el-date-editor),
.submit-form :deep(.el-input),
.submit-form :deep(.el-textarea) {
  width: 100%;
}

.submit-form :deep(.el-form-item__label) {
  font-weight: 700;
  color: #274d5b;
}

.submit-actions {
  margin-top: 6px;
  display: flex;
  justify-content: center;
}

.submit-actions :deep(.el-button) {
  border-radius: 999px;
  min-width: 180px;
  height: 42px;
  font-weight: 700;
}

@media (max-width: 768px) {
  .submit-panel {
    max-width: 100%;
  }
}
</style>
