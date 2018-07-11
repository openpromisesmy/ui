// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
import VueMq from 'vue-mq'

Vue.config.productionTip = false
Vue.use(ElementUI, { locale })
Vue.use(VueMq, {
  breakpoints: {
    sm: 450,
    md: 1250,
    lg: Infinity,
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
