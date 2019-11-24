<template>
  <el-row class="content">
    <el-col :md="24" id="description">
      <el-row>
          <img id="logo" src="@/assets/logo.jpg">
          <h1 id="tagline">{{ tagline }}</h1>
          <div class="description-text">
            <vue-typer
              :repeat="0"
              :pre-type-delay="1000"
              text="We elect our representatives into power to serve us."/><br/>
            <vue-typer
              :repeat="0"
              :pre-type-delay="6000"
              text="Promises are made in our interests." /><br/>
            <vue-typer
              :repeat="0"
              :pre-type-delay="10000"
              text="It's time we track those promises." />
          </div>
      </el-row>
    </el-col>
    <el-col :md="24" id="description">
      <a target="_blank" href="https://www.patreon.com/openpromisesmalaysia">
        <el-button type="danger">Keep Us running</el-button>
      </a>
    </el-col>
  </el-row>
</template>

<script>
import { VueTyper } from 'vue-typer'
export default {
  name: "Hero",
  components: { VueTyper },
  data() {
    return {
      tagline: "Track Promises by Your Representatives"
    };
  }
};
</script>

<style scoped>
@keyframes fadeIn { 
  from { opacity: 0.6; } 
}

#logo {
  animation: fadeIn 2s infinite alternate;
  max-width: 200px;
  display: block;
  margin: 0 auto;
  border-radius: 20px;
  box-shadow: 3px 3px 7px 1px #999999;
}

#tagline {
  text-align: center;
  margin: 20px;
  font-size: 24px;
}

.content{
  padding: 20px;
}

#description {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  text-align: left;
}

#description .description-text {
  text-align: center;
  line-height: 20px;
  margin: 20px
}
</style>
