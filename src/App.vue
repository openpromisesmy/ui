<template>
  <div>
    <el-container id="app" direction="vertical">
      <div>
        <Navbar :dark-mode="darkMode" @toggle-dark-mode="toggleDarkMode" />
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
      <BackToTop />
    </el-container>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar/index.vue"
import Footer from "@/components/Footer.vue"
import ArchiveBanner from "./components/ArchiveBanner.vue"
import BackToTop from "@/components/BackToTop.vue"

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
    ArchiveBanner,
    BackToTop
  },
  data() {
    return {
      showBanner: true,
      darkMode: localStorage.getItem('darkMode') === 'true',
      footer: [
        { text: "Home", url: "/" },
        { text: "Promises", url: "/promises" },
        { text: "Politicians", url: "/politicians" },
      ],
    }
  },
  watch: {
    darkMode(val) {
      localStorage.setItem('darkMode', val)
      this.applyTheme()
    }
  },
  mounted() {
    this.applyTheme()
  },
  methods: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode
    },
    applyTheme() {
      if (this.darkMode) {
        document.body.classList.add('dark')
      } else {
        document.body.classList.remove('dark')
      }
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

body.dark {
  background-color: #121212;
  color: #e0e0e0;
}

body.dark #navbar,
body.dark #footer {
  background-color: #1e1e1e;
  color: #e0e0e0;
}
</style>
