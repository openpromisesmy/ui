import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Politicians from '@/components/Politicians'
import Promises from '@/components/Promises'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/help',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/politicians',
      name: 'Politicians',
      component: Politicians
    },
    {
      path: '/promises',
      name: 'Promises',
      component: Promises
    }
  ]
})
