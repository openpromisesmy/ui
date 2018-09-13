<template>
  <main class="home">

    <section id="hero">
      <div><h1 id="tagline">{{ tagline }}</h1></div>
      <el-row>
        <el-col :md="6">
          <img id="logo" src="@/assets/logo.jpg">
        </el-col>
        <el-col :md="18" id="description">
          <p>
            OpenPromises is civilian-led not for profit project that is based on recording and tracking promises made by politicians.<br/>
            We believe that technology can have a great impact on governance and democracy. Tech can change the world, and we aim to be a part of that.<br/>
            Contact us on Facebook if you want to bring OpenPromises to your country.
          </p>
        </el-col>
      </el-row>
    </section>

    <section>
      <h1>Browse Promises by Politician</h1>
      <Politicians />
    </section>

    <section id="cta">
      <el-card>
        <h1>Help fund the movement</h1>
        <a href="https://www.patreon.com/openpromisesmalaysia"><el-button type="success">Check us out on Patreon</el-button></a>
      </el-card>
      <el-card>
        <h1>Check out our community</h1>
        <a href="https://www.facebook.com/groups/op.malaysia.watchers/"><el-button type="primary">Visit Malaysia Watchers</el-button></a>
      </el-card>
    </section>

    <section>
      <div id="fb-root"></div>
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
      tagline:
        'Track Promises by Your Representatives'
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
main {
 text-align: center
}

#tagline {
  font-weight: 900;
}

#hero {
  max-width: 900px;
  margin: 0 auto
}

#description {
  height: 200px;
  display:flex;
  justify-content:center;
  align-items:center;
  padding: 20px
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
