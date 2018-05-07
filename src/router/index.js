import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Politicians from '@/components/Politicians'
import Promises from '@/components/Promises'
import About from '@/components/About'
import SubmitPromise from '@/components/SubmitPromise'

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
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/submit',
      name: 'SubmitPromise',
      component: SubmitPromise
    }
  ]
})
