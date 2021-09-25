import React, { useState, useEffect } from 'react';
import {apiv2} from '../../services/api';
import ProductCard from '../card';
import { ProductCategoryStyle } from './styles';

export default function FeaturedProducts() {
  const [products, setProducts] = useState({
    docs: []
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    async function getProdutos() {
      try {
        const response = await apiv2.get('/products/?page=1');
        setProducts(response.data)
      } catch (error) {
        console.log(error)
        alert('Erro ao recuperar produtos da base de dados, verifique sua conexão.')
        setLoading(false)
      } finally {
        setLoading(false)
      }
    }

    getProdutos()
  }, []);
  return (
    <ProductCategoryStyle>
      <section>
          <div class="container">

            <div class="row">
              <div class="col-lg-12">
                <div class="product-top-dt">
                  <div class="product-left-title">
                    
                  </div>
                </div>
              </div>
            </div>

            <div class="product-list">
              <div class="row">
                <div class="col-lg-3 col-md-6">
                  <div class="product-item mb-30">
                      <a href="/produtos" class="product-img">
                        <img src="https://api.appdoquintal.com/files/748b0375070abbc9470b-abacate.jpg" alt=""/>                        
                      </a>
                      <div class="product-info">
                        {/* <p>Available<span>(In Stock)</span></p> */}
                        <h4>Abacate</h4>
                        <div class="product-price">230 disponiveis</div>
                        
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6">
                    <div class="product-item mb-30">
                      <a href="/produtos" class="product-img">
                        <img src="https://api.appdoquintal.com/files/eb66640b5853baddf138-pimentão.jpg" alt=""/>
                        
                      </a>
                      <div class="product-info">
                        {/* <p>Available<span>(In Stock)</span></p> */}
                        <h4>Pimentão</h4>
                        <div class="product-price">100 disponiveis</div>
                        
                      </div>
                    </div>
                  </div>
                  {/* <div class="col-md-12">
                    <div class="more-product-btn">
                      <button class="show-more-btn hover-btn" onclick="window.location.href = '#';">Show More</button>
                    </div>
                </div> */}
              </div>
            </div>
          </div>
        </section>
    </ProductCategoryStyle>
  );
}