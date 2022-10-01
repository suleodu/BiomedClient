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
// })


// before a request is made start the nprogress
// appAxios.interceptors.request.use(config => {
//     NProgress.start()
//     return config
// })

export default appAxios;
