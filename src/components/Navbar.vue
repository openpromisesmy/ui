<template>
  <navbar-desktop
  v-bind="{ googleLogoutHandler, navigation, authenticated, email }"
  />
</template>

<script>
import { googleLogout } from '@/api'
import NavbarDesktop from '@/components/NavbarDesktop'

export default {
  name: 'Navbar',
  components: {
    NavbarDesktop
  },
  data () {
    return {
      activeIndex: '0',
      navigation: [
        { text: 'Home', url: '/' },
        { text: 'Promises', url: '/promises' },
        { text: 'Politicians', url: '/politicians' },
        { text: 'About', url: '/about' }
      ],
      authenticated: this.$store.state.user.authenticated,
      email: this.$store.state.user.email
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
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
a {
  text-decoration: none;
  font-size: 1rem
}

#submit {
  float:right
}

@media only screen and (max-width: 600px) {
    .el-header {
      margin-bottom: 30px;
    }
    .el-menu-item {
      padding: 0 10px;
    }
}
</style>
