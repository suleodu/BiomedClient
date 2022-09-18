import axios from "axios";
let token;
if (localStorage.getItem("2@39$*8")) {
    let tok1 = localStorage.getItem("2@39$*8").slice(0, 6);
    let tok2 = localStorage.getItem("4+6$8&8").slice(36, 42);
    let tok3 = localStorage.getItem("0$oR*2w").slice(0, 6);
    let tok4 = localStorage.getItem("0$oR*2w").slice(36, 42);
    let tok5 = localStorage.getItem("||xm2Nw").slice(0, 6);
    let tok6 = localStorage.getItem("||xm2Nw").slice(36, 42);
    let tok7 = localStorage.getItem("||xm2Nw").slice(30, 36);
    token = tok1 + tok2 + tok3 + tok4 + tok5 + tok6 + tok7;
}
else {
    token = "";
}
const appAxios = axios.create({
    headers: {
        authorization: `Bearer ${token}`
    }
});


// before a request is made start the nprogress
// appAxios.interceptors.request.use(config => {
//     NProgress.start()
//     return config
// })

export default appAxios;
