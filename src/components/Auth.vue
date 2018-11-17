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
        const response = await getContributor(firebaseUser.email)
        // below: when first time signing in, create account
        let user = response[0]
        if (response.length === 0) {
          const data = {
            name: firebaseUser.name,
            email: firebaseUser.email
          }
          await postContributor(data)
          const response2 = await getContributor(firebaseUser.email)
          user = response2[0]
        }
        this.$store.commit('login', user)
      } catch (e) {
        console.error(e)
      }
    }
  }
}
</script>

<style>
</style>
