<template>
  <div>
    <!-- banner-2 -->
    <div class="page-head_agile_info_w3l inner-checkout-page">
      <div class="container py-5">
        <h3 class="title-style text-white pt-5">
          <span>Product</span> Single Page
        </h3>
        <ul class="w3_short pt-3 pb-5">
          <li>
            <router-link to="/" class="text-white">Home</router-link>
            <i class="fa fa-angle-right mx-2 text-white" aria-hidden="true"></i>
          </li>
          <li class="text-light">{{ productDetails.product_name }}</li>
        </ul>
      </div>
    </div>
    <!-- //banner-2 -->
    <!-- page -->
    <div class="services-breadcrumb">
      <div class="agile_inner_breadcrumb"></div>
    </div>
    <!-- //page -->
    <div style="margin: 8px auto; display: block; text-align: center">
      <!---728x90--->
    </div>
    <!-- Single Page -->
    <div class="banner-bootom-w3-agileits py-5">
      <div class="container py-md-5 py-4">
        <div class="row">
          <div class="col-md-6 single-right-left">
            <div class="grid images_3_of_2">
              <div class="flexslider">
              
                <ul class="slides">
                  <!-- <li :data-thumb="myImg"> -->
                    <div class="thumb-image">
                      <img
                        :src="myImg"
                        :key="Math.random()"
                        data-imagezoom="true"
                        class="img-fluid"
                        alt=""
                      />
                    </div>
                  <!-- </li> -->
                  <li :data-thumb="`${publicPath}assets/images/drug1.jpg`">
                    <div class="thumb-image">
                      <img
                        :src="`${publicPath}assets/images/drug1.jpg`"
                        data-imagezoom="true"
                        class="img-fluid"
                        alt=""
                      />
                    </div>
                  </li>
                  <li :data-thumb="`${publicPath}assets/images/drug1.jpg`">
                    <div class="thumb-image">
                      <img
                        :src="`${publicPath}assets/images/drug1.jpg`"
                        data-imagezoom="true"
                        class="img-fluid"
                        alt=""
                      />
                    </div>
                  </li>
                </ul>
                <div class="clearfix"></div>
              </div>
            </div>
          </div>

          <div class="col-md-6 single-right-left simpleCart_shelfItem">
            <h3 class="mb-3">{{ productDetails.product_name }}</h3>
            <p class="mb-3">
              <span class="item_price">₦{{ productDetails.discount_amount }}</span>
              <del class="mx-2 font-weight-light">₦{{ productDetails.price }}</del>
              <!-- <label>Free delivery</label> -->
            </p>
            <div class="single-infoagile">
              <ul>
                <li class="mb-3">
                  Disease:
                  {{
                    productDetails.product_disease &&
                    productDetails.product_disease.disease_name
                  }}
                </li>
                <li class="mb-3">
                  Category:
                  {{
                    productDetails.nested_sub_category &&
                    productDetails.nested_sub_category.sub_category.category
                      .category_name
                  }}
                </li>
                <li class="mb-3">
                  Sub Category:
                  {{
                    productDetails.nested_sub_category &&
                    productDetails.nested_sub_category.sub_category
                      .sub_category_name
                  }}
                </li>
                <li class="mb-3">
                  Nested Sub Category:
                  {{
                    productDetails.nested_sub_category &&
                    productDetails.nested_sub_category.name
                  }}
                </li>
              </ul>
            </div>
            <div class="product-single-w3l">
              <p class="my-3">
                <i class="far fa-hand-point-right mr-2"></i>
                Description
              </p>

              <p>
                {{ productDetails.description }}
              </p>
              <p class="my-sm-4 my-3">
                <i class="far fa-hand-point-right mr-2"></i>Net banking &
                Credit/ Debit/ ATM card
              </p>
            </div>
            <div class="occasion-cart">
              <div class="rowma">
                <button
                  @click.prevent="addToCart"
                  class="btn btn-style mr-2"
                  style="width: 180px; display: inline-block"
                >
                  <p style="color: white" :class="'d-' + cartstat1">
                    ADD TO CART
                  </p>
                  <p
                    class="spinner-border text-light"
                    :class="'d-' + cartstat2"
                  ></p>
                </button>
                <button
                  @click.prevent="addProductToWishList"
                  class="btn btn-style ml-2"
                  style="width: 200px; display: inline-block"
                >
                  <p style="color: white" :class="'d-' + cartstat3">
                    ADD TO WISHLIST
                  </p>
                  <p
                    class="spinner-border text-light"
                    :class="'d-' + cartstat4"
                  ></p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- //Single Page -->

    <!-- middle section -->
    <div class="join-w3l1 py-sm-5 py-4">
      <div class="container py-xl-4 py-lg-2">
        <div class="row">
          <div class="col-lg-6">
            <a href="product2.html">
              <div class="join-agile text-left p-4">
                <div class="row">
                  <div class="col-sm-7 offer-name">
                    <h6>New Collections, New Trendy</h6>
                    <h4 class="mb-3">Animal Drugs</h4>
                    <p>Sale up to 25% off all in store</p>
                  </div>
                  <div class="col-sm-5 offerimg-w3l">
                    <img
                      :src="`${publicPath}assets/images/drug1.jpg`"
                      alt=""
                      class="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div class="col-lg-6 mt-lg-0 mt-4">
            <a href="product.html">
              <div class="join-agile text-left p-4">
                <div class="row">
                  <div class="col-sm-7 offer-name">
                    <h6>Top Brands, lowest Prices</h6>
                    <h4 class="mb-3">Drugs</h4>
                    <p>Free shipping order over $100</p>
                  </div>
                  <div class="col-sm-5 offerimg-w3l">
                    <img
                      :src="`${publicPath}assets/images/drug4.jpg`"
                      alt=""
                      class="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- middle section -->
    <div style="margin: 8px auto; display: block; text-align: center">
      <!---728x90--->
    </div>
  </div>
