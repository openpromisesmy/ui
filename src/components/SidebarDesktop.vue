<template>
  <el-aside width="200px" id="navbar">
      <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect">
        <router-link v-bind:to="item.url" v-for="(item, index) in navigation" :key="index">
            <el-menu-item  v-bind:index="String(index)">
              {{ item.text }}
            </el-menu-item>
        </router-link>
       
        
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  name: 'SidebarDesktop',
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
  font-size: 1rem;
    text-align: left
}

#submit {
  float:right
}
.el-aside{
    border-right: 1px solid #eee;
    min-height: calc(100vh - 60px);
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
  }
</style>
