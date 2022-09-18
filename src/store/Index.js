// import Vue from 'vue'
// import Vuex from 'vuex'
import { createStore } from "vuex";
import product from './Modules/product'
import category from './Modules/category'

// Vue.use(Vuex);

const store = createStore({
    namespace: true,
    modules: {
        product: product,
        category:category
    }
});

export default store;