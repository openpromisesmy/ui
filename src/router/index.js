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
import beforeEach from './beforeEach'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/politicians',
    name: 'Politicians',
    component: Politicians,
    meta: {
      title: 'Politicians'
    }
  },
  {
    path: '/politician/:id',
    name: 'Politician',
    component: Politician,
    meta: {
      title: 'View Politician'
    }
  },
  {
    path: '/promises/:id',
    name: 'Promise',
    component: Promise,
    meta: {
      title: 'View Promise'
    }
  },
  {
    path: '/promises',
    name: 'Promises',
    component: Promises,
    meta: {
      title: 'Promises'
    }
  },
  {
    path: '/participate',
    name: 'Participate',
    component: Participate,
    meta: {
      title: 'Participate'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: 'About'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: {
      title: 'Contact'
    }
  },
  {
    path: '/submit',
    name: 'SubmitPromise',
    component: SubmitPromise,
    meta: {
      title: 'Submit Promise'
    }
  },
  {
    path: '/account',
    name: 'Account',
    component: Account,
    meta: {
      title: 'Account'
    }
  }
]

const router = new Router({
  mode: 'history',
  routes
})

router.beforeEach(beforeEach)

export default router
