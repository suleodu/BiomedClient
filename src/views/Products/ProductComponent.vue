<template>
    <div style="background-color: #f9f9f9;">
		<vue-element-loading
              :active="loading"
              color="#FF6700"
              :text="loadingText"
              spinner="bar-fade-scale"
            />
        <div class="ads-grid py-5">
		<div class="container py-md-5 py-4">
			<!-- tittle heading -->
			<h3 class="tittle-w3l text-center mb-lg-5 mb-sm-4 mb-3">
				<span class="font-weight-normal">Our</span> Products</h3>
			<!-- //tittle heading -->
			<div class="row">
				<!-- product right -->
				<div class="col-lg-3 mt-lg-0 mt-4 p-lg-0 order-lg-first order-last">
					<div class="side-bar p-sm-4 p-3">
						<!-- reviews -->
						<!-- <div class="customer-rev left-side py-2">
							<h3 class="agileits-sear-head mb-3">Customer Review</h3>
							<ul>
								<li>
									<a href="#">
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<span>5.0</span>
									</a>
								</li>
								<li>
									<a href="#">
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<span>4.0</span>
									</a>
								</li>
								<li>
									<a href="#">
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star-half"></i>
										<span>3.5</span>
									</a>
								</li>
								<li>
									<a href="#">
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<span>3.0</span>
									</a>
								</li>
								<li>
									<a href="#">
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star-half"></i>
										<span>2.5</span>
									</a>
								</li>
							</ul>
						</div> -->
						<!-- //reviews -->
						<!-- price -->
						<div class="range py-2">
							<h3 class="agileits-sear-head mb-3">Price</h3>
							<div class="w3l-range">
								<ul>
									<li>
										<p @click="getProducts(1000,1000)" href="#">Under ₦1,000</p>
									</li>
									<li class="my-1">
										<p @click="getProducts(1000,5000)" href="#">₦1,000 - ₦5,000</p>
									</li>
									<li>
										<p @click="getProducts(5000,10000)" href="#">₦5,000 - ₦10,000</p>
									</li>
									<li class="my-1">
										<p @click="getProducts(10000,20000)" href="#">₦10,000 - ₦20,000</p>
									</li>
									<li>
										<p @click="getProducts(20000,30000)" href="#">₦20,000 ₦30,000</p>
									</li>
									<li @click="getProducts(30000,30000)" class="mt-1">
										<p href="#">Over ₦30,000</p>
									</li>
								</ul>
							</div>
						</div>
						<!-- //price -->
						<!-- discounts -->
						<div class="left-side py-2">
							<h3 class="agileits-sear-head mb-3">Discount</h3>
							<ul>
								<li>
									<input type="checkbox" value="5" v-model="discount" @change="getProducts">
									<span class="span">5% or More</span>
								</li>
								<li>
									<input type="checkbox" value="6" v-model="discount" @change="getProducts">
									<span class="span">10% or More</span>
								</li>
								<li>
									<input type="checkbox" value="7" v-model="discount" @change="getProducts">
									<span class="span">20% or More</span>
								</li>
								<li>
									<input type="checkbox" value="8" v-model="discount" @change="getProducts">
									<span class="span">30% or More</span>
								</li>
								<li>
									<input type="checkbox" value="9" v-model="discount" @change="getProducts">
									<span class="span">50% or More</span>
								</li>
								<li>
									<input type="checkbox" value="10" v-model="discount" @change="getProducts">
									<span class="span">60% or More</span>
								</li>
							</ul>
						</div>
						<!-- //discounts -->
						<!-- electronics -->
						<div class="left-side py-2">
							<h3 class="agileits-sear-head mb-3">Categories</h3>
							<ul>
								<li v-for="(c,i) in categories" :key="i">
									<input type="checkbox" class="checked">
									<span class="span">{{ c.category_name }}</span>
								</li>
								
							</ul>
						</div>
						<!-- //electronics -->
						<!-- arrivals -->
						<div class="left-side py-2">
							<h3 class="agileits-sear-head mb-3">New Arrivals</h3>
							<ul>
								<li>
									<input type="checkbox" class="checked">
									<span class="span">Last 30 days</span>
								</li>
								<li>
									<input type="checkbox" class="checked">
									<span class="span">Last 90 days</span>
								</li>
							</ul>
						</div>
						<!-- //arrivals -->
						<!-- best seller -->
						<div class="f-grid py-2">
							<h3 class="agileits-sear-head mb-3">Best Seller</h3>
							<div class="box-scroll">
								<div class="scroll">
									<div class="row">
										<div class="col-lg-3 col-sm-2 col-3 left-mar">
											<img :src="`${publicPath}assets/images/drug8.jpg`" alt="" class="img-fluid">
										</div>
										<div class="col-lg-9 col-sm-10 col-9 w3_mvd">
											<a href="#">Pro-Pen-G Injectable For Cattle, Sheep, Swine And Horses</a>
											<a href="#" class="price-mar mt-2">$12,990.00</a>
										</div>
									</div>
									<div class="row my-4">
										<div class="col-lg-3 col-sm-2 col-3 left-mar">
											<img :src="`${publicPath}assets/images/drug1.jpg`" alt="" class="img-fluid">
										</div>
										<div class="col-lg-9 col-sm-10 col-9 w3_mvd">
											<a href="#">Penicillin G/Norocillin Injectable</a>
											<a href="#" class="price-mar mt-2">$12,499.00</a>
										</div>
									</div>
									<div class="row">
										<div class="col-lg-3 col-sm-2 col-3 left-mar">
											<img :src="`${publicPath}assets/images/drug0.jpg`" alt="" class="img-fluid">
										</div>
										<div class="col-lg-9 col-sm-10 col-9 w3_mvd">
											<a href="#">Agrimycin 200 Oxytetracycline Injection</a>
											<a href="#" class="price-mar mt-2">$1,199.00 </a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<!-- //best seller -->
					</div>
					<!-- //product right -->
				</div>
				<!-- product left -->
				<div class="agileinfo-ads-display col-lg-9 order-lg-last order-first">
					<div class="wrapper">
						<!-- first section -->
						<div class="product-sec1 px-lg-4">
							<div class="row">
								<div class="col-md-4 product-men" v-for="(p,i) in myproducts" :key="i" @click="routeProduct(p)">
									<div class="card pt-3 pl-3 pr-3 pb-3 mb-3" style="height:280px">
										<div class="men-thumb-item text-center" style="text-align:center !important;">
											<div style="width:150px; text-align: center;" class="text-center">
												<img :src="`${publicPath}assets/images/drug1.jpg`" alt="" class="img-fluid">
											</div>
											
										</div>
										<div class="item-info-product text-center mt-2">
											<h4 class="pt-1 p-name">
												<router-link :to="'/product/'+p.id">{{ p.product_name }}</router-link>
											</h4>
											<div class="info-product-price">
												<span class="item_price">₦{{p.price}}</span>
												<!-- <del>$280.00</del> -->
											</div>
											
										</div>
									</div>
								</div>
								
							</div>
						</div>
						
					</div>
				</div>
				<!-- //product left -->
			</div>
		</div>
	</div>
    </div>
</template>
<style>
	.p-name {
		overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
	}
	.w3l-range ul li p {
		color: black;
		cursor: pointer;
	}
</style>
<script>
import { mapState } from "vuex";
import VueElementLoading from "vue-element-loading";
export default {
	components: {
        'vue-element-loading': VueElementLoading
	},
    data() {
        return {
            publicPath: process.env.BASE_URL,
			loadingText : "fetching products, Please wait...",
			products:{},
			discount: []
        };
    },
	props:{
		myproducts:{
            type:Object,
		}
	},
	methods: {
		routeProduct(p) {
			this.$router.push(`/product/${p.id}`)
		},
		getProducts(from,to) {
	
			let payload = {
				price_range:from,
				from:from,
                to:to,
				discount:this.discount
			}
			// this.$store.dispatch("get_category", payload);
			this.$store.commit('LOADING', true)
			this.$api.post(`https://biomed-backend.herokuapp.com/api/product/product-filter`, payload)
			.then((res) => {
				this.products = res.data.data;
				this.$store.commit('LOADING', false)
			})

		},
	},
    computed: {
        ...mapState({
            loading: (state) => state.category.loading,
            categories: (state) => state.category.categories,
        }),
    },
	mounted () {
		
		
	}
}
</script>