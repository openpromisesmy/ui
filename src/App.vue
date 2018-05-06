<template>
  <el-container id="app" direction="vertical">
    <Navbar />
    <el-main>
          <router-view/>
    </el-main>
    <Footer />
  </el-container>
</template>

<script>
import Navbar from '@/components/Navbar'
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
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
</style>
