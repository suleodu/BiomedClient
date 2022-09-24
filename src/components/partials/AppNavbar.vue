<template>
  <div>
    <!-- top-header -->

    <!-- modals -->
    <!-- log in -->
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
    <div class="header-bot my-md-4 my-3" id="site-header">
      <div class="container">
        <div
          class="row header-bot_inner_wthreeinfo_header_mid align-items-center"
        >
          <!-- logo -->
          <div class="col-lg-3 col-md-4 logo_agile">
            <h1>
              <a href="index.html"
                ><img
                  :src="`${publicPath}assets/images/biomed.png`"
                  class="img-fluid"
              /></a>
            </h1>
          </div>
          <!-- //logo -->
          <!-- header-bot -->
          <div class="col-lg-9 col-md-8 header">
            <div class="row">
              <!-- search -->
              <div class="col-lg-9 col-sm-8 agileits_search">
                <form
                  class="form-inline"
                  action="#"
                  method="post"
                  style="max-width: 600px"
                >
                  <input
                    class="form-control"
                    type="search"
                    placeholder="Search for products, brands and more"
                    aria-label="Search"
                    required
                  />
                  <button class="btn" type="submit">
                    <i class="fa fa-search" aria-hidden="true"></i>
                  </button>
                </form>
              </div>
              <!-- //search -->
              <!-- cart details -->
              <div
                class="
                  col-lg-3 col-sm-4
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
                          <input type="checkbox" @change="switchTheme($event)" id="checkbox" />
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
                  <a href="checkout.html"><i class="far fa-heart"></i></a>
                </div>
                <div class="wthreecartaits wthreecartaits2 cart cart box_1">
                  <form action="#" method="post" class="last text-right">
                    <input type="hidden" name="cmd" value="_cart" />
                    <input type="hidden" name="display" value="1" />
                    <button
                      class="btn w3view-cart p-0"
                      type="submit"
                      name="submit"
                      value=""
                    >
                      <img :src="`${publicPath}assets/images/cart.png`" alt="" class="img-fluid" />
                      Cart
                    </button>
                  </form>
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
    <div class="navbar-inner">
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="agileits-navi_search">
            <form action="#" method="post">
              <!-- {{categories}} -->
              <select
                id="agileinfo-nav_search"
                name="agileinfo_search"
                required=""
              >
                <option value="">All Categories</option>
                <option :value="c.id" v-for="(c, i) in categories" :key="i">
                  {{ c.category_name }}
                </option>
              </select>
            </form>
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav text-center ml-auto">
              <li
                class="nav-item dropdown mr-lg-2 mb-lg-0 mb-2"
                v-for="(c, i) in categories"
                :key="i"
              >
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {{ c.category_name }}
                </a>
                <div class="dropdown-menu">
                  <div class="agile_inner_drop_nav_info p-4">
                    <div class="row">
                      <div
                        class="col-sm-3 multi-gd-img"
                        v-for="(sc, i) in c.sub_category"
                        :key="i"
                      >
                        <h5 class="mb-3">{{ sc.sub_category_name }}</h5>
                        <ul class="multi-column-dropdown">
                          <li v-for="(ic, i) in sc.inner_category" :key="i">
                            <a href="product.html">{{
                              ic.inner_category_name
                            }}</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <!-- <li class="nav-item mr-lg-2 mb-lg-0 mb-2">
                <a class="nav-link" href="about.html">About Us</a>
              </li> -->
              <!-- <li class="nav-item mr-lg-2 mb-lg-0 mb-2">
                <a class="nav-link" href="product.html">New Arrivals</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="contact.html">Contact Us</a>
              </li> -->
              <li class="nav-item" v-if="this.profile == null">
                <a
                  class="nav-link"
                  href="#login"
                  data-toggle="modal"
                  data-target="#exampleModal"
                  >Login/Register</a
                >
              </li>
              <li class="nav-item dropdown mr-lg-2 mb-lg-0 mb-2" v-else>
                <a
                  class="nav-link dropdown-toggle"
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
                    <div class="row">
                      <div class="col-md-12">
                        <ul class="multi-column-dropdown">
                          <li>
                            <a href="">My Account</a>
                          </li>
                          <li>
                            <a href="">Orders</a>
                          </li>
                          <!-- <hr /> -->
                          <li>
                            <router-link to="" @click="logout()">Logout</router-link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
    <!-- //navigation -->
  </div>
</template>
<script>
import RegisterUser from "../../views/Auth/RegisterUser.vue";
import LoginUser from "@/views/Auth/LoginUser.vue";
import { mapState } from 'vuex'
export default {
  components: {
    RegisterUser,
    LoginUser
},
  data() {
    return {
      publicPath: process.env.BASE_URL,
      profile: {},
      // categories: {},
      filter: {
        filters: "",
      },
    }; 
  },
  methods: {
    getCategories() {
      this.$api
        .post(
          "https://biomed-backend.herokuapp.com/api/category/all",
          this.filter
        )
        .then((res) => {
          this.categories = res.data.data;
        });
    },
    themeSwitcher() {
      const toggleSwitch = document.querySelector(
        '.theme-switch input[type="checkbox"]'
      );
      const currentTheme = localStorage.getItem("theme");
      console.log(toggleSwitch);
      if (currentTheme) {
        document.documentElement.setAttribute("data-theme", currentTheme);

        if (currentTheme === "dark") {
          toggleSwitch.checked = true;
        }
      }

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
    }
  },
  mounted() {
    this.profile = JSON.parse(localStorage.getItem("auth_user"));
    // this.getCategories();
    this.$store.dispatch('get_category', this.filter);
  },
  computed: {
    ...mapState({
            categories: (state) => state.category.categories,
            items: (state) => state.product.items,
        }),
  }
};
</script>