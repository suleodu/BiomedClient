<template>
  <div>
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="footer__about">
              <div class="footer__logo">
                <a href="#"><img src="/assets/img/logo.png" style="width: 60%;" alt="" /></a>
              </div>
              <p>
                The customer is at the heart of our unique business model, which
                includes design.
              </p>
              <a href="#"><img src="a/ssets/img/payment.png" alt="" /></a>
            </div>
          </div>
          <div class="col-lg-2 offset-lg-1 col-md-3 col-sm-6">
            <div class="footer__widget">
              <h6>Quick Links</h6>
              <ul>
                <li><router-link to="/product-category/1/1">Products</router-link></li>
                <li><router-link to="/company">Company</router-link></li>
                <li><router-link to="/contact-us">Contact</router-link></li>
                <li><router-link to="/special-order">Special Order</router-link></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 offset-lg-1 col-md-6 col-sm-6">
            <div class="footer__widget">
              <h6>NewLetter</h6>
              <div class="footer__newslatter">
                <p>
                  Be the first to know about new arrivals, look books, sales &
                  promos!
                </p>
                <form action="#">
                  <input type="text" placeholder="Your email" />
                  <button type="submit">
                    <span class="icon_mail_alt"></span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12 text-center">
            <div class="footer__copyright__text">
              <p>
                Copyright ©
                {{ new Date().getFullYear() }}

                All rights reserved | Biomed
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>

    <div class="search-model">
      <div class="h-100 d-flex align-items-center justify-content-center">
        <div class="search-close-switch">+</div>
        <form class="search-model-form">
          <input type="text" id="search-input" placeholder="Search here....." />
        </form>
      </div>
    </div>
  </div>
</template>