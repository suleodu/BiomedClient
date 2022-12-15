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
                                <div class="col-lg-12 col-md-12 col-sm-12 col-md-12 col-sm-12 mix new-arrivals"
                                    :key="i">
                                    <div class="product__item">
                                        <div class="row">
                                            <div class="col-md-7">
                                                <div class="product__item__pic set-bg"
                                                    v-bind:style="{ 'background-image': 'url(' + product.picture + ')' }">
                                                    <span class="label">New</span>
                                                    <ul class="product__hover">
                                                        <li><a href="#"><img src="assets/img/icon/heart.png" alt=""></a>
                                                        </li>
                                                        <li><a href="#"><img src="assets/img/icon/compare.png" alt="">
                                                                <span>Compare</span></a></li>
                                                        <li><a href="#"><img src="assets/img/icon/search.png"
                                                                    alt=""></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="col-md-5">
                                                <div class="product__item__text">
                                                    <h6>{{ product.product_name }}</h6>
                                                    <p>
                                                        {{ product.description }}
                                                    </p>


                                                    <!-- <h5>${{ product.discount_price }}</h5> -->
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
            product: {},
        }
    },
    components: {
        ProductCategory
    },
    methods: {
        getProducts() {
            let param = '';
            if (this.$route.params.product_id) {
                param += `/${this.$route.params.product_id}`
            }

            this.$api.get(this.dynamic_route(`/product${param}`))
                .then((res) => {
                    this.product = res.data.data;
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