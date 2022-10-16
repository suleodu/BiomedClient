<template>
  <div style="background-color: #e5e5e5">
    <div>
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
                      <h5 class="modal-title" id="exampleModalLabel">
                        Create Address
                      </h5>
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
                        <div class="col-md-6 mb-3">
                          <input
                            type="text"
                            class="form-control"
                            v-model="address.name"
                            placeholder="Name"
                          />
                        </div>
                        <div class="col-md-6 mb-3">
                          <input
                            type="email"
                            class="form-control"
                            v-model="address.email"
                            placeholder="Email"
                          />
                        </div>
                        <div class="col-md-6 mb-3">
                          <input
                            type="tel"
                            class="form-control"
                            v-model="address.phone"
                            placeholder="Phone"
                          />
                        </div>
                        <div class="col-md-6 mb-3">
                          <select
                            name=""
                            class="form-control"
                            v-model="address.country"
                            id=""
                          >
                            <option value="">--Select Country--</option>
                            <option
                              :value="c.name"
                              v-for="(c, i) in countries"
                              :key="i"
                            >
                              {{ c.name }}
                            </option>
                          </select>
                        </div>
                        <div class="col-md-6 mb-3">
                          <input
                            type="text"
                            class="form-control"
                            v-model="address.state"
                            placeholder="State"
                          />
                        </div>
                        <div class="col-md-6 mb-3">
                          <input
                            type="text"
                            class="form-control"
                            v-model="address.city"
                            placeholder="City"
                          />
                        </div>
                        <div class="col-md-12 mb-3">
                          <textarea
                            name=""
                            id=""
                            cols="30"
                            rows="2"
                            placeholder="Address"
                            v-model="address.address"
                            class="form-control"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-primary"
                        @click.prevent="saveAddress"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
      <div class="container py-5">
        <div class="row" v-if="!products.length">
          <div class="col-md-12 text-center">
            <div class="card">
              <div class="card-body">
                <div class="container py-5">
                  <p class="text-black mb-3">Your cart is empty!</p>
                  <p class="mb-3">
                    Browse our categories and discover our best deals!
                  </p>
                  <router-link to="/products"
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
        <div class="row" v-else>
          <div class="col-md-8">
            <div class="privacy">
              <div class="container">
                <div class="checkout-right">
                  <!-- <h4 class="mb-sm-4 mb-3">
              Your shopping cart contains:
              <span>3 Products</span>
            </h4> -->
                  <div class="card">
                    <div class="card-body">
                      <h4>Shopping Cart</h4>
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
                            <th>Quantity</th>
                            <th>Remove</th>
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
                                    {{ p.product.product_name }}
                                  </p>
                                </div>
                              </div>
                            </td>

                            <td class="invert">₦{{ p.calculated_amount }}</td>
                            <td class="invert">
                              <div class="quantity">
                                <div class="quantity-select">
                                  <div
                                    class="entry value-minus"
                                    @click="changeQuantity(p, 'de', i)"
                                  >
                                    &nbsp;
                                  </div>
                                  <div class="entry value">
                                    <div
                                      class="spinner-border text-warning"
                                      :class="'d-' + dis"
                                      style="color: #ff884f !important"
                                    ></div>
                                    <p :class="'d-' + dis2">
                                      {{ p.quantity }}
                                    </p>
                                  </div>
                                  <div
                                    class="entry value-plus active"
                                    @click="changeQuantity(p, 'in', i)"
                                  >
                                    &nbsp;
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td class="invert text-center pt-4">
                              <div class="rem align-items-center">
                                <div
                                  class="close1"
                                  @click="removeProduct(p)"
                                ></div>
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
          <div class="col-md-4">
            <div class="card">
              <vue-element-loading
                          :active="checkloading"
                          color="#FF6700"
                          :text="loadingText"
                          spinner="bar-fade-scale"
                        />
              <div class="card-body">
                <h4>Cart Summary</h4>
                <h5>{{ products.length }} Items</h5>
                <hr />
                <div class="row py-2">
                  <div class="col-md-6">
                    <p>SUBTOTAL</p>
                    <h4 style="font-weight: normal; display: block;">₦{{ subtotal }}</h4>
                    <h4 style="font-weight: normal; display: block; color: var(--primary-color)" v-if="couponAmount">-₦{{ couponAmount }}</h4>
                  </div>
                  <div class="col-md-6">
                    <p>TOTAL</p>
                    <h4 style="font-weight: normal">₦{{ total }}</h4>
                  </div>
                </div>
                <hr />
                <div class="row py-2">
                  <div class="col-md-6">
                    <p style="font-size:14px;">DELIVERY ADDRESS</p>
                  </div>
                  <div class="col-md-6">

                    <button
                      type="button"
                      class="btn btn-primary float-right btn-sm"
                      data-toggle="modal"
                      data-target="#addressModal"
                    >
                      Add New Address
                    </button>
                  </div>
                </div>
                <h4>{{ defaultAddress.name }}</h4>
                <p class="text-dark">{{ defaultAddress.address }}</p>
                <p class="text-dark">{{ defaultAddress.phone }}</p>
                <hr />
                <p style="font-weight: bolder; color: black" class="mb-3">
                  Got a voucher Use it below:
                </p>
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    name=""
                    id=""
                    v-model="coupon"
                    placeholder="Enter Coupon Code"
                  />
                  <div class="input-append">
                    <button
                      type="button"
                      class="btn btn-primary float-right btn-sm"
                      style="background: var(--primary-color); height: 50px"
                      @click.prevent="verifyCoupon()"
                    >
                      ADD COUPON
                    </button>
                  </div>
                </div>
                <hr />
                <button
                  @click.prevent="generateInvoice()"
                  class="btn btn-primary w-100"
                  style="background: var(--primary-color)"
                  >CHECKOUT (₦{{ total }})</button
                >
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
    <style>
