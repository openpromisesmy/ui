<template>
  <main id="politicians">
    <template v-if="politicians.length === 0">
      <p>Loading politicians...This will take 1-2 seconds.</p>
      <LoadingSpinner />
    </template>
    <el-input clearable placeholder="Search for a politician" v-model="search" class="search" />

    <el-row class="politicians-row">
      <el-col :xs="12" :sm="6" :md="4" v-for="o in filteredPoliticians" :key="o.id">
        <el-card
          shadow="hover"
          :style="{'background' : 'url(' + o.profile_image + ') no-repeat center center', 'background-size' : 'cover', 'position' : 'relative','margin' : '3px' }"
        >
          <div class="card-body">
            <router-link :to="/politician/ + o.id">
              <div class="card-info">
                <span>{{ o.name }}</span>
                <div class="bottom clearfix">
                  <time class="time">{{ o.primary_position }}</time>
                </div>
              </div>
            </router-link>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <p v-if="filteredPoliticians.length === 0">Sorry, no politicians match your search.</p>
  </main>
</template>

<script>
import { getPoliticians } from '@/api'
import { loadCache, updateCache } from '@/utils'
import LoadingSpinner from '@/components//LoadingSpinner'

export default {
  name: 'Politicians',
  data () {
    return {
      politicians: [],
      search: ''
    }
  },
  components: { LoadingSpinner },
  computed: {
    filteredPoliticians () {
      return this.politicians.filter(politician => {
        return politician.name
          .toLowerCase()
          .includes(this.search.toLowerCase())
      })
    }
  },
  async created () {
    try {
      this.politicians = await loadCache(this, 'politicians', getPoliticians())
    } catch (e) {
      console.log(e)
    }
  },
  async mounted () {
    try {
      this.politicians = await updateCache(
        this,
        'politicians',
        getPoliticians()
      )
    } catch (e) {
      console.log(e)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
main {
  text-align: center;
}

a {
  text-decoration: none;
  color: white;
}
.time {
  font-size: 12px;
  color: #999;
}

.bottom {
  margin-top: 12px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.el-card {
  height: 200px;
}

.card-body {
  padding: 0px;
  position: absolute;
  left: 0;
  background: rgb(15, 15, 15, 0.8);
  top: 110px;
  width: 100%;
  height: 100%;
  -webkit-transition: all 0.4s ease-out;
  -moz-transition: all 0.4s ease-out;
  -ms-transition: all 0.4s ease-out;
  -o-transition: all 0.4s ease-out;
  transition: all 0.4s ease-out;
}

.el-card:hover .card-body {
  top: 0px;
}

.card-info {
  padding: 14px;
  height: 100%;
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
  width: 320px;
  max-width: 90vw;
  margin: 10px;
}

.politicians-row {
  width: 90vw;
  margin: 0 auto;
}

@media only screen and (max-width: 600px) {
  .image {
    height: 150px;
  }
  .el-card {
    height: 280px;
    min-width: unset;
  }
}
</style>
