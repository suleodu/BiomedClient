<template>
    <div>
        <div class="container py-5">
            <div class="row">
                <div class="col-md-6">
                    <div>
                        <h2>
                            Get in Touch
                        </h2>
                        <p>
                            Got questions or need help? Kindly drop us a message and we’ll get back to you as soon as
                            possible.
                        </p>
                        <p>
                            Need to get more information about any of our product or you want to place a special order,
                            please feel free to contact us and request for Quote.
                        </p>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="row">
                        <div class="col-md-12 mb-2">
                            <div class="form-group
                            ">
                                <input type="text" class="form-control" id="name" placeholder="What do you want to do?">
                            </div>
                        </div>
                        <div class="col-md-12 mb-2">
                            <div class="form-group
                            ">
                                <input type="text" class="form-control" id="name" placeholder="First Name">
                            </div>
                        </div>
                        <div class="col-md-12 mb-2">
                            <div class="form-group
                            ">
                                <input type="text" class="form-control" id="name" placeholder="Last Name">
                            </div>
                        </div>
                        <div class="col-md-12 mb-2">
                            <div class="form-group
                            ">
                                <input type="text" class="form-control" id="name" placeholder="Email Address">
                            </div>
                        </div>
                        <div class="col-md-12 mb-2">
                            <div class="form-group
                            ">
                                <input type="text" class="form-control" id="name" placeholder="Phone Number">
                            </div>
                        </div>
                        <div class="col-md-12 mb-2">
                            <div class="form-group
                            ">
                                <textarea class="form-control" name="" id="" cols="30" rows="5" placeholder="How may we assist?"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
h2 {
    font-size: 40px;
    font-weight: 400;
}
input {
    border: 1px solid black !important;
    border-radius: 0px !important;
}
textarea {
    border: 1px solid black !important;
    border-radius: 0px !important;
}
</style>
<script>
export default {
    data() {
        return {
            products: {},
        }
    },

    methods: {
        getProducts() {
            this.$api.post(this.dynamic_route('/product/all/all-products'))
                .then((response) => {
                    this.products = response.data.data.data;
                    this.products.forEach(object => {
                        object.image = null
                        object.image = object.picture[0].picture;
                    });

                })
        }
    },
    mounted() {

    }
}

</script>