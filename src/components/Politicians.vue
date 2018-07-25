<template>
  <main id="politicians">
    <template v-if="politicians.length === 0">
      <p>Loading politicians...This will take 1-2 seconds.</p>
      <LoadingSpinner />
    </template>
    <el-input placeholder="Search for a politician" v-model="input" class="search" />
    <el-row>
      <el-col :xs="12" :sm="4" v-for="o in politicians" :key="o.id">
        <el-card :body-style="{ padding: '0px' }">
            <router-link :to="/politician/ + o.id">
          <img :src="o.profile_image" class="image">
          <div style="padding: 14px;">
            <span>{{ o.name  }}</span>
            <div class="bottom clearfix">
              <time class="time">{{ o.primary_position }}</time>
            </div>
          </div>
            </router-link>
        </el-card>
      </el-col>
    </el-row>
  </main>
</template>

<script>
import { getPoliticians } from '@/api'
import { loadCache, updateCache } from '@/utils'
import LoadingSpinner from '@/components/shared/LoadingSpinner'

export default {
  name: 'Politicians',
  data () {
    return {
      politicians: []
    }
  },
  components: { LoadingSpinner },
  async created () {
    try {
      this.politicians = await loadCache(this, 'politicians', getPoliticians())
    } catch (e) {
      console.log(e)
    }
  },
  async mounted () {
    try {
      this.politicians = await updateCache(this, 'politicians', getPoliticians())
    } catch (e) {
      console.log(e)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  text-decoration: none;
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

.el-card {
  height: 280px;
}

.image {
  width: 100%;
  display: block;
  object-fit: cover; /* Do not scale the image */
  object-position: top; /* Center the image within the element */
  height: 180px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}

.search {
  max-width: 400px;
  margin: 10px
}

@media only screen and (max-width: 600px) {
  .image {
    height: 150px;
  }
  .el-card {
    height: 280px;
  }
}
</style>
