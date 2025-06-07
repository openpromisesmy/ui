<template>
  <el-collapse v-model="activeNames" id="navbar">
  <router-link to="/">
    <img id="navbar-logo" src="@/assets/openpromises.png" alt="OpenPromises" />
  </router-link>

    <el-collapse-item title="Menu" name="1">
      <el-row class="tac">
        <el-col>
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @select="handleSelect"
            @open="handleOpen"
            @close="handleClose"
          >
            <el-menu-item
              v-bind:index="String(index)"
              v-for="(item, index) in navigation"
              :key="index"
            >
              <router-link v-if="item.url" v-bind:to="item.url">{{
                item.text
              }}</router-link>
              <a v-else-if="item.externalUrl" :href="item.externalUrl">{{
                item.text
              }}</a>
            </el-menu-item>
            <el-menu-item index="4" id="account-button">
              <router-link to="/account">{{
                this.$store.state.user.authenticated ? "Account" : "Login"
              }}</router-link>
            </el-menu-item>
            <el-menu-item index="5" id="submit-button">
              <router-link to="/submit">
                <el-button type="primary">Submit A Promise</el-button>
              </router-link>
            </el-menu-item>
            <el-menu-item index="6" id="theme-toggle">
              <el-switch
                :model-value="darkMode"
                active-text="Dark"
                inactive-text="Light"
                @change="$emit('toggle-dark-mode')"
              />
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </el-collapse-item>
  </el-collapse>
</template>

<script>
export default {
  name: "NavbarMobile",
  props: ["navigation", "authenticated", "email", "darkMode"],
  data() {
    return {
      activeNames: []
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      // Collapse Nav Bar
      console.log(key,keyPath)
      this.activeNames = [];
    },
    handleOpen(key, keyPath) {
      // Do something
      console.log(key,keyPath)
    },
    handleClose(key, keyPath) {
      // Do something
      console.log(key,keyPath)
    }
  }
};
</script>

<style scoped>
#navbar {
  text-align: center;
}

a {
  text-decoration: none;
  font-size: 1rem;
}
#navbar-logo {
  height: 32px;
  float: left;
  margin-top: 8px;
  margin-left: 12px;
}
.router-link-active {
  font-weight: 800;
}

body.dark #navbar {
  background-color: #1e1e1e;
}

.el-collapse-item >>> .el-collapse-item__header {
  justify-content: flex-end;
}

.el-collapse-item >>> .el-collapse-item__arrow {
  margin-left: 0;
}
</style>
