<template>
  <main class="account">
      <h1>Account</h1>
      <Auth v-if="!this.$store.state.user.authenticated"></Auth>
      <p v-else>Logged in as {{ this.$store.state.user.email }}</p>
  </main>
</template>

<script>
import Auth from '@/components/Auth'

export default {
  name: 'Account',
  components: { Auth },
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
