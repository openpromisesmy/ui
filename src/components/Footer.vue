<template>
    <footer id="footer">
        <el-row>
            <!-- <el-col :xs="24" :lg="6" v-for="(item, index) in footer"
                    :key="index">
                <div>
                <router-link :to="item.url"
                              class="footer-link">
                  {{ item.text }}
                </router-link>
                </div>
            </el-col>
            <el-col :xs="24" :lg="6">
                <a class="footer-link" href="https://facebook.com/openpromises.malaysia">
                  Facebook Page
                </a>
            </el-col> -->
            <!-- <el-col :xs="24" :lg="5">
                <a class="footer-link" href="https://www.facebook.com/groups/1809117962724326/">
                  Community Group
                </a>
            </el-col> -->
        </el-row>
        <el-row class="copyright">
          <el-col>
            © {{ yearRange }} OpenPromises Malaysia
          </el-col>
        </el-row>
    </footer>
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
  margin-top: 40px;
  background-color: #2c3e50;
  padding: 10px 5px 20px;
  color: white
}
.footer-link {
  color: white;
  text-decoration: none;
  margin: 0 5px;
}
.el-row {
  display: flex;
  align-items: center;
  padding: 10px
}

.copyright {
  padding: 0;
  text-align: center;
}

@media only screen and (max-width: 600px) {
    .el-row {
      flex-direction: column;
      text-align: left;
      padding: 10px
    }
}
</style>
