// import Vue from 'vue'
// import Vuex from 'vuex'
import { createStore } from "vuex";
import Product from './Modules/Product'

// Vue.use(Vuex);

const store = createStore({
    namespace: true,
    modules: {
        product: Product,
    }
});

export default store;