<template>
  <el-container id="app" direction="vertical">
    <Navbar />
    <alert-banner :text="alertText"/>
    <el-main>
      <router-view/>
    </el-main>
    <Footer class="footer-container"/>
  </el-container>
</template>

<script>
import Navbar from '@/components/Navbar/index'
import Footer from '@/components/Footer'
import AlertBanner from '@/components/AlertBanner'

export default {
  name: 'App',
  components: { AlertBanner, Navbar, Footer },
  data () {
    return {
      alertText: 'Promises data is currently not up to date. Due to the events since early 2019, promise-tracking is of lower value. We are currently working on other avenues for increasing accountability in Malaysia. Refer to our Facebook page for update. ',
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
  min-height: calc(97.5vh);
}

.el-main {
  padding: 0;
}

.title {
  font-size: 36px;
}
</style>
