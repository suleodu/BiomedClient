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
                <a href="#" data-toggle="modal" data-target="#exampleModal2">
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
import { useToast } from "vue-toastification";
export default {
  components: {
    VueElementLoading,
  },
  setup() {
    // Get toast interface
    const toast = useToast();
    return { toast };
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
          "http://biomed-backend.herokuapp.com/api/auth/login",
          this.form
        )
        .then((res) => {
          this.toast.success(res.data.message);
          let auth_token = res.data.data.token;
          let auth_user = res.data.data.user;
          let tok1 = auth_token.slice(0, 6);
          let tok2 = auth_token.slice(6, 12);
          let tok3 = auth_token.slice(12, 18);
          let tok4 = auth_token.slice(18, 24);
          let tok5 = auth_token.slice(24, 30);
          let tok6 = auth_token.slice(30, 36);
          let tok7 = auth_token.slice(36, 42);
        //   console.log(tok1+tok2+tok3+tok4+tok5+tok6+tok7);
          localStorage.clear();
          localStorage.setItem('2@39$*8', tok1+this.generateTokens(36));
          localStorage.setItem('4+6$8&8', this.generateTokens(36)+tok2);
          for (let index = 0; index < 10; index++) {
            localStorage.setItem(this.generateTokens(7),JSON.stringify(this.generateTokens(42)));
            
          }
          localStorage.setItem('0$oR*2w', tok3 + this.generateTokens(30)+tok4);
          localStorage.setItem('||xm2Nw', tok5 + this.generateTokens(24)+tok7+tok6);
          localStorage.setItem('auth_user', JSON.stringify(auth_user));
          
        })
        .catch((err) => {
          this.toast.error(err.response.data.message);
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