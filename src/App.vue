<template>
  <div id="app">
    <AppNavbar v-if="this.$router.currentRoute.fullPath !== '/auth/login' || this.$router.currentRoute.fullPath !== '/auth/register'"></AppNavbar>
    <router-view />
    <AppFooter v-if="this.$router.currentRoute.fullPath !== '/auth/login' || this.$router.currentRoute.fullPath !== '/auth/register'"></AppFooter>
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
    mounted() {
      console.log(this.$router.currentRoute.fullPath);
    }
};
</script>