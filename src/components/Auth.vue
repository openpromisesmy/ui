<template>
  <main class="auth">
      <h1>Login or Sign Up</h1>
      <template v-if="!authenticated">
        <el-button type="primary" v-on:click="googleSignInHandler">Google Sign In</el-button>
      </template>
  </main>
</template>

<script>
export default {
  name: 'Auth',
  data () {
    return {
      authenticated: this.$store.state.user.authenticated
    }
  }
}
</script>

<style scoped>
.auth {
  border: 0.5px solid grey;
  border-radius: 5px;
  padding: 20px 0
}
</style>
