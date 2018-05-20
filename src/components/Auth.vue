<template>
  <main class="auth">
      <h1>Login or Sign Up</h1>
      <template v-if="!authenticated">
        <el-button type="primary" v-on:click="googleSignInHandler">Google Sign In</el-button>
      </template>
  </main>
</template>

<script>
import { googleSignIn } from '@/api'

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
        const user = await googleSignIn()
        this.$store.commit('login', user)
      } catch (e) {
        console.error(e)
      }
    }
  }
}
</script>

<style scoped>
.auth {
  border: 0.5px solid grey;
  border-radius: 5px;
  padding: 20px 0;
}
</style>
