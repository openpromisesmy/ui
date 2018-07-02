<template>
  <main class="home">
    <div><h1 id="tagline">{{ msg }}</h1></div>
    <img id="logo" src="@/assets/logo.jpg">
    <p>{{ description }}</p>
    <router-link to="/promises"><el-button>View Promises</el-button></router-link>
    <router-link to="/submit"><el-button>Submit a Promise</el-button></router-link>
    <div id="fb-root"></div>
    <section>
      <h1>View Promises by Politician</h1>
      <Politicians />
    </section>
    <section>
      <h1>Follow Us on Facebook (We post updates there first)</h1>
      <div class="fb-page" data-href="https://www.facebook.com/openpromises.malaysia/" data-tabs="timeline" data-width="500" data-height="900" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/openpromises.malaysia/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/openpromises.malaysia/">OpenPromises Malaysia</a></blockquote></div>
    </section>
  </main>
</template>

<script>
import Politicians from '@/components/Politicians'

export default {
  name: 'Home',
  components: { Politicians },
  data () {
    return {
      msg:
        "Tech has the potential to make our democracies better. It's time we realise that.",
      description:
        'OpenPromises is civilian-led not for profit project that is based on recording promises made by politicians. Our source is publicly available media sources and we are currently focusing on Malaysia due to it being the homebase of our current participants, and also due to the upcoming general elections. We believe that technology can have a great impact on governance and democracy. Tech can change the world, and we aim to be a part of that.'
    }
  },
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
#tagline {
  font-weight: 900;
}

.el-button {
  font-size: 18px;
  padding: 18px;
  border-radius: 18px
}
</style>
