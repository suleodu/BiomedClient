<template>
  <div>
    <!-- banner-2 -->
    <div class="page-head_agile_info_w3l inner-checkout-page">
      <div class="container py-5">
        <h3 class="title-style text-white pt-5">My<span> Cart</span></h3>
        <ul class="w3_short pt-3 pb-5">
          <li>
            <router-link to="/" class="text-white">Home</router-link>
            <i class="fa fa-angle-right mx-2 text-white" aria-hidden="true"></i>
          </li>
          <li class="text-light">Cart</li>
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
                  <th>#</th>
                  <th>Product</th>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                <tr class="rem1" v-for="(p,i) in products" :key="i">
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
                  <td class="invert">{{ p.product.product_name }}</td>
                  <td class="invert">₦{{ p.product.price}}</td>
                  <td class="invert">
									<div class="quantity">
										<div class="quantity-select">
											<div class="entry value-minus" @click="changeQuantity(p, 'de', i)">&nbsp;</div>
											<div class="entry value">
                        <div class="spinner-border text-warning" :class="'d-'+dis" style="color:#ff884f !important;"></div>
                        <p :class="'d-'+dis2">
                          {{ p.quantity }}
                        </p></div>
											<div class="entry value-plus active" @click="changeQuantity(p, 'in', i)">&nbsp;</div>
										</div>
									</div>
								</td>
                  <td class="invert">
                    <div class="rem">
                      <div class="close1" @click="removeProduct(p)"></div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 class="alert alert-primary text-center" style="background:#628cc8; color:white; border: none;" v-else>
            You have an empty cart
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
      dis:'none',
      dis2:'block'
    };
  },
  setup() {
    // Get toast interface
    const toast = useToast();
    return { toast };
  },
  components: {
    VueElementLoading
  },
  methods: {
        getCartItems() {
            this.loading = true;
            this.loadingText = "Please wait...";
            this.$api.get(`https://biomed-backend.herokuapp.com/api/cart`)
            .then((res) => {
                this.products = res.data.data;
            })
            .catch((err) => {
                console.log(err.response);
            })
            .finally((res) => {
                this.loading = false;
                this.loadingText = ""
                console.log(res);
            })
        },
        removeProduct(d) {
            this.loading = true;
            this.loadingText = "Please wait...";
            this.$api.get(`https://biomed-backend.herokuapp.com/api/cart/remove/${d.id}`)
            .then((res) => {
                          this.toast.success(res.data.message);

                this.getCartItems();  
            })
            .catch((err) => {
                console.log(err.response);
            })
            .finally((res) => {
                this.loading = false;
                this.loadingText = ""
                console.log(res);
            })
        },
        changeQuantity(p, a, ) {
          this.dis = 'block';
          this.dis2 = 'none';
            let payload = {
              action:a,
              product_id:500
            }
            this.$api.patch(`https://biomed-backend.herokuapp.com/api/cart/update-quantity/${p.id}`, payload)
            .then((res) => {
                this.products = res.data.data;
                          this.toast.success(res.data.message);

            })
            .catch((err) => {
                console.log(err.response);
            })
            .finally((res) => {
                this.dis = 'none';
          this.dis2 = 'block';
                console.log(res);
            })
        }
    },
    mounted() {
        this.getCartItems();
    }
};
</script>