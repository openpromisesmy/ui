<template>
  <section v-if="promiseUpdates.length > 0">
      <h2 class="header">Updates</h2>
      <promise-update-card
        v-for="promiseUpdate in promiseUpdates"
        :key="promiseUpdate.id"
        :promiseUpdate="promiseUpdate"
      />
  </section>
</template>

<script>
import PromiseUpdateCard from '@/components/Promise/PromiseUpdateCard.vue'

export default {
  name: 'PromiseUpdates',
  props: ['promiseUpdates'],
  components: { PromiseUpdateCard }
}
</script>

<style scoped>
section {
  max-width: 900px;
  width: 100%;
}
.header {
  text-align: left;
  font-size: 1.5rem;
  margin: 0 0 8px;
}
</style>
