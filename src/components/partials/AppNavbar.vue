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
        <a href="#">FAQs</a>
      </div>
      <div class="offcanvas__top__hover">
        <span>Usd <i class="arrow_carrot-down"></i></span>
        <ul>
          <li>USD</li>
          <li>EUR</li>
          <li>USD</li>
        </ul>
      </div>
    </div>
    <div class="offcanvas__nav__option">
      <a href="#" class="search-switch"><img src="assets/img/icon/search.png" alt=""></a>
      <a href="#"><img src="assets/img/icon/heart.png" alt=""></a>
      <a href="#"><img src="assets/img/icon/cart.png" alt=""> <span>0</span></a>
      <div class="price">$0.00</div>
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
                <a href="#">Sign in</a>
                <a href="#">FAQs</a>
              </div>
              <div class="header__top__hover">
                <span>Usd <i class="arrow_carrot-down"></i></span>
                <ul>
                  <li>USD</li>
                  <li>EUR</li>
                  <li>USD</li>
                </ul>
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
            <a href="index.html"><img src="assets/img/logo.png" alt=""></a>
          </div>
        </div>
        <div class="col-lg-6 col-md-6">
          <nav class="header__menu mobile-menu">
            <ul>
              <li class="active"><a href="index.html">Home</a></li>
              <li><a href="#">Product</a>
                <div class="dropdown">
                  <div class="row">
                    <div class="col-lg-4" v-for="(c,i) in categories" :key="i">
                      <p style="color:white; font-size: 18px; cursor: pointer;">{{ c.category_name }}</p>
                      <p style="color:white; font-size: 14px; cursor: pointer;" v-for="(sc,i) in c.sub_category" :key="i">{{ sc.sub_category_name }}</p>
                    </div>
                  </div>
                </div>
                
              </li>
              <li><a href="blog.html">Company</a></li>
              <li><a href="blog.html">Contact</a></li>
              <li><a href="contact.html">Services</a></li>
            </ul>
          </nav>
        </div>
        <div class="col-lg-3 col-md-3">
          <div class="header__nav__option">
            <a href="#" class="search-switch"><img src="assets/img/icon/search.png" alt=""></a>
            <a href="#"><img src="assets/img/icon/heart.png" alt=""></a>
            <a href="#"><img src="assets/img/icon/cart.png" alt=""> <span>0</span></a>
            <div class="price">$0.00</div>
          </div>
        </div>
      </div>
      <div class="canvas__open"><i class="fa fa-bars"></i></div>
    </div>
  </header>
  </div>
</template>
<script>
export default {
  data() {
    return {
      categories: {}
    }
  },
  methods: {
    getCategories() {
      let payload = {
        filters:""
      }
      this.$api.post(this.dynamic_route('/category/all'),payload).then(response => {
        this.categories = response.data.data
      })
    }
  },
  mounted() {
    this.getCategories()
  }
}
</script>