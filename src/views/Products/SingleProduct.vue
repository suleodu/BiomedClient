<template>
    <div>

        <div class="container py-5">
            <div class="row">
                <div class="col-md-5">
                    <magnifier class="mb-3" :src="pics" :glass-width="200" :glass-height="200" :width="450"
                        :height="500" :zoom-level="2" mgShape="square" />
                    <!-- <img :src="product.picture[0].picture" alt=""> -->
                    <div>
                        <carousel :per-page="3" :navigate-to="someLocalProperty" :mouse-drag="true" :autoplay="true"
                            :paginationEnabled="false">
                            <slide v-for="(pic, ip) in product.picture" :key="ip" class="mr-3">
                                <img height="100%" @click="pico(pic.picture)" class="slide-img" :src="pic.picture"
                                    alt="">
                            </slide>
                        </carousel>
                    </div>
                </div>
                <div class="col-md-7">
                    <h1>
                        {{ product.product_name }}
                    </h1>
                    <p class="pt-3" v-html="product.description">

                    </p>

                    <p style="font-size:16px;" class="pt-3">Code: <span style="font-weight:bolder">{{ product.code
                    }}</span></p>
                    <p style="font-size:16px;">Model: <span style="font-weight:bolder">{{ product.model }}</span></p>
                    <p style="font-size:16px;">Product Disease: <span style="font-weight:bolder">{{
                            product.product_disease.disease_name
                    }}</span></p>

                    <button @click="addToCart()" class="btn btn-primary mt-3"
                        style="background-color:#466eb5; border: 1px solid #466eb5;">
                        <i class="bi bi-cart" style="font-size: 20px; font-family:'Rubik'; font-style: normal;"> Add To
                            Cart</i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.slide-img {
    cursor: pointer;
}
</style>
<script>
import { bus } from '../../main'
export default {
    data() {
        return {
            product: {},
            pics: ""
        }
    },
    components: {
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
                    this.pics = this.product.picture[0].picture;
                })
                .catch(() => {

                })
        },
        addToCart() {
            var unique_id = localStorage.getItem('unique_id');
            // check if the unique_id exist in the localStorage

            if (!unique_id) {
                localStorage.setItem('unique_id', this.uniqueid());
                unique_id = localStorage.getItem('unique_id')
            }
            let param = this.$route.params.product_id;
            let payload = {
                product_id: param,
                unique_id: unique_id
            };
            this.$api
                .post(this.dynamic_route("/cart"), payload)
                .then((res) => {
                    bus.$emit('updateCart');
                    this.$toast.success(res.data.message);
                })
                .catch((err) => {
                    this.$toast.error(err.response.data.message);
                })
                .finally(() => {
                    this.cartstat2 = "none";
                    this.cartstat1 = "block";
                });
        },
        pico(p) {
            this.pics = p;
        },
        uniqueid(){
        // always start with a letter (for DOM friendlyness)
        var idstr=String.fromCharCode(Math.floor((Math.random()*25)+65));
        do {                
            // between numbers and characters (48 is 0 and 90 is Z (42-48 = 90)
            var ascicode=Math.floor((Math.random()*42)+48);
            if (ascicode<58 || ascicode>64){
                // exclude all chars between : (58) and @ (64)
                idstr+=String.fromCharCode(ascicode);    
            }                
        } while (idstr.length<32);

        return (idstr);
    },
    },
    mounted() {
        this.getProducts();
    }
}

</script>