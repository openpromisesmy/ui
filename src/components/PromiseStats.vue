<template>
    <el-card id="Promise_stats" header="Promise Statistics">
      <h2>{{ totalPromises }} promise{{ totalPromises === 1 ? '' : 's' }} tracked</h2>
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
import { generateStats } from '@/utils'

export default {
  name: 'PromiseStats',
  props: ['promises'],
  computed: {
    stats: function () {
      return generateStats(this.promises)
    },
    totalPromises () {
      return Object.values(this.stats).reduce((a, b) => a + b)
    }
  }
}
</script>

<style scoped>
#Promise_stats {
  margin: 2px;
  background: linear-gradient(160deg, #0f5d58, #1f365a);
  color: #f6fffe;
  text-align: center;
  border-radius: 14px;
  border: 1px solid rgba(18, 60, 67, 0.2);
}

.el-row {
  margin: 5px 0;
  border-bottom: 1px solid rgba(248, 255, 255, 0.14);
  padding-bottom: 3px;
}

.el-row:last-child {
  border-bottom: 0;
}

#Promise_stats :deep(.el-card__header) {
  border-bottom: 1px solid rgba(246, 254, 255, 0.2);
  font-weight: 700;
}

h2 {
  margin: 0 0 8px;
  color: #ffffff;
  font-size: 1.1rem;
}

</style>
