<template>
  <div id="app">
    <AppNavbar></AppNavbar>
    <router-view />
    <AppFooter></AppFooter>
  </div>
</template>

<script>
import AppNavbar from "./components/partials/AppNavbar.vue";
import AppFooter from "./components/partials/AppFooter.vue";
export default {
  components: {
    AppNavbar,
    AppFooter,
  },
  data() {
    return {
    }
  },
  methods: {

    },
};
</script>