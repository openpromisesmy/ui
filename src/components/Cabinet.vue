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
          <politician-card
            :o="
              politicians.find(
                (politician) => politician.id === ministry.primary_politician_id
              )
            "
          />
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
          <politician-card
            :o="politicians.find((politician) => politician.id === s)"
          />
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
  },
}
</script>

<style scoped>
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
