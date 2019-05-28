<template>
  <el-header id="navbar">
    <img id="navbar-logo" src="@/assets/openpromises.png">
    <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect">
      <el-menu-item index="0" id="home">
        <router-link to="/">Home</router-link>
      </el-menu-item>
      <el-menu-item
        v-for="(item, index) in navItems"
        :key="index"
        v-bind:index="String(index + 1)"
      >
        <router-link v-if="item.url" v-bind:to="item.url">{{ item.text }}</router-link>
        <a v-else-if="item.externalUrl" :href="item.externalUrl">{{ item.text }}</a>
      </el-menu-item>
      <el-menu-item index="5" id="account">
        <router-link to="/account">{{ this.$store.state.user.authenticated ? 'Account' : 'Login' }}</router-link>
      </el-menu-item>
      <el-menu-item index="6" id="submit">
        <router-link to="/submit">
          <el-button type="primary">Submit A Promise</el-button>
        </router-link>
      </el-menu-item>
    </el-menu>
  </el-header>
</template>

<script>
export default {
  name: "NavbarDesktop",
  props: ["navigation", "authenticated", "email"],
  data() {
    return {
      activeIndex: "0",
      promiseNavItems: ["Politicians","States","Lists"]
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  computed: {
    navItems() {
      const notHome = x => x.text !== 'Home'
      const notPromises = x => !this.promiseNavItems.includes(x.text)
      return this.navigation.filter(x => notHome(x) && notPromises(x))
    }
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
  font-size: 1rem;
}
#navbar-logo {
  margin: 7px 12px 7px 12px;
  float: left;
  height: 45px;
}
#submit,
#account {
  float: right;
}
.el-menu {
  background-color: transparent;
}
.router-link-active {
  font-weight: 600;
}
</style>
