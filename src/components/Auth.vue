<template>
  <main class="auth">
      <template v-if="appStatus === 'popup'">
        <LoadingSpinner />
      </template>
      <template v-else-if="!authenticated && appStatus === ''">
        <section class="auth-card">
          <h2>Login or sign up to submit a promise</h2>
          <p>Authentication uses Google sign-in for contributor verification.</p>
          <el-button type="primary" v-on:click="googleSignInHandler">Google Sign In</el-button>
        </section>
      </template>
      <template v-else-if="appStatus === 'loggingIn'">
        <p class="auth-status">Logging in...</p>
        <LoadingSpinner />
      </template>
  </main>
</template>

<script>
import { googleSignIn, getContributor, postContributor } from '@/api'
import LoadingSpinner from '@/components/LoadingSpinner.vue'

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

<style scoped>
.auth {
  margin-top: 8px;
}

.auth-card {
  max-width: 540px;
  margin: 0 auto;
  text-align: center;
  border: 1px solid rgba(21, 69, 77, 0.16);
  border-radius: 16px;
  background: rgba(249, 252, 253, 0.9);
  padding: 20px 16px;
}

.auth-card h2 {
  margin: 0;
  font-size: 1.4rem;
}

.auth-card p {
  margin: 0.5rem 0 1rem;
}

.auth-card :deep(.el-button) {
  border-radius: 999px;
  min-width: 180px;
  height: 40px;
  font-weight: 700;
}

.auth-status {
  text-align: center;
  margin-bottom: 8px;
}
</style>
