<template>
  <main class="about">
    <h1 class="title">Submit A Promise</h1>
    <p v-if="this.$store.state.user.email">You are logged in as <b>{{ this.$store.state.user.email }}</b> </p>
    <Auth v-if="!this.$store.state.user.authenticated"></Auth>

    <template v-if="this.$store.state.user.authenticated && (appStatus === 'editingPromise') ">
      <p v-if="politicians.length == 0">Loading form...</p>
        <el-form v-else v-on:submit.prevent="onSubmit" :rules="rules" label-position="left" label-width="100px" ref="form" :model="promise">
        <el-row >

          <el-col :xs="24" :sm="12" >
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

          <el-col :xs="24" :sm="12" >
              <el-form-item label="Category" prop="category">
            <el-input type="text" placeholder="enter text" v-model="promise.category"></el-input>
              </el-form-item>
          </el-col>

          <el-col :xs="24" :sm="12" >
              <el-form-item label="Title" prop="title">
            <el-input type="text" placeholder="enter text" v-model="promise.title"></el-input>
              </el-form-item>
          </el-col>

          <el-col :xs="24" :sm="12" >
              <el-form-item label="Status" prop="status">
            <el-select v-model="promise.status" placeholder="Select">
              <el-option
                v-for="status in statusOptions"
                :key="status"
                :label="status"
                :value="status">
              </el-option>
            </el-select>
              </el-form-item>
          </el-col>

          <el-col :xs="24" :sm="12" >
              <el-form-item label="Cover Image" prop="cover_image">
            <el-input type="text" placeholder="enter text" v-model="promise.cover_image"></el-input>
              </el-form-item>
          </el-col>

          <el-col :xs="24" :sm="12" >
              <el-form-item label="Source URL" prop="source_url">
            <el-input type="text" placeholder="enter text" v-model="promise.source_url"></el-input>
              </el-form-item>
          </el-col>

          <el-col :xs="24" :sm="12" >
              <el-form-item label="Source Name" prop="source_name">
            <el-input type="text" placeholder="enter text" v-model="promise.source_name"></el-input>
              </el-form-item>
          </el-col>

          <el-col :xs="24" :sm="12" >
              <el-form-item label="Source Date" prop="source_date">
                <el-date-picker
                  v-model="promise.source_date"
                  type="date"
                  placeholder="Indicate date of source">
                </el-date-picker>
              </el-form-item>
          </el-col>

          <el-col :span="24" >
              <el-form-item label="Quote" prop="quote">
            <el-input type="text" placeholder="enter text" v-model="promise.quote"></el-input>
              </el-form-item>
          </el-col>

          <el-col :xs="24" :sm="12" >
              <el-form-item label="Notes" prop="notes">
            <el-input type="text" placeholder="enter text" v-model="promise.notes"></el-input>
              </el-form-item>
          </el-col>
        </el-row>
          <el-button v-on:click="onSubmit"> Submit </el-button>
        </el-form>
    </template>
    <template v-if="appStatus === 'submittingPromise' ">
      <p>Submitting promise...</p>
    </template>

    <template v-if="appStatus === 'submittedPromise' ">
      <p>Thank you! The promise has been submitted.</p>
    </template>

    <template v-if="appStatus === 'submissionError' ">
      <p v-if="response">
        <span class="label error">Error</span> {{ response }} </p>
    </template>
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
      politicians: [], // TODO: replace with actual API call
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
        politician_id: undefined, // select from database
        title: undefined, // string
        source_url: undefined, // string
        source_name: undefined, // string
        source_date: undefined, // date
        category: undefined, // string, later: enum from array
        cover_image: undefined, // string
        quote: undefined, // string
        notes: undefined, // string
        status: undefined // enum from array
      },
      rules: {
        politician_id: [{ required: true, message: 'Please select a politician', trigger: 'blur' }],
        title: [{ required: true, message: 'Please indicate title of Promise', trigger: 'blur' }],
        source_url: [{ required: true, type: 'url', message: 'Please input a valid url for the source', trigger: 'blur' }], // string
        source_name: [{ required: true, message: 'Please indicate name of source', trigger: 'blur' }],
        source_date: [{ required: true, message: 'Please indicate source date', trigger: 'blur' }],
        category: [{ required: true, message: 'Please state the category of the promise', trigger: 'blur' }],
        cover_image: [{ type: 'url', message: 'Please input a valid URL to an image for the promise', trigger: 'blur' }],
        quote: [{ required: true, message: 'Please indicate the quote that implies the promise', trigger: 'blur' }],
        notes: [{ type: 'string' }], // string
        status: [{ type: 'string' }]// later: enum from array
      }
    }
  },
  methods: {
    onSubmit () {
      this.$refs['form'].validate((valid) => {
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.about-points {
  max-width: 600px;
  margin: 0 auto;
}
.el-input,
.el-select {
  width: 80%;
}
</style>
