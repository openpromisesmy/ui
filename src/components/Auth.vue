<template>
  <main class="auth">
      <h1>Register/Login</h1>
      <p>{{ authenticated ? email : 'Please login.' }}</p>
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
</style>
