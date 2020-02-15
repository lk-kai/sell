import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'goods',
    component: () => import(/* webpackChunkName: "about" */ '../components/goods/goods.vue')
  },
  {
    path: '/goods',
    name: 'goods',
    component: () => import(/* webpackChunkName: "about" */ '../components/goods/goods.vue')
  },
  {
    path: '/ratings',
    name: 'ratings',
    component: () => import(/* webpackChunkName: "about" */ '../components/ratings/ratings.vue')
  },
  {
    path: '/seller',
    name: 'seller',
    component: () => import(/* webpackChunkName: "about" */ '../components/seller/seller.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'is-active',
  base: process.env.BASE_URL,
  routes
})

export default router
