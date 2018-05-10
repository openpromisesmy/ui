<template>
  <main id="promises">
    <h1>Promises</h1>
    <p v-if="promises.length == 0">Loading promises...</p>
    <el-table
    v-else
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
      prop="politician_name"
      label="Politician"
      width="150">
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
import { getPromises, getPoliticians } from '@/api'
import moment from 'moment'
export default {
  name: 'Promises',
  data () {
    return {
      politicians: [],
      promises: []
    }
  },
  methods: {
    parsePromises: (promises, politicians) => promises.map(promise => 
      ({
        ...promise,
        source_date: moment(promise.source_date).format("D MMMM YYYY"),
        politician_name: politicians.find(politician => politician.id === promise.politician_id).name
      })
    )
  },
  async created () {
    const promises = await getPromises()
    const politicians = await getPoliticians()
    this.politicians = politicians
    this.promises = this.parsePromises(promises, politicians)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  text-decoration: none;
}
.el-card {
  height: 400px;
}
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
  object-fit: cover; /* Do not scale the image */
  object-position: top; /* Center the image within the element */
  height: 300px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: '';
}

.clearfix:after {
  clear: both;
}
</style>
