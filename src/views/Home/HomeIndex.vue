<template>
  <div>
    <section class="py-5 categories">
      <div class="container">
        <carousel :perPage="1">
          <slide v-for="(c,i) in categories" :key="i">
            <div class="row">
              <div class="col-md-5">
                <img :src="c.picture[0].picture" alt="" width="100%">
              </div>
              <div class="col-md-6">
                <h2 class="pt-5">
                  {{ c.category_name }}
                </h2>
                <p class="pt-4" style="font-size:16px">
                  {{ c.description }}
                </p>
              </div>
            </div>
          </slide>
        </carousel>
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



    <!-- ======= Our Services Section ======= -->
    <section id="services" class="categories services sections-bg">
      <div class="container" data-aos="fade-up">

        <div class="section-header text-center">
          <h2>Support that we offer</h2>
          <p>We are constantly developing our business to meet the ever-evolving needs of our customers.
            Our goal is to work together, building trusted, long-term relationships, in order to create innovative
            products and solutions.</p>
        </div>

        <div class="row gy-4" data-aos="fade-up" data-aos-delay="100">

          <div class="col-lg-4 col-md-6">
            <div class="service-item  position-relative">
              <div class="icon">
                <i class="bi bi-activity"></i>
              </div>
              <h3>Nesciunt Mete</h3>
              <p>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis
                tempore et consequatur.</p>
              <a href="#" class="readmore stretched-link">Read more <i class="bi bi-arrow-right"></i></a>
            </div>
          </div><!-- End Service Item -->

          <div class="col-lg-4 col-md-6">
            <div class="service-item position-relative">
              <div class="icon">
                <i class="bi bi-broadcast"></i>
              </div>
              <h3>Eosle Commodi</h3>
              <p>Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut
                nesciunt dolorem.</p>
              <a href="#" class="readmore stretched-link">Read more <i class="bi bi-arrow-right"></i></a>
            </div>
          </div><!-- End Service Item -->

          <div class="col-lg-4 col-md-6">
            <div class="service-item position-relative">
              <div class="icon">
                <i class="bi bi-easel"></i>
              </div>
              <h3>Ledo Markt</h3>
              <p>Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci
                eos earum corrupti.</p>
              <a href="#" class="readmore stretched-link">Read more <i class="bi bi-arrow-right"></i></a>
            </div>
          </div><!-- End Service Item -->

        </div>

      </div>
    </section><!-- End Our Services Section -->

    <section class="product spad">
      <div class="container">
        <div class="our-products">
          <h2 class="pb-5 text-center">
            Our Products
          </h2>
        </div>

        <div class="row product__filter mt-5">
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

export default {
  components: {},
  data() {
    return {
      products: {},
      categories: {},
    }
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