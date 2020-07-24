<template>
  <el-card
    class="politician-card"
    shadow="hover"
    :body-style="{ padding: '0px', height: '100%' }"
  >
    <div class="card-body">
      <div
        class="thumbnail"
        @error="imageLoadError"
        :style="{
          background: 'url(' + imageToShow + ') no-repeat center center',
          'background-size': 'cover'
        }"
      ></div>
      <img class="shadow-img" :src="o.profile_image" @error="imageLoadError" />
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
  data: () => ({
    imageAvailable: true,
    iconPath: require("../../assets/user-icon.png")
  }),
  props: {
    o: { type: Object }
  },
  computed: {
    imageToShow: function() {
      if (this.imageAvailable) {
        return this.o.profile_image;
      } else {
        return this.iconPath;
      }
    }
  },
  methods: {
    imageLoadError() {
      console.log("Image failed to load" + this.o.profile_image);
      this.imageAvailable = false;
    }
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

.shadow-img {
  display: none;
}

@media only screen and (max-width: 500px) {
  .card-body > .thumbnail {
    width: 13vh;
    height: 13vh;
  }
}
</style>
