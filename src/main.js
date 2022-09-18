import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/Index';
import http from "./axios-config";
import Toast from "vue-toastification";
// Import the CSS or use your own!
import options from "vue-toastification/dist/index.css";

import authMixin from "./mixins/auth";
const app =createApp({
    extends: App,
    mixins: [authMixin],
}).use(router)
app.config.globalProperties.$api = http;
app.use(router);
app.use(store);
app.use(Toast, options);
app.mount('#app')
