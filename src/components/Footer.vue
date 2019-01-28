<template>
    <footer id="footer">
        <el-row>
            <el-col :xs="24" :lg="5" v-for="(item, index) in footer"
                    :key="index">
                <div>
                <router-link :to="item.url"
                              class="footer-link">
                  {{ item.text }}
                </router-link>
                </div>
            </el-col>
            <el-col :xs="24" :lg="5">
                <a class="footer-link" href="https://facebook.com/openpromises.malaysia">
                  Facebook Page
                </a>
            </el-col>
            <el-col :xs="24" :lg="5">
                <a class="footer-link" href="https://www.facebook.com/groups/1809117962724326/">
                  Community Group
                </a>
            </el-col>
        </el-row>
        <el-row class="copyright">
          <el-col >
            © 2019 OpenPromises
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
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>
#footer {
  margin-top: 20px;
  background-color: darkslategray;
  padding: 10px 5px;
  color: white
}
.footer-link {
  color: white;
  text-decoration: none;
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
