<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Politicians />
  </div>
</template>

<script>
import Politicians from './views/Politicians.vue'

export default {
  name: 'App',
  components: {
    Politicians
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
