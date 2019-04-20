<template>
  <main>
    <el-col v-for="state in filteredMalaysianStates" :key="state" :lg="4" :sm="6" :xs="24" class="state">
      <el-row>
        <el-card shadow="hover" :body-style="{'padding' : '0', 'position' : 'relative'}" :style="{'margin' : '5px' }">
          <div class="card-body">
            <router-link :to="`/states/${state.name}`">
              <img class="card-image" :src=state.image>
              <div class="card-info">
                <p>{{ state.name  }}</p>
              </div>
            </router-link>
          </div>
        </el-card>
      </el-row>
    </el-col>
  </main>
</template>

<script>
import malaysianStates from '@/utils/malaysianStates'

export default {
  name: 'Politicians',
  data () {
    return {
      malaysianStates
    }
  },
  computed: {
    filteredMalaysianStates() {
      return this.malaysianStates.filter(x => x.show)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
main {
  text-align: center;
  padding: 20px
}

div.el-card__body{
  padding: 0;
  margin-top: 20px;
}

.card-image{
  max-width: 100%;
}

.card-body a{
  text-decoration: none;
  color: black;
}

</style>
