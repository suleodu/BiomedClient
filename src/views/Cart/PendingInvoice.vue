<template>
  <div style="background: !important;" class="mt-3">
    <div class="container" v-if="invoices.length">
      <div class="container">
        <div class="container">
          <div class="container">
            <div class="container">
              <div class="container">
                <div class="container">
                  <div class="alert alert-warning aler">
                    <p style="display:inline-block;">
                      You have {{ invoices.length }} overdue invoice(s) with a
                      total balance due of ₦{{ total }}. Pay them now to get
                      your products.
                    </p>
                    <span data-toggle="tooltip" data-placement="top" title="Pay Now" class="bi bi-wallet-fill float-right" style="color:#d68f02; cursor: pointer;" @click="routeToInvoice()"></span>
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
.aler {
  background: #fff8eb !important;
  border: #fff8eb !important;
  padding: 20px;
}
.aler p {
  color: #d68f02 !important;
  font-family: "Rubik";
}
</style>
<script>
export default {
  data() {
    return {
      publicPath: process.env.BASE_URL,
      invoices: [],
      total: "",
    };
  },

  components: {},
  methods: {
    getUnpaidInvoices() {
      this.loading = true;
      this.loadingText = "Please wait...";
      this.$api
        .get(
          `https://biomed-backend.herokuapp.com/api/invoice/all_invoice/user_unpaid_invoices`
        )
        .then((res) => {
          this.invoices = res.data.data;
          this.total = this.invoices.reduce(
            (total, a) => parseInt(a.total) + total,
            0
          );
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
    routeToInvoice() {
      this.$router.push("/my-invoices");
    },
  },
  mounted() {
    this.getUnpaidInvoices();
  },
};
</script>