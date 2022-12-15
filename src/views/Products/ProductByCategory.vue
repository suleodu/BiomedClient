<template>
  <div>
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
            <div class="each-product" v-for="(p, i) in products.data" :key="i">
              <div class="row">
                <div class="col-md-4">
                  <img :src="p.picture[0] && p.picture[0].picture" alt="">
                </div>
                <div class="col-md-8 pt-3">
                  <p style="color:#466eb4; font-size:20px;">
                    {{ p.product_name }}
                  </p>
                  <div>
                    <carousel :per-page="3" :navigate-to="someLocalProperty" :mouse-drag="false">
                      <slide v-for="(pic, ip) in p.picture" :key="ip">
                        <!-- <img :src="pic.picture" alt=""> -->
                      </slide>
                    </carousel>
                  </div>
                  <p>
                    {{ p.content }}
                  </p>
                </div>
              </div>
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
export default {
  data() {
    return {
      products: {},
      category: {},
    }
  },
  components: {
    ProductCategory
  },
  methods: {
    getProducts() {
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
        })
        .catch(() => {

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
    }
  },
  mounted() {
    this.getProducts();
    this.getCategoryDetails();
  }
}

</script>