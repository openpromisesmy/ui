import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui'
import VueRouter from 'vue-router'
import router from "./routes"

Vue.use(VueRouter)
Vue.use(Element)
Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
