<template>
  <div>
    <div class="first-wrapper">
      <img :src="category.picture[0].picture" alt="" width="100%" height="100%">
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <ProductCategory />
        </div>
        <div class="col-md-8">
          <section class="product spad">
            <div>
              <h1>
                {{ category.category_name  }}
              </h1>
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
  height: 400px;
}
.first-wrapper img {
  object-fit: cover;
  height: 100%;
  width: 100%;
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