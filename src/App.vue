<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#logo {
  max-width: 200px;
  margin-bottom: 2em;
  border-radius: 20px;
  box-shadow: 3px 3px 7px 1px #999999;
}
main {
  max-width: 900px;
  margin: 0 auto
}
</style>
