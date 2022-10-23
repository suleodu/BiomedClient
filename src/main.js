import Vue from 'vue'
import App from './App.vue'
import router from './router'
import http from "./axios-config";
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

// router.beforeEach((to, from, next) => {
//   let isLoggedIn = JSON.parse(localStorage.getItem('2@39$*8')) && JSON.parse(localStorage.getItem('auth_info'))[0].auth_token;
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     //  Route requires AUth? Check if logged in. If not, redirect to login page
//     if (!isLoggedIn || isLoggedIn == null) {
//       next({
//         name: 'Login'
//       })
//     } else {
//       next()
//     }
//   } else if (to.matched.some(record => record.meta.requiresVisitor)) {
//     //  Route requires AUth? Check if logged in. If not, redirect to login page
//     if (store.getters.loggedIn) {
//       next({
//         name: 'AnalyticsPage'
//       })
//     } else {
//       next()
//     }
//   } else {
//     next() // make sure to always call next()!
//   }
// });
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
