<template>
  <navbar-mobile
    v-if="$mq === 'navbar' "
    v-bind="{ navigation, authenticated }"
  />
  <navbar-desktop v-else v-bind="{ navigation, authenticated }" />
</template>

<script>
import NavbarDesktop from "@/components/Navbar/Desktop";
import NavbarMobile from "@/components/Navbar/Mobile";

export default {
  name: "Navbar",
  components: {
    NavbarDesktop,
    NavbarMobile
  },
  data() {
    return {
      navigation: [
        { text: "Home", url: "/" },
        { text: "Politicians", url: "/politicians" },
        { text: "States", url: "/states" },
        { text: "Lists", url: "/lists" },
        { text: "Participate", url: "/participate" },
        // { text: "Blog", externalUrl: "https://blog.openpromises.com" },
        // { text: 'Quizzes', url: '/quizzes' },
        { text: "About", url: "/about" }
        // { text: 'Budget 2020', url: '/budget-2020/quiz' }
        // { text: "Contact", url: "/contact" }
      ],
      authenticated: this.$store.state.user.authenticated
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
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
