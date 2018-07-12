<template>
  <main id="Promise">
    <template v-if="appStatus === 'loading'">
      <p>Loading promise...</p>
    </template>
    <template v-else>
      <h1>{{ promise.title }}</h1>
        <p><b>Made by</b></p>
        <p>{{ politician.name }}</p>
      <div v-for="(value, key) in displayedValues" :key="key" class="Promise_values">
        <p> <b>{{ key }} </b></p>
        <p> {{ value }} </p>
      </div>
    </template>

  </main>
</template>

<script>
import LoadingSpinner from '@/components/shared/LoadingSpinner'

export default {
  name: 'PromiseMobile',
  props: [ 'promise', 'politician', 'appStatus', 'displayedValues' ],
  components: { LoadingSpinner }
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
  padding: 10px
}

.el-row:last-child {
  margin-bottom: 0;
}

.el-col {
  border-radius: 4px;
}

p {
    text-align: left
}

</style>
