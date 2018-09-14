<template>
  <el-container id="app" direction="vertical">
    <Navbar />
    <el-main>
      <router-view/>
      <!-- Load Facebook SDK for JavaScript -->
      <div id="fb-root"></div>
      <!-- Your customer chat code -->
      <div class="fb-customerchat"
        attribution=setup_tool
        page_id="540152059524147"
        logged_in_greeting="Hi. Itching to know something? Ask away!"
        logged_out_greeting="Hi. Itching to know something? Ask away!">
      </div>
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
  },
  created () {
    (function (d, s, id) {
      var js
      var fjs = d.getElementsByTagName(s)[0]
      if (d.getElementById(id)) return
      js = d.createElement(s); js.id = id
      js.src = 'https://connect.facebook.net/en_GB/sdk/xfbml.customerchat.js#xfbml=1&version=v2.12&autoLogAppEvents=1'
      fjs.parentNode.insertBefore(js, fjs)
    }(document, 'script', 'facebook-jssdk'))
  }
}
</script>

<style>
html, body {
  height: 100%
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.el-main {
  flex: 1 0 auto;
}

.footer-container {
  flex-shrink: 0;
}

main {
  /* max-width: 900px; */
  margin: 0 auto;
}

.title {
  font-size: 36px;
}

#logo {
  max-width: 200px;
  margin-bottom: 2em;
  border-radius: 20px;
  box-shadow: 3px 3px 7px 1px #999999;
}
</style>
