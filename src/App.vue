<template>
  <div>
    <el-container id="app" direction="vertical">
      <div>
        <Navbar />
      </div>
      <archive-banner
        v-if="showBanner"
        @close="showBanner = false"
      />
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
import Navbar from "@/components/Navbar/index.vue"
import Footer from "@/components/Footer.vue"
import ArchiveBanner from "./components/ArchiveBanner.vue"

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
    ArchiveBanner
  },
  data() {
    return {
      showBanner: true,
      footer: [
        { text: "Home", url: "/" },
        { text: "Promises", url: "/promises" },
        { text: "Politicians", url: "/politicians" },
      ],
    }
  }
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
