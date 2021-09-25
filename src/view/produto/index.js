import React from 'react';
import NavBar from '../../components/navbar';
import MenuBar from '../../components/menubar';
import Footer from '../../components/rodape';

import { ProductDetailStyle } from './styles';

export default function Produto() {
    
  return (
    <>	
			<NavBar />	
			<MenuBar />	
			<ProductDetailStyle>	
        <section>
          <div class='container'>
            <div class="row">
              <div class="col-lg-12">
                <div class="product-detail">
                  <div class="row">
                    <div class="col-lg-4 col-md-4">
                      <div class="image-product">
                        <img src="https://api.appdoquintal.com/files/eb66640b5853baddf138-pimentão.jpg" alt=""/>
                      </div>
                    </div>
                    <div class="col-lg-8 col-md-8">
                      <div class="product-detail-info">
                        <h2>Pimentão</h2>
                        <div class="number-stock">
                          <p class="product-number">Produto Nº.<span>12345</span></p>
                          <p class="stock-qty">Disponivel <span>(956)</span></p>
                        </div>
                        <div class="product-select-option">
                          <ul class="product-option">
                            <li> <label for="p1">10un</label></li>
                            <li> <label for="p1">20un</label></li>
                            <li> <label for="p1">100un</label></li>                        
                          </ul>
                        </div>
                        <p class="product-description">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vulputate, purus at t
                          empor blandit, nulla felis dictum eros, sed volutpat odio sapien id lectus. Cras mollis massa a
                          c congue posuere. Fusce viverra mauris vel magna pretium aliquet. Nunc tincidunt, velit id tempu
                          s tristique, velit dolor hendrerit nibh, at scelerisque neque mauris sed ex.
                        </p>
                        <div class="product-cart-info">                        
                          <div class="qty-product">
                            <div class="quantity buttons_added">
                              <input type="button" value="-" class="minus minus-btn"/>
                              <input type="number" step="1" name="quantity" value="1" class="input-text qty text"/>
                              <input type="button" value="+" class="plus plus-btn"/>
                            </div>
                          </div>
                              
                          <ul class="product-cart-add">
                            <li><button class="add-cart-btn hover-btn"><i class="uil uil-shopping-cart-alt"></i>Add to Cart</button></li>
                            
                          </ul>
                        </div>                      
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
			</ProductDetailStyle>	
			<Footer />
    </>
  )
}
