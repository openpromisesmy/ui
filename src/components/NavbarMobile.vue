<template>
  <el-header id="navbar" style="text-align: left;vertical-align:middle; font-size: 12px;
">
<!--
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
            <el-button type="primary">
              Submit A Promise
            </el-button>
          </router-link>
        </el-menu-item>
         move below to inside account page 
        <el-menu-item index="6" v-if="this.$store.state.user.authenticated">
            <el-button type="info" @click="googleLogoutHandler">
              Logout
            </el-button>
        </el-menu-item>
    </el-menu>
-->
    <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect">
    <el-menu-item id="logo-navbar">
        <img src="../assets/openpromises.png" height="40px"/>
    </el-menu-item>
    
    </el-menu>
  </el-header>
</template>

<script>
export default {
  name: 'NavbarDesktop',
  props: ['googleLogoutHandler', 'navigation', 'authenticated', 'email'],
  data () {
    return {
      activeIndex: '0'
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
  font-size: 1rem
}

#logo-navbar>img{
    padding-right: 8px;
    border-right: 3px solid #444;

}
#logo-navbar{
    padding-left: 0px;
    border-bottom: none;
}
#submit {
  float:right
}
.el-menu{
    border-bottom: none,
    
}
.el-header {
    line-height: 60px;
    z-index: 10;
    box-shadow: 0px 1px 1px 0px rgba(238,238,238,1);
}
</style>
