<template>
  <main id="politicians">
    <h1>Politicians</h1>
    <p v-if="politicians.length == 0">Loading politicians...</p>
    <el-row>
      <el-col :span="6" v-for="o in politicians" :key="o.id">
        <el-card :body-style="{ padding: '0px' }">
            <a :href="/politician/ + o.id">
          <img :src="o.profile_image" class="image">
          <div style="padding: 14px;">
            <span>{{ o.name  }}</span>
            <div class="bottom clearfix">
              <time class="time">{{ o.primary_position }}</time>
            </div>
          </div>
          </a>
        </el-card>
      </el-col>
    </el-row>
  </main>
</template>

<script>
import { getPoliticians } from '@/api'
export default {
  name: 'Politicians',
  data () {
    return {
      politicians: []
    }
  },
  async created () {
    this.politicians = await getPoliticians()
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
