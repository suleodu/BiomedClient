<template>
    <div>
        <div class="auth-page">
            <div class="container">
                <div class="row">
                    <div class="col-md-3"></div>
                    <div class="col-md-5 py-5">
                        <img src="../../../public/assets/img/logo.png" alt="" class="img-fluid center mb-5"
                            width="40%" />
                        <div class="card pt-4 pb-5 mb-4">
                            <div class="container">
                                <div class="login-form">
                                    <h1 class="text-center" style="font-weight: bold; color: #3f86ca">
                                        Login to your account
                                    </h1>
                                    <p class="text-center" style="color: #4a5568; text-align: center !important">
                                        Securely login to your Biomed Account
                                    </p>
                                    <form @submit.prevent="login">
                                        <VueElementLoading :active="loading" spinner="bar-fade-scale"
                                            color="var(--primary)" text="Loading.." duration="0.6" />
                                        <p style="color: #4a5568; font-weight: 700">Email</p>
                                        <input v-model="form.email" :rules="emailRules" label="Email"
                                            class="form-control mb-3" type="email" required />
                                        <p style="color: #4a5568; font-weight: 700">Password</p>

                                        <input v-model="form.password" :rules="passwordRules" label="Password"
                                            type="password" class="form-control" v-if="!showPassword" required />

                                        <input v-model="form.password" :rules="passwordRules" label="Password"
                                            class="form-control mb-5" type="text" required v-if="showPassword" />

                                        <button type="submit" class="btn-block btn auth-btn btn-lg btn-primary"
                                            @click.prevent="login">
                                            LOG IN
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="others">
                            <p>
                                <router-link style="color: black; font-weight: 600" to="/auth/register">
                                    Don't have an account? Register
                                </router-link>
                            </p>
                            <p>
                                <router-link style="color: black; font-weight: 600" to="/auth/forgot-password">
                                    Forgot Password?
                                </router-link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <footer class="auth-footer">
        2019 &copy; Sing App Vue Admin Dashboard Template - Made by <a href="https://flatlogic.com/">Flatlogic</a>
      </footer> -->
    </div>
</template>
<style scoped>
.card {
    border-radius: 0 !important;
    border: none !important;
    box-shadow: 0 4px 24px 0 rgb(34 41 47 / 40%);
    border-radius: 25px 25px 25px 0px !important;
    height: auto;
    font-family: "Rubik";
    /* width: ; */
}

input {
    padding-top: 28px !important;
    padding-bottom: 28px !important;
    border: none;
    background: #e8f0fe !important;
}

.card h1 {
    font-family: "Rubik";
    font-size: 25px !important;
}

.auth-page {
    background-image: url("https://hypelbase.devdrizzy.online/img/vuesax-login-bg.jpg");
    padding-top: 15px !important;
}

.auth-btn {
    margin-top: 35px !important;
    padding-top: 10px !important;
    padding-bottom: 10px !important;
    font-family: "Rubik";
    font-weight: 700;
    border-radius: 10px 10px 10px 0px !important;
}

.login-wrapper {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    padding-left: 100px;
    padding-right: 100px;
}

.custom-btn {
    color: #ffffff;
    background-color: #ec570d;
    /* background-image: linear-gradient(135deg, #f27233 0%, #f27233 100%) !important; */
}

.others {
    font-family: "Rubik";
    font-size: 14px !important;
    font-weight: 500 !important;
    text-align: center;
    color: #000000 !important;
}

.others p router-link {
    color: #000000 !important;
}

.widget-auth-info {
    color: #000000 !important;
    /* font-weight: 500; */
    margin-top: 20px;
    border-top: 1px solid rgb(213, 216, 222);
}

.center {
    display: block;
    margin-left: auto;
    margin-right: auto;
}

.set {
    width: 100px;
    height: 400px;
}

.set img {
    min-height: 508px;
    object-fit: cover;
    max-width: 77%;
    max-height: 504px;
    width: 100%;
}

.login-form {
    padding-left: 20px !important;
    padding-right: 20px !important;
}

