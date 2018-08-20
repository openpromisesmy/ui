<template>
  <main id="politicians">
    <template v-if="politician === 'loading'">
      <p>Loading politician...</p>
    </template>
    <template v-else>
      <el-row>
        <el-col :md="16">
          <politician-details :politician="politician"/>
        </el-col>
        <el-col :md="8">
          <promise-stats v-if="promises != 'loading'" v-bind="{ stats }"/>
          <ContentLoader v-else width="300" height="280" >
            <rect x="0" y="0" rx="3" ry="3" width="300" height="280" />
          </ContentLoader>
        </el-col>
      </el-row>
    </template>

    <template v-if="promises === 'loading'">
      <p>Loading promises...This will take 2-4 seconds.</p>
      <LoadingSpinner />
    </template>
    <template v-else>
    <h2>Promises by {{ politician.name }}</h2>
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
    <el-table-column
      prop="source_date"
      label="Date"
      width="150">
    </el-table-column>
    <el-table-column
      prop="category"
      label="Category"
      width="180">
    </el-table-column>
    <el-table-column
      prop="status"
      label="Status"
      width="125">
    </el-table-column>
  </el-table>
    </template>
  </main>
</template>

<script>
import PoliticianDetails from '@/components/Politician/PoliticianDetails'
import LoadingSpinner from '@/components/shared/LoadingSpinner'
import PromiseStats from './PromiseStats'
import { ContentLoader } from 'vue-content-loader'

export default {
  name: 'PoliticianDesktop',
  components: { LoadingSpinner, PromiseStats, PoliticianDetails, ContentLoader },
  props: ['stats', 'politician', 'promises']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#politicians p b {
  display: inline-block
}

</style>
