// import { createRouter, createWebHistory } from 'vue-router'
import Vue from 'vue'
import Home from '../views/Home/HomeIndex.vue'
import ProductByCategory from '../views/Products/ProductByCategory.vue'
import SingleProduct from '../views/Products/SingleProduct.vue'
import ProductCart from '../views/Products/ProductCart.vue'
import MyCompany from '../views/Company/MyCompany.vue'
import MissionValues from '../views/Company/MissionValues.vue'
import CompanyHistory from '../views/Company/CompanyHistory.vue'
import TheTeam from '../views/Company/TheTeam.vue'
import ContactUs from '../views/ContactUs.vue'
import Login from '../views/Auth/Login.vue'
import RegisterUser from '../views/Auth/RegisterUser.vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home-index',
    component: Home
  },
  {
    path: '/auth/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/auth/register',
    name: 'Register',
    component: RegisterUser
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
    path: '/cart',
    name: 'Cart',
    component: ProductCart
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
  {
    path: '/company/meet-the-team',
    name: 'Team',
    component: TheTeam
  },
  {
    path: '/contact-us',
    name: 'Contact',
    component: ContactUs
  },
]
const router = new VueRouter({
  mode: "history",
  routes
})
router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  console.log(from+' '+to);
  if (to.name) {
    // Start the route progress bar.
    NProgress.start()
  }
  next()
})

router.afterEach((to, from) => {
  console.log(from+' '+to);

  // Complete the animation of the route progress bar.
  NProgress.done()
})

export default router
