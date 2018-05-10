<template>
  <main id="politicians">
    <h1>{{ politician.name }}</h1>
    <img class="image" :src="politician.profile_image">
    <p><b>{{ politician.primary_position }}</b></p>
    <h2>Promises by {{ politician.name }} ({{ promises.length }})</h2>
    <p>{{ politician.brief }}</p>
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
  </el-table>
  </main>
</template>

<script>
import { getPolitician, getPoliticianPromises } from '@/api'
import moment from 'moment'

export default {
  name: 'Politician',
  data () {
    return {
      politician: {},
      promises: []
    }
  },
  methods: {
    parsePromises: (promises, politicians) => promises.map(promise =>
      ({
        ...promise,
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
