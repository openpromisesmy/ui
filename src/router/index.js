import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Politician from '@/views/Politician.vue'
import Politicians from '@/views/Politicians.vue'
// import States from '@/views/States'
// import ViewByState from '@/views/ViewByState'
import Promise from '@/views/Promise.vue'
// import Promises from '@/views/Promises'
import List from '@/views/List.vue'
import Lists from '@/views/Lists.vue'
// import Participate from '@/views/Participate/index'
import About from '@/views/About.vue'
import SubmitPromise from '@/views/SubmitPromise.vue'
import Quizzes from '@/views/Quizzes.vue'
import Account from '@/views/Account.vue'
import Contact from '@/views/Contact.vue'
import FederalBudgetQuiz from '@/views/FederalBudgetQuiz.vue'
import Oops from '@/components/404.vue'
import beforeEach from './beforeEach'
// import Landing from '@/views/Landing'

const routes = [
  // {
  //   path: '/',
  //   name: 'Landing',
  //   component: Landing,
  //   meta: {
  //     title: 'Keep power in check'
  //   }
  // },
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
  // {
  //   path: '/participate',
  //   name: 'Participate',
  //   component: Participate,
  //   meta: {
  //     title: 'Participate'
  //   }
  // },
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
    path: '/404',
    name: '404',
    component: Oops,
    meta: {
      title: '404'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(beforeEach)

export default router
