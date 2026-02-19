<template>
  <div v-if="visible" class="archive-banner">
    <h2 class="banner-header">Archive Notice</h2>
    <section class="description">
      <p>OpenPromises was the first open source CMS built to track promises by elected representatives.</p>
      <p>The Malaysia deployment ran from 2017 to 2020 and remains publicly accessible for reference.</p>
      <p>
        If you want to run OpenPromises for another country, explore the
        <a href="https://github.com/openpromisesmy" target="_blank" rel="noopener noreferrer">
          OpenPromises GitHub repositories
        </a>.
      </p>
    </section>
    <el-button class="close-btn" circle @click="close" aria-label="Close archive banner">
      <span class="sr-only">X</span>
    </el-button>
  </div>
</template>

<script>
export default {
  name: 'ArchiveBanner',
  data() {
    return {
      visible: true
    }
  },
  methods: {
    close() {
      this.visible = false
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
.archive-banner {
  margin: 0 auto;
  padding: 24px 52px 22px 22px;
  border-radius: 18px;
  background:
    linear-gradient(125deg, rgba(190, 18, 60, 0.11), rgba(15, 118, 110, 0.1)),
    #fffdf9;
  border: 1px solid rgba(177, 96, 114, 0.22);
  box-shadow: 0 12px 26px rgba(39, 52, 56, 0.08);
  position: relative;
}

.description {
  max-width: 980px;
  margin: 0;
  font-size: 0.97rem;
  line-height: 1.62;
}

.description p {
  margin: 0.35rem 0;
}

.banner-header {
  text-align: left;
  color: #7d1230;
  font-size: 1.2rem;
  font-weight: 800;
  margin: 0 0 0.4rem;
}

.close-btn {
  position: absolute;
  font-weight: bold;
  top: 10px;
  right: 10px;
  border-color: rgba(125, 18, 48, 0.26);
  color: #7d1230;
}

@media (max-width: 768px) {
  .archive-banner {
    padding-right: 50px;
    border-radius: 14px;
  }
}
</style>
