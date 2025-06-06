<template>
  <div v-if="visible" class="archive-banner">
    <h2 class="banner-header">Archive Notice</h2>
    <section id="hero">
      <hero />
    </section>
    <section class="description">
      <p>OpenPromises is the first open source content management system for the tracking of promises. The resource was built with the aim of helping increase the accountability of elected representatives.</p>
      <p>To date, OpenPromises has been deployed in Malaysia and ran from 2017 till 2020.</p>
      <p>This page will be updated with more detailed information and instructions on the system.</p>
      <p>If you'd like to run OpenPromises for your own promise-tracking project, get in touch with us via <a href="https://www.facebook.com/openpromises.malaysia">our facebook.</a></p>
    </section>
    <el-button class="close-btn" circle icon="el-icon-close" @click="close" />
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue'

export default {
  name: 'ArchiveBanner',
  components: { Hero },
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
  width: 100%;
  margin: 0;
  padding: 40px;
  border-radius: 10px;
  background: #d9edf7;
  position: relative;
}

.banner-header {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>
