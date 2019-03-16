<template>
  <el-collapse v-model="activeNames" id="navbar">
    <img id="navbar-logo" src="@/assets/openpromises.png"/>

    <el-collapse-item title="Menu" name="1">
      <el-row class="tac">
        <el-col>
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @select="handleSelect"
            @open="handleOpen"
            @close="handleClose"
            :collapse="isCollapse"
            >
              <el-menu-item  v-bind:index="String(index)" v-for="(item, index) in navigation" :key="index">
                <router-link v-if="item.url" v-bind:to="item.url">
                  {{ item.text }}
                </router-link>
                <a v-else-if="item.externalUrl" :href="item.externalUrl">
                  {{ item.text }}
                </a>
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
          </el-menu>
        </el-col>
      </el-row>
    </el-collapse-item>

  </el-collapse>
</template>

<script>
export default {
  name: 'NavbarMobile',
  props: ['navigation', 'authenticated', 'email'],
  data () {
    return {
      activeNames: []
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      // Collapse Nav Bar
      this.activeNames = []
    },
    handleOpen (key, keyPath) {
      // Do something
    },
    handleClose (key, keyPath) {
      // Do something
    }
  }
}
</script>

<style scoped>
#navbar {
  text-align: center
}

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
.router-link-active {
  font-weight: 800;
}
</style>
