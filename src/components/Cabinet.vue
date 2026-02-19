<template>
  <!-- CABINET VIEW CODE -->
  <!-- TODO: move into its own component file -->
  <div class="cabinet-view">
    <h1 class="cabinet-view-title">Cabinet View</h1>
    <el-row
      class="cabinet-row"
      v-for="ministry in cabinet.ministries"
      :key="ministry.id"
    >
      <h3 class="ministry-row">{{ ministry.name }}</h3>
      <!-- {{ministry.id}} -->
      <el-col :xs="24" :sm="12" :lg="8" :span="8" class="primary-politician">
        <h5 class="primary-politician-title">{{ ministry.primary_title }}</h5>
        <router-link :to="/politician/ + ministry.primary_politician_id">
          <politician-card :o="politicianById(ministry.primary_politician_id)" />
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
        :key="s"
      >
        <!--SHOWS SECONDARY POLITICIAN ID-->
        <!-- <div class="secondary-politician-name"> {{ s }} </div> -->
        <!-- <span>{{ politicians.find(politician => politician.id === s) }}</span> -->
        <h5 class="secondary-politician-title">
          {{ ministry.secondary_title }}
        </h5>
        <router-link :to="/politician/ + s">
          <politician-card :o="politicianById(s)" />
        </router-link>
        <!-- <div class="secondary-politician-name"> {{ politicians.find(politician => politician.id === s).name}} </div> -->
      </el-col>
    </el-row>
  </div>
</template>

<script>
import PoliticianCard from '@/components/PoliticianCard.vue'
import mock_cabinet from '@/mocks/mock_cabinet.js'

export default {
  name: 'Cabinet',
  components: { PoliticianCard },
  data: () => ({
    cabinet: [],
  }),
  props: {
    politicians: Array,
  },
  async created() {
    this.cabinet = await this.getCabinet()
  },
  methods: {
    async getCabinet() {
      return mock_cabinet
    },
    politicianById(id) {
      return this.politicians.find((politician) => politician.id === id) || {
        id,
        name: "Unknown Representative",
        primary_position: "Unavailable",
        profile_image: ""
      }
    },
  },
}
</script>

<style scoped>
.cabinet-view {
  margin: 10px 0 24px;
  padding: 16px;
  border-radius: 20px;
  border: 1px solid rgba(22, 67, 68, 0.14);
  background:
    radial-gradient(circle at 10% 0%, rgba(15, 118, 110, 0.08), transparent 36%),
    #fbfdfb;
}

.cabinet-view-title {
  margin: 0 0 4px;
  font-size: clamp(1.55rem, 2vw, 2rem);
}

.cabinet-row {
  margin: 0 auto;
  border-top: 1px dashed rgba(19, 63, 68, 0.18);
  padding-top: 12px;
}

.cabinet-row:first-of-type {
  border-top: 0;
  padding-top: 0;
}

.ministry-row {
  margin: 10px 0 6px;
  color: #0d3e45;
  font-size: 1.2rem;
  width: 100%;
}

.primary-politician-title,
.secondary-politician-title {
  margin: 6px 0;
  color: #355a5d;
  font-size: 0.85rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

@media (max-width: 768px) {
  .cabinet-view {
    padding: 12px 8px;
    border-radius: 14px;
  }
}
</style>
