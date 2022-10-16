<template>
  <div style="background-color: #e5e5e5" class="py-5">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-9">
          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="col-md-8">
                  <p class="invoice-title">
                    Invoice #{{ this.$route.params.invoice_id }}
                    <span
                      class="invoice-status badge badge-danger py-2 ml-4"
                      style="background: #f7d4d6; color: red"
                      >Unpaid</span
                    >
                  </p>
                  <div>
                    <div class="invoice-details pt-4">
                      <p class="text-black">Invoiced To:</p>
                      <p>{{ invoice[0].address.name }}</p>
                      <p>{{ invoice[0].address.email }}</p>
                      <p>{{ invoice[0].address.phone }}</p>
                      <p>{{ invoice[0].address.address }}</p>
                      <p>{{ invoice[0].address.city }}</p>
                      <p>{{ invoice[0].address.country }}</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <ul class="list-info list-info-50">
                    <li>
                      <span class="list-info-text">Invoice Date: </span>
                      <span class="list-info-title">{{
                        invoice[0].created_at
                      }}</span>
                    </li>
                  </ul>
                </div>
                <div class="col-md-12 mt-5">
                  <div class="invoice-details">
                    <p class="text-black pb-4">Invoiced Items</p>
                    <div class="table-responsive">
                      <table class="table table-condensed">
                        <thead>
                          <tr>
                            <th width="61%">Product</th>
                            <th width="20%"></th>
                            <th width="19%" class="">Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(inv, i) in invoice" :key="i">
                            <td colspan="2">
                              {{ inv.product.product_name }}
                            </td>
                            <td class="">₦{{ inv.product_price }}</td>
                          </tr>
                          <tr class="sub-total-row first">
                            <td></td>
                            <td>Sub Total</td>
                            <td>₦{{ subtotal }}</td>
                          </tr>
                          <tr class="sub-total-row">
                            <td></td>
                            <td>
                              Coupon:
                              {{
                                invoice[0].coupon.description +
                                "(" +
                                invoice[0].coupon.percent +
                                "%)"
                              }}
                            </td>
                            <td>
                              ₦{{
                                (invoice[0].coupon.percent / 100) * subtotal
                              }}
                            </td>
                          </tr>

                          <tr class="total-row">
                            <td></td>
                            <td class="h3">Total</td>
                            <td class="h3">
                              ₦{{
                                subtotal -
                                (invoice[0].coupon.percent / 100) * subtotal
                              }}
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
        <div class="col-md-3">
          <div class="main-sidebar">
            <div class="card">
              <div class="container py-5">
                <div class="sidebar-sticky">
                <div
                  class="
                    panel panel-summary panel-summary-primary
                    view-invoice
                    panel-view-invoice
                  "
                >
                  <div class="panel-body">
                    <div class="price price-sm price-left-h">
                      <span class="price-title">Total Due</span>
                      <h2 class="price-amount mt-2">N9,900.00</h2>
                    </div>
                  </div>
                  <hr>
                  <div class="panel-footer">
                    <label class="pb-2">Payment Method:</label>
                    <form
                      method="post"
                    >
                      <div class="form-group">
                        <input
                          type="hidden"
                          name="token"
                          value="0ad222ba181e50710347dbe702225aa862930b2f"
                        /><select
                          class="form-control select-inline"
                          v-model="gateway"
                          name="gateway"
                        >
                          <option value="Autocredit" selected="selected">
                            Autocredit
                          </option>
                        </select>
                      </div>
                    </form>
                    <span class="small-text"></span>
                    <div
                      class="payment-form payment-btn-container"
                      data-btntext="Make Payment"
                      data-btnsubscribetext="Subscribe"
                    >
                      <p></p>

                      <button
                        class="btn btn-primary mt-2"
                        id="paystack"
                        style="width:100%; background-color: #d6e4ff; color:#3770b6; font-weight: bolder; height: 55px; padding-top: 8px;"
                        
                        >Pay with {{ gateway }}</button
                      >
                      <button
                        class="btn btn-primary mt-2"
                        id="paystack"
                        style="width:100%; background-color: #d6e4ff; color:#3770b6; font-weight: bolder; height: 55px; padding-top: 8px;"
                        
                        >Download Invoice</button
                      >
                      &nbsp;
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

    <style>
.app-main {
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
}

.app-main .main-body {
  flex: 1 0 auto;
}
.invoice-title {
  font-size: 40px;
  font-weight: light;
  line-height: var(--line-height-h2);
  color: var(--text-heading-color);
}

.invoice-status {
  font-weight: light;
  font-size: 14px;
  align-items: center;
  border-radius: 5px;
}

ul li {
  list-style-type: none;
}

.text-black {
  color: black !important;
  font-weight: 500;
}
.main-sidebar {
  position: sticky;
}
.main-sidebar .card {
  background-color: #3770b6;
  position: sticky !important;
  color: white !important;
}
.price-amount {
  color: white;
  font-weight: bolder;
}
</style>
<script>
// import VueElementLoading from "vue-element-loading";
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
      coupon: "",
      couponData: {},
      couponAmount: "",
      total: "",
      invoice: {},
      gateway:"Autocredit"
    };
  },

  components: {
    // VueElementLoading,
  },
  methods: {
    generateInvoice() {
      let invoice_id = this.$route.params.invoice_id;
      this.checkloading = true;
      this.loadingText = "Please wait...";
      this.$api
        .get(`https://biomed-backend.herokuapp.com/api/invoice/${invoice_id}`)
        .then((res) => {
          this.$toast.success(res.data.message);
          this.invoice = res.data.data;
          this.getSubtotal();
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
    getSubtotal() {
      this.subtotal = this.invoice.reduce(
        (subtotal, a) => a.product_price + subtotal,
        0
      );
    },
  },
  mounted() {
    this.generateInvoice();
  },
};
</script>