<template>
  <el-button
    id="back-to-top"
    type="primary"
    circle
    v-show="visible"
    @click="scrollToTop"
  >
    <i class="el-icon-arrow-up"></i>
  </el-button>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'BackToTop',
  setup() {
    const visible = ref(false)
    const onScroll = () => {
      visible.value = window.scrollY > 300
    }
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    onMounted(() => window.addEventListener('scroll', onScroll))
    onUnmounted(() => window.removeEventListener('scroll', onScroll))
    return { visible, scrollToTop }
  }
}
</script>

<style scoped>
#back-to-top {
  position: fixed;
  right: 40px;
  bottom: 40px;
  z-index: 1000;
}
</style>
