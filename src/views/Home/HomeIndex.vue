<template>
  <div>
    <section class="hero">
      <div class="hero__slider owl-carousel">
        <div class="hero__items set-bg" data-setbg="assets/img/hero/hero-1.jpg">
          <div class="container">
            <div class="row">
              <div class="col-xl-5 col-lg-7 col-md-8">
                <div class="hero__text">
                  <!-- <h6>Summer Collection</h6> -->
                  <h2>Veterinary Diagnostics</h2>
                  <p>BioMed’s Veterinary diagnostics section offers a wide range of diagnostics kits such like ELISA,
                    PCR, rapid test kits and any other technics or technologies that can help in the diagnostics
                    processes of the animal diseases and/or related disease.</p>
                  <a href="#" class="primary-btn">Explore <span class="arrow_right"></span></a>
                  <!-- <div class="hero__social">
                  <a href="#"><i class="fa fa-facebook"></i></a>
                  <a href="#"><i class="fa fa-twitter"></i></a>
                  <a href="#"><i class="fa fa-pinterest"></i></a>
                  <a href="#"><i class="fa fa-instagram"></i></a>
                </div> -->
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hero__items set-bg" data-setbg="assets/img/hero/hero-2.jpg">
          <div class="container">
            <div class="row">
              <div class="col-xl-5 col-lg-7 col-md-8">
                <div class="hero__text">
                  <!-- <h6>Summer Collection</h6> -->
                  <h2>Human Diagnostic</h2>
                  <p>BioMed’s Human diagnostics section offers a wide range of diagnostics kits and reagents such like
                    ELISA, PCR, rapid test kits and any other technics our technologies that can help in the diagnostic
                    process of the human diseases and/or related diseases.</p>
                  <a href="#" class="primary-btn">Explore <span class="arrow_right"></span></a>
                  <!-- <div class="hero__social">
                  <a href="#"><i class="fa fa-facebook"></i></a>
                  <a href="#"><i class="fa fa-twitter"></i></a>
                  <a href="#"><i class="fa fa-pinterest"></i></a>
                  <a href="#"><i class="fa fa-instagram"></i></a>
                </div> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="best-choice py-5">
      <div class="container">
        <div class="best-choice-content text-center">
          <h2>Our Best Choice</h2>
          <p>
            We manufacture products for use in histopathology, hematology, cytology, transfusiology and microbiology
            with a wide national and international distribution network present in over 65 countries. BioGnost offers
            only the best quality products at competitive prices and has one of the widest ranges of medical products in
            South-Eastern Europe. Our experience and flexibility towards the client makes us a sought-after business
            partner, which has been
            recognized in the global market.
          </p>
        </div>
      </div>
    </section>
    <section class="product spad py-5">
      <div class="container">
        <div class="our-products">
          <h2 class="pb-5">
            Our Products
          </h2>
        </div>

        <div class="row product__filter mt-5">
          <div class="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix new-arrivals" v-for="(p, i) in products"
            :key="i">
            <div class="product__item">
              <div class="product__item__pic set-bg" v-bind:style="{ 'background-image': 'url(' + p.image + ')' }">
                <span class="label">New</span>
                <ul class="product__hover">
                  <li><a href="#"><img src="assets/img/icon/heart.png" alt=""></a></li>
                  <li><a href="#"><img src="assets/img/icon/compare.png" alt=""> <span>Compare</span></a></li>
                  <li><a href="#"><img src="assets/img/icon/search.png" alt=""></a></li>
                </ul>
              </div>
              <div class="product__item__text">
                <h6>{{ p.product_name }}</h6>
                <a href="#" class="add-cart">+ Add To Cart</a>
                <div class="rating">
                  <i class="fa fa-star-o"></i>
                  <i class="fa fa-star-o"></i>
                  <i class="fa fa-star-o"></i>
                  <i class="fa fa-star-o"></i>
                  <i class="fa fa-star-o"></i>
                </div>
                <h5>${{ p.discount_price }}</h5>
                <div class="product__color__select">
                  <label for="pc-1">
                    <input type="radio" id="pc-1">
                  </label>
                  <label class="active black" for="pc-2">
                    <input type="radio" id="pc-2">
                  </label>
                  <label class="grey" for="pc-3">
                    <input type="radio" id="pc-3">
                  </label>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>


    <section class="categories spad">
      <div class="container">
        <div class="row">
          <div class="col-lg-3">
            <div class="categories__text">
              <h2>Clothings Hot <br /> <span>Shoe Collection</span> <br /> Accessories</h2>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="categories__hot__deal">
              <img src="assets/img/product-sale.png" alt="">
              <div class="hot__deal__sticker">
                <span>Sale Of</span>
                <h5>$29.99</h5>
              </div>
            </div>
          </div>
          <div class="col-lg-4 offset-lg-1">
            <div class="categories__deal__countdown">
              <span>Deal Of The Week</span>
              <h2>Multi-pocket Chest Bag Black</h2>
              <div class="categories__deal__countdown__timer" id="countdown">
                <div class="cd-item">
                  <span>3</span>
                  <p>Days</p>
                </div>
                <div class="cd-item">
                  <span>1</span>
                  <p>Hours</p>
                </div>
                <div class="cd-item">
                  <span>50</span>
                  <p>Minutes</p>
                </div>
                <div class="cd-item">
                  <span>18</span>
                  <p>Seconds</p>
                </div>
              </div>
              <a href="#" class="primary-btn">Shop now</a>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section class="instagram spad">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="instagram__pic">
              <div class="instagram__pic__item set-bg" data-setbg="assets/img/instagram/instagram-1.jpg"></div>
              <div class="instagram__pic__item set-bg" data-setbg="assets/img/instagram/instagram-2.jpg"></div>
              <div class="instagram__pic__item set-bg" data-setbg="assets/img/instagram/instagram-3.jpg"></div>
              <div class="instagram__pic__item set-bg" data-setbg="assets/img/instagram/instagram-4.jpg"></div>
              <div class="instagram__pic__item set-bg" data-setbg="assets/img/instagram/instagram-5.jpg"></div>
              <div class="instagram__pic__item set-bg" data-setbg="assets/img/instagram/instagram-6.jpg"></div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="instagram__text">
              <h2>Instagram</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.</p>
              <h3>#Male_Fashion</h3>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section class="latest spad">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-title">
              <span>Latest News</span>
              <h2>Fashion New Trends</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="blog__item">
              <div class="blog__item__pic set-bg" data-setbg="assets/img/blog/blog-1.jpg"></div>
              <div class="blog__item__text">
                <span><img src="assets/img/icon/calendar.png" alt=""> 16 February 2020</span>
                <h5>What Curling Irons Are The Best Ones</h5>
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="blog__item">
              <div class="blog__item__pic set-bg" data-setbg="assets/img/blog/blog-2.jpg"></div>
              <div class="blog__item__text">
                <span><img src="assets/img/icon/calendar.png" alt=""> 21 February 2020</span>
                <h5>Eternity Bands Do Last Forever</h5>
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="blog__item">
              <div class="blog__item__pic set-bg" data-setbg="assets/img/blog/blog-3.jpg"></div>
              <div class="blog__item__text">
                <span><img src="assets/img/icon/calendar.png" alt=""> 28 February 2020</span>
                <h5>The Health Benefits Of Sunglasses</h5>
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style>
.best-choice h2 {
  color: #111111;
  font-weight: 700;
  line-height: 46px;
  margin-bottom: 10px;
  font-family: 'Rubik';
}

.our-products h2 {
  color: #111111;
  font-weight: 700;
  line-height: 46px;
  margin-bottom: 10px;
  font-family: 'Rubik';
}

.best-choice p {
  color: #111111;
  font-size: 18px;
  line-height: 45px;
}
</style>
<script>
import $ from 'jquery';
export default {
  data() {
    return {
      products: {},
    }
  },
  components: {
  },
  methods: {
    getProducts() {
      this.$api.post(this.dynamic_route('/product/all/all-products'))
        .then((response) => {
          this.products = response.data.data.data;
          this.products.forEach(object => {
            object.image = null
            object.image = object.picture[0].picture;
          });

        })
    }
  },
  mounted() {
    $('.set-bg').each(function () {
      var bg = $(this).data('setbg');
      $(this).css('background-image', 'url(' + bg + ')');
    });

    this.getProducts();
  }
}

</script>