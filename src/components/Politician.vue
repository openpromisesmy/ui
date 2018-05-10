<template>
  <main id="politicians">
    <h1>{{ politician.name }}</h1>
    <img class="image" :src="politician.profile_image">
    <p><b>{{ politician.primary_position }}</b></p>
    <p>{{ politician.brief }}</p>
  </main>
</template>

<script>
import { getPolitician } from '@/api'
export default {
  name: 'Politician',
  data () {
    return {
      politician: {}
    }
  },
  async created () {
    try {
      this.politician = await getPolitician(this.$route.params.id)
    } catch (e) {
      console.error(e)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.image {
  min-width: 30%;
  display: inline-block;
  object-fit: cover; /* Do not scale the image */
  object-position: top; /* Center the image within the element */
  height: 300px;
}

#politicians p b {
  display: inline-block
}
</style>
