import axios from 'axios';
const product = {
    state : {
        count : 0,
        loading : false,
        categories : [],
    },
    mutations : {
        GET_CATEGORY(state, data) {
            state.categories = data;
        },
    },
    actions : {
        get_category({ commit }, payload){
            axios.post(
                "https://biomed-backend.herokuapp.com/api/category/all",
                payload
            )
            .then((res) => {
                commit('GET_CATEGORY', res.data.data)
            })
        }
        
    },
  }

export default product;  