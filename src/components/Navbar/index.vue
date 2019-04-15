<template>
  <navbar-mobile v-if="$mq === 'sm'" v-bind="{ navigation, authenticated, email }"/>
  <navbar-desktop v-else v-bind="{ navigation, authenticated, email }"/>
</template>

<script>
import NavbarDesktop from '@/components/Navbar/Desktop'
import NavbarMobile from '@/components/Navbar/Mobile'

export default {
  name: 'Navbar',
  components: {
    NavbarDesktop,
    NavbarMobile
  },
  data () {
    return {
      activeIndex: '0',
      navigation: [
        { text: 'Home', url: '/' },
        // { text: 'Promises', url: '/promises' },
        { text: 'Politicians', url: '/politicians' },
        { text: 'States', url: '/states' },
        { text: 'Participate', url: '/participate' },
        { text: 'Blog', externalUrl: 'https://blog.openpromises.com' },
        // { text: 'States', url: '/states' },
        { text: 'About', url: '/about' }
        // { text: "Contact", url: "/contact" }
      ],
      authenticated: this.$store.state.user.authenticated,
      email: this.$store.state.user.email
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
  font-size: 1rem;
}

#submit {
  float: right;
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
