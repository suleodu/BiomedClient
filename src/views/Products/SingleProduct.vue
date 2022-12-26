<template>
    <div>

        <div>
            <carousel :perPage="1" :autoplayTimeout="3000" :autoplay="true">
                <slide v-bind:style="{ height: slideHeight + 'px' }">
                    <img src="data:image/jpeg;base64,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"
                        alt="" class="w-100">
                </slide>
                <slide v-bind:style="{ height: slideHeight + 'px' }">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsBzGQI2KDoaDkKDFBUCRCOBZyVF37jf-tDg&usqp=CAU"
                        alt="" class="w-100">
                </slide>
                <slide v-bind:style="{ height: slideHeight + 'px' }">
                    <img src="data:image/jpeg;base64,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"
                        alt="" class="w-100">
                </slide>
            </carousel>
        </div>
        <div class="container py-5">
            <div class="row py-5">
                <loading :active.sync="isLoading" />
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
import loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
export default {
    data() {
        return {
            product: {},
            pics: "",
            isLoading: false,
            slideHeight: 300
        }
    },
    components: {
        loading
    },
    methods: {
        getProducts() {
            this.isLoading = true;

            let param = '';
            if (this.$route.params.product_id) {
                param += `/${this.$route.params.product_id}`
            }

            this.$api.get(this.dynamic_route(`/product${param}`))
                .then((res) => {
                    this.product = res.data.data;
                    this.pics = this.product.picture[0].picture;
                    this.isLoading = false;
                })
                .catch(() => {
                    this.isLoading = false;
                })
        },
        addToCart() {
            this.isLoading = true;
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
                    this.isLoading = false;

                })
                .catch((err) => {
                    this.$toast.error(err.response.data.message);
                    this.isLoading = false;

                })
                .finally(() => {
                    this.cartstat2 = "none";
                    this.cartstat1 = "block";
                });
        },
        pico(p) {
            this.pics = p;
        },
        uniqueid() {
            // always start with a letter (for DOM friendlyness)
            var idstr = String.fromCharCode(Math.floor((Math.random() * 25) + 65));
            do {
                // between numbers and characters (48 is 0 and 90 is Z (42-48 = 90)
                var ascicode = Math.floor((Math.random() * 42) + 48);
                if (ascicode < 58 || ascicode > 64) {
                    // exclude all chars between : (58) and @ (64)
                    idstr += String.fromCharCode(ascicode);
                }
            } while (idstr.length < 32);

            return (idstr);
        },
    },
    mounted() {
        this.getProducts();
    }
}

</script>