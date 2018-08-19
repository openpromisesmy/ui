<template>
  <main>
      <promise-update-card
        v-for="promiseUpdate in promiseUpdates"
        :key="promiseUpdate.id"
        v-if="promiseUpdates.length > 0"
        :promiseUpdate="promiseUpdate"
      />
  </main>
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
main {
  max-width: 900px
}
</style>
