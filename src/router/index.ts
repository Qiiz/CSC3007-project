import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Milestone1 from '../views/Milestone1.vue'
import Milestone2 from '../views/Milestone2.vue'
import Milestone2Doc from '../views/Milestone2Doc.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: Milestone1
  },
  {
    path: '/milestone2',
    name: 'Milestone 2',
    component: Milestone2
  },
  {
    path: '/milestone2_doc',
    name: 'Milestone 2 Doc',
    component: Milestone2Doc
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
