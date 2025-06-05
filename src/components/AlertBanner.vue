<template>
  <el-alert type="warning" :title="text" />
</template>

<script>
export default {
  name: 'AlertBanner',
  props: {
    text: {
      type: String,
      required: true,
      default: ''
    }
  }
}
</script>

<style>

</style>