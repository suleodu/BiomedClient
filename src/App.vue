<template>
  <AppNavbar></AppNavbar>
  <router-view/>
  <AppFooter></AppFooter>
</template>

<script>
  import AppNavbar from './components/partials/AppNavbar.vue'
  import AppFooter from './components/partials/AppFooter.vue'
export default {
  components: {
    AppNavbar,
    AppFooter
  }
}
</script>