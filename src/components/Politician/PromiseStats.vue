<template>
    <el-card id="Politician_stats">
      <b>Promise Statistics:</b>
      <el-button v-for="(value, key) in stats" :key="key">
        <b>{{ key }}</b> {{ value }}
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
