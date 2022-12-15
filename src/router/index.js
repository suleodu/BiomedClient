// import { createRouter, createWebHistory } from 'vue-router'
import Vue from 'vue'
import Home from '../views/Home/HomeIndex.vue'
import ProductByCategory from '../views/Products/ProductByCategory.vue'
import SingleProduct from '../views/Products/SingleProduct.vue'
import MyCompany from '../views/Company/MyCompany.vue'
import MissionValues from '../views/Company/MissionValues.vue'
import CompanyHistory from '../views/Company/CompanyHistory.vue'
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
  },
  {
    path: '/product/:product_id',
    name: 'Product',
    component: SingleProduct
  },
  {
    path: '/company',
    name: 'Company',
    component: MyCompany
  },
  {
    path: '/company/mission-vision-value',
    name: 'Mission',
    component: MissionValues
  },
  {
    path: '/company/history',
    name: 'History',
    component: CompanyHistory
  },
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
