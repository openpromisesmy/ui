<template>
  <main id="politicians">
    <h1>{{ politician.name }}</h1>
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
</style>
