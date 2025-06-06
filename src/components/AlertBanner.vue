<template>
  <el-alert
    type="warning"
    :title="text"
    :closable="closable"
    @close="$emit('close')"
  />
</template>

<script>
export default {
  name: 'AlertBanner',
  props: {
    text: {
      type: String,
      required: true,
      default: ''
    },
    closable: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style>

</style>