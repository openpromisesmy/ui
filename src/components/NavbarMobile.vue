<template>
  <el-collapse v-model="activeNames">
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
         <el-menu-item v-for="(item, index) in navigation" :key="index" v-bind:index="String(index)" >
          <router-link v-bind:to="item.url">{{ item.text }}</router-link>
        </el-menu-item>
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
        <!-- move below to inside account page -->
        <el-menu-item index="6" v-if="this.$store.state.user.authenticated" >
            <el-button type="info" @click="googleLogoutHandler">
              Logout
            </el-button>
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
  props: ['googleLogoutHandler', 'navigation', 'authenticated', 'email'],
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
</style>
