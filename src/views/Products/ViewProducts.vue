<template>
    <div>
        
<!-- {{products}} -->

	<!-- top Products -->
	<ProductComponent :myproducts="products"/>
	<!-- //top products -->

	<!-- middle section -->
	<div class="join-w3l1 py-sm-5 py-4">
		<div class="container py-xl-4 py-lg-2">
			<div class="row">
				<div class="col-lg-6">
					<a href="product2.html">
						<div class="join-agile text-left p-4">
							<div class="row">
								<div class="col-sm-7 offer-name">
									<h6>New Collections, New Trendy</h6>
									<h4 class="mb-3">Animal Drugs</h4>
									<p>Sale up to 25% off all in store</p>
								</div>
								<div class="col-sm-5 offerimg-w3l">
									<img :src="`${publicPath}assets/images/drug1.jpg`" alt="" class="img-fluid">
								</div>
							</div>
						</div>
					</a>
				</div>
				<div class="col-lg-6 mt-lg-0 mt-4">
					<a href="product.html">
						<div class="join-agile text-left p-4">
							<div class="row ">
								<div class="col-sm-7 offer-name">
									<h6>Top Brands, lowest Prices</h6>
									<h4 class="mb-3">Drugs</h4>
									<p>Free shipping order over $100</p>
								</div>
								<div class="col-sm-5 offerimg-w3l">
									<img :src="`${publicPath}assets/images/drug4.jpg`" alt="" class="img-fluid">
								</div>
							</div>
						</div>
					</a>
				</div>
			</div>
		</div>
	</div>
	<!-- middle section -->
<div style="margin: 8px auto; display: block; text-align:center;">

<!---728x90--->
 
</div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import ProductComponent from "./ProductComponent.vue";
export default {
    data() {
        return {
            publicPath: process.env.BASE_URL,
            products: {}
        };
    },
    computed: {
        ...mapState({
            categories: (state) => state.category.categories,
        }),
    },
    components: { ProductComponent },
    methods: {
        getProducts() {
            let param = '';
            if(this.$route.params.category_id){
                param += `/${this.$route.params.category_id}`
            }
            if(this.$route.params.sub_category_id){
                param += `/${this.$route.params.sub_category_id}`
            }
            if(this.$route.params.nested_sub_category_id){
                param += `/${this.$route.params.nested_sub_category_id}`
            }
            this.$api.get(this.dynamic_route(`/api/product/product-search${param}`))
            .then((res) => {
                this.products = res.data.data;
            })
            .catch(() => {
             
            })
        }
    },
    mounted() {
        this.getProducts();
    },
	watch: {
    // eslint-disable-next-line no-unused-vars
    $route(to, from) {
      this.getProducts();
    },
  },

}
</script>