<template>
  <main class="auth">
      <template v-if="appStatus === 'popup'">
        <LoadingSpinner />
      </template>
      <template v-else-if="!authenticated && appStatus === ''">
        <h1>Login or Sign Up</h1>
        <el-button type="primary" v-on:click="googleSignInHandler">Google Sign In</el-button>
      </template>
      <template v-else-if="appStatus === 'loggingIn'">
        <p>Logging in...</p>
        <LoadingSpinner />
      </template>
  </main>
</template>

<script>
import { googleSignIn, getContributor, postContributor } from '@/api'
import LoadingSpinner from '@/components//LoadingSpinner'

export default {
  name: 'Auth',
  components: { LoadingSpinner },
  data () {
    return {
      appStatus: '',
      authenticated: this.$store.state.user.authenticated
    }
  },
  methods: {
    googleSignInHandler: async function () {
      try {
        this.appStatus = 'popup'
        const firebaseUser = await googleSignIn()
        this.appStatus = 'loggingIn'
        const initialGetResponse = await getContributor(firebaseUser.email)
        let user
        const userDoesNotExistYet = initialGetResponse === undefined || initialGetResponse.length === 0
        if (userDoesNotExistYet) {
          const data = {
            name: firebaseUser.name,
            email: firebaseUser.email
          }
          await postContributor(data)
          user = (await getContributor(firebaseUser.email))[0]
        } else {
          user = initialGetResponse[0]
        }
        if (user) return this.$store.commit('login', user)
      } catch (e) {
        console.error(e)
      }
    }
  }
}
</script>

<style>
</style>
