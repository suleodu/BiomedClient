import axios from "axios";
import swal from 'sweetalert'
let token = localStorage.getItem("2@39$*8");

const appAxios = axios.create({
    headers: {
        authorization: `Bearer ${token}`
    }
});

const onErrorResponse = async (error) => {

    if (error.response) {
        if (error.response.status === 401 &&  error.response.data.message === 'Unauthenticated.') {
            
            localStorage.clear();
            swal({
                title: "Unauthenticated",
                text: "You are not authorized to perform this action",
                icon: "error",
                // buttons: true,
                dangerMode: true,
              })
              .then((willDelete) => {
                if (willDelete) {
                    window.location = '/'
                } else {
                    window.location = '/'
                }
              });

        }else{
            return error.response;
        }
    }
  
    return error;
  }
  
  const onSuccessResponse = (response) => {
    return response;
  }
  
  appAxios.interceptors.response.use(
    onSuccessResponse,
    onErrorResponse
  )

export default appAxios;
