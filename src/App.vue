<template>
  <div>
    <el-container id="app" v-if="isLanding">
      <el-main>
        <landing />
      </el-main>
    </el-container>
    <el-container v-else id="app" direction="vertical">
      <div>
        <Navbar />
      </div>
      <alert-banner :text="alertText"/>
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
import Navbar from "@/components/Navbar/index.vue";
import Footer from "@/components/Footer.vue";
import Landing from "@/views/Landing.vue";
import AlertBanner from "./components/AlertBanner.vue";

export default {
  name: "App",
  components: {
    Landing,
    Navbar,
    Footer,
    AlertBanner,
  },
  data() {
    return {
      alertText: 'Promises data is not up to date. This is an archived deployment of OpenPromises.',
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
