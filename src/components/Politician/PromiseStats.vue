<template>
    <el-card id="Promise_stats">
      <h2>{{ totalPromises }} promises made</h2>
      <el-row v-for="(value, key) in stats" :key="key">
          <el-col :span="14">
            {{ key }}
          </el-col>
          <!-- <el-col :span="8">
            <el-progress
              :show-text="false"
              :stroke-width="10"
              color="darkslategrey"
              :percentage="Math.round( (value/totalPromises)*100 )">
            </el-progress>
          </el-col> -->
          <el-col :span="10">
            <b>{{ value }}</b>
          </el-col>

      </el-row>
    </el-card>
</template>

<script>
export default {
  name: 'PromiseStats',
  props: ['stats'],
  computed: {
    totalPromises () {
      return Object.values(this.stats).reduce((a, b) => a + b)
    }
  }
}
</script>

<style scoped>
#Promise_stats {
  margin: 2px;
  background-color: darkslategrey;
  color: white
}

.el-row {
  margin: 5px 0
}

</style>
