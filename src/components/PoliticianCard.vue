<template>
  <el-card
    class="politician-card"
    shadow="hover"
    :body-style="{ padding: '0px', height: '100%' }"
  >
    <div class="card-body">
      <div
        class="thumbnail"
        :style="{
          background: 'url(' + o.profile_image + ') no-repeat center center',
          'background-size': 'cover'
        }"
      ></div>
      <div class="text">
        <p>
          <b>{{ o.name }}</b>
        </p>
        <p>{{ o.primary_position }}</p>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  name: "PoliticianCard",
  props: {
    o: { type: Object }
  }
};
</script>

<style scoped>
.el-card {
  height: 120px;
  margin: 5px;
}

.el-card:hover {
  background-color: rgba(240, 248, 255, 0.5);
}

.card-body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.card-body > .thumbnail,
.card-body > .text {
  display: inline-block;
}

.card-body > .thumbnail {
  width: 15vh;
  height: 15vh;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border: 1px solid lightblue;
  margin-right: 10px;
}

.card-body > .text {
  font-size: 0.9rem;
  width: 60%;
  vertical-align: top;
}

.card-body p {
  margin: 0;
}

@media only screen and (max-width: 500px) {
  .card-body > .thumbnail {
    width: 13vh;
    height: 13vh;
  }
}
</style>
