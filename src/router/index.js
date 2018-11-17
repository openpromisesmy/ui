import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Politician from '@/components/Politician/index'
import Politicians from '@/components/Politicians'
import Promise from '@/components/Promise/index'
import Promises from '@/components/Promises/index'
import Participate from '@/views/Participate/index'
import About from '@/components/About'
import SubmitPromise from '@/components/SubmitPromise'
import Account from '@/components/Account'
import Contact from '@/components/Contact'

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
