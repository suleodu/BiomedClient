import Vue from 'vue'
import App from './App.vue'
import router from './router'
import http from "./axios-config";
import store from './store/Index'
import Toast from "vue-toastification";
// Import the CSS or use your own!
import options from "vue-toastification/dist/index.css";
Vue.use(Toast, options);
Vue.config.productionTip = false
Vue.prototype.$api = http;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
