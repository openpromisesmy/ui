<template>
  <el-collapse v-model="activeNames">
  <img id="navbar-logo" src="../assets/openpromises.png"/>

  <el-collapse-item title="Menu" name="1">
    <el-row class="tac">
  <el-col>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @select="handleClose"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      >
        <router-link v-bind:to="item.url" v-for="(item, index) in navigation" :key="index">
            <el-menu-item  v-bind:index="String(index)">
              {{ item.text }}
            </el-menu-item>
        </router-link>
        <el-menu-item index="4" id="account" >
          <router-link to="/account">
            {{ this.$store.state.user.authenticated ? email : 'Login' }}
          </router-link>
        </el-menu-item>
        <el-menu-item index="5" id="submit" >
          <router-link to="/submit">
            <el-button type="primary">
              Submit A Promise
            </el-button>
          </router-link>
        </el-menu-item>
    </el-menu>
  </el-col>
</el-row>
  </el-collapse-item>

</el-collapse>
</template>

<script>
export default {
  name: 'NavbarMobile',
  props: [ 'navigation', 'authenticated', 'email'],
  data () {
    return {
      isCollapse: false,
      activeNames: []
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      // this.isCollapse = true
    },
    handleOpen (key, keyPath) {
      // this.isCollapse = false
    },
    handleClose (key, keyPath) {
      // this.isCollapse = true
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
  font-size: 1rem
}
#navbar-logo {
  height: 32px;
  float: left;
  margin-top: 8px;
  margin-left: 12px
}
</style>
