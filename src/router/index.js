import { createRouter, createWebHistory } from 'vue-router'
import Products from '../views/Products/ProductIndex.vue'
import ProductDetails from '../views/Products/ProductDetails.vue'
import CheckoutCart from '../views/Cart/CheckoutCart.vue'
import PaymentPage from '../views/Payment/MakePayment.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Products
  },
  {
    path: '/product/:id',
    name: 'product-details',
    component: ProductDetails
  },
  {path: '/checkout-cart',
  name: 'checkout-cart',
  
  component: CheckoutCart
  },
  {
    path: '/pay-cart',
    name: 'pay-cart',

    component: PaymentPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
