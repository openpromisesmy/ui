<template>
  <el-header id="navbar">
      <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect">
        <el-menu-item v-for="(item, index) in navigation" :key="index" v-bind:index="String(index)">
          <router-link v-bind:to="item.url">{{ item.text }}</router-link>
        </el-menu-item>
        <el-menu-item index="4" id="account">
          <router-link to="/account">
            {{ this.$store.state.user.authenticated ? email : 'Login' }}
          </router-link>
        </el-menu-item>
        <el-menu-item index="5" id="submit">
          <router-link to="/submit">
            <el-button type="info" v-on:click="googleLogoutHandler">
              Submit A Promise
            </el-button>
          </router-link>
        </el-menu-item>
        <!-- move below to inside account page -->
        <el-menu-item index="6" v-if="this.$store.state.user.authenticated">
            <el-button type="info" v-on:click="googleLogoutHandler">
              Logout
            </el-button>
        </el-menu-item>
    </el-menu>
  </el-header>
</template>

<script>
import { googleLogout } from '@/api'
export default {
  name: 'Navbar',
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