@media screen and (max-width: 798px) {
    .login-wrapper {
        width: 100%;
        padding-left: 12px;
        padding-top: 50px;
        padding-right: 12px;
    }

    .login-form {
        padding: 10px;
    }
}
</style>
  
<script>
import VueElementLoading from "vue-element-loading";
import axios from "axios";

export default {
    name: "LoginPage",
    components: { VueElementLoading },
    data() {
        return {
            valid: false,
            errorMessage: null,
            form: {},
            passwordRules: [
                (v) => !!v || "Password is required",
                (v) => v.length >= 8 || "Password should be at least 8 characters",
            ],
            emailRules: [
                (v) => !!v || "E-mail is required",
                (v) => /.+@.+/.test(v) || "E-mail must be valid",
            ],
            loading: false,
            showPassword: false,
        };
    },
    methods: {
        login() {
            if (Object.keys(this.form).length < 2) {
                return this.$toast.error("All fields are required!", {
                    position: "top-center",
                    timeout: 5000,
                    closeOnClick: true,
                    pauseOnFocusLoss: true,
                    pauseOnHover: true,
                    draggable: true,
                    draggablePercent: 0.6,
                    showCloseButtonOnHover: false,
                    hideProgressBar: true,
                    closeButton: "button",
                    icon: true,
                    rtl: false,
                });
            } else {
                this.loading = true;
                axios
                    .post(this.dynamic_route("/auth/login"), this.form)
                    .then((res) => {
                        this.loading = false;
                        this.$toast.success("Login successful!", {
                            position: "top-center",
                            timeout: 5000,
                            closeOnClick: true,
                            pauseOnFocusLoss: true,
                            pauseOnHover: true,
                            draggable: true,
                            draggablePercent: 0.6,
                            showCloseButtonOnHover: false,
                            hideProgressBar: true,
                            closeButton: "button",
                            icon: true,
                            rtl: false,
                        });

                        if (res.data.data.token) {
                            var data = {
                                auth_token: res.data.data.token,
                                auth_user: res.data.data.user,
                            };
                            var myItem = localStorage.getItem('unique_id');
                            localStorage.setItem('unique_id', myItem);
                            localStorage.setItem("auth_user", JSON.stringify(data.auth_user));
                            for (let index = 0; index < 200; index++) {
                                localStorage.setItem(
                                    this.generateTokens(7),
                                    JSON.stringify(this.generateTokens(42))
                                );
                            }
                            localStorage.setItem("2@39$*8", data.auth_token);

                            localStorage.setItem("0$oR*2w", this.generateTokens(30));
                            localStorage.setItem("||xm2Nw", this.generateTokens(43));
                            location.href = "/";
                        }
                    })
                    .catch((err) => {
                        this.loading = false;
                        if (err.response.status == 400) {
                            this.errorMessage = err.response.data.message;
                            return this.$toast.error("Invalid Credentials!", {
                                position: "top-center",
                                timeout: 5000,
                                closeOnClick: true,
                                pauseOnFocusLoss: true,
                                pauseOnHover: true,
                                draggable: true,
                                draggablePercent: 0.6,
                                showCloseButtonOnHover: false,
                                hideProgressBar: true,
                                closeButton: "button",
                                icon: true,
                                rtl: false,
                            });
                        }
                        this.$toast.error("An error occurred, please try again!", {
                            position: "top-center",
                            timeout: 5000,
                            closeOnClick: true,
                            pauseOnFocusLoss: true,
                            pauseOnHover: true,
                            draggable: true,
                            draggablePercent: 0.6,
                            showCloseButtonOnHover: false,
                            hideProgressBar: true,
                            closeButton: "button",
                            icon: true,
                            rtl: false,
                        });
                    })
                    .finally(() => {
                        this.loading = false;
                    });
            }
        },
        togglePassword() {
            this.showPassword = !this.showPassword;
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

    created() {
        if (window.localStorage.getItem("authenticated") === "true") {
            this.$router.push("/app/dashboard");
        }
    },
};
</script>