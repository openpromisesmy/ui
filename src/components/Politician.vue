<template>
  <main id="politicians">
    <template v-if="Object.keys(politician) === 0">
      <p>Loading politician...</p>
    </template>
    <template v-else>
      <h1>{{ politician.name }}</h1>
      <img class="image" :src="politician.profile_image">
      <p><b>{{ politician.primary_position }}</b></p>
      <h2>Promises by {{ politician.name }} {{ Array.isArray(promises) ? `(${promises.length})` : '' }}</h2>
      <p>{{ politician.brief }}</p>
    </template>

    <template v-if="promises === 'loading'">
      <p>Loading promises...This will take 2-4 seconds.</p>
      <LoadingSpinner />
    </template>
    <template v-else>
    <el-button v-for="stat in stats" :key="stat.value">
      <b>{{ stat.value }}</b> {{ stat.number }}
    </el-button>
    <el-table
      :data="promises"
      border
      style="width: 100%">
    <el-table-column
      prop="title"
      label="Title"
      width="180">
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
      prop="quote"
      label="Quote"
      width="250">
    </el-table-column>
    <el-table-column
      prop="source_name"
      label="Source">
    </el-table-column>
    <el-table-column
      prop="source_url"
      label="Source Link"
      width="100">
      <template slot-scope="scope">
        <a :href="scope.row.source_url" target="_blank">View Source</a>
      </template>
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
import { getPolitician, getPoliticianPromises } from '@/api'
import moment from 'moment'
import LoadingSpinner from '@/components/shared/LoadingSpinner'

export default {
  name: 'Politician',
  components: { LoadingSpinner },
  data () {
    return {
      politician: {},
      promises: 'loading'
    }
  },
  computed: {
    stats: function () {
      const statusOptions = new Set(this.promises.map(promise => promise.status))
      const stats = []
      statusOptions.forEach(statusOption => {
        const hits = this.promises.filter(promise => promise.status === statusOption)
        stats.push({ value: statusOption || 'undefined', number: hits.length })
      })
      return stats
    }
  },
  methods: {
    parsePromises: (promises, politicians) => promises.map(promise =>
      ({
        ...promise,
        status: promise.status ? promises.status : 'Review Needed',
        source_date: moment(promise.source_date).format('D MMMM YYYY')
      })
    )
  },
  async created () {
    try {
      this.politician = await getPolitician(this.$route.params.id)
      const promises = await getPoliticianPromises(this.$route.params.id)
      this.promises = this.parsePromises(promises)
    } catch (e) {
      console.error(e)
    }
  }
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
