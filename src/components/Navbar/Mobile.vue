<template>
  <el-header id="navbar" class="mobile-nav">
    <div class="mobile-bar">
      <router-link to="/" class="brand-link">
        <img id="navbar-logo" src="@/assets/openpromises.png" alt="OpenPromises" />
      </router-link>
      <button
        class="menu-toggle"
        type="button"
        :aria-expanded="menuOpen ? 'true' : 'false'"
        aria-controls="mobile-menu"
        @click="menuOpen = !menuOpen"
      >
        {{ menuOpen ? "Close" : "Menu" }}
      </button>
    </div>

    <transition name="menu-fade">
      <nav v-if="menuOpen" id="mobile-menu" class="mobile-menu">
        <template v-for="(item, index) in navigation" :key="index">
          <router-link
            v-if="item.url"
            class="mobile-link"
            :to="item.url"
            @click="menuOpen = false"
          >
            {{ item.text }}
          </router-link>
          <a
            v-else-if="item.externalUrl"
            class="mobile-link"
            :href="item.externalUrl"
            target="_blank"
            rel="noopener noreferrer"
            @click="menuOpen = false"
          >
            {{ item.text }}
          </a>
        </template>

        <router-link class="mobile-link secondary-link" to="/account" @click="menuOpen = false">
          {{ accountLabel }}
        </router-link>
        <router-link class="mobile-link submit-link" to="/submit" @click="menuOpen = false">
          Submit A Promise
        </router-link>
      </nav>
    </transition>
  </el-header>
</template>

<script>
export default {
  name: "NavbarMobile",
  props: ["navigation", "authenticated", "email"],
  computed: {
    accountLabel() {
      return this.$store.state.user.authenticated ? "Account" : "Login";
    }
  },
  data() {
    return {
      menuOpen: false
    };
  },
  watch: {
    $route() {
      this.menuOpen = false;
    }
  }
};
</script>

<style scoped>
.mobile-nav {
  width: calc(100% - 20px);
  margin: 12px auto 0;
  height: auto;
  border-radius: 18px;
  border: 1px solid rgba(24, 57, 54, 0.14);
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
  box-shadow: 0 8px 20px rgba(16, 40, 36, 0.12);
  padding: 10px;
}

.mobile-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.brand-link {
  display: inline-flex;
  align-items: center;
}

.menu-toggle {
  border: 1px solid rgba(15, 118, 110, 0.35);
  background: rgba(15, 118, 110, 0.08);
  color: #0c5751;
  border-radius: 999px;
  font-family: inherit;
  font-weight: 800;
  font-size: 0.85rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  padding: 8px 14px;
}

.mobile-menu {
  margin-top: 12px;
  display: grid;
  gap: 8px;
}

a {
  text-decoration: none;
  font-size: 1rem;
}

#navbar-logo {
  height: 34px;
}

.mobile-link {
  display: block;
  padding: 10px 12px;
  border-radius: 10px;
  font-weight: 700;
  color: #193e42;
  background: rgba(15, 118, 110, 0.04);
}

.mobile-link.router-link-active {
  background: #0f5d58;
  color: #ffffff;
}

.secondary-link {
  border: 1px solid rgba(15, 118, 110, 0.2);
  background: rgba(15, 118, 110, 0.08);
}

.submit-link {
  background: #be123c;
  color: #ffffff;
}

.menu-fade-enter-active,
.menu-fade-leave-active {
  transition: opacity 0.18s ease, transform 0.18s ease;
}

.menu-fade-enter-from,
.menu-fade-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
