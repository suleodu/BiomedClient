import axios from "axios";
let token = localStorage.getItem("2@39$*8");

const appAxios = axios.create({
    headers: {
        authorization: `Bearer ${token}`
    }
});
// axios.defaults.baseURL = 'http://localhost:3000'
// axios.interceptors.request.use(config => {
//   config.headers.common['Authorization'] = localStorage.getItem('token')
//   return config;
// }, (error) => {
//     if (error.response.status == 401) {
//         localStorage.clear();
//         window.location.href = '/login';
//     }
//     return Promise.reject(error);
//   })

export default appAxios;
