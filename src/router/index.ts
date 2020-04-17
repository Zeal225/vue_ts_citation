import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/auteurs',
    name: 'auteur',
    component: () => import('../views/AllAuthor.vue')
  },
  {
    path: '/themes',
    name: 'theme',
    component: () => import('../views/AllTheme.vue')
  },
  {
    path: '/membre/:user/theme',
    name: 'member',
    component: () => import('../views/MemberPageTheme.vue')
  },
  {
    path: '/membre/:user/auteur',
    name: 'mes-auteur',
    component: () => import('../views/MemberPageAuthor.vue')
  },
  {
    path: '/membre/:user/citation',
    name: 'mes-citation',
    component: () => import('../views/MemberPageCitation.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
