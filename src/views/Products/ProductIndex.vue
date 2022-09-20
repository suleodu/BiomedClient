<template>
    <div>
        <!-- banner -->
	<div id="carouselExampleIndicators" class="carousel slide py-5" data-ride="carousel">
		<!-- Indicators-->
		<ol class="carousel-indicators">
			<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
			<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
			<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
			<li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
		</ol>
		<div class="carousel-inner">
			<div class="carousel-item item1 active">
				<div class="banner-style d-flex align-items-center">
					<div class="container">
						<div class="w3l-space-banner">
							<div class="carousel-caption-banner" style="max-width:500px">
								<p>Get flat 
									<span>10%</span> Cashback</p>
								<h3 class="mt-2">Exciting Deals on Swine Drugs</h3>
								<a class="btn btn-style mt-4" href="product.html">Shop Now </a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="carousel-item item2">
				<div class="banner-style d-flex align-items-center">
					<div class="container">
						<div class="w3l-space-banner">
							<div class="carousel-caption-banner" style="max-width:500px">
								<p>Get flat
									<span>10%</span> Cashback</p>
								<h3 class="mt-2">Exciting Deals on Swine Drugs</h3>
								<a class="btn btn-style mt-4" href="product.html">Shop Now </a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="carousel-item item3">
				<div class="banner-style d-flex align-items-center">
					<div class="container">
						<div class="w3l-space-banner">
							<div class="carousel-caption-banner" style="max-width:500px">
								<p>Get flat
									<span>10%</span> Cashback</p>
								<h3 class="mt-2">Exciting Deals on Swine Drugs</h3>
								<a class="btn btn-style mt-4" href="product.html">Shop Now </a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="carousel-item item4">
				<div class="banner-style d-flex align-items-center">
					<div class="container">
						<div class="w3l-space-banner">
							<div class="carousel-caption-banner" style="max-width:500px">
								<p>Get flat
									<span>10%</span> Cashback</p>
								<h3 class="mt-2">Exciting Deals on Swine Drugs</h3>
								<a class="btn btn-style mt-4" href="product.html">Shop Now </a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
			<span class="carousel-control-prev-icon" aria-hidden="true"></span>
			<span class="sr-only">Previous</span>
		</a>
		<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
			<span class="carousel-control-next-icon" aria-hidden="true"></span>
			<span class="sr-only">Next</span>
		</a>
	</div>
	<!-- //banner -->
<div style="margin: 8px auto; display: block; text-align:center;">

<!---728x90--->

 
</div>
	<!-- top Products -->
	<ProductComponent :products="products"/>
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
	methods: {
        getProducts() {
			let payload = {
				status:true
			}
            this.$api.post(`https://biomed-backend.herokuapp.com/api/product/all`, payload)
            .then((res) => {
                this.products = res.data.data;
            })
            .catch((err) => {
                console.log(err.response);
            })
        }
    },
    mounted() {
        this.getProducts();
    },
    computed: {
        ...mapState({
            cart: (state) => state.cart,
            categories: (state) => state.category.categories,
            items: (state) => state.product.items,
        }),
    },
    components: { ProductComponent }
}
</script>