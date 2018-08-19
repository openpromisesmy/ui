<template>
  <section v-if="promiseUpdates.length > 0">
      <h1 class="header">Updates</h1>
      <promise-update-card
        v-for="promiseUpdate in promiseUpdates"
        :key="promiseUpdate.id"
        :promiseUpdate="promiseUpdate"
      />
  </section>
</template>

<script>
import PromiseUpdateCard from '@/components/Promise/PromiseUpdateCard'

export default {
  name: 'PromiseUpdates',
  props: ['promiseUpdates', 'promiseID'],
  components: { PromiseUpdateCard }
}
</script>

<style scoped>
section {
  max-width: 900px
}
.header {
  text-align: left;
  font-size: 1.5rem
}
</style>
