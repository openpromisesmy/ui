<template>
  <div>
    {{ JSON.stringify(politicians) }}
  </div>
</template>

<script>
import { listPoliticians } from "../services/api"
export default {
  name: 'Politicians',
  data: () => ({
    politicians: []
  }),
  async created() {
    this.politicians = await listPoliticians()
  }
}
</script>

<style scoped>

</style>
