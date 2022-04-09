<template>
  <main class="account">
      <h1 v-if="this.$store.state.user.authenticated">Account</h1>
      <Auth v-if="!this.$store.state.user.authenticated"></Auth>
      <template v-else>
       <p>Logged in as {{ this.$store.state.user.email }}</p>
        <el-button type="info" @click="googleLogoutHandler">
          Logout
        </el-button>
      </template>
  </main>
</template>

<script>
import Auth from '@/components/Auth'
import { googleLogout } from '@/api'

export default {
  name: 'Account',
  components: { Auth },
  data () {
    return {
      authenticated: this.$store.state.user.authenticated,
      email: this.$store.state.user.email
    }
  },
  methods: {
    async googleLogoutHandler () {
      try {
        await googleLogout()
        this.$store.commit('logout')
        this.$router.push('/')
      } catch (e) {
        console.error(e)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
