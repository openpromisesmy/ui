<template>
  <main class="page-shell">
    <section class="page-panel account-panel">
      <header class="view-header">
        <span class="label-chip">Account</span>
        <h1 class="title">{{ this.$store.state.user.authenticated ? "Your Session" : "Sign In" }}</h1>
      </header>

      <Auth v-if="!this.$store.state.user.authenticated" />
      <template v-else>
        <div class="account-summary">
          <p>Logged in as <b>{{ this.$store.state.user.email }}</b></p>
          <el-button type="danger" @click="googleLogoutHandler">
            Logout
          </el-button>
        </div>
      </template>
    </section>
  </main>
</template>

<script>
import Auth from '@/components/Auth.vue'
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

<style scoped>
.account-panel {
  max-width: 780px;
  margin: 0 auto;
}

.account-summary {
  margin-top: 12px;
  text-align: center;
}

.account-summary p {
  margin: 0 0 14px;
}

.account-summary :deep(.el-button) {
  border-radius: 999px;
  height: 40px;
  min-width: 120px;
  font-weight: 700;
}
</style>
