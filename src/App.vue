<template>
  <div id="app">
    <AppNavbar></AppNavbar>
    <PendingInvoice v-if="unpaidInvoice.length"></PendingInvoice>
    <router-view />
    <AppFooter></AppFooter>
  </div>
</template>

<script>
import AppNavbar from "./components/partials/AppNavbar.vue";
import AppFooter from "./components/partials/AppFooter.vue";
import PendingInvoice from "./views/Cart/PendingInvoice.vue";
export default {
  components: {
    AppNavbar,
    AppFooter,
    PendingInvoice
  },
  data() {
    return {
      unpaidInvoice:[],
    }
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
          this.dynamic_route(`/api/invoice/all_invoice/user_unpaid_invoices`)
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

    },
    mounted() {
      this.getUnpaidInvoices();
  
    },
};
</script>