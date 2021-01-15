<template>
  <div>
   <el-col v-for="state in states" :key="state.name" :lg="4" :sm="6" :xs="24" class="state">
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
  </div>
</template>

<script>
export default {
  name: 'StatesDisplay',
  props: ['states']
}
</script>

<style scoped>
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
