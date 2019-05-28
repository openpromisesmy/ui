<template>
  <el-row class="content">
    <el-col :md="24" id="description">
      <el-row>
        <el-col :md="6">
          <img id="logo" src="@/assets/logo.jpg">
        </el-col>
        <el-col :md="18">
          <h1 id="tagline">{{ tagline }}</h1>
          <p class="description-text">
            OpenPromises is civilian-led not for profit project that is based on recording and tracking promises made by politicians.
            <br>We believe that technology can have a great impact on governance and democracy.
            <br>Tech can change the world, and we aim to be a part of that.
            <br>Contact us on Facebook if you want to bring OpenPromises to your country.
          </p>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "Hero",
  data() {
    return {
      tagline: "Track Promises by Your Representatives"
    };
  }
};
</script>

<style scoped>
#logo {
  max-width: 200px;
  display: block;
  margin: 0 auto;
  border-radius: 20px;
  box-shadow: 3px 3px 7px 1px #999999;
}

#tagline {
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

#description .description-text{
  line-height: 20px;
  margin: 20px
}
</style>
