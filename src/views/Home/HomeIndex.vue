<template>
  <div>
    <section class="mb-3">
      <div>
        <carousel :perPage="1" :autoplayTimeout="3000" :autoplay="true" v-bind:style="{ height: slideHeight + 'px' }">
          <slide>
            <img src="data:image/jpeg;base64,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" alt="" class="w-100">
          </slide>
          <slide>
            <img src="data:image/jpeg;base64,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" alt="" class="w-100">
          </slide>
          <slide>
            <img src="data:image/jpeg;base64,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" alt="" class="w-100">
          </slide>
        </carousel>
      </div>
    </section>
    <!-- <section class="best-choice py-5">
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
    </section> -->


    <section class="product spad">
      <div class="container">
        <div class="our-products">
          <h2 class="pb-5 text-center">
            Our Products
          </h2>
        </div>
        <div class="row product__filter mt-5">
          <loading :active.sync="isLoading"/>
          <div class="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix new-arrivals" style="cursor:pointer"
            v-for="(p, i) in products" :key="i" @click="viewProduct(p.id)">
            <div class="product__item">
              <div class="product__item__pic set-bg" v-bind:style="{ 'background-image': 'url(' + p.image + ')' }">
                <!-- <span class="label">New</span>
                <ul class="product__hover">
                  <li><a href="#"><img src="assets/img/icon/heart.png" alt=""></a></li>
                  <li><a href="#"><img src="assets/img/icon/compare.png" alt=""> <span>Compare</span></a></li>
                  <li><a href="#"><img src="assets/img/icon/search.png" alt=""></a></li>
                </ul> -->
              </div>
              <div class="product__item__text">
                <h6>{{ p.product_name }}</h6>

              </div>
            </div>
          </div>
          <div class="col-lg-12" style="text-align:center;">
            <div style="margin-bottom:50px; text-align:center;">
              <button class="btn primary-btn">All Products</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ======= Testimonials Section ======= -->
    <section id="testimonials" class="categories testimonials">
      <div class="container">

        <div class="section-header text-center">
          <h2>Testimonials</h2>
          <p>What do our satisfied clients say?</p>
        </div>

        <carousel :autoplay="true" :nav="false">
          <div class="testimonial-wrap">
            <div class="testimonial-item">
              <div class="d-flex align-items-center">
                <img src="assets/img/testimonials/testimonials-1.jpg" class="testimonial-img flex-shrink-0" alt="">
                <div>
                  <h3>Saul Goodman</h3>
                  <h4>Ceo &amp; Founder</h4>
                  <div class="stars">
                    <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i
                      class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                  </div>
                </div>
              </div>
              <p>
                <i class="bi bi-quote quote-icon-left"></i>
                Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium
                quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                <i class="bi bi-quote quote-icon-right"></i>
              </p>
            </div>
          </div>
          <div class="testimonial-wrap">
            <div class="testimonial-item">
              <div class="d-flex align-items-center">
                <img src="assets/img/testimonials/testimonials-1.jpg" class="testimonial-img flex-shrink-0" alt="">
                <div>
                  <h3>Saul Goodman</h3>
                  <h4>Ceo &amp; Founder</h4>
                  <div class="stars">
                    <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i
                      class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                  </div>
                </div>
              </div>
              <p>
                <i class="bi bi-quote quote-icon-left"></i>
                Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium
                quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                <i class="bi bi-quote quote-icon-right"></i>
              </p>
            </div>
          </div>
          <div class="testimonial-wrap">
            <div class="testimonial-item">
              <div class="d-flex align-items-center">
                <img src="assets/img/testimonials/testimonials-1.jpg" class="testimonial-img flex-shrink-0" alt="">
                <div>
                  <h3>Saul Goodman</h3>
                  <h4>Ceo &amp; Founder</h4>
                  <div class="stars">
                    <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i
                      class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                  </div>
                </div>
              </div>
              <p>
                <i class="bi bi-quote quote-icon-left"></i>
                Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium
                quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                <i class="bi bi-quote quote-icon-right"></i>
              </p>
            </div>
          </div>
          <div class="testimonial-wrap">
            <div class="testimonial-item">
              <div class="d-flex align-items-center">
                <img src="assets/img/testimonials/testimonials-1.jpg" class="testimonial-img flex-shrink-0" alt="">
                <div>
                  <h3>Saul Goodman</h3>
                  <h4>Ceo &amp; Founder</h4>
                  <div class="stars">
                    <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i
                      class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                  </div>
                </div>
              </div>
              <p>
                <i class="bi bi-quote quote-icon-left"></i>
                Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium
                quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                <i class="bi bi-quote quote-icon-right"></i>
              </p>
            </div>
          </div>
        </carousel>
      </div>
    </section><!-- End Testimonials Section -->

    <section class="latest spad">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-title">
              <span>Latest News</span>
              <owlCarousel />
              <h2>Hear Our Latest News</h2>
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

.section-header h2 {
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

.section-header p {
  color: #111111;
  font-size: 18px;
  line-height: 45px;
}

.best-choice-content {
  padding-top: 50px;
  padding-bottom: 50px;
}
</style>
<script>
import loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
export default {
  data() {
    return {
      products: {},
      categories: {},
      isLoading: false,
      fullPage: false,
      slideHeight: 500
    }
  },
  components: {
    loading
  },
  methods: {
    getProducts() {
      this.isLoading = true;
      this.$api.post(this.dynamic_route('/product/all/all-products'))
        .then((response) => {
          this.products = response.data.data.data;
          this.isLoading = false;

          this.products.forEach(object => {
            object.image = null
            object.image = object.picture[0].picture;
          });

        })
    },
    viewProduct(id) {
      this.$router.push({ name: 'Product', params: { product_id: id } })
    },
    getCategories() {
      let payload = {
        filters: ""
      }
      this.$api.post(this.dynamic_route('/category/all'), payload).then(response => {
        this.categories = response.data.data

      })
    },
  },
  mounted() {
    this.getProducts();
    this.getCategories();
  }
}

</script>