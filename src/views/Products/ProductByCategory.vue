<template>
  <div>

    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <ProductCategory />
        </div>
        <div class="col-md-8">
          <section class="product spad">
            <div class="container">
              <div class="row product__filter mt-5">
                <div class="col-lg-12 col-md-12 col-sm-12 col-md-12 col-sm-12 mix new-arrivals" v-for="(p, i) in products.data"
                  :key="i">
                  <div class="product__item">
                    <div class="row">
                      <div class="col-md-7">
                        <div class="product__item__pic set-bg"
                      v-bind:style="{ 'background-image': 'url(' + p.picture + ')' }">
                      <span class="label">New</span>
                      <ul class="product__hover">
                        <li><a href="#"><img src="assets/img/icon/heart.png" alt=""></a></li>
                        <li><a href="#"><img src="assets/img/icon/compare.png" alt=""> <span>Compare</span></a></li>
                        <li><a href="#"><img src="assets/img/icon/search.png" alt=""></a></li>
                      </ul>
                    </div>
                      </div>
                      <div class="col-md-5">
                        <div class="product__item__text">
                      <h6>{{ p.product_name }}</h6>
                      <p>
                        {{ p.description }}
                      </p>
                      <a href="#" class="add-cart">+ Add To Cart</a>
                      <!-- <div class="rating">
                  <i class="fa fa-star-o"></i>
                  <i class="fa fa-star-o"></i>
                  <i class="fa fa-star-o"></i>
                  <i class="fa fa-star-o"></i>
                  <i class="fa fa-star-o"></i>
                </div>
                <h5>${{ p.discount_price }}</h5> -->
                      <div class="product__color__select">
                        <label for="pc-1">
                          <input type="radio" id="pc-1">
                        </label>
                        <label class="active black" for="pc-2">
                          <input type="radio" id="pc-2">
                        </label>
                        <label class="grey" for="pc-3">
                          <input type="radio" id="pc-3">
                        </label>
                      </div>
                    </div>
                      </div>
                    </div>
                    
                    
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ProductCategory from './ProductCategory.vue';
export default {
  data() {
    return {
      products: {},
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
    }
  },
  mounted() {
    this.getProducts();
  }
}

</script>