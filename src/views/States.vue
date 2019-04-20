<template>
  <main>
    <states-display  :states="filteredMalaysianStates" />
  </main>
</template>

<script>
import malaysianStates from '@/utils/malaysianStates'
import StatesDisplay from '@/components/StatesDisplay'

export default {
  name: 'States',
  data () {
    return {
      malaysianStates
    }
  },
  components: { StatesDisplay },
  computed: {
    filteredMalaysianStates() {
      return this.malaysianStates.filter(x => x.show)
    }
  }
}
</script>

<style scoped>
main {
  text-align: center;
  padding: 20px
}
</style>
