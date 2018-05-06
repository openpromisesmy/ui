<template>
  <el-header id="navbar">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item v-for="(item, index) in navigation" :key="index" index="index">
    <router-link v-bind:to="item.url">{{ item.text }}</router-link>
  </el-menu-item>
</el-menu>
  </el-header>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      activeIndex: '1',
      navigation: [
        { text: 'Home', url: '/' },
        { text: 'Promises', url: '/promises' },
        { text: 'Politicians', url: '/politicians' },
        { text: 'About', url: '/about' },
        { text: 'Submit A Promise', url: '/submit' }
      ]
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
#logo {
  max-width: 200px;
  margin-bottom: 2em;
  border-radius: 20px;
  box-shadow: 3px 3px 7px 1px #999999;
}
main {
  /* max-width: 900px; */
  margin: 0 auto;
}
#footer {
  margin-top: 20px;
}
</style>
