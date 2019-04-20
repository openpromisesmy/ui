<template>
  <main>
    <el-row>
      <states-display  :states="filteredMalaysianStates" />
    </el-row>
    <el-row>
      <p>*Other states will be published once we have more complete data on state-related promises. If you are interested to help out with promise tracking  in your state, message us.</p>
    </el-row>
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
