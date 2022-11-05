import Vue from 'vue'
import App from './App.vue'
import router from './router'
import http from "./axios-config.js";
import store from './store/Index'
import Toast from "vue-toastification";
// import { fpjsPlugin } from '@fingerprintjs/fingerprintjs-pro-vue-v2';
// Import the CSS or use your own!
import options from "vue-toastification/dist/index.css";
Vue.use(Toast, options);
// Vue.use(fpjsPlugin, {
//   loadOptions: {
//     apiKey: "SjLS0XAPchLoeL1b1Nd1",
//     endpoint: "https://biomed.demiogegbo.com"
//   },
// });
Vue.config.productionTip = false
Vue.prototype.$api = http;

export const bus = new Vue();


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
