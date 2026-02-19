<template>
  <el-header id="navbar" class="desktop-nav">
    <router-link to="/" class="brand-link">
      <img id="navbar-logo" src="@/assets/openpromises.png" alt="OpenPromises" />
    </router-link>
    <nav class="desktop-links" aria-label="Primary navigation">
      <template v-for="(item, index) in navigation" :key="index">
        <router-link
          v-if="item.url"
          class="nav-link"
          :to="item.url"
        >
          {{ item.text }}
        </router-link>
        <a
          v-else-if="item.externalUrl"
          class="nav-link"
          :href="item.externalUrl"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ item.text }}
        </a>
      </template>
    </nav>
    <div class="desktop-actions">
      <router-link to="/account">
        <el-button class="ghost-action">{{ accountLabel }}</el-button>
      </router-link>
      <router-link to="/submit">
        <el-button type="danger" class="cta-action">Submit A Promise</el-button>
      </router-link>
    </div>
  </el-header>
</template>

<script>
export default {
  name: "NavbarDesktop",
  props: ["navigation", "authenticated", "email"],
  computed: {
    accountLabel() {
      return this.$store.state.user.authenticated ? "Account" : "Login";
    }
  },
  data() {
    return {
      activeIndex: "0"
    };
  }
};
</script>

<style scoped>
.desktop-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  width: min(1240px, calc(100% - 32px));
  margin: 14px auto 0;
  border: 1px solid rgba(25, 55, 52, 0.12);
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.88);
  backdrop-filter: blur(10px);
  box-shadow: 0 10px 24px rgba(22, 49, 42, 0.12);
  padding: 8px 14px;
  height: auto;
}

a,
.brand-link {
  text-decoration: none;
  display: block;
}

#navbar-logo {
  height: 40px;
  width: auto;
}

.desktop-links {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-left: auto;
  margin-right: auto;
}

.nav-link {
  color: #224145;
  font-weight: 700;
  font-size: 0.95rem;
  letter-spacing: 0.01em;
  padding: 10px 14px;
  border-radius: 999px;
  transition: all 0.22s ease;
}

.nav-link:hover {
  color: #ffffff;
  background: #0f766e;
}

.router-link-active.nav-link {
  color: #ffffff;
  background: #0f5d58;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.18);
}

.desktop-actions {
  display: flex;
  align-items: center;
  gap: 10px;
}

.desktop-actions :deep(.el-button) {
  border-radius: 999px;
  height: 38px;
  padding: 0 16px;
  font-weight: 700;
}

.ghost-action {
  border-color: rgba(15, 118, 110, 0.28);
  color: #0f5d58;
  background: rgba(15, 118, 110, 0.06);
}

.ghost-action:hover {
  background: rgba(15, 118, 110, 0.12);
  color: #0e5550;
}
</style>
