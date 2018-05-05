<template>
  <main id="promises">
    <h1>Promises</h1>
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
      label="Date">
    </el-table-column>
    <el-table-column
      prop="category"
      label="Category"
      width="180">
    </el-table-column>
    <el-table-column
      prop="politician_id"
      label="Politician"
      width="180">
    </el-table-column>
    <el-table-column
      prop="quote"
      label="Quote"
      width="220">
    </el-table-column>
    <el-table-column
      prop="source_name"
      label="Source">
    </el-table-column>
        <el-table-column
      prop="source_url"
      label="Source Link"
      width="180">
    </el-table-column>
  </el-table>
  </main>
</template>

<script>
export default {
  name: 'Promises',
  data () {
    return {
      promises: require('../assets/promises.json')
  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
    text-decoration: none
}
 .el-card {
     height: 400px
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
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>
