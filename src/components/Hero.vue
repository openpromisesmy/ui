<template>
  <div class="hero-wrapper">
    <div>
          <img id="logo" src="@/assets/logo.jpg">
    </div>
    <div class="hero-copy">
      <h1 id="tagline">{{ tagline }}</h1>
      <!-- <div class="description-text"> -->
            <p>We elect our representatives into power to serve us.</p>
            <p>Promises are made in our interests.</p>
            <p>It's time we track those promises.</p>
            <div class="btn-containers">
              <a target="_blank" href="https://github.com/openpromisesmy">
                <el-button type="danger">View Github repositories</el-button>
              </a>
            </div>

                  <!-- </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
  data() {
    return {
      tagline: "Track Promises by Your Representatives"
    }
  }
}
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
  font-size: 24px;
}

.hero-copy {
  text-align: left;
}

.hero-wrapper {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
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
.btn-containers > * {
  margin-right: 10px
}
</style>
