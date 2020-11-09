<template>
  <main id="politicians">
    <template v-if="politicians.length === 0">
      <p>Loading politicians...This will take 1-2 seconds.</p>
      <LoadingSpinner />
    </template>
        <!-- CABINET VIEW CODE -->
    <!-- TODO: move into its own component file -->
    <div v-if="showCabinet && politicians.length > 0 && filteredPoliticians.length !== 0" class="cabinet-view">
      <h1 class="cabinet-view-title">Cabinet View </h1>
      <el-row class="cabinet-row" v-for="ministry in cabinet.ministries" :key="ministry.id">
        <h3 class="ministry-row"> {{ ministry.name }} </h3> <!-- {{ministry.id}} -->
        <el-col
          :xs="24"
          :sm="12"
          :lg="8"
          :span="8"
          class="primary-politician">
          <h5 class="primary-politician-title">{{ ministry.primary_title }}</h5>
          <router-link :to="/politician/ + ministry.primary_politician_id">
            <politician-card :o="politicians.find(politician => politician.id === ministry.primary_politician_id)" />
          </router-link>
          <!-- SHOWS PRIMARY POLITICIAN ID <div class="primary-politician-id">{{ ministry.primary_politician_id }}</div> -->
          <!-- <div class="primary-politician-name"> {{ politicians.find(politician => politician.id === ministry.primary_politician_id).name}}</div> -->
        </el-col>
        <el-col
          :xs="24"
          :sm="12"
          :lg="8"
          :span="8"
          v-for="s in ministry.secondary_politician_ids"
          :key="s">
        <!--SHOWS SECONDARY POLITICIAN ID--> <!-- <div class="secondary-politician-name"> {{ s }} </div> -->
        <!-- <span>{{ politicians.find(politician => politician.id === s) }}</span> -->
        <h5 class="secondary-politician-title"> {{ ministry.secondary_title}} </h5>
        <router-link :to="/politician/ + s">
          <politician-card :o="politicians.find(politician => politician.id === s)" />
        </router-link>
        <!-- <div class="secondary-politician-name"> {{ politicians.find(politician => politician.id === s).name}} </div> -->
        </el-col>
      </el-row>
    </div>
    <h2>All Politicians</h2>
    <p>All politicians in the OpenPromises database. If you see any missing, please get in touch with us.</p>
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
// CABINET VIEW CODE
import mock_cabinet from '@/mocks/mock_cabinet.js';


export default {
  name: "Politicians",
  data() {
    return {
      politicians: [],
      search: "",
      cabinet: {},
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
    },
    showCabinet() {
      return false;
    },
  },
  methods: {
    async getCabinet() {
      return mock_cabinet;
    }
  },
  async created() {
    try {
      // perhaps this caching logic should be in the store instead
      // here we ask the store for the info
      // it is the store's responsibility to check the cache
      this.politicians = await loadCache(this, "politicians", getPoliticians());
      this.cabinet = await this.getCabinet();
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
  color: unset;
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

.cabinet-view {
  margin-top: 40px;
  padding-bottom: 40px;
}

.cabinet-view-title {
  margin-bottom: 15px;
}

.cabinet-row {
  margin: 0 auto;
}

.ministry-row {
  margin-top: 30px;
  margin-bottom: 0px;
}
</style>
