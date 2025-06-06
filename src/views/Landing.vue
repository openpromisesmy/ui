<template>
  <main class="home">

    <section id="hero">
      <hero :showArchiveLink="true" />
    </section>
    <section class="description">
      <p>OpenPromises is the first open source content management system for the tracking of promises. The resource was built with the aim of helping increase the accountability of elected representatives.</p>
      <p>To date, OpenPromises has been deployed in Malaysia and ran from 2017 till 2020.</p>
      <p>This page will be updated with more detailed information and instructions on the system.</p>
      <p>If you'd like to run OpenPromises for your own promise-tracking project, get in touch with us via <a href="https://www.facebook.com/openpromises.malaysia">our facebook.</a></p>
    </section>

  </main>
</template>

<script>
import Hero from '@/components/Hero.vue'

export default {
  name: 'Home',
  components: { Hero },
  created () {
    (function (d, s, id) {
      var js
      var fjs = d.getElementsByTagName(s)[0]
      if (d.getElementById(id)) return
      js = d.createElement(s); js.id = id
      js.src = 'https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v3.0&appId=1766611253591544&autoLogAppEvents=1'
      fjs.parentNode.insertBefore(js, fjs)
    }(document, 'script', 'facebook-jssdk'))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
main {
 max-width: 800px;
 margin: 0 auto;
}

#hero {
  margin: 0 auto;
  padding: 40px;
  border-radius: 10px;
  background: #d9edf7;
}

.el-button {
  font-size: 18px;
  padding: 18px;
  border-radius: 18px
}

#cta {
 margin: 50px 0
}

.el-card {
  display: inline-block
}
</style>
