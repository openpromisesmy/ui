<template>
  <main>
    <h1>Oops!</h1>
    <p>You're looking for something that doesn't exist</p>
    <router-link to="/">Go back</router-link>
  </main>
</template>

<script>
export default {
  name: '404'
}
</script>

<style>
main {
  width: 100%;
  height: 50%;
  text-align: center;
  margin: 50px 0;
}
</style>


