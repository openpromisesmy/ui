import VueRouter from 'vue-router'
import Politicians from "../views/Politicians"

const routes = [
  { path: '/', component: Politicians },
  { path: '/politicians', component: Politicians }
]

const router = new VueRouter({
  routes
})

export default router
