<template>
  <el-container id="app" class="app-shell" direction="vertical">
    <Navbar />
    <archive-banner
      v-if="showBanner"
      class="shell-banner"
      @close="showBanner = false"
    />
    <el-main class="shell-main">
      <router-view />
    </el-main>
    <Footer class="shell-footer" />
  </el-container>
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
      showBanner: true
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Manrope:wght@400;500;700;800&display=swap");

:root {
  --bg: #f4f1ea;
  --bg-soft: #f9f6ef;
  --ink: #1f2a37;
  --ink-muted: #4a5565;
  --brand: #0f766e;
  --brand-deep: #0a4f4a;
  --accent: #be123c;
  --surface: #ffffff;
  --surface-muted: #fbfcfd;
  --line: #d9dfd4;
  --shadow: 0 18px 38px rgba(20, 46, 40, 0.1);
}

* {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
  min-height: 100%;
}

body {
  font-family: "Manrope", "Segoe UI", sans-serif;
  color: var(--ink);
  background:
    radial-gradient(circle at 12% -8%, rgba(15, 118, 110, 0.16), transparent 42%),
    radial-gradient(circle at 95% 10%, rgba(190, 18, 60, 0.12), transparent 30%),
    linear-gradient(180deg, var(--bg-soft) 0%, var(--bg) 100%);
}

#app {
  font-family: "Manrope", "Segoe UI", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--ink);
  min-height: 100vh;
}

.app-shell {
  position: relative;
}

.shell-banner,
.shell-main,
.shell-footer {
  width: min(1240px, calc(100% - 32px));
  margin-left: auto;
  margin-right: auto;
}

.shell-banner {
  margin-top: 20px;
}

.shell-main {
  padding: 28px 0 52px;
}

.el-main {
  padding: 0;
}

h1,
h2,
h3 {
  font-family: "Fraunces", "Georgia", serif;
  letter-spacing: -0.015em;
  color: #11263a;
}

p {
  color: var(--ink-muted);
  line-height: 1.68;
}

a {
  color: var(--brand-deep);
  transition: color 0.2s ease;
}

a:hover {
  color: var(--accent);
}

.title {
  font-size: clamp(2rem, 3vw, 2.55rem);
  margin: 0 0 0.75rem;
}

.page-shell {
  display: grid;
  gap: 22px;
}

.page-panel {
  border: 1px solid rgba(24, 60, 63, 0.14);
  background: rgba(255, 255, 255, 0.76);
  border-radius: 20px;
  box-shadow: 0 14px 30px rgba(17, 44, 46, 0.09);
  padding: clamp(16px, 2vw, 28px);
}

.view-header {
  max-width: 760px;
  text-align: center;
  margin: 0 auto;
}

.view-header h1,
.view-header h2 {
  margin: 0;
}

.view-header p {
  margin: 0.65rem 0 0;
}

.label-chip {
  display: inline-flex;
  align-items: center;
  border-radius: 999px;
  border: 1px solid rgba(15, 118, 110, 0.23);
  background: rgba(15, 118, 110, 0.09);
  color: #0f5d58;
  font-weight: 800;
  font-size: 0.8rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 7px 10px;
}

.el-card {
  border-radius: 16px;
  border: 1px solid rgba(24, 63, 66, 0.12);
  box-shadow: 0 10px 24px rgba(17, 44, 46, 0.08);
}

.el-input__wrapper,
.el-select .el-input__wrapper,
.el-textarea__inner,
.el-date-editor.el-input__wrapper {
  border-radius: 12px;
}

.el-button {
  border-radius: 10px;
}

@media (max-width: 768px) {
  .shell-banner,
  .shell-main,
  .shell-footer {
    width: calc(100% - 20px);
  }

  .shell-main {
    padding-top: 16px;
  }

  .page-panel {
    border-radius: 14px;
    padding: 14px;
  }
}
</style>
