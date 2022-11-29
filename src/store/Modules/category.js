import axios from 'axios';
const product = {
    state : {
        count : 0,
        loading : true,
        categories : [],
    },
    mutations : {
        GET_CATEGORY(state, data) {
            state.categories = data;
        },
        LOADING(state, data) {
            state.loading = data;
        }
    },
    actions : {
        get_category({ commit }, payload){
            commit('LOADING', true)
            axios.post(
                `https://biomed-backend.devdrizzy.online/api/category/all`,
                payload
            )
            .then((res) => {
                commit('GET_CATEGORY', res.data.data)
                commit('LOADING', false)
            })
        }
        
    },
  }

export default product;  