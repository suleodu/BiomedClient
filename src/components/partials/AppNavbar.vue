<template>
  <div>
    <div id="preloder">
      <div class="loader"></div>
    </div>

    <div class="offcanvas-menu-overlay"></div>
    <div class="offcanvas-menu-wrapper">
      <div class="offcanvas__option">
        <div class="offcanvas__links">
          <a href="#">Sign in</a>
        </div>
      </div>
      <div class="offcanvas__nav__option">
        <a href="#" class="search-switch"><img src="/assets/img/icon/search.png" alt=""></a>
        <a href="#"><img src="/assets/img/icon/heart.png" alt=""></a>
        <router-link to="/cart"><img src="/assets/img/icon/cart.png" alt=""> <span>0</span></router-link>
      </div>
      <div id="mobile-menu-wrap"></div>
      <div class="offcanvas__text">
        <p>Free shipping, 30-day return or refund guarantee.</p>
      </div>
    </div>


    <header class="header">
      <div class="header__top">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-7">
              <div class="header__top__left">
                <p>Free shipping, 30-day return or refund guarantee.</p>
              </div>
            </div>
            <div class="col-lg-6 col-md-5">
              <div class="header__top__right">
                <div class="header__top__links">
                  <router-link to="/auth/login">Sign in</router-link>
                  
                </div>
          
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-3">
            <div class="header__logo">
              <router-link to="/"><img src="/assets/img/logo.png" alt=""></router-link>
            </div>
          </div>
          <div class="col-lg-7 col-md-7">
            <nav class="header__menu mobile-menu">
              <ul>
                <li class="active"><router-link to="/">Home</router-link></li>
                <li><router-link to="/product-category/1/1">Product</router-link>
                  <div class="dropdown">
                    <div class="row" style="width:1200px;">
                      <div class="col" v-for="(c, i) in categories" :key="i">
                        <p style="font-size: 18px; cursor: pointer;" @click="routeProduct(c.id)" class="c_image">{{
    c.category_name
}}</p>
                        <img :src="c.picture[0].picture" alt="" class="mb-2 w-100">
                        <p @click="routeSubProduct(c.id, sc.id)" style="font-size: 14px; cursor: pointer;"
                          v-for="(sc, i) in c.sub_category" :key="i">{{ sc.sub_category_name }}</p>
                      </div>
                    </div>
                  </div>

                </li>
                <li><a href="#">Company</a>
                  <div class="dropdown" style="left: 0 !important;">
                    <ul style="width: 300px;">
                      <li>
                        <router-link style="font-size: 18px; cursor: pointer;" to="/company">
                          Company
                        </router-link>
                      </li>
                      <li>
                        <router-link style="font-size: 18px; cursor: pointer;" to="/company/mission-vision-value">
                          Mission, Vision & Values
                        </router-link>
                      </li>
                      <li>
                        <router-link style="font-size: 18px; cursor: pointer;" to="/company/history">
                          History
                        </router-link>
                      </li>
                      <li>
                        <router-link style="font-size: 18px; cursor: pointer;" to="/company">
                          Meet the team
                        </router-link>
                      </li>
                    </ul>
                  </div>

                </li>
                <li><router-link to="/contact-us">Contact</router-link></li>
                <li><router-link to="/special-order">Special Order</router-link></li>
              </ul>
            </nav>
          </div>
          <div class="col-lg-1 col-md-1 pt-3">
            <div class="header__nav__option" @click="toCart">
              <!-- Cart icon -->
              <div id="cart-icon">
                <i class="bi bi-cart"></i>
              </div>

              <!-- Cart badge -->
              <div id="cart-badge">
                <span id="cart-count">{{ this.cart.length }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="canvas__open"><i class="fa fa-bars"></i></div>
      </div>
    </header>
  </div>
</template>
<style>
.dropdown {
  background: white !important;
  box-shadow: 1px 4px 4px 4px lightgrey !important;
}

.c_image {
  width: 10em;
  /* the element needs a fixed width (in px, em, %, etc) */
  overflow: hidden;
  /* make sure it hides the content that overflows */
  white-space: nowrap;
  /* don't break the line */
  text-overflow: ellipsis;
  /* give the beautiful '...' effect */

  
}
/* Cart icon */
#cart-icon {
  cursor: pointer;
  font-size: 24px;
}

/* Cart badge */
#cart-badge {
  position: relative;
  background-color: #f27236;
  color: white;
  font-size: 12px;
  border-radius: 50%;
  padding: 0 6px;
  top: -38px;
  left: 55px;
  width: 19px;
}

</style>
<script>

export default {
  data() {
    return {
      categories: {},
      cart: []
    }
  },
  created() {
    this.$on('updateCart', this.getCartItems)
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
    getCategories() {
      let payload = {
        filters: ""
      }
      this.$api.post(this.dynamic_route('/category/all'), payload).then(response => {
        this.categories = response.data.data
      })
    },
    toCart() {
      this.$router.push('/cart');
    },
    routeProduct(category_id) {
      this.$router.push(`/product-category/${category_id}`)
    },
    routeSubProduct(category_id, sub_category_id) {
      this.$router.push(`/product-category/${category_id}/${sub_category_id}`)
    }
  },
  mounted() {
    this.getCategories();
    this.getCartItems();
  }
}
</script>