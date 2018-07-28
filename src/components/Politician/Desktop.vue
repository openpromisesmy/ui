<template>
  <main id="politicians">
    <template v-if="politician === 'loading'">
      <p>Loading politician...</p>
    </template>
    <template v-else>
      <h1>{{ politician.name }}</h1>
      <img class="image" :src="politician.profile_image">
      <p><b>{{ politician.primary_position }}</b></p>
      <p>{{ politician.brief }}</p>
    </template>

    <template v-if="promises === 'loading'">
      <p>Loading promises...This will take 2-4 seconds.</p>
      <LoadingSpinner />
    </template>
    <template v-else>

    <promise-stats v-bind="{ stats }"/>

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
import LoadingSpinner from '@/components/shared/LoadingSpinner'
import PromiseStats from './PromiseStats'

export default {
  name: 'PoliticianDesktop',
  components: { LoadingSpinner, PromiseStats },
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
  height: 300px;
}

#politicians p b {
  display: inline-block
}

</style>
