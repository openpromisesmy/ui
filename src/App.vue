<template>
  <el-container id="app">
    <Navbar />
    <router-view/>
      <el-footer id="footer">
        <el-row>
         <el-col :span="8" v-for="(item, index) in footer" :key="index">
          <div class="grid-content bg-purple">
            <a :href="item.url">{{ item.text }}</a>
          </div>
          </el-col>
        </el-row>
      </el-footer>
  </el-container>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  name: 'App',
  components: { Navbar },
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
#footer{
  margin-top: 20px
}
</style>
