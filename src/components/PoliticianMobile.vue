<template>
  <main id="politicians">
    <template v-if="politician === 'loading'">
      <div>
      <ContentLoader height="350" width="300">
        <rect x="25" y="0" rx="3" ry="3" width="250" height="30" class="center"/>
        <rect x="50" y="40" rx="3" ry="3" width="200" height="200" class="center"/>
        <rect x="25" y="250" rx="3" ry="3" width="250" height="30" class="center"/>
        <rect x="25" y="290" rx="3" ry="3" width="250" height="20" class="center"/>
        <rect x="25" y="320" rx="3" ry="3" width="250" height="20" class="center"/>
      </ContentLoader>
      </div>
    </template>
    <template v-else>
      <h1>{{ politician.name }}</h1>
      <img class="image" :src="politician.profile_image">
      <p><b>{{ politician.primary_position }}</b></p>
      <p>{{ politician.brief }}</p>
      <h2>Promises by {{ politician.name }} </h2>
    </template>

    <template v-if="promises === 'loading'">
      <p>Loading promises...This will take 2-4 seconds.</p>
      <LoadingSpinner />
    </template>
    <template v-else>
    <el-card id="Politician_stats">
      <b>Promise Statistics:</b>
      <el-button v-for="stat in stats" :key="stat.value">
        <b>{{ stat.value }}</b> {{ stat.number }}
      </el-button>
    </el-card>
    <el-table
      :data="promises"
      border
      style="width: 100%">
    <el-table-column
      prop="title"
      label="Title">
      <template slot-scope="scope">
        <router-link :to="'/promises/' + scope.row.id">{{ scope.row.title }}</router-link>
      </template>
    </el-table-column>
  </el-table>
    </template>
  </main>
</template>

<script>
import LoadingSpinner from '@/components/shared/LoadingSpinner'
import { ContentLoader } from 'vue-content-loader'

export default {
  name: 'PoliticianMobile',
  components: { LoadingSpinner, ContentLoader },
  props: ['stats', 'politician', 'promises']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.image {
  min-width: 30%;
  display: inline-block;
  object-fit: cover; /* Do not scale the image */
  object-position: top; /* Center the image within the element */
  width: 60%
}

#politicians p b {
  display: inline-block
}

</style>
