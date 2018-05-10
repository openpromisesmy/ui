<template>
  <main class="about">
    <h1 class="title">Submit A Promise</h1>
    <template v-if="appStatus === 'unauthenticated' ">
      <p>Please login to submit a promise</p>
      <el-button type="primary" v-on:click="googleSignInHandler">Google Sign In</el-button>
    </template>

    <template v-if="appStatus === 'authenticated' ">
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
        <el-input type="text" placeholder="enter text" v-model="promise.status"></el-input>
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
        <template v-if="appStatus === 'submittedPromise' ">
      <p>The promise has been submitted.</p>
    </template>

    <template v-if="appStatus === 'submissionError' ">
      <p v-if="response">
        <span class="label error">Error</span> {{ response }} </p>
    </template>
  </main>
</template>

<script>
import { getPoliticians, googleSignIn, postPromise } from '@/api'

const appStatus = {
  unauthenticated: 'unauthenticated',
  authenticated: 'authenticated',
  submittedPromise: 'submittedPromise',
  submissionError: 'submissionError'
}
export default {
  name: 'SubmitPromise',
  async created () {
    this.politicians = await getPoliticians()
  },
  data () {
    return {
      appStatus: appStatus.unauthenticated,
      response: '',
      user: this.$store.state.user,
      politicians: [], // TODO: replace with actual API call
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
          this.postPromiseHandler()
        } else {
          return false
        }
      })
    },
    googleSignInHandler: async function () {
      try {
        const user = await googleSignIn()
        this.user = user
        this.appStatus = appStatus.authenticated
      } catch (e) {
        console.error(e)
      }
    },
    postPromiseHandler: async function () {
      let that = this
      const { user, promise } = this

      try {
        const response = await postPromise({ user, promise })
        that.appStatus = appStatus.submittedPromise
        that.response = JSON.stringify(response)
      } catch (e) {
        that.appStatus = appStatus.submissionError
        that.response = e
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
