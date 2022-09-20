import { createRouter, createWebHistory } from 'vue-router'
import Products from '../views/Products/ProductIndex.vue'
import ProductDetails from '../views/Products/ProductDetails.vue'
import CheckoutCart from '../views/Cart/CheckoutCart.vue'
import WishList from '../views/Cart/WishList.vue'
import PaymentPage from '../views/Payment/MakePayment.vue'
import ViewProducts from '../views/Products/ViewProducts.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Products
  },
  {
    path: '/product/:product_id',
    name: 'product-details',
    component: ProductDetails,
  },
  {path: '/checkout-cart',
  name: 'checkout-cart',
  component: CheckoutCart
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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
