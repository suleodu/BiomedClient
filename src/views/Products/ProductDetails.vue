<template>
  <div>
    <!-- banner-2 -->
    <div class="page-head_agile_info_w3l inner-checkout-page">
      <div class="container py-5">
        <h3 class="title-style text-white pt-5">
          <span>Product</span> Single Page
        </h3>
        <ul class="w3_short pt-3 pb-5">
          <li>
            <a href="index.html" class="text-white">Home</a>
            <i class="fa fa-angle-right mx-2 text-white" aria-hidden="true"></i>
          </li>
          <li class="text-light">Single Product 1</li>
        </ul>
      </div>
    </div>
    <!-- //banner-2 -->
    <!-- page -->
    <div class="services-breadcrumb">
      <div class="agile_inner_breadcrumb"></div>
    </div>
    <!-- //page -->
    <div style="margin: 8px auto; display: block; text-align: center">
      <!---728x90--->
    </div>
    <!-- Single Page -->
    <div class="banner-bootom-w3-agileits py-5">
      <div class="container py-md-5 py-4">
        <div class="row">
          <div class="col-lg-5 col-md-8 single-right-left">
            <div class="grid images_3_of_2">
              <div class="flexslider">
                <ul class="slides">
                  <li :data-thumb="`${publicPath}assets/images/si1.png`">
                    <div class="thumb-image">
                      <img
                        :src="`${publicPath}assets/images/si1.png`"
                        data-imagezoom="true"
                        class="img-fluid"
                        alt=""
                      />
                    </div>
                  </li>
                  <li :data-thumb="`${publicPath}assets/images/si2.png`">
                    <div class="thumb-image">
                      <img
                        :src="`${publicPath}assets/images/si2.png`"
                        data-imagezoom="true"
                        class="img-fluid"
                        alt=""
                      />
                    </div>
                  </li>
                  <li :data-thumb="`${publicPath}assets/images/si3.png`">
                    <div class="thumb-image">
                      <img
                        :src="`${publicPath}assets/images/si3.png`"
                        data-imagezoom="true"
                        class="img-fluid"
                        alt=""
                      />
                    </div>
                  </li>
                </ul>
                <div class="clearfix"></div>
              </div>
            </div>
          </div>

          <div class="col-lg-7 single-right-left simpleCart_shelfItem">
            <h3 class="mb-3">Redmi 9 Prime (Space Blue, 64 GB) (4 GB RAM)</h3>
            <p class="mb-3">
              <span class="item_price">$360.00</span>
              <del class="mx-2 font-weight-light">$400.00</del>
              <label>Free delivery</label>
            </p>
            <div class="single-infoagile">
              <ul>
                <li class="mb-3">Cash on Delivery Eligible.</li>
                <li class="mb-3">Shipping Speed to Delivery.</li>
                <li class="mb-3">EMIs from $100/month.</li>
                <li class="mb-3">
                  Bank Offer Extra 5% off* with Axis Bank Buzz Credit Card
                </li>
              </ul>
            </div>
            <div class="product-single-w3l">
              <p class="my-3">
                <i class="far fa-hand-point-right mr-2"></i>
                1 Year Manufacturer Warranty
              </p>

              <ul>
                <li class="mb-1">
                  Handset, Power Adapter, USB Type-C Cable, SIM Eject Tool,
                  Simple Protective Cover, Warranty Card, User Guide
                </li>
                <li class="mb-1">Full HD+ IPS Display</li>
                <li class="mb-1">13MP Rear Camera | 8MP Front Camera</li>
                <li class="mb-1">5020 mAh</li>
                <li class="mb-1">2340 x 1080 Pixels</li>
              </ul>
              <p class="my-sm-4 my-3">
                <i class="far fa-hand-point-right mr-2"></i>Net banking &
                Credit/ Debit/ ATM card
              </p>
            </div>
            <div class="occasion-cart">
              <div
                class="
                  snipcart-details
                  top_brand_home_details
                  item_add
                  single-item
                  hvr-outline-out
                "
              >
                <form action="#" method="post">
                  <fieldset>
                    <input type="hidden" name="cmd" value="_cart" />
                    <input type="hidden" name="add" value="1" />
                    <input type="hidden" name="business" value=" " />
                    <input
                      type="hidden"
                      name="item_name"
                      value="Samsung Galaxy J7 Prime"
                    />
                    <input type="hidden" name="amount" value="200.00" />
                    <input type="hidden" name="discount_amount" value="1.00" />
                    <input type="hidden" name="currency_code" value="USD" />
                    <input type="hidden" name="return" value=" " />
                    <input type="hidden" name="cancel_return" value=" " />
                    <input
                      type="submit"
                      name="submit"
                      value="Add to cart"
                      class="btn btn-style"
                    />
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- //Single Page -->

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
                    <h4 class="mb-3">Smart Watches</h4>
                    <p>Sale up to 25% off all in store</p>
                  </div>
                  <div class="col-sm-5 offerimg-w3l">
                    <img :src="`${publicPath}assets/images/off1.png`" alt="" class="img-fluid" />
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div class="col-lg-6 mt-lg-0 mt-4">
            <a href="product.html">
              <div class="join-agile text-left p-4">
                <div class="row">
                  <div class="col-sm-7 offer-name">
                    <h6>Top Brands, lowest Prices</h6>
                    <h4 class="mb-3">Smart Phones</h4>
                    <p>Free shipping order over $100</p>
                  </div>
                  <div class="col-sm-5 offerimg-w3l">
                    <img :src="`${publicPath}assets/images/off2.png`" alt="" class="img-fluid" />
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- middle section -->
    <div style="margin: 8px auto; display: block; text-align: center">
      <!---728x90--->
    </div>
  </div>
</template>
<!-- imagezoom -->
	<!-- //imagezoom -->

	<!-- flexslider
	<link rel="stylesheet" href="css/flexslider.css" type="text/css" media="screen" />

	<script src="js/jquery.flexslider.js"></script> -->
	<!-- <script> -->
<script>
export default {
  data() {
    return {
      publicPath: process.env.BASE_URL,
    };
  },
};
</script>