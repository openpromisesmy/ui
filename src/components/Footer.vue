<template>
  <footer id="footer">
    <div class="footer-grid">
      <section>
        <h3>OpenPromises</h3>
        <p class="footer-copy">
          Public accountability tracker for representative promises and outcomes.
        </p>
      </section>
      <section class="footer-links">
        <router-link v-for="(item, index) in footer" :key="index" :to="item.url" class="footer-link">
          {{ item.text }}
        </router-link>
        <a class="footer-link" href="https://github.com/openpromisesmy" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a class="footer-link" href="https://facebook.com/openpromises.malaysia" target="_blank" rel="noopener noreferrer">
          Facebook
        </a>
      </section>
    </div>
    <div class="copyright">
      © {{ yearRange }} OpenPromises Malaysia
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      footer: [
        { text: 'Home', url: '/' },
        { text: 'Politicians', url: '/politicians' },
        { text: 'Lists', url: '/lists' },
        { text: 'About', url: '/about' }
      ]
    }
  },
  computed: {
    yearRange () {
      const start = 2020
      const current = new Date().getFullYear()
      return start === current ? `${start}` : `${start} - ${current}`
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>
#footer {
  margin-top: 22px;
  border-radius: 24px 24px 0 0;
  border: 1px solid rgba(25, 56, 47, 0.14);
  background: linear-gradient(135deg, #11373e 0%, #1a2f52 55%, #2b2f58 100%);
  padding: 26px 24px 14px;
  color: #f3f8f7;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 18px;
  align-items: flex-start;
}

.footer-grid h3 {
  margin: 0 0 8px;
  color: #ffffff;
}

.footer-copy {
  margin: 0;
  color: rgba(237, 250, 248, 0.82);
}

.footer-links {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: flex-end;
}

.footer-link {
  color: #e2f2ef;
  text-decoration: none;
  font-weight: 700;
  border: 1px solid rgba(235, 249, 247, 0.24);
  border-radius: 999px;
  padding: 8px 12px;
  background: rgba(243, 252, 251, 0.08);
  transition: all 0.2s ease;
}

.footer-link:hover {
  background: rgba(243, 252, 251, 0.19);
  color: #ffffff;
}

.copyright {
  margin-top: 18px;
  text-align: center;
  color: rgba(230, 242, 240, 0.78);
  font-size: 0.9rem;
  border-top: 1px solid rgba(242, 252, 250, 0.16);
  padding-top: 12px;
}

@media only screen and (max-width: 760px) {
  #footer {
    border-radius: 18px 18px 0 0;
    padding: 20px 16px 14px;
  }

  .footer-grid {
    grid-template-columns: 1fr;
  }

  .footer-links {
    justify-content: flex-start;
  }
}
</style>
