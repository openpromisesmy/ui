<template>
    <el-card id="Politician_stats">
      <b>Promise Statistics:</b>
      <el-button v-for="stat in stats" :key="stat.value">
        <b>{{ stat.value }}</b> {{ stat.number }}
      </el-button>
    </el-card>
</template>

<script>
export default {
  name: 'PromiseStats',
  props: ['stats'],
  data () {
    return {
    }
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
