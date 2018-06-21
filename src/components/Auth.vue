<template>
  <main class="auth">
      <template v-if="!authenticated">
        <h1>Login or Sign Up</h1>
        <el-button type="primary" v-on:click="googleSignInHandler">Google Sign In</el-button>
      </template>
  </main>
</template>

<script>
import { googleSignIn, getContributor } from '@/api'

export default {
  name: 'Auth',
  data () {
    return {
      authenticated: this.$store.state.user.authenticated
    }
  },
  methods: {
    googleSignInHandler: async function () {
      try {
        const firebaseUser = await googleSignIn()
        const response = await getContributor(firebaseUser.email)
        // below: when first time signing in, create account
        if (response.length === 0) {

        }
        const user = response[0]
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
