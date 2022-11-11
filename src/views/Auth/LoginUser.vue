<template>
    <div>
        <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title text-center">Log In</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form action="#" method="post">
                <vue-element-loading
              :active="loading"
              color="#FF6700"
              :text="loadingText"
              spinner="bar-fade-scale"
            />
              <div class="form-group">
                <input
                  type="email"
                  class="form-control"
                  placeholder="Email"
                  name="Email"
                  required=""
                  v-model="form.email"
                />
              </div>
              <div class="form-group">
                <input
                  type="password"
                  class="form-control"
                  placeholder="Password"
                  name="Password"
                  required=""
                  v-model="form.password"
                />
              </div>
              <div class="right-w3l">
                <input type="submit" class="form-control" value="Log in" @click.prevent="login"/>
              </div>
              <div class="sub-w3l">
                <div class="custom-control custom-checkbox mr-sm-2">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="customControlAutosizing"
                  />
                  <label
                    class="custom-control-label"
                    for="customControlAutosizing"
                    >Remember me?</label
                  >
                </div>
              </div>
              <p class="text-center dont-do mt-3">
                Don't have an account?
                <a href="#" data-toggle="modal" data-target="#register">
                  Register Now</a
                >
              </p>
              
            </form>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
// import { log } from 'dist/assets/js/minicart';
import VueElementLoading from "vue-element-loading";
export default {
  components: {
    VueElementLoading,
  },


  data() {
    return {
      publicPath: process.env.BASE_URL,
      loading: false,
      loadingText: "",
      form: {},
      rs:{}
    };
  },
  methods: {
    login() {
      this.loading = true;
      this.loadingText = "Creating user, Please wait...";
      this.$api
        .post(
          this.dynamic_route(`/api/auth/login`),
          this.form
        )
        .then((res) => {
          this.$toast.success(res.data.message);
          let auth_token = res.data.data.token;
          let auth_user = res.data.data.user;
          var myItem = localStorage.getItem('unique_id');
          localStorage.clear();
          localStorage.setItem('unique_id',myItem);
          for (let index = 0; index < 10; index++) {
            localStorage.setItem(this.generateTokens(7),JSON.stringify(this.generateTokens(42)));
            
          }
          localStorage.setItem('2@39$*8', auth_token);
          
          
          localStorage.setItem('0$oR*2w', this.generateTokens(30));
          localStorage.setItem('||xm2Nw', this.generateTokens(43));
          localStorage.setItem('auth_user', JSON.stringify(auth_user));
          location.reload();
          
        })
        .catch((err) => {
          this.$toast.error(err.response.data.message);
        })
        .finally((res) => {
          this.loading = false;
          this.loadingText = "";
          let ft = res;
          this.rs = ft;

        });
    },
    generateTokens(length) {
      var result = "";
      var characters =
        "ABC|DEFGHIJKLMNOPQ|R3STUVWXYZa|bcdefg|lmnopqrstuvwxyz0123456789";
      var charactersLength = characters.length;
      for (var i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      return result;
    },
  },
};
</script>