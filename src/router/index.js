// import { createRouter, createWebHistory } from 'vue-router'
import Vue from 'vue'
import Home from '../views/Home/HomeIndex.vue'
import ProductByCategory from '../views/Products/ProductByCategory.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home-index',
    component: Home
  },
  {
    path: '/product-category/:category_id?/:sub_category_id?',
    name:'Products',
    component: ProductByCategory
  }
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
