<template>
    <div>

        <section class="breadcrumb-option">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="breadcrumb__text">
            <h4>Shopping Cart</h4>
            <div class="breadcrumb__links">
              <router-link to="/">Home</router-link>
              <span>Cart</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


  <section class="shopping-cart spad py-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <div class="shopping__cart__table">
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(c, i) in cart" :key="i">
                  <td class="product__cart__item">
                    <div class="product__cart__item__pic">
                      <img :src="c.product.picture[0].picture" alt="" class="img-fluid" width="90px" height="90px">
                    </div>
                    <div class="product__cart__item__text">
                      <h6>{{ c.product.product_name }}</h6>
                    </div>
                  </td>
                  <td class="quantity__item">
                    <div class="quantity">
                      <div class="pro-qty-2">
                        <input type="text" value="1">
                      </div>
                    </div>
                  </td>
                  <td class="cart__close"><i class="fa fa-close"></i></td>
                </tr>

              </tbody>
            </table>
          </div>
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-6">
              <div class="continue__btn">
                <a href="#">Continue Shopping</a>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6">
              <div class="continue__btn update__btn">
                <a href="#"><i class="fa fa-spinner"></i> Update cart</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="cart__discount">
            <h6>Discount codes</h6>
            <form action="#">
              <input type="text" placeholder="Coupon code">
              <button type="submit">Apply</button>
            </form>
          </div>
          <div class="cart__total">
            <h6>Cart total</h6>
            <ul>
              <li>Subtotal <span>$ 169.50</span></li>
              <li>Total <span>$ 169.50</span></li>
            </ul>
            <a href="#" class="primary-btn">Proceed to checkout</a>
          </div>
        </div>
      </div>
    </div>
  </section>



  <div class="search-model">
    <div class="h-100 d-flex align-items-center justify-content-center">
      <div class="search-close-switch">+</div>
      <form class="search-model-form">
        <input type="text" id="search-input" placeholder="Search here.....">
      </form>
    </div>
  </div>
    </div>
</template>
<style>
.slide-img {
    cursor: pointer;
}
</style>
<script>
import { bus } from '../../main'
export default {
    data() {
        return {
            cart: {},
        }
    },
    components: {
    },
    methods: {
        getCartItems() {
            let unique_id = localStorage.getItem('unique_id');
            let payload = {
                unique_id: unique_id
            };
            
            this.$api.post(this.dynamic_route(`/cart/get`), payload)
                .then((res) => {
                    this.cart = res.data.data;
                })
                .catch(() => {

                })
        },
        addToCart() {
            var unique_id = localStorage.getItem('unique_id');
            // check if the unique_id exist in the localStorage

            if (!unique_id) {
                localStorage.setItem('unique_id', this.uniqueid());
                unique_id = localStorage.getItem('unique_id')
            }
            let param = this.$route.params.product_id;
            let payload = {
                product_id: param,
                unique_id: unique_id
            };
            this.$api
                .post(this.dynamic_route("/cart"), payload)
                .then((res) => {
                    bus.$emit('updateCart');
                    this.$toast.success(res.data.message);
                })
                .catch((err) => {
                    this.$toast.error(err.response.data.message);
                })
                .finally(() => {
                    this.cartstat2 = "none";
                    this.cartstat1 = "block";
                });
        },
    },
    mounted() {
        this.getCartItems();
    }
}

</script>