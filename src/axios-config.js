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
          var myItem = localStorage.getItem('unique_id');
          localStorage.clear();
          localStorage.setItem('unique_id',myItem);
            swal({
                title: "Unauthenticated",
                text: "Please Login or Create an Account to perform this action",
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
