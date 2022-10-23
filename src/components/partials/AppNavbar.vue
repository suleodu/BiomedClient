<template>
  <div>

    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <LoginUser />
    </div>
    <!-- register -->
    <div
      class="modal fade"
      id="exampleModal2"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <RegisterUser />
    </div>
    <!-- //modal -->
    <!-- //top-header -->

    <!-- header-bottom-->
    <div class="header-bot" id="site-header">
      <div class="container">
        <div
          class="row header-bot_inner_wthreeinfo_header_mid align-items-center"
        >
          <!-- logo -->
          <div class="col-lg-3 col-md-4 logo_agile">
            <h1>
              <a href="/"
                ><img
                  :src="`${publicPath}assets/images/logo.png`"
                  class="img-fluid"
              /></a>
            </h1>
          </div>
          <!-- //logo -->
          <!-- header-bot -->
          <div class="col-lg-9 col-md-8 header">
            <div class="row align-items-center">
              <!-- search -->
              <div class="col-lg-8 col-sm-8 agileits_search">
                <form
                  class="form-inline"
                  action="#"
                  method="post"
                  style="max-width: 600px"
                >
                  <input
                    class="form-control"
                    type="search"
                    placeholder="Search for products, Categories and Sub categories"
                    aria-label="Search"
                    v-model="searchProducts.search"
                    @keyup="searchProduct()"
                    required
                  />
                  <button
                    class="btn"
                    type="submit"
                    @click.prevent="searchProduct()"
                  >
                    <i class="fa fa-search" aria-hidden="true"></i>
                  </button>
                </form>
                <div
                  class="card search-area"
                  v-if="products.data && searchProducts.search !== ''"
                >
                  <ul>
                    <li v-for="(p, i) in products.data" class="pb-2" :key="i" @click="clearSearch()">
                      <router-link :to="'/product/' + p.id">
                        <p>
                          {{ p.product_name }}
                        </p>
                      </router-link>
                    </li>
                  </ul>
                </div>
              </div>
              <!-- //search -->
              <!-- cart details -->
              <div
                class="
                  col-lg-2 col-sm-2
                  top_nav_right
                  text-center
                  mt-sm-0 mt-2
                  d-flex
                  align-items-center
                  justify-content-between
                "
              >
                <div class="cart-store">
                  <!-- toggle switch for light and dark theme -->
                  <div class="cont-ser-position">
                    <nav class="navigation">
                      <div class="theme-switch-wrapper">
                        <label class="theme-switch" for="checkbox">
                          <input
                            type="checkbox"
                            @change="switchTheme($event)"
                            id="checkbox"
                          />
                          <div class="mode-container">
                            <i class="gg-sun"></i>
                            <i class="gg-moon"></i>
                          </div>
                        </label>
                      </div>
                    </nav>
                  </div>
                  <!-- //toggle switch for light and dark theme -->
                </div>
                <div class="cart-store">
                  <router-link to="/wishlist"><i class="far fa-heart"></i></router-link>
                </div>
                <div class="wthreecartaits wthreecartaits2 cart cart box_1">
                  <router-link to="/cart"
                      class="btn w3view-cart p-0"
                      type="submit"
                      name="submit"
                      value=""
                    >
                      <i class="fa" style="font-size:24px">&#xf07a;</i>
<span class='badge badge-warning' id='lblCartCount' v-if="carts.length>0"> {{carts.length}} </span>
                    </router-link>
                </div>
              </div>
              <div class="col-md-2 col-lg-2">
                <!-- <button class="btn btn-sm btn-primary">
                  Login/Register
                </button> -->

                <div class="nav-item" v-if="this.profile == null">
                  <a class="btn btn-sm btn-default shadow-sm"
                    href="#login"
                    data-toggle="modal"
                    data-target="#exampleModal"
                    >Login/Register</a
                  >
                </div>
                <div class="nav-item dropdown mr-lg-2 mb-lg-0 mb-2" v-else>
                  <a
                    class="button btn btn-sm btn-default shadow-sm dropdown-toggle"
                    href="#"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Hi {{ profile.name && profile.name.split(" ")[0] }}
                  </a>
                  <div class="dropdown-menu">
                    <div class="agile_inner_drop_nav_info p-4">
                      <!-- <h5 class="mb-3">Hi {{profile.name}}</h5> -->
                      <div class="row ">
                        <div class="col-md-12">
                          <ul class="multi-column-dropdown">
                            <li>
                              <router-link to="/my-account">My Account</router-link>
                            </li>
                            <li>
                              <a href="">Orders</a>
                            </li>
                            <!-- <hr /> -->
                            <li>
                              <div style="cursor:pointer;" @click.prevent="logout()"
                                >Logout</div
                              >
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- //cart details -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- shop locator (popup) -->
    <!-- //header-bottom -->
    <!-- navigation -->
    <NavBar2 v-if="this.$router.history.current.path != '/'" />
    <!-- //navigation -->
    </div>
</template>
<style>
.search-area {
  background: white;
  position: absolute;
  height: auto;
  width: 93.5%;
  z-index: 1000;
  top: 200;
  padding: 20px;
  /* margin */
}

.search-area ul li {
  list-style: none;
  color: black !important;
}
.search-area ul li:hover {
  background-color: whitesmoke !important;
}

</style>
<script>
import RegisterUser from "../../views/Auth/RegisterUser.vue";
import LoginUser from "@/views/Auth/LoginUser.vue";
import NavBar2 from "./AppNavbar2.vue"
import { mapState } from "vuex";
export default {
  components: {
    RegisterUser,
    LoginUser,
    NavBar2
  },
  data() {
    return {
      publicPath: process.env.BASE_URL,
      profile: {},
      // categories: {},
      filter: {
        filters: "",
      },
      searchProducts: {
        search: "",
      },
      products: {},
      cat: "",
      carts:{}
    };
  },
  methods: {
    themeSwitcher() {
      const toggleSwitch = document.querySelector(
        '.theme-switch input[type="checkbox"]'
      );
      const currentTheme = localStorage.getItem("theme");
      // console.log(toggleSwitch);
      if (currentTheme) {
        document.documentElement.setAttribute("data-theme", currentTheme);

        if (currentTheme === "dark") {
          toggleSwitch.checked = true;
        }
      }
    },
    getCartItems() {
      
      this.$api
        .get(`https://biomed-backend.herokuapp.com/api/cart`)
        .then((res) => {
          this.carts = res.data.data;
        })
        .catch(() => {
          // console.log(err.response);
        })
        .finally((res) => {
          console.log(res);
        });
    },
    switchTheme(e) {
      if (e.target.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
      }
    },
    logout() {
      localStorage.clear();
      location.reload();
    },
    clearSearch() {
      this.searchProducts.search = "";
      this.products = {}
    },
    searchProduct() {
      this.products = {};
      this.$api
        .post(
          `https://biomed-backend.herokuapp.com/api/product/name`,
          this.searchProducts
        )
        .then((res) => {
          this.products = res.data.data;
        })
        .catch(() => {
          // console.log(err.response);
        });
    },
    getProdByCat(id) {
      this.$router.push(`/products/${id}`);
    },
  },
  mounted() {
    this.profile = JSON.parse(localStorage.getItem("auth_user"));
    this.getCartItems();
    this.$store.dispatch("get_category", this.filter);
  },
  computed: {
    ...mapState({
      categories: (state) => state.category.categories,
      items: (state) => state.product.items,
    }),
  },
};
</script>