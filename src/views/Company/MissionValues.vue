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
                                            Mission, Vision & Values
                                        </h1>
                                    </div>
                                    <div>
                                        <img src="https://www.biognost.com/wp-content/uploads/2019/02/mission.jpg" alt="" width="100%" />
                                    </div>
                                    <div class="mb-3">
                                        <h1>
                                            Your satisfaction and trust are our priorities
                                        </h1>
                                        <p style="font-size:17px; font-family:'Rubik';">
                                            Our mission is to create innovative and safe products and provide satisfactory services, as well as introduce new or expand the existing production lines and sales programs in accordance with the dynamics and demands of the market. We currently offer more than 2000 highly standardized and high-quality products.
                                        </p>
                                    </div>
                                    <div class="mb-3">
                                        <h1>
                                            You can rely on us!
                                        </h1>
                                        <p style="font-size:17px; font-family:'Rubik';">
                                            Our product and service excellence makes BioGnost a desirable regional as well as an international business partner. The key to the success of our development is in the ever-expanding network of business collaborations, as well as recognizable social responsibility. In the coming years, we plan to further our market expansion, additionally invest in research and development, and to become the leading manufacturer in the fields of microbiological diagnostics and histopathology. One of our biggest ambitions is creating the BioGnost Group.
                                        </p>
                                    </div>
                                    <div class="mb-3">
                                        <h1>
                                            Innovation and creativity
                                        </h1>
                                        <p style="font-size:17px; font-family:'Rubik';">
                                            One of BioGnost’s distinctive qualities is the complete dedication to science that is manifested through innovation. By thinking ahead and continuously perfecting our current knowledge base we are striving to achieve our ambition – to be the first to invent and to market!
                                        </p>
                                    </div>
                                    <div class="mb-3">
                                        <h1>
                                            Quality, simplicity, and consistency
                                        </h1>
                                        <p style="font-size:17px; font-family:'Rubik';">
                                            Our company’s entire business operation is in accordance with the international ISO 9001 and ISO 13485 standards. Our range consists of more than 2000 products, 170 of which are registered brand names. All of our products are easy and safe to use, and they provide reliable results. As with the quality of products and service, we are also consistently maintaining our professional image as well as the integrity among the customers and our business partners. The key to our success is creating an atmosphere of mutual trust and satisfaction.
                                        </p>
                                    </div>
                                    <div class="mb-3">
                                        <h1>
                                            Team spirit and teamwork
                                        </h1>
                                        <p style="font-size:17px; font-family:'Rubik';">
                                            We take pride in our employees and their knowledge, professional experience and skills, as well as their dedicated work that creates a positive and stimulating work environment. Our guiding principle is “Living in harmony with our values”; it is BioGnost’s set of values present within the company and it is reflected on the market. The Board members and their mentoring relationship with the employees are an additional motivation in everyday business. The quality of our products and services is intertwined with the quality of our employees’ interrelationships. We consider changes to be chances of success and affirmation of common goals. With that in mind, we continue to strengthen the team spirit and avoid unnecessary conflicts brought by every change.
                                        </p>
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