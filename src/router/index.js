// import { createRouter, createWebHistory } from 'vue-router'
import Vue from 'vue'
import Home from '../views/Home/HomeIndex.vue'
import VueRouter from 'vue-router'
import Products from '../views/Products/ProductIndex.vue'
import ProductDetails from '../views/Products/ProductDetails.vue'
import Cart from '../views/Cart/CheckoutCart.vue'
import WishList from '../views/Cart/WishList.vue'
import PaymentPage from '../views/Payment/MakePayment.vue'
import ViewProducts from '../views/Products/ViewProducts.vue'
import Profile from '../views/Profile/MyAccount.vue'
import CheckoutDetails from '../views/Cart/CheckoutDetails.vue'
import InvoiceDetails from '../views/Cart/InvoiceDetails.vue'
import InvoiceHistory from '../views/Cart/InvoiceHistory.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home-index',
    component: Home
  },
  {
    path: '/products',
    name: 'home',
    component: Products
  },
  {
    path: '/product/:product_id',
    name: 'product-details',
    component: ProductDetails,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/pay-cart',
    name: 'pay-cart',
    component: PaymentPage
  },
  {
    path: '/wishlist',
    name: 'Wishlist',
    component: WishList
  },
  {
    path: '/products/:category_id?/:sub_category_id?/:nested_sub_category_id?/',
    name: 'View Product',

    component: ViewProducts
  },

  {
    path: '/my-account',
    name: 'Profile',
    component: Profile
  },

  {
    path: '/checkout-details',
    name: 'Checkout Details',
    component: CheckoutDetails
  },

  {
    path: '/invoice/:invoice_id',
    name: 'Invoice Details',
    component: InvoiceDetails
  },
  {
    path: '/my-invoices',
    name: 'Invoice History',
    component: InvoiceHistory
  },

]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
