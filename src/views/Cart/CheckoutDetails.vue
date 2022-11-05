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
    <div
      class="modal fade"
      id="addressModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Change Address</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <vue-element-loading
                :active="loading"
                color="#FF6700"
                :text="loadingText"
                spinner="bar-fade-scale"
              />
              <div
                class="col-md-12 mb-3"
                v-for="(a, i) in myaddresses"
                :key="i"
              >
                <div class="row">
                  <div class="col-md-1">
                    <input
                      type="radio"
                      class="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div class="col-md-11">
                    <p style="font-weight: bolder; color: black">
                      {{ a.name }}
                    </p>
                    <p>
                      {{ a.address }}
                    </p>
                    <p>
                      {{ a.phone }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-primary"
              @click.prevent="changeAddress"
            >
              Change
            </button>
          </div>
        </div>
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
    <div style="background-color: #f5f5f5 !important">
      <div class="container py-5">
        <div class="row">
            <div class="col-md-2"></div>
          <div class="col-md-8">
            <div class="card mb-3">
              <vue-element-loading
                :active="loading"
                color="#FF6700"
                :text="loadingText"
                spinner="bar-fade-scale"
              />
              <div class="card-header">
                <p
                  style="
                    display: inline-block;
                    color: black;
                    font-weight: bolder;
                  "
                >
                  ADDRESS DETAILS
                </p>
                <button
                  type="button"
                  class="btn btn-primary float-right btn-sm"
                  style="background: var(--primary-color)"
                  data-toggle="modal"
                  data-target="#addressModal"
                >
                  CHANGE ADDRESS
                </button>
              </div>
              <div class="card-body">
                <p style="font-weight: bolder; color: black">
                  {{ address.name }}
                </p>
                <p>
                  {{ address.address }}
                </p>
                <p>
                  {{ address.phone }}
                </p>
              </div>
            </div>
            <div class="card">
              <vue-element-loading
                :active="loading"
                color="#FF6700"
                :text="loadingText"
                spinner="bar-fade-scale"
              />
              <div class="card-header" style="background-color: white">
                <p
                  style="
                    display: inline-block;
                    color: black;
                    font-weight: bolder;
                  "
                >
                  PAYMENT
                </p>
              </div>
              <div class="card-body">
                <p style="font-weight: bolder; color: black" class="mb-3">
                  Got a voucher Use it below:
                </p>
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    name=""
                    id=""
                    placeholder="Enter Voucher Code"
                  />
                  <div class="input-append">
                    <button
                      type="button"
                      class="btn btn-primary float-right btn-sm"
                      style="background: var(--primary-color); height: 50px"
                    >
                      ADD VOUCHER
                    </button>
                  </div>
                </div>
                <div class="mt-4">
                  <div class="row">
                    <div class="col-md-10">
                      <p style="color: black">Subtotal</p>
                    </div>
                    <div class="col-md-2">
                        <p style="color: black; font-weight: bolder;">
                            ₦ 4,086
                        </p>
                    </div>
                    <hr >
                    <div class="col-md-10">
                      <p style="color: black">Total</p>
                    </div>
                    <div class="col-md-2">
                        <p style="color: black; font-weight: bolder;">
                            ₦ 4,086
                        </p>
                    </div>
                    <div class="col-md-12 mt-5">
                        <button
                  type="button"
                  class="btn btn-primary"
                  style="background: var(--primary-color); width: 100%; height: 45px; font-weight: bolder;">
                
                  CONFIRM PAYMENT
                </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-2 mt-5">
            
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
      dis: "none",
      dis2: "block",
      address: {},
      myaddresses: {},
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
    getCartItems() {
      this.loading = true;
      this.loadingText = "Please wait...";
      this.$api
        .get(`https://biomed-backend.herokuapp.com/api/cart`)
        .then((res) => {
          this.products = res.data.data;
        })
        .catch(() => {

        })
        .finally(() => {
          this.loading = false;
          this.loadingText = "";

        });
    },
    getAllAddresses() {
      this.loading = true;
      this.loadingText = "Please wait...";
      this.$api
        .get(`https://biomed-backend.herokuapp.com/api/user-address`)
        .then((res) => {
          this.myaddresses = res.data.data;
        })
        .catch(() => {

        })
        .finally(() => {
          this.loading = false;
          this.loadingText = "";

        });
    },
    getAllAddress() {
      this.loading = true;
      this.loadingText = "Please wait...";
      this.$api
        .get(`https://biomed-backend.herokuapp.com/api/user-address`)
        .then((res) => {
          let addres = [];
          for (let i = 0; i < res.data.data.length; i++) {
            if (res.data.data[i].is_default == "yes") {
              addres.push(res.data.data[i]);
              this.address = addres[0];
            }
          }
        })
        .catch(() => {

        })
        .finally(() => {
          this.loading = false;
          this.loadingText = "";

        });
    },
  },
  mounted() {
    this.getAllAddress();
    this.getAllAddresses();
  },
};
</script>