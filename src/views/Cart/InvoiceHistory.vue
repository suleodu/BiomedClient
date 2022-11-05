<template>
    <div style="background-color: #e5e5e5">
      <div>

        <div class="container py-5">
          <div class="row">
            <div class="col-md-3" v-if="unpaidInvoice.length">
                <div class="pay-card py-4">
                    <div class="container">
                        <p style="display:inline-block;">
                      You have {{ unpaidInvoice.length }} overdue invoice(s) with a
                      total balance due of
                    </p>
                    <h1 class="pt-2">
                        ₦{{ total }}
                    </h1>
                    </div>
                </div>
            </div>
            <div class="col-md-9 text-center">
              <div class="card">
                <div class="card-body" style="padding:0px !important;">
                  <div class="py-5">
                    <table class="table table-striped">
                        <tr>
                            <th>S/N</th>
                            <th>Invoice #</th>
                            <th>Invoice Date</th>
                            <th>Total</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                        <tr v-for="(inv,i) in invoices.data" :key="i">
                            <td>{{ i+1 }}</td>
                            <td>{{ inv.invoice_id }}</td>
                            <td>{{ inv.created_at }}</td>
                            <td>₦{{ inv.total }}</td>
                            <td>
                                <p class="badge badge-primary" v-if="inv.status == 'PAID'">{{ inv.status }}</p>
                                <p class="badge badge-danger" v-else>{{ inv.status }}</p>
                            </td>
                            <td>
                                <button class="btn btn-primary" @click="routeInvoice(inv.invoice_id)">
                                    View
                                </button>
                            </td>
                        </tr>
                    </table>
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
  table {
  width: 100% !important;
}
table tr {
    padding-top: 30px !important;
}
table tr th {
    font-weight: normal;
    font-family: 'Rubik';
    padding: 23px !important;
}
table tr td {
    font-weight: normal;
    font-family: 'Rubik';
    padding: 23px !important;
}
table tr td button{
    padding: 15px !important;
    width: 80px;
    background: #D6E5FF !important;
    color: #1061FE !important;
}
.pay-card {
    background: #1286ff !important;
    color: white;
    border-radius: 10px;
}

.pay-card p{
    color: white;
    font-family: 'Rubik';
    font-size: 14px;
}

.pay-card h1{
    color: white;
    font-family: 'Rubik';
    /* font-size: 14px; */
}
  </style>
  <script>
//   import VueElementLoading from "vue-element-loading";
//   import {bus} from '../../main'
  export default {
    data() {
      return {
        publicPath: process.env.BASE_URL,
        products: {},
        loading: false,
        checkloading: false,
        loadingText: "",
        invoices: {},
        unpaidInvoice:[],
        total: "",
      };
    },
  
    components: {
    //   VueElementLoading,
    },
    methods: {
      getCountries() {
        this.$api.get("../Countries.json").then((response) => {
          this.countries = response.data;
        });
      },
      getUnpaidInvoices() {
      this.loading = true;
      this.loadingText = "Please wait...";
      this.$api
        .get(
          `https://biomed-backend.herokuapp.com/api/invoice/all_invoice/user_unpaid_invoices`
        )
        .then((res) => {
          this.unpaidInvoice = res.data.data;
          this.total = this.unpaidInvoice.reduce(
            (total, a) => parseInt(a.total) + total,
            0
          );
        })
        .catch(() => {
        })
        .finally(() => {
          this.loading = false;
          this.loadingText = "";
        });
    },
      getAllInvoices() {
        this.loading = true;
        this.loadingText = "Please wait...";
        this.$api
          .get(`https://biomed-backend.herokuapp.com/api/invoice/all_invoice/user_invoices`)
          .then((res) => {
            this.invoices = res.data.data
          })
          .catch(() => {

          })
          .finally(() => {
            this.loading = false;
            this.loadingText = "";

          });
      },
      routeInvoice(id) {
        this.$router.push(`/invoice/${id}`)
      }
    },
    mounted() {
      this.getAllInvoices();
      this.getUnpaidInvoices();
  
    },
  };
  </script>