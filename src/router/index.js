import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Politician from '@/views/Politician'
import Politicians from '@/views/Politicians'
import Promise from '@/views/Promise'
import Promises from '@/views/Promises'
import Participate from '@/views/Participate/index'
import About from '@/views/About'
import SubmitPromise from '@/views/SubmitPromise'
import Account from '@/views/Account'
import Contact from '@/views/Contact'

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
      path: '/politicians',
      name: 'Politicians',
      component: Politicians
    },
    {
      path: '/politician/:id',
      name: 'Politician',
      component: Politician
    },
    {
      path: '/promises/:id',
      name: 'Promise',
      component: Promise
    },
    {
      path: '/promises',
      name: 'Promises',
      component: Promises
    },
    {
      path: '/participate',
      name: 'Participate',
      component: Participate
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/submit',
      name: 'SubmitPromise',
      component: SubmitPromise
    },
    {
      path: '/account',
      name: 'Account',
      component: Account
    }
  ]
})
