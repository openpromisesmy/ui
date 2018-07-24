<template>
  <main id="Promise">
    <template v-if="appStatus === 'loading'">
      <p>Loading promise...</p>
    </template>
    <template v-else>
      <h1>{{ promise.title }}</h1>
      <el-row>
        <el-col :span="12"><b>Made by</b></el-col>
        <el-col :span="12">{{ politician.name }}</el-col>
      </el-row>
      <el-row v-for="(value, key) in displayedValues" :key="key" class="Promise_values">
        <el-col :span="12"><div class="grid-content"> <b>{{ key }} </b> </div></el-col>
        <el-col :span="12"><div class="grid-content"> {{ value }} </div></el-col>
      </el-row>
    </template>

<FacebookComment />
  </main>
</template>

<script>
import LoadingSpinner from '@/components/shared/LoadingSpinner'
import FacebookComment from '@/components/FacebookComment'
export default {
  name: 'PromiseDesktop',
  props: [ 'promise', 'politician', 'appStatus', 'displayedValues' ],
  components: { LoadingSpinner, FacebookComment }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#Promise {
  max-width: 900px
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.el-row {
  padding: 10px;
  border: 1px solid grey
}

.el-row:last-child {
  margin-bottom: 0;
}

.el-col {
  border-radius: 4px;
}

</style>
