<template>
  <main id="politicians">
    <el-row class="politicians-row">
      <el-card
        :xs="24"
        :sm="12"
        :lg="8"
        v-for="o in filteredPoliticians"
        :key="o.id"
      >
        <router-link :to="/politician/ + o.id">
          <politician-card :o="o" />
        </router-link>
      </el-card>
    </el-row>
  </main>
</template>

<script>
import { listPoliticians } from "../services/api"
import PoliticianCard from "../components/Cards/PoliticianCard"

export default {
  name: 'Politicians',
  components: { PoliticianCard },
  data: () => ({
    politicians: [],
    search: "",
  }),
  async created() {
    this.politicians = await listPoliticians()
  },
  computed: {
    filteredPoliticians() {
      return this.politicians.filter(politician => {
        return politician.name
          .toLowerCase()
          .includes(this.search.toLowerCase());
      });
    },}
}
</script>

<style scoped>

</style>
