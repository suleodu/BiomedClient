<template>
    <div>
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
                v-model="cat"
                @change="getProdByCat(cat)"
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
            <ul class="navbar-nav text-center  ml-3">
              <li
                class="nav-item dropdown mr-lg-2 mb-lg-0 mb-2"
                v-for="(c, i) in getSelectedCategories()"
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
                        <h5 class="mb-3">
                          <router-link
                            :to="'/products/' + c.id + '/' + sc.id"
                            style="color: #fe6904 !important"
                          >
                            {{ sc.sub_category_name }}
                          </router-link>
                        </h5>
                        <ul class="multi-column-dropdown">
                          <li
                            v-for="(ic, i) in sc.nested_sub_category"
                            :key="i"
                          >
                            <router-link
                              :to="
                                '/products/' + c.id + '/' + sc.id + '/' + ic.id
                              "
                              >{{ ic.name }}</router-link
                            >
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li class="nav-item">
                <router-link
                  class="nav-link"
                  to="/my-invoices"
                  >My Invoices</router-link
                >
              </li>
              <!-- <li class="nav-item dropdown mr-lg-2 mb-lg-0 mb-2" v-else>
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
                    <div class="row">
                      <div class="col-md-12">
                        <ul class="multi-column-dropdown">
                          <li>
                            <router-link to="/my-account">My Account</router-link>
                          </li>
                          <li>
                            <a href="">Orders</a>
                          </li>
                        
                          <li>
                            <router-link to="" @click="logout()"
                              >Logout</router-link
                            >
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li> -->
            </ul>
          </div>
        </nav>
      </div>
    </div>
    <!-- //navigation -->
  </div>
</template>
<script>

import { mapState } from "vuex";
export default {
  data() {
    return {
      publicPath: process.env.BASE_URL,
      profile: {},
      selected_categories: {},
      filter: {
        filters: "",
      },
      searchProducts: {
        search: "",
      },
      products: {},
      cat: "",
    };
  },
  methods: {
    themeSwitcher() {
      const toggleSwitch = document.querySelector(
        '.theme-switch input[type="checkbox"]'
      );
      const currentTheme = localStorage.getItem("theme");

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

        });
    },
    getProdByCat(id) {
      this.$router.push(`/products/${id}`);
    },
    getSelectedCategories(){
      // filter categories
      return this.selected_categories = this.categories.filter(data=>{
        return data.id == this.$route.params.category_id
      })
    }
  },
  mounted() {
    this.profile = JSON.parse(localStorage.getItem("auth_user"));
    this.$store.dispatch("get_category", this.filter);
    this.cat = this.$route.params.category_id
   

  },

  computed: {
    ...mapState({
      categories: (state) => state.category.categories,
      items: (state) => state.product.items,
    }),
  },
};
</script>