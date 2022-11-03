<template>
  <div id="app">
    <AppNavbar></AppNavbar>
    <PendingInvoice></PendingInvoice>
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
};
</script>