</template>
<!-- imagezoom -->
	<!-- //imagezoom -->

	<!-- flexslider
	<link rel="stylesheet" href="css/flexslider.css" type="text/css" media="screen" />

	<script src="js/jquery.flexslider.js"></script> -->
	<!-- <script> -->
<script>
import { bus } from '../../main'
export default {
  data() {
    return {
      publicPath: process.env.BASE_URL,
      productDetails: {},
      cartstat1: "block",
      cartstat2: "none",
      cartstat3: "block",
      cartstat4: "none",
      myImg : require('../../../public/assets/images/drug1.jpg')
    };
  },

  methods: {
    getProductDetails() {
      let param = this.$route.params.product_id;
      this.$api
        .get(`https://biomed-backend.herokuapp.com/api/product/${param}`)
        .then((res) => {
          this.productDetails = res.data.data;
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
    addProductToWishList() {
      this.cartstat3 = "none";
      this.cartstat4 = "block";
      let param = this.$route.params.product_id;
      let payload = {
        product_id: param,
      };
      this.$api
        .post(`https://biomed-backend.herokuapp.com/api/wish-list`, payload)
        .then((res) => {
          this.$toast.success(res.data.message);
        })
        .catch((err) => {
          console.log(err.response);
        })
        .finally((res) => {
          console.log(res);
          this.cartstat3 = "block";
          this.cartstat4 = "none";
        });
    },
    addToCart() {
      this.cartstat2 = "block";
      this.cartstat1 = "none";

      let param = this.$route.params.product_id;
      let payload = {
        product_id: param,
      };
      this.$api
        .post(`https://biomed-backend.herokuapp.com/api/cart`, payload)
        .then((res) => {
          bus.$emit('updateCart');
          this.$toast.success(res.data.message);
        })
        .catch((err) => {
          this.$toast.error(err.response.data.message);
        })
        .finally((res) => {
          console.log(res);
          this.cartstat2 = "none";
          this.cartstat1 = "block";
        });
    },
  },
  mounted() {
    this.getProductDetails();
  },
  watch: {
    // eslint-disable-next-line no-unused-vars
    $route(to, from) {
      this.getProductDetails();
    },
  },
};
</script>