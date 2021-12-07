<template>
  <main class="home">

    <section id="hero">
      <hero />
    </section>

  </main>
</template>

<script>
import Hero from '@/components/Hero'

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
 text-align: center
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
