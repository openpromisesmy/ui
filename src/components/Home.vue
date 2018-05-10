<template>
  <main class="home">
    <div><h1 id="tagline">{{ msg }}</h1></div>
    <img id="logo" src="@/assets/logo.jpg">
    <p>{{ description }}</p>
    <router-link to="/promises"><el-button>View Promises</el-button></router-link>
    <router-link to="/submit"><el-button>Submit a Promise</el-button></router-link>
  </main>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg:
        "Tech has the potential to make our democracies better. It's time we realise that.",
      description:
        'OpenPromises is civilian-led not for profit project that is based on recording promises made by politicians. Our source is publicly available media sources and we are currently focusing on Malaysia due to it being the homebase of our current participants, and also due to the upcoming general elections. We believe that technology can have a great impact on governance and democracy. Tech can change the world, and we aim to be a part of that.'
    }
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
