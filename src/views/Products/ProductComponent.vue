<template>
  <div style="background-color: #f9f9f9">
    <vue-element-loading
      :active="loading"
      color="#FF6700"
      :text="loadingText"
      spinner="bar-fade-scale"
    />
    <!-- banner -->
  <section class="category-banner">
    <div class="container py-5">
      <div class="category-details">
      <div class="row">
        <div class="col-md-6">
          <div class="part-img">
            <!-- <img :src="`${publicPath}assets/images/drug2.jpg`" alt="" class="w-100"> -->
          </div>
        </div>
        <div class="col-md-5">
          <div class="category align-items-center">
            <h2 class="pb-5 pt-4" style="font-family:'Rubik'">
              {{ getSelectedCategories()[0].category_name }}
            </h2>
            <span style="font-family:'Rubik'; font-size:22px; line-height:30px;">
              {{ getSelectedCategories()[0].description }}
            </span>
          </div>
        </div>
      </div>
    </div>
    </div>
  </section>
	
	<!-- //banner -->
    <div class="ads-grid py-5">
      <div class="container">
        <!-- tittle heading -->
        <h3 class="tittle-w3l text-center mb-lg-5 mb-sm-4 mb-3">
          <span class="font-weight-normal">Our</span> Products
        </h3>

        <!-- //tittle heading -->
        <div class="row">
          <!-- product right -->
          <div class="col-lg-3 mt-lg-0 mt-4 p-lg-0 order-lg-first order-last">
            <div class="side-bar p-sm-4 p-3 border-right">
              <!-- reviews -->
              <!-- <div class="customer-rev left-side py-2">
							<h3 class="agileits-sear-head mb-3">Customer Review</h3>
							<ul>
								<li>
									<a href="#">
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<span>5.0</span>
									</a>
								</li>
								<li>
									<a href="#">
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<span>4.0</span>
									</a>
								</li>
								<li>
									<a href="#">
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star-half"></i>
										<span>3.5</span>
									</a>
								</li>
								<li>
									<a href="#">
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<span>3.0</span>
									</a>
								</li>
								<li>
									<a href="#">
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star-half"></i>
										<span>2.5</span>
									</a>
								</li>
							</ul>
						</div> -->
              <!-- //reviews -->
              <!-- price -->
              <div class="range py-2">
                <h3 class="agileits-sear-head mb-3">Price</h3>
                <div class="w3l-range">
                  <ul>
                    <li>
                      <p @click="getProducts(1000, 1000)" href="#">
                        <label for="Under ₦1,000">
                          <input type="radio" name="filt" id="Under ₦1,000" />
                          Under ₦1,000
                        </label>
                      </p>
                    </li>
                    <li class="my-1">
                      <p @click="getProducts(1000, 5000)" href="#">
                        <label for="₦1,000 - ₦5,000">
                          <input
                            type="radio"
                            name="filt"
                            id="₦1,000 - ₦5,000"
                          />
                          ₦1,000 - ₦5,000
                        </label>
                      </p>
                    </li>
                    <li>
                      <p @click="getProducts(5000, 10000)" href="#">
                        <label for="₦5,000 - ₦10,000">
                          <input
                            type="radio"
                            name="filt"
                            id="₦5,000 - ₦10,000"
                          />
                          ₦5,000 - ₦10,000
                        </label>
                      </p>
                    </li>
                    <li class="my-1">
                      <p @click="getProducts(10000, 20000)" href="#">
                        <label for="₦10,000 - ₦20,000">
                          <input
                            type="radio"
                            name="filt"
                            id="₦10,000 - ₦20,000"
                          />
                          ₦10,000 - ₦20,000
                        </label>
                      </p>
                    </li>
                    <li>
                      <p @click="getProducts(20000, 30000)" href="#">
                        <label for="₦20,000 ₦30,000">
                          <input
                            type="radio"
                            name="filt"
                            id="₦20,000 ₦30,000"
                          />
                          ₦20,000 ₦30,000
                        </label>
                      </p>
                    </li>
                    <li @click="getProducts(30000, 30000)" class="mt-1">
                      <p href="#">
                        <label for="Over ₦30,000">
                          <input type="radio" name="filt" id="Over ₦30,000" />
                          Over ₦30,000
                        </label>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <!-- //price -->
              <!-- discounts -->
              <div class="left-side py-2">
                <h3 class="agileits-sear-head mb-3">Discount</h3>
                <ul>
                  <li>
                    <input
                      type="checkbox"
                      value="5"
                      v-model="discount"
                      @change="getProducts(0,0)"
                    />
                    <span class="span">5% or More</span>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      value="6"
                      v-model="discount"
                      @change="getProducts(0,0)"
                    />
                    <span class="span">10% or More</span>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      value="7"
                      v-model="discount"
                      @change="getProducts(0,0)"
                    />
                    <span class="span">20% or More</span>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      value="8"
                      v-model="discount"
                      @change="getProducts(0,0)"
                    />
                    <span class="span">30% or More</span>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      value="9"
                      v-model="discount"
                      @change="getProducts(0,0)"
                    />
                    <span class="span">50% or More</span>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      value="10"
                      v-model="discount"
                      @change="getProducts(0,0)"
                    />
                    <span class="span">60% or More</span>
                  </li>
                </ul>
              </div>
              <!-- //discounts -->
              <!-- electronics -->

              <!-- //electronics -->
              <!-- arrivals -->
              <div class="left-side py-2">
                <h3 class="agileits-sear-head mb-3">New Arrivals</h3>
                <ul>
                  <li>
                    <input type="checkbox" class="checked" />
                    <span class="span">Last 30 days</span>
                  </li>
                  <li>
                    <input type="checkbox" class="checked" />
                    <span class="span">Last 90 days</span>
                  </li>
                </ul>
              </div>
              <!-- //arrivals -->
              <!-- best seller -->
              <div class="f-grid py-2">
                <h3 class="agileits-sear-head mb-3">Best Seller</h3>
                <div class="box-scroll">
                  <div class="scroll">
                    <div class="row">
                      <div class="col-lg-3 col-sm-2 col-3 left-mar">
                        <img
                          :src="`${publicPath}assets/images/drug8.jpg`"
                          alt=""
                          class="img-fluid"
                        />
                      </div>
                      <div class="col-lg-9 col-sm-10 col-9 w3_mvd">
                        <a href="#"
                          >Pro-Pen-G Injectable For Cattle, Sheep, Swine And
                          Horses</a
                        >
                        <a href="#" class="price-mar mt-2">$12,990.00</a>
                      </div>
                    </div>
                    <div class="row my-4">
                      <div class="col-lg-3 col-sm-2 col-3 left-mar">
                        <img
                          :src="`${publicPath}assets/images/drug1.jpg`"
                          alt=""
                          class="img-fluid"
                        />
                      </div>
                      <div class="col-lg-9 col-sm-10 col-9 w3_mvd">
                        <a href="#">Penicillin G/Norocillin Injectable</a>
                        <a href="#" class="price-mar mt-2">$12,499.00</a>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-lg-3 col-sm-2 col-3 left-mar">
                        <img
                          :src="`${publicPath}assets/images/drug0.jpg`"
                          alt=""
                          class="img-fluid"
                        />
                      </div>
                      <div class="col-lg-9 col-sm-10 col-9 w3_mvd">
                        <a href="#">Agrimycin 200 Oxytetracycline Injection</a>
                        <a href="#" class="price-mar mt-2">$1,199.00 </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- //best seller -->
            </div>
            <!-- //product right -->
          </div>
          <!-- product left -->
          <div class="agileinfo-ads-display col-lg-9 order-lg-last order-first">
            <div class="wrapper">
              <!-- first section -->
              <div class="product-sec1 px-lg-4">
                <div class="row">
                  <div
                    class="col-md-4 product-men"
                    v-for="(p, i) in products"
                    :key="i"
                    @click="routeProduct(p)"
                  >
                    <div
                      class="card pt-3 pl-3 pr-3 pb-3 mb-3 product-div"
                      style="height: 280px"
                    >
                      <div
                        class="men-thumb-item text-center"
                        style="text-align: center !important"
                      >
                        <div
                          style="width: 150px; text-align: center"
                          class="text-center"
                        >
                          <img
                            :src="`${publicPath}assets/images/drug1.jpg`"
                            alt=""
                            class="img-fluid"
                          />
                        </div>
                      </div>
                      <div class="item-info-product text-center mt-2">
                        <h4 class="pt-1 p-name">
                          <router-link :to="'/product/' + p.id">{{
                            p.product_name
                          }}</router-link>
                        </h4>
                        <div class="info-product-price">
                          <span class="item_price">₦{{ p.discount_amount }}</span>
                          <del>₦{{ p.price }}</del>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- //product left -->
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.p-name {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.w3l-range ul li p {
  color: black;
  cursor: pointer;
}
</style>
<script>
import { mapState } from "vuex";
import VueElementLoading from "vue-element-loading";
export default {
  components: {
    "vue-element-loading": VueElementLoading,
  },
  data() {
    return {
      publicPath: process.env.BASE_URL,
      loadingText: "fetching products, Please wait...",
      discount: [],
      products: {},
      filter: {},
      selected_categories:{},
      // categories: {},
    };
  },
  methods: {
    routeProduct(p) {
      this.$router.push(`/product/${p.id}`);
    },
    getProducts(from, to) {
		let payload;
      if (from !== 0 && to !== 0) {
        payload = {
          price_range: from,
          from: from,
          to: to,
          discount: this.discount,
        };
      } else {
        payload = {
          discount: this.discount,
        };
      }
      // this.$store.dispatch("get_category", payload);
      this.$store.commit("LOADING", true);
      this.$api
        .post(
          `https://biomed-backend.herokuapp.com/api/product/product-filter`,
          payload
        )
        .then((res) => {
          this.products = res.data.data;
          this.$store.commit("LOADING", false);
        });
    },
    getSelectedCategories(){
      // filter categories
      return this.selected_categories = this.categories.filter(data=>{
        return data.id == this.$route.params.category_id
      })
    },
    getProductss() {
      let payload = {
        status: true,
      };
      this.$api
        .post(`https://biomed-backend.herokuapp.com/api/product/all`, payload)
        .then((res) => {
          this.products = res.data.data;
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
  },
  computed: {
    ...mapState({
      loading: (state) => state.category.loading,
      categories: (state) => state.category.categories,
    }),
  },
  mounted() {
    this.getProductss();
  },
};
</script>
<style>
  .product-div{
    border: 1px solid lightgrey;
    border-radius: 7px;
    border-top: 4px solid rgb(54,112,182)!important;
    border-bottom: 4px solid rgb(255,105,3) !important;
    box-shadow: 1px 1px 5px grey;
    transition: all 0.5s linear;
  }

  .product-div:hover{
    border: 1px solid lightgrey;
    border-radius: 7px;
    border-top: 4px solid rgb(255,105,3) !important;
    border-bottom: 4px solid rgb(54,112,182) !important;
    box-shadow: -2px -2px 10px grey;
  }
  .category-banner{
    background: url(../../../public/assets/images/images3.jpeg);
    background-size: cover;
    background-position: center;
  }
</style>