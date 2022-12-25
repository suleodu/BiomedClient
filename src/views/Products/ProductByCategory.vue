<template>
  <div>
    <loading :active.sync="isLoading"/>

    <div class="first-wrapper">
      <img :src="category.picture[0].picture" alt="" width="100%" height="70%">
      <ul class="breadcrumb">
        <li><router-link to="/">Home</router-link></li>
        <li>{{ category.category_name }}</li>
      </ul>
    </div>
    <div class="container py-5">
      <div class="row">
        <div class="col-md-4">
          <ProductCategory />
        </div>
        <div class="col-md-8">
          <section class="product spad">
            <div>
              <h1>
                {{ category.category_name }}
              </h1>
              <p>
                {{ category.description }}
              </p>
            </div>
            <hr>
            <div class="each-product mb-3" v-for="(p, i) in products.data" :key="i">
              <div class="row">
                <div class="col-md-5">
                  <img height="100%" width="100%" :src="p.picture[0] && p.picture[0].picture" alt="">
                </div>
                <div class="col-md-7 pt-3">
                  <p style="color:#466eb4; font-size:20px;">
                    {{ p.product_name }}
                  </p>
                  <div>
                    <carousel :per-page="3" :navigate-to="someLocalProperty" :mouse-drag="true" :autoplay="true" :paginationEnabled="false">
                      <slide v-for="(pic, ip) in p.picture" :key="ip" class="mr-3">
                        <img height="100%" :src="pic.picture" alt="">
                      </slide>
                    </carousel>
                  </div>
                  <p class="pt-3">
                    {{ p.content }}
                  </p>
                  <button @click="routeProduct(p.id)" class="btn btn-primary float-right" style="background-color:#466eb5; border: 1px solid #466eb5;">
                    <i class="bi bi-cart" style="font-size: 2rem;"></i>
                  </button>
                </div>
              </div>
              <hr>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
h1 {
  color: #111111;
  font-weight: 400;
  line-height: 46px;
  margin-bottom: 10px;
  font-family: 'Rubik';
  font-size: 33px;
}

.first-wrapper {
  height: 300px;
}

.first-wrapper img {
  object-fit: cover;
}

/* Style the list */
ul.breadcrumb {
  padding: 20px 150px;
  list-style: none;
  background-color: #eee;
}

/* Display list items side by side */
ul.breadcrumb li {
  display: inline;
  font-size: 18px;
}

/* Add a slash symbol (/) before/behind each list item */
ul.breadcrumb li+li:before {
  padding: 8px;
  color: black;
  content: ">";
}

/* Add a color to all links inside the list */
ul.breadcrumb li a {
  color: #0275d8;
  text-decoration: none;
}

/* Add a color on mouse-over */
ul.breadcrumb li a:hover {
  color: #01447e;
  text-decoration: underline;
}
</style>
<script>
import ProductCategory from './ProductCategory.vue';
import loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
export default {
  data() {
    return {
      products: {},
      category: {},
      isLoading: false
    }
  },
  components: {
    ProductCategory,
    loading
  },
  methods: {
    getProducts() {
      this.isLoading = true;
      let param = '';
      if (this.$route.params.category_id) {
        param += `/${this.$route.params.category_id}`
      }
      if (this.$route.params.sub_category_id) {
        param += `/${this.$route.params.sub_category_id}`
      }
      if (this.$route.params.nested_sub_category_id) {
        param += `/${this.$route.params.nested_sub_category_id}`
      }
      this.$api.get(this.dynamic_route(`/product/product-search${param}`))
        .then((res) => {
          this.products = res.data.data;
      this.isLoading = false;

        })
        .catch(() => {
      this.isLoading = false;

        })
    },
    getCategoryDetails() {
      let param = '';
      if (this.$route.params.category_id) {
        param += `/${this.$route.params.category_id}`
      }
      this.$api.get(this.dynamic_route(`/category${param}`))
        .then((res) => {
          this.category = res.data.data;
        })
        .catch(() => {

        })
    },
    routeProduct(id) {
      this.$router.push(`/product/${id}`);
    }
  },
  mounted() {
    this.getProducts();
    this.getCategoryDetails();
  },
  created() {
    this.$watch('$route', () => {
      // Make a request to the server with the new URL
      this.getProducts();
      this.getCategoryDetails();
    })
  }
}

</script>