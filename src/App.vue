<template>
  <el-container id="app" direction="vertical">
    <Navbar />
    <el-main>
      <router-view/>
    </el-main>
    <Footer class="footer-container"/>
  </el-container>
</template>

<script>
import Navbar from '@/components/Navbar/index'
import Footer from '@/components/Footer'
export default {
  name: 'App',
  components: { Navbar, Footer },
  data () {
    return {
      footer: [
        { text: 'Home', url: '/' },
        { text: 'Promises', url: '/promises' },
        { text: 'Politicians', url: '/politicians' }
      ]
    }
  }
}
</script>

<style>
/* @import '../node_modules/reset-css/reset.css'; */
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.el-main {
  padding: 0;
}

.title {
  font-size: 36px;
}
</style>
