<template>
  <main class="account">
      <h1>Account</h1>
      <p>{{ authenticated ? `Logged in as ${email}` : 'Please login.' }}</p>
  </main>
</template>

<script>
export default {
  name: 'Account',
  data () {
    return {
      authenticated: this.$store.state.user.authenticated,
      email: this.$store.state.user.email
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
