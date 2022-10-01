import Vue from 'vue'
import Vuex from 'vuex'
import product from './Modules/product'
import category from './Modules/category'

// Vue.use(Vuex);

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
    },
    getters: {
    },
    mutations: {
    },
    actions: {
    },
    modules: {
        product: product,
        category: category
    }
})

