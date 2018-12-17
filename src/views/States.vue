<template>
  <main id="states">

  <el-col v-for="state in malaysianStates" :key="state" :sm="6" :xs="24" class="state">
    <router-link :to="`/states/${state}`">{{ state }}</router-link>
  </el-col>

  </main>
</template>

<script>
import malaysianStates from '@/utils/malaysianStates'

export default {
  name: 'Politicians',
  data () {
    return {
      malaysianStates
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
main {
  text-align: center
}

.state {
  padding: 20px
}

</style>
