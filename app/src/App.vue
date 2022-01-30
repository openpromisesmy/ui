<template>
  <div>
    <el-container v-if="isLanding">
      <el-main>
        <landing />
      </el-main>
    </el-container>
    <el-container v-else id="app" direction="vertical">
      <div>
        <Navbar />
      </div>
      <!-- <alert-banner :text="alertText"/> -->
      <el-main>
        <router-view />
      </el-main>
      <div>
        <Footer class="footer-container" />
      </div>
    </el-container>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar/index";
import Footer from "@/components/Footer";
import Landing from "@/views/Landing";

export default {
  name: "App",
  components: {
    Landing,
    Navbar,
    Footer,
  },
  data() {
    return {
      // alertText: 'Promises data is currently not up to date. Due to the events since early 2019, promise-tracking is of lower value. We are currently working on other avenues for increasing accountability in Malaysia. Refer to our Facebook page for update. ',
      footer: [
        { text: "Home", url: "/" },
        { text: "Promises", url: "/promises" },
        { text: "Politicians", url: "/politicians" },
      ],
    };
  },
  computed: {
    isArchive() {
      const { hostname } = window.location;
      let isLanding = hostname.split(".")[0] == "archive";
      return isLanding;
    },
    isLanding() {
      return !this.isArchive;
    },
  },
};
</script>

<style>
/* @import '../node_modules/reset-css/reset.css'; */
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: calc(97.5vh);
}

.el-main {
  padding: 0;
}

.title {
  font-size: 36px;
}
</style>
