<template>
  <navbar-mobile
    v-if="isMobile"
    v-bind="{ navigation, authenticated }"
  />
  <navbar-desktop v-else v-bind="{ navigation, authenticated }" />
</template>

<script>
import NavbarDesktop from "@/components/Navbar/Desktop.vue"
import NavbarMobile from "@/components/Navbar/Mobile.vue"

export default {
  name: "Navbar",
  components: {
    NavbarDesktop,
    NavbarMobile
  },
  data() {
    return {
      navigation: [
        { text: "Home", url: "/home" },
        { text: "Politicians", url: "/politicians" },
        // { text: "States", url: "/states" },
        { text: "Lists", url: "/lists" },
        // { text: "Participate", url: "/participate" },
        // { text: "Blog", externalUrl: "https://blog.openpromises.com" },
        // { text: 'Quizzes', url: '/quizzes' },
        { text: "About", url: "/about" }
        // { text: 'Budget 2020', url: '/budget-2020/quiz' }
        // { text: "Contact", url: "/contact" }
      ],
      authenticated: this.$store.state.user.authenticated,
      isMobile: window.matchMedia('(max-width: 768px)').matches,
      mediaQuery: null
    }
  },
  mounted() {
    this.mediaQuery = window.matchMedia('(max-width: 768px)')
    this.mediaQuery.addEventListener('change', this.updateIsMobile)
  },
  beforeUnmount() {
    if (this.mediaQuery) {
      this.mediaQuery.removeEventListener('change', this.updateIsMobile)
    }
  },
  methods: {
    handleSelect() {},
    updateIsMobile(e) {
      this.isMobile = e ? e.matches : window.matchMedia('(max-width: 768px)').matches
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