.card {
  border: none;
  --webkit-box-shadow: 0 4px 24px 0 rgb(34 41 47/10%);
  color: black !important;
}
.card .card-body h4 {
  font-size: 18px;
  font-weight: bold;
  display: inline-block;
}
.card .card-body h5 {
  font-size: 18px;
  font-weight: bold;
  display: inline-block;
  float: right;
}
</style>
<script>
import VueElementLoading from "vue-element-loading";
import $ from "jquery";
export default {
  data() {
    return {
      publicPath: process.env.BASE_URL,
      products: {},
      loading: false,
      checkloading: false,
      loadingText: "",
      dis: "none",
      dis2: "block",
      subtotal: "",
      defaultAddress: {},
      address:{},
      countries: {},
      coupon:"",
      couponData:{},
      couponAmount:"",
      total:""
    };
  },

  components: {
    VueElementLoading,
  },
  methods: {
    getCountries() {
      this.$api.get("../Countries.json").then((response) => {
        this.countries = response.data;
      });
    },
    getCartItems() {
      this.loading = true;
      this.loadingText = "Please wait...";
      this.$api
        .get(`https://biomed-backend.herokuapp.com/api/cart`)
        .then((res) => {
          this.products = res.data.data.map((item) => {
            let data = item;
            data.calculated_amount =
              Number(data.product.discount_price) * Number(data.quantity);

            return data;
          });
          this.subtotal = this.products.reduce(
            (subtotal, a) => a.calculated_amount + subtotal,
            0
          );
          this.total = this.products.reduce(
            (subtotal, a) => a.calculated_amount + subtotal,
            0
          );
          // console.log(this.products)
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
    verifyCoupon() {
      this.checkloading = true;
      this.loadingText = "Please wait...";
      let getPercentage;
      this.$api
        .get(`https://biomed-backend.herokuapp.com/api/coupon/get-coupon/${this.coupon}`)
        .then((res) => {
           this.couponData = res.data.data;
            getPercentage = this.couponData.percent/100 * this.subtotal
            this.couponAmount = getPercentage;
            this.total = this.total - this.couponAmount;
        })
        .catch((err) => {
          this.$toast.error(err.response.data.message);
        })
        .finally((res) => {
          this.checkloading = false;
          this.loadingText = "";
          console.log(res);
        });
    },
    getDefAddress() {
      this.loading = true;
      this.loadingText = "Please wait...";
      this.$api
        .get(`https://biomed-backend.herokuapp.com/api/user-address`)
        .then((res) => {
          let addres = [];
          for (let i = 0; i < res.data.data.length; i++) {
            if (res.data.data[i].is_default == "yes") {
              addres.push(res.data.data[i]);
              this.defaultAddress = addres[0];
            }
          }
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
        .get(`https://biomed-backend.herokuapp.com/api/cart/remove/${d.id}`)
        .then((res) => {
          this.$toast.success(res.data.message);

          this.getCartItems();
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
    saveAddress() {
      this.loading = true;
      this.loadingText = "Please wait...";
      this.$api
        .post(
          `https://biomed-backend.herokuapp.com/api/user-address`,
          this.address
        )
        .then((res) => {
          this.$toast.success(res.data.message);
          this.makeDefault(res.data.data);
          $("#addressModal").modal('hide');
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
    generateInvoice() {
      this.checkloading = true;
      this.loadingText = "Please wait...";
      let payload = {
        coupon: this.coupon
      }
      this.$api
        .post(
          `https://biomed-backend.herokuapp.com/api/invoice/generate_invoice`, payload)
        .then((res) => {
          this.$toast.success(res.data.message);
          let invoice = res.data.data
          this.$router.push(`/invoice/${invoice.invoice_id}`)
        })
        .catch((err) => {
          console.log(err.response);
        })
        .finally((res) => {
          this.checkloading = false;
          this.loadingText = "";
          console.log(res);
        });
    },
    makeDefault(data) {
      this.loading = true;
      this.loadingText = "Please wait...";
      this.$api
        .patch(
          `https://biomed-backend.herokuapp.com/api/user-address/make-default/${data.id}`
        )
        .then((res) => {
          this.$toast.success(res.data.message);
          this.getDefAddress();
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
    changeQuantity(p, a) {
      if (a == "de") {
        if (p.quantity <= 1) {
          return this.$toast.error("You can't add less than one");
        }
      }
      this.dis = "block";
      this.dis2 = "none";
      let payload = {
        action: a,
        product_id: 500,
      };
      this.$api
        .patch(
          `https://biomed-backend.herokuapp.com/api/cart/update-quantity/${p.id}`,
          payload
        )
        .then((res) => {
          this.getCartItems();
          this.$toast.success(res.data.message);
        })
        .catch((err) => {
          console.log(err.response);
        })
        .finally((res) => {
          this.dis = "none";
          this.dis2 = "block";
          console.log(res);
        });
    },
  },
  mounted() {
    this.getCartItems();
    this.getDefAddress();
    this.getCountries();

  },
};
</script>