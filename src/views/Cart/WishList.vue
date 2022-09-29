<template>
  <div>
    <!-- banner-2 -->
    <div class="page-head_agile_info_w3l inner-checkout-page">
      <div class="container py-5">
        <h3 class="title-style text-white pt-5">My<span> Wishlist</span></h3>
        <ul class="w3_short pt-3 pb-5">
          <li>
            <router-link to="/" class="text-white">Home</router-link>
            <i class="fa fa-angle-right mx-2 text-white" aria-hidden="true"></i>
          </li>
          <li class="text-light">Wishlist</li>
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
    <!-- checkout page -->
    <div class="privacy py-5">
      <div class="container py-md-5 py-4">
        <div class="checkout-right">
          <!-- <h4 class="mb-sm-4 mb-3">
            Your shopping cart contains:
            <span>3 Products</span>
          </h4> -->
          <div class="table-responsive" v-if="products.length">
            <table class="timetable_sub">
              <vue-element-loading
                :active="loading"
                color="#FF6700"
                :text="loadingText"
                spinner="bar-fade-scale"
              />
              <thead>
                <tr>
                  <th>SL No.</th>
                  <th>Product</th>
                  <th>Product Name</th>

                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr class="rem1" v-for="(p, i) in products" :key="i">
                  <td class="invert">{{ i + 1 }}</td>
                  <td class="invert-image">
                    <a href="">
                      <img
                        :src="`${publicPath}assets/images/drug1.jpg`"
                        alt=""
                        class="img-responsive"
                      />
                    </a>
                  </td>
                  <td class="invert">{{ p.product_name }}</td>
                  <td class="invert">₦{{ p.price }}</td>
                  <td class="invert">
                    <div class="rem">
                      <!-- <div class="close1"></div> -->
                      <button
                        class="btn btn-secondary mr-2"
                        style="background: #628cc8; border: none"
                        @click="addToCart(p)"
                      >
                        Add to cart
                      </button>
                      <button class="btn btn-danger" @click="removeProduct(p)">
                        Remove
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3
            class="alert alert-primary text-center"
            style="background: #628cc8; color: white; border: none"
            v-else
          >
            You don't have any products yet
          </h3>
        </div>
      </div>
    </div>
    <!-- //checkout page -->

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
import VueElementLoading from "vue-element-loading";
import { useToast } from "vue-toastification";
export default {
  data() {
    return {
      publicPath: process.env.BASE_URL,
      products: {},
      loading: false,
      loadingText: "",
    };
  },
  setup() {
    // Get toast interface
    const toast = useToast();
    return { toast };
  },
  components: {
    VueElementLoading,
  },
  methods: {
    getWishListProducts() {
      this.loading = true;
      this.loadingText = "Please wait...";
      this.$api
        .get(`https://biomed-backend.herokuapp.com/api/wish-list`)
        .then((res) => {
          this.products = res.data.data;
        })
        .catch((err) => {
          console.log(err.response);
        })
        .finally((res) => {
          this.loading = false;
          this.loadingText = "";
          console.log(res);
        });
    },
    removeProduct(d) {
      this.loading = true;
      this.loadingText = "Please wait...";
      this.$api
        .get(
          `https://biomed-backend.herokuapp.com/api/wish-list/remove/${d.wid}`
        )
        .then((res) => {
          this.$toast.success(res.data.message);

          this.getWishListProducts();
        })
        .catch((err) => {
          console.log(err.response);
        })
        .finally((res) => {
          this.loading = false;
          this.loadingText = "";
          console.log(res);
        });
    },
    addToCart(p) {
      this.loading = true;
      this.loadingText = "Please wait...";
      let payload = {
        product_id: p.id,
      };
      this.$api
        .post(`https://biomed-backend.herokuapp.com/api/cart`, payload)
        .then((res) => {
          this.$toast.success(res.data.message);
          this.removeProduct(p)
        })
        .catch((err) => {
          this.$toast.error(err.response.data.message);
        })
        .finally((res) => {
          this.loading = false;
          this.loadingText = "";
          console.log(res);
        });
    },
  },
  mounted() {
    this.getWishListProducts();
  },
};
</script>