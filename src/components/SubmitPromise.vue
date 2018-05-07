<template>
  <main class="about">
    <h1 class="title">Submit A Promise</h1>
          <form v-on:submit.prevent="onSubmit">

        <div class="container">
          <el-row >

            <el-col :xs="24" :sm="12" >
              <label>Politician</label>
              <el-select v-model="promise.politician_id">
                <el-option
                    default-first-option
                    v-for="politician in politicians"
                    :value="politician.id"
                    :key="politician.id"
                    :label="politician.name"
                >
                </el-option>
              </el-select>
            </el-col>

            <el-col :xs="24" :sm="12" >
              <span class="input-label">Category</span>
              <el-input type="text" placeholder="enter text" v-model="promise.category"></el-input>
            </el-col>

            <el-col :xs="24" :sm="12" >
              <label>Title</label>
              <input type="text" placeholder="enter text" v-model="promise.title">
            </el-col>

            <el-col :xs="24" :sm="12" >
              <label>Status</label>
              <input type="text" placeholder="enter text" v-model="promise.status">
            </el-col>

            <el-col :xs="24" :sm="12" >
              <label>Cover image</label>
              <input type="text" placeholder="enter text" v-model="promise.cover_image">
            </el-col>

            <el-col :xs="24" :sm="12" >
              <label>Source URL</label>
              <input type="text" placeholder="enter text" v-model="promise.source_url">
            </el-col>

            <el-col :xs="24" :sm="12" >
              <label>Source Name</label>
              <input type="text" placeholder="enter text" v-model="promise.source_name">
            </el-col>

            <el-col :xs="24" :sm="12" >
              <label>Source Date</label>
              <input type="text" placeholder="enter text" v-model="promise.source_date">
            </el-col>

            <el-col :span="24" >
              <label>Quote</label>
              <input type="text" placeholder="enter text" v-model="promise.quote">
            </el-col>

            <el-col :xs="24" :sm="12" >
              <label>Notes</label>
              <input type="text" placeholder="enter text" v-model="promise.notes">
            </el-col>
          </el-row>
        </div>

        <button v-on:click="onSubmit"> Submit </button>
      </form>
  </main>
</template>

<script>
export default {
  name: 'SubmitPromise',
  data () {
    return {
        response: '',
        politicians: require('../assets/politicians.json'), // TODO: replace with actual API call
        promise: {
            politician_id: null, // select from database
            title: null, // string
            source_url: null, // string
            source_name: null, // string
            source_date: null, // date
            category: null, // string, later: enum from array
            cover_image: null, // string
            quote: null, // string
            notes: null, // string
            status: null, // enum from array
        }
      }
  },
  methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.about-points {
    max-width: 600px;
    margin: 0 auto
}
.input-label {
    display: inline-block;
    width: 20%
}
.el-input, .el-select {
    width: 70%
}
</style>
