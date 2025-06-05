// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import App from './App'
import router from './router'
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import store from './store'
// import VueMq from 'vue-mq'

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.use(store)
// app.use(VueMq, {                                  // ← register vue-mq after the other plugins
//   breakpoints: { sm: 450, md: 1250, lg: Infinity }  // ← adjust as needed
// })
app.mount('#app')
