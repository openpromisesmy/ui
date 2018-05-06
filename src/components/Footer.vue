<template>
    <el-footer id="footer">
        <el-row>
            <el-col :span="8" v-for="(item, index) in footer" :key="index">
                <div class="grid-content bg-purple">
                <a :href="item.url">{{ item.text }}</a>
                </div>
            </el-col>
        </el-row>
    </el-footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      footer: [
        { text: 'Home', url: '/' },
        { text: 'Promises', url: '/promises' },
        { text: 'Politicians', url: '/politicians' }
      ]
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style>
#footer {
  margin-top: 20px;
}
</style>
