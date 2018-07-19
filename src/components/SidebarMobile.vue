<template>

  <el-aside width="210px" id="sidebar">
     <el-container direction="vertical" style="display:block; width:inherit"  >
        <el-button id="menu" v-on:click="isCollapse=!isCollapse" ><img src="../assets/menu.png" width="24px" height="24px"/></el-button>


      <el-menu :default-active="activeIndex" 
        class="el-menu-vertical-demo"
      @select="handleClose"
   
      :collapse="isCollapse" >
        <router-link v-bind:to="item.url" v-for="(item, index) in navigation" :key="index">
            <el-menu-item  v-bind:index="String(index)">
              {{ item.text }}
            </el-menu-item>
        </router-link>
        <el-menu-item index="4" id="account">
          <router-link to="/account">
            {{ this.$store.state.user.authenticated ? email : 'Login' }}
          </router-link>
        </el-menu-item>
        <router-link to="/submit" id="submit">
            <el-menu-item index="5" >
                <el-button type="primary">
                  Submit A Promise
                </el-button>
            </el-menu-item>
        </router-link>

        <!-- move below to inside account page -->
        <el-menu-item index="6" v-if="this.$store.state.user.authenticated">
            <el-button type="info" @click="googleLogoutHandler">
              Logout
            </el-button>
        </el-menu-item>
    </el-menu>
     </el-container>

  </el-aside>
</template>

<script>
    
export default {
  name: 'SidebarDesktop',
  props: ['googleLogoutHandler', 'navigation', 'authenticated', 'email'],
  data () {
    return {
      activeIndex: '0',
      isCollapse: true,
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
    },
    handleMenuClick(e) {
       this.isCollapse =  !this.isCollapse;
        console.log(this.isCollapse);
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
  font-size: 1rem;
    text-align: left
}
#menu{
    background: none;
    border: none;
    width: 80px;
    float:right;
    height:60px
}
#submit {
  float:right
}
.el-aside{
    top:0;
    right:0;
    z-index: 20;
    position: fixed;
    height: 100vh
}
.el-menu-vertical-demo.el-menu--collapse {
    background-color: white;
    width: 0px;
    overflow-x: hidden;

   
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
          float:right;

    width: 200px;
/*    box-shadow: 1px 1px 1px 0px rgba(238,238,238,1);*/


}
.el-menu{
    text-align: left;
    position: absolute;
    top: 60px;
    height: calc(100vh - 61px);
    right: 0px;
    margin-top: 1px;
    border-left: 1px solid #eee;
/*
    transition: width 0.5s linear;
    transform: translateX(0px);
*/

}
</style>
