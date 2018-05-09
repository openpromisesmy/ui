<template>
  <main class="about">
    <h1 class="title">Submit A Promise</h1>
    <template v-if="appStatus === 'unauthenticated' ">
      <p>Please login to submit a promise</p>
      <el-button type="primary" v-on:click="googleSignIn">Google Sign In</el-button>
    </template>

    <template v-if="appStatus === 'authenticated' ">
         <p v-if="politicians.length == 0">Loading form...</p>
    <el-form v-else v-on:submit.prevent="onSubmit" :label-position="left" label-width="100px">
    <el-row >

      <el-col :xs="24" :sm="12" >
          <el-form-item label="Politician">
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
          <el-form-item label="Category">
        <el-input type="text" placeholder="enter text" v-model="promise.category"></el-input>
          </el-form-item>
      </el-col>

      <el-col :xs="24" :sm="12" >
          <el-form-item label="Title">
        <el-input type="text" placeholder="enter text" v-model="promise.title"></el-input>
          </el-form-item>
      </el-col>

      <el-col :xs="24" :sm="12" >
          <el-form-item label="Status">
        <el-input type="text" placeholder="enter text" v-model="promise.status"></el-input>
          </el-form-item>
      </el-col>

      <el-col :xs="24" :sm="12" >
          <el-form-item label="Cover Image">
        <el-input type="text" placeholder="enter text" v-model="promise.cover_image"></el-input>
          </el-form-item>
      </el-col>

      <el-col :xs="24" :sm="12" >
          <el-form-item label="Source URL">
        <el-input type="text" placeholder="enter text" v-model="promise.source_url"></el-input>
          </el-form-item>
      </el-col>

      <el-col :xs="24" :sm="12" >
          <el-form-item label="Source Name">
        <el-input type="text" placeholder="enter text" v-model="promise.source_name"></el-input>
          </el-form-item>
      </el-col>

      <el-col :xs="24" :sm="12" >
          <el-form-item label="Source Date">
        <el-input type="text" placeholder="enter text" v-model="promise.source_date"></el-input>
          </el-form-item>
      </el-col>

      <el-col :span="24" >
          <el-form-item label="Quote">
        <el-input type="text" placeholder="enter text" v-model="promise.quote"></el-input>
          </el-form-item>
      </el-col>

      <el-col :xs="24" :sm="12" >
          <el-form-item label="Notes">
        <el-input type="text" placeholder="enter text" v-model="promise.notes"></el-input>
          </el-form-item>
      </el-col>
    </el-row>
        <el-button v-on:click="onSubmit"> Submit </el-button>
   </el-form>
    </template>
  </main>
</template>

<script>
import { getPoliticians } from '@/api'
import firebase from 'firebase'
var config = {
  apiKey: 'AIzaSyBR0GKAzyozw4tp_6Q0kOso1pT9XyHWHpQ',
  authDomain: 'openpromises-8526c.firebaseapp.com',
  databaseURL: 'https://openpromises-8526c.firebaseio.com',
  projectId: 'openpromises-8526c',
  storageBucket: 'openpromises-8526c.appspot.com',
  messagingSenderId: '100990292939'
}
firebase.initializeApp(config)
const provider = new firebase.auth.GoogleAuthProvider()
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
      user: {},
      politicians: [], // TODO: replace with actual API call
      promise: {
        politician_id: null, // select from database
        title: null, // string
        source_url: null, // string
        source_name: null, // string
        source_date: null, // date
        category: null, // string, later: enum from array
        cover_image: null, // string
        quote: null, // string
        notes: null, // string
        status: null // enum from array
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    },
    googleSignIn: function () {
      let that = this
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          // var token = result.credential.idToken;
          // The signed-in user info.
          var user = result.user

          that.appStatus = appStatus.authenticated

          that.user.name = user.displayName
          that.user.email = user.email
          that.user.photoURL = user.photoURL
          // that.user.token = token;

          firebase
            .auth()
            .currentUser.getIdToken(/* forceRefresh */ true)
            .then(idToken => {
              that.user.token = idToken
            })
            .catch(error => {
              console.error(error)
            })
        })
        .catch(error => {
          // Handle Errors here.
          // const errorCode = error.code
          // const errorMessage = error.message
          // The email of the user's account used.
          // const email = error.email
          // The firebase.auth.AuthCredential type that was used.
          // const credential = error.credential
          // ...
          console.error(error)
        })
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
