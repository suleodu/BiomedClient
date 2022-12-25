<template>
  <div>
    <section class="py-5">
      <div class="container">
        <carousel :perPage="1" :autoplayTimeout="3000" :autoplay="true">
          <slide>
            <img src="assets/images/banner.jpeg" alt="" class="w-100">
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