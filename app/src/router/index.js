import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Politician from '@/views/Politician'
import Politicians from '@/views/Politicians'
// import States from '@/views/States'
// import ViewByState from '@/views/ViewByState'
import Promise from '@/views/Promise'
// import Promises from '@/views/Promises'
import List from '@/views/List'
import Lists from '@/views/Lists'
import Participate from '@/views/Participate/index'
import About from '@/views/About'
import SubmitPromise from '@/views/SubmitPromise'
import Quizzes from '@/views/Quizzes'
import Account from '@/views/Account'
import Contact from '@/views/Contact'
import FederalBudgetQuiz from '@/views/FederalBudgetQuiz'
import Donate from '@/views/Donate'
import Oops from '@/components/404'
import beforeEach from './beforeEach'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Keep power in check'
    }
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
    component: Politician
  },
  // {
  //   path: '/states/:state',
  //   name: 'ViewByState',
  //   component: ViewByState
  // },
  // {
  //   path: '/states',
  //   name: 'States',
  //   component: States
  // },
  {
    path: '/promises/:id',
    name: 'Promise',
    component: Promise
  },
  // {
  //   path: '/promises',
  //   name: 'Promises',
  //   component: Promises,
  //   meta: {
  //     title: 'Promises'
  //   }
  // },
  {
    path: '/lists/:id',
    name: 'List',
    component: List
  },
  {
    path: '/lists',
    name: 'Lists',
    component: Lists,
    meta: {
      title: 'Lists'
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
  },
  {
    path: '/budget-2020/quiz',
    name: 'FederalBudgetQuiz',
    component: FederalBudgetQuiz,
    meta: {
      title: 'FederalBudgetQuiz'
    }
  },
  {
    path: '/quizzes/:id',
    name: 'Quizzes',
    component: Quizzes,
    meta: {
      title: 'Quizzes'
    }
  },
  {
    path: '/keep-us-running',
    name: 'Donate',
    component: Donate,
    meta: {
      title: 'Keep Us Running'
    }
  },
  {
    path: '/404',
    name: '404',
    component: Oops,
    meta: {
      title: '404'
    }
  }
]

const router = new Router({
  mode: 'history',
  routes
})

router.beforeEach(beforeEach)

export default router
