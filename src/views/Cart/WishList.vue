<template>
  <div style="background-color: #e5e5e5">
    <div>
      <div class="container py-5">
        <div class="row" v-if="!products.length">
          <div class="col-md-12 text-center">
            <div class="card">
              <div class="card-body">
                <div class="container py-5">
                  <p class="text-black mb-3">Your Wishlist is empty!</p>
                  <p class="mb-3">
                    Browse our categories and discover our best deals!
                  </p>
                  <router-link
                    to="/products"
                    class="btn btn-primary"
                    style="background: var(--primary-color)"
                  >
                    Browse
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row mr-5 ml-5" v-else>
          <div class="col-md-12">
            <div class="privacy">
              <div class="container">
                <div class="checkout-right">
                  <!-- <h4 class="mb-sm-4 mb-3">
              Your shopping cart contains:
              <span>3 Products</span>
            </h4> -->
                  <div class="card">
                    <div class="card-body">
                      <h4>Wishlist</h4>
                      <hr />
                      <table class="table table-bordered">
                        <vue-element-loading
                          :active="loading"
                          color="#FF6700"
                          :text="loadingText"
                          spinner="bar-fade-scale"
                        />
                        <thead>
                          <tr>
                            <!-- <th>#</th> -->
                            <th col="10%">Product</th>
                            <th>Price</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr class="rem1" v-for="(p, i) in products" :key="i">
                            <!-- <td class="invert">{{ i + 1 }}</td> -->
                            <td class="invert-image" style="width: 40%">
                              <div class="row">
                                <div class="col-md-4">
                                  <img
                                    :src="`${publicPath}assets/images/drug1.jpg`"
                                    alt=""
                                    class="img-responsive"
                                    width="100%"
                                  />
                                </div>
                                <div class="col-md-8">
                                  <p>
                                    {{ p.product_name }}
                                  </p>
                                </div>
                              </div>
                            </td>

                            <td class="invert">₦{{ p.calculated_amount }}</td>
                            <td class="invert text-center pt-4">
                              <div class="row">
                                <div class="col-md-3">

                                  <i
                                    class="fa fa-times fa-2x"
                                    @click="removeProduct(p)"
                                  ></i>
                                </div>
                                <div class="col-md-6">

                                  <i class="fa fa-shopping-cart fa-2x float-left" @click="addToCart(p)"  aria-hidden="true"></i>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
        .post(`https://biomed-backend.herokuapp.com/api/wish-list/get`, {
          unique_id: localStorage.getItem("unique_id"),
        })
        .then((res) => {
          this.products = res.data.data;
        })
        .catch(() => {})
        .finally(() => {
          this.loading = false;
          this.loadingText = "";
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
        .catch(() => {})
        .finally(() => {
          this.loading = false;
          this.loadingText = "";
        });
    },
    addToCart(p) {
      this.loading = true;
      this.loadingText = "Please wait...";
      var unique_id = localStorage.getItem("unique_id");
      // check if the unique_id exist in the localStorage

      if (!unique_id) {
        localStorage.setItem("unique_id", this.uniqueid());
        unique_id = localStorage.getItem("unique_id");
      }

      let payload = {
        product_id: p.id,
        unique_id: localStorage.getItem("unique_id"),
      };
      this.$api
        .post(`https://biomed-backend.herokuapp.com/api/cart`, payload)
        .then((res) => {
          this.$toast.success(res.data.message);
          this.removeProduct(p);
        })
        .catch((err) => {
          this.$toast.error(err.response.data.message);
        })
        .finally(() => {
          this.loading = false;
          this.loadingText = "";
        });
    },
  },
  mounted() {
    this.getWishListProducts();
  },
};
</script>