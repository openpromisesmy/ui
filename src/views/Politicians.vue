<template>
  <main id="politicians">
    <template v-if="politicians.length === 0">
      <p>Loading politicians...This will take 1-2 seconds.</p>
      <LoadingSpinner />
    </template>
    <el-input
      clearable
      placeholder="Search for a politician"
      v-model="search"
      class="search"
    />

    <el-row class="politicians-row">
      <el-col
        :xs="24"
        :sm="12"
        :lg="8"
        v-for="o in filteredPoliticians"
        :key="o.id"
      >
        <router-link :to="/politician/ + o.id">
          <politician-card :o="o" />
        </router-link>
      </el-col>
    </el-row>

    <p v-if="filteredPoliticians.length === 0">
      Sorry, no politicians match your search.
    </p>
  </main>
</template>

<script>
import { getPoliticians } from "@/api";
import { loadCache, updateCache } from "@/utils";
import LoadingSpinner from "@/components/LoadingSpinner";
import PoliticianCard from "@/components/PoliticianCard";

export default {
  name: "Politicians",
  data() {
    return {
      politicians: [],
      search: ""
    };
  },
  components: { LoadingSpinner, PoliticianCard },
  computed: {
    filteredPoliticians() {
      return this.politicians.filter(politician => {
        return politician.name
          .toLowerCase()
          .includes(this.search.toLowerCase());
      });
    }
  },
  async created() {
    try {
      this.politicians = await loadCache(this, "politicians", getPoliticians());
    } catch (e) {
      console.log(e);
    }
  },
  async mounted() {
    try {
      this.politicians = await updateCache(
        this,
        "politicians",
        getPoliticians()
      );
    } catch (e) {
      console.log(e);
    }
  }
};
</script>

<style scoped>
main {
  text-align: center;
}

a {
  text-decoration: none;
}

.bottom {
  margin-top: 12px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.search {
  width: 320px;
  max-width: 90vw;
  margin: 10px;
}

.politicians-row {
  margin: 0 auto;
}
</style>
