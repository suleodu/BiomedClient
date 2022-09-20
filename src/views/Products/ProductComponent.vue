<template>
    <div>
        <div class="ads-grid py-5">
		<div class="container py-md-5 py-4">
			<!-- tittle heading -->
			<h3 class="tittle-w3l text-center mb-lg-5 mb-sm-4 mb-3">
				<span class="font-weight-normal">Our</span> New Products</h3>
			<!-- //tittle heading -->
			<div class="row">
				<!-- product right -->
				<div class="col-lg-3 mt-lg-0 mt-4 p-lg-0 order-lg-first order-last">
					<div class="side-bar p-sm-4 p-3">
						<!-- reviews -->
						<div class="customer-rev left-side py-2">
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
						</div>
						<!-- //reviews -->
						<!-- price -->
						<div class="range py-2">
							<h3 class="agileits-sear-head mb-3">Price</h3>
							<div class="w3l-range">
								<ul>
									<li>
										<a href="#">Under $1,000</a>
									</li>
									<li class="my-1">
										<a href="#">$1,000 - $5,000</a>
									</li>
									<li>
										<a href="#">$5,000 - $10,000</a>
									</li>
									<li class="my-1">
										<a href="#">$10,000 - $20,000</a>
									</li>
									<li>
										<a href="#">$20,000 $30,000</a>
									</li>
									<li class="mt-1">
										<a href="#">Over $30,000</a>
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
									<input type="checkbox" class="checked">
									<span class="span">5% or More</span>
								</li>
								<li>
									<input type="checkbox" class="checked">
									<span class="span">10% or More</span>
								</li>
								<li>
									<input type="checkbox" class="checked">
									<span class="span">20% or More</span>
								</li>
								<li>
									<input type="checkbox" class="checked">
									<span class="span">30% or More</span>
								</li>
								<li>
									<input type="checkbox" class="checked">
									<span class="span">50% or More</span>
								</li>
								<li>
									<input type="checkbox" class="checked">
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
								<div class="col-md-4 product-men" v-for="(p,i) in products.data" :key="i">
									<div class="men-pro-item simpleCart_shelfItem">
										<div class="men-thumb-item text-center">
											<img :src="`${publicPath}assets/images/drug1.jpg`" alt="" class="img-fluid">
											<div class="men-cart-pro">
												<div class="inner-men-cart-pro">
													<router-link :to="'/product/'+p.id" class="link-product-add-cart">Quick View</router-link>
												</div>
											</div>
										</div>
										<div class="item-info-product text-center mt-2">
											<h4 class="pt-1">
												<router-link :to="'/product/'+p.id">{{ p.product_name }}</router-link>
											</h4>
											<div class="info-product-price">
												<span class="item_price">${{p.price}}</span>
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
<script>
import { mapState } from "vuex";
export default {
    data() {
        return {
            publicPath: process.env.BASE_URL
        };
    },
	props:{
		products:{
            type:Array,
		}
	},
    computed: {
        ...mapState({
            cart: (state) => state.cart,
            categories: (state) => state.category.categories,
            items: (state) => state.product.items,
        }),
    },
	mounted () {
		// console.log(this.products)
	}
}
</script>