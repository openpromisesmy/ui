<template>
  <main class="about">
    <h1 class="title">About OpenPromises</h1>
    <div><h1 id="tagline">{{ msg }}</h1></div>
    <img id="logo" src="@/assets/logo.jpg">
    <el-row>
     <el-col :span="24">
         <div class="about-points">
             <h2>What is OpenPromises?</h2>
             <p>In simple terms, this is a website where promises by politicians are recorded. Currently we are focusing on recording rather than full-on tracking. Once we have more volunteers, we'll be tracking promises more closely. Just having the promises recorded will already be of great value, we believe.</p>

             <h2>What is it for?</h2>
             <p>In simple terms, this is a website where promises by politicians are recorded. Currently we are focusing on recording rather than full-on tracking. Once we have more volunteers, we'll be tracking promises more closely. Just having the promises recorded will already be of great value, we believe.</p>

             <h2>Who is OpenPromises run by?</h2>
             <p>We are just a bunch of regular citizens who hold no office or even position in corporations. We are strangers that are connected through the same aspiration of doing something that can serve good in this world, in our own little way.</p>

             <h2>Where do you get your money from?</h2>
             <p>Good question. Currently it's from our own pockets. But if you'd like to sponsor the project, please <a href="http://facebook.com/OpenPromises" target="_blank">contact us</a>.</p>

             <h2>Can I help?</h2>
             <p>Yes you can. Please contact us through <a href="http://facebook.com/OpenPromises" target="_blank">our Facebook page</a></p>
         </div>
    </el-col>
    </el-row>
  </main>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      msg:
        "Tech has the potential to make our democracies better. It's time we realise that."
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.about-points {
    max-width: 600px;
    margin: 0 auto
}
</style>
