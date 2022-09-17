import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
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
app.use(Toast, options);
app.mount('#app')
