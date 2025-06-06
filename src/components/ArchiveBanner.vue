<template>
  <div v-if="visible" class="archive-banner">
    <h2 class="banner-header">Archive Notice</h2>
    <section class="description">
      <p>OpenPromises was the first open source content management system for the tracking of promises. The resource was built with the aim of helping increase the accountability of elected representatives.</p>
      <p>To date, OpenPromises has been deployed in Malaysia and ran from 2017 till 2020.</p>
      <p>This page will be updated with more detailed information and instructions on the system.</p>
      <p>If you'd like to run OpenPromises for your own promise-tracking project, view the <a href="https://github.com/openpromisesmy">OpenPromises Github repositories</a></p>
    </section>
    <el-button class="close-btn" circle @click="close">
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
  margin: 0;
  padding: 40px;
  border-radius: 10px;
  background: rgb(237, 218, 218);
  position: relative;
}

.description {
  max-width: 900px;
  margin: 0 auto;
  font-size: 16px;
  line-height: 1.5;
}

.banner-header {
  text-align: center;
  color: darkred;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.close-btn {
  position: absolute;
  font-weight: bold;
  top: 10px;
  right: 10px;
}
</style>
