<template>
    <div class="py-5">

        <div class="container">
            <div class="row">
                <div class="col-md-3">
                    <CompanySidebar />
                </div>
                <div class="col-md-9">
                    <section class="product spad">
                        <div>
                            <div class="row">
                                <div class="col-md-12">
                                    <div>
                                        <h1>
                                            Company
                                        </h1>
                                    </div>
                                    <div>
                                        <img src="https://www.biognost.com/wp-content/uploads/2019/05/facility.jpg" alt="" width="100%" />
                                    </div>
                                    <div>
                                        <p class="py-4" style="font-size:17px; font-family:'Rubik';">
                                            BioGnost is an internationally recognized company and regional leader in the
                                            development and manufacture of in vitro medical diagnostic devices,
                                            especially diagnostic reagents used in histopathology, cytology, hematology,
                                            and microbiology.

                                            The company manufactures diagnostic reagents according to implemented ISO
                                            13485:2016, ISO 9001:2015, and ISO 14001:2015 standards, and all the
                                            products bear the CE mark.

                                            Our product portfolio currently contains over 2000 highly standardized and
                                            high-quality products that are the results of continuous investment in
                                            research and development activities of the company and own manufacturing
                                            procedures. The company successfully commercializes and sells its products
                                            on a global level and exports to over 70 countries by cooperating with over
                                            100 specialized distributors.
                                        </p>
                                    </div>
                                    <div>
                                        <div class="row">
                                            <div class="col-md-3">
                                                <img class="mb-3" src="https://www.biognost.com/wp-content/uploads/2019/01/G0078314-300x200.jpg" alt="">
                                            </div>
                                            <div class="col-md-3">
                                                <img class="mb-3" src="https://www.biognost.com/wp-content/uploads/2019/01/G0078313-300x200.jpg" alt="">
                                            </div><div class="col-md-3">
                                                <img class="mb-3" src="https://www.biognost.com/wp-content/uploads/2019/01/G0078314-300x200.jpg" alt="">
                                            </div><div class="col-md-3">
                                                <img class="mb-3" src="https://www.biognost.com/wp-content/uploads/2019/01/G0078317-300x200.jpg" alt="">
                                            </div><div class="col-md-3">
                                                <img class="mb-3" src="https://www.biognost.com/wp-content/uploads/2019/01/G0078314-300x200.jpg" alt="">
                                            </div><div class="col-md-3">
                                                <img class="mb-3" src="https://www.biognost.com/wp-content/uploads/2019/01/G0078316-300x200.jpg" alt="">
                                            </div><div class="col-md-3">
                                                <img class="mb-3" src="https://www.biognost.com/wp-content/uploads/2019/01/G0078314-300x200.jpg" alt="">
                                            </div><div class="col-md-3">
                                                <img class="mb-3" src="https://www.biognost.com/wp-content/uploads/2019/01/G0078314-300x200.jpg" alt="">
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
<style>
h2 {
    color: #111111;
    font-weight: 700;
    line-height: 46px;
    margin-bottom: 10px;
    font-family: 'Rubik';
    font-size: 23px;
}

h1 {
    color: #111111;
    font-weight: 400;
    line-height: 46px;
    margin-bottom: 10px;
    font-family: 'Rubik';
    font-size: 35px;
}

li {
    font-family: 'Rubik' !important;
}

ul,
#myUL {
    list-style-type: none;
}

#myUL {
    margin: 0;
    padding: 0;
}

.caret {
    cursor: pointer;
    -webkit-user-select: none;
    /* Safari 3.1+ */
    -moz-user-select: none;
    /* Firefox 2+ */
    -ms-user-select: none;
    /* IE 10+ */
    user-select: none;
    font-family: 'Rubik';
    font-size: 20px;
    color: #466eb4;
}

.nested {
    display: none;
}

.active {
    display: block;
}

.wtu {
    /* margin-bottom: 8px !important; */
    padding: 5px;
}

.wtu:hover {
    /* background-color: #f5f5f5 !important; */
    color: black !important;
    transition: 1s;
}
</style>
<script>
import CompanySidebar from "./CompanySidebar.vue";
export default {
    data() {
        return {
        }
    },
    components: {
        CompanySidebar
    },
    methods: {
    },
    mounted() {
    }
}

</script>