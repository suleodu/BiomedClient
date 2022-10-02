<template>
    <div>
		<div class="container">
			<div class="row home-bg">
			<div class="col-12 mt-5">
				<div class="first-box">
					<div class="row align-items-center">
						<div class="col-md-7 col-12 p-4 px-5">
							<h1 class="text-white top-text">
								SAVE on livestock, Equine  and Pet Prescription!
							</h1>
						</div>
						<div class="col-md-5 col-12">
							<div class="inn-img">
								<img src="../../assets/13473 1.png" alt="">
							</div>
							<img src="../../assets/Category-Beef-LG.png" alt="" class="w-100">
						</div>
					</div>
				</div>
			</div>
			<div class="col-12 my-5">
				<div class="row align-items-center">
					<div class="col-md-8 col-12">
						<img src="../../assets/Arrow.png" alt="" class="w-100">
					</div>
					<div class="col-md-4 col-12">
						<h1 class="text-dark text-center text-md-left explore">Explore all Categories</h1>
					</div>
				</div>
			</div>
			<div class="row align-items-center">
				<div class="col-md-4 col-12" :value="c.id" v-for="(c, i) in categories" :key="i">
					<div class="box shadow p-5 text-center">
						<h2 class="text-uppercase">{{ c.category_name }}</h2>
						
						<a 
							class="btn btn-block text-white" 
							:class="{'btn-primary':i%2 ==0, 'btn-orange' : i%2 !=0 }"
							:href="`/products/${c.id}`"
							>
							Explore 
							<i class="fa fa-arrow-right text-white"></i>
						</a>
					</div>
				</div>
				<div class="col-4"></div>
				<div class="col-4"></div>
			</div>
		
		</div>
		</div>
		
	</div>
</template>

<script>
import { mapState } from "vuex";
// import ProductComponent from "./ProductComponent.vue";
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
        },
		linkTo(route){
			this.$router.push(`/products/${route}`);
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
    components: {  }
}
</script>
<style scoped>
	.home-bg{
		background : url(../../assets/bsckgroud.png)
	}
	.first-box{
		background-color: #3870b6;
		min-height: 150px;
		border-radius: 8px;
	}
	.top-text, .explore{
		line-height:1.3;
		font-weight: 600;
	}
	.explore{
		font-size:xxx-large;
	}
	.inn-img{
		position:absolute;
		top: 20%;
		background: white;
		border-radius: 8px;
		left: -50px;
	}
	.box{
		border-radius: 8px;

	}
	.box >h2{
		line-height: 1.3 !important;
		font-weight: 600 !important;
		min-height: 150px;
	}
	.btn-orange{
		background-color: #ff6a05;
	}
	.btn-orange:hover{
		background-color: #3770b6;
	}
	@media (max-width: 800px) {
		.inn-img{
			position:absolute;
			top: 70%;
			background: white;
			border-radius: 8px;
			left: 35%;
		}
	}
</style>