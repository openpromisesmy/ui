import VueRouter from 'vue-router'
import Politicians from "../views/Politicians"
import SinglePolitician from "../views/SinglePolitician"

const routes = [
  {
    path: '/politician/:id',
    name: 'Politician',
    component: SinglePolitician
  },
  { path: '/politicians', component: Politicians },
  { path: '/', component: Politicians }, // TODO: put Home here
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
