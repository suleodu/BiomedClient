import { createRouter, createWebHistory } from 'vue-router'
import Products from '../views/Products/ProductIndex.vue'
import ProductDetails from '../views/Products/ProductDetails.vue'
import CheckoutCart from '../views/Cart/CheckoutCart.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Products
  },
  {
    path: '/product/:id',
    name: 'product-details',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ProductDetails
  },
  {path: '/checkout-cart',
  name: 'checkout-cart',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: CheckoutCart
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
