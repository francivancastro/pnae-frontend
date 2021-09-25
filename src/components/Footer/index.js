import React from 'react';
import { FooterStyle } from './styles';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (

    <FooterStyle>
      <footer class="footer">
        <div class="footer-first-row">
          <div class="container">
            <div class="row">              
              <div class="col-md-12 col-sm-12">
                <div class="partners-links-footer">
                  <ul>
                    <li><a href="#">UNIFAP</a></li>
                    <li><a href="#">UEAP  </a></li>
                    <li><a href="#">SEBRAE</a></li>
                    <li><a href="#">RURAP</a></li>
                    <li><a href="#">SETEC</a></li>
                    <li><a href="#">PROFNIT</a></li>
                    <li><a href="#">GOVERNO DO AMAPÁ</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-second-row">
          <div class="container">
            <div class="row">
              <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="second-row-item">
                <h4>Useful Links</h4>
                  <ul>
                    <li><a href="about_us.html">About US</a></li>
                    <li><a href="shop_grid.html">Featured Products</a></li>
                    <li><a href="offers.html">Offers</a></li>
                    <li><a href="our_blog.html">Blog</a></li>
                    <li><a href="faq.html">Faq</a></li>
                    <li><a href="career.html">Careers</a></li>
                    <li><a href="contact_us.html">Contact Us</a></li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="second-row-item">
                  <h4>Useful Links</h4>
                  <ul>
                    <li><a href="about_us.html">About US</a></li>
                    <li><a href="shop_grid.html">Featured Products</a></li>
                    <li><a href="offers.html">Offers</a></li>
                    <li><a href="our_blog.html">Blog</a></li>
                    <li><a href="faq.html">Faq</a></li>
                    <li><a href="career.html">Careers</a></li>
                    <li><a href="contact_us.html">Contact Us</a></li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="second-row-item">
                  <h4>Top Cities</h4>
                  <ul>
                    <li><a href="#">Gurugram</a></li>
                    <li><a href="#">New Delhi</a></li>
                    <li><a href="#">Bangaluru</a></li>
                    <li><a href="#">Mumbai</a></li>
                    <li><a href="#">Hyderabad</a></li>
                    <li><a href="#">Kolkata</a></li>
                    <li><a href="#">Ludhiana</a></li>
                    <li><a href="#">Chandigrah</a></li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="second-row-item-app">
                  <h4>Download App</h4>
                  <ul>
                    <li><a href="#"><img class="download-btn" src="images/download-1.svg" alt=""/></a></li>
                    <li><a href="#"><img class="download-btn" src="images/download-2.svg" alt=""/></a></li>
                  </ul>
                </div>
                <div class="second-row-item-payment">
                  <h4>Payment Method</h4>
                  <div class="footer-payments">
                    <ul id="paypal-gateway" class="financial-institutes">
                      <li class="financial-institutes__logo"> </li>
                      <li class="financial-institutes__logo"> </li>
                      <li class="financial-institutes__logo"> </li>
                    </ul>
                  </div>
                </div>
                <div class="second-row-item-payment">
                  <h4>Newsletter</h4>
                  <div class="newsletter-input">
                    <input id="email" name="email" type="text" placeholder="Email Address" class="form-control input-md" required=""/>
                    <button class="newsletter-btn hover-btn" type="submit"><i class="uil uil-telegram-alt"></i></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-last-row">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="footer-bottom-links">
                  <ul>
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Contate-nos</a></li>
                    <li><a href="#">Política de Privacidade</a></li>
                    <li><a href="#">Termos e Condições de Uso</a></li>
                    <li><a href="#">Política de devolução e reembolso</a></li>
                  </ul>
                </div>
                <div class="copyright-text">
                  <i class="uil uil-copyright"></i>Copyright 2021 <b>App do Quintal</b> . All rights reserved
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </FooterStyle>

  )
}

