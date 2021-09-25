import React, { useState, useEffect } from 'react';
import {apiv2} from '../../services/api';
import ProductCard from '../card';
import { SectionProducts } from './styles';

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
    <SectionProducts>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 heading-section text-center">
            <span className="subheading">Detalhes do Produto</span>
          </div> 
        </div>   		
      </div>
      <div className="container">
        <div class="row">          
            <div class="col-md-4 col-lg-4">
                <a class="img-prod">
                  <img class="img-fluid" src="https://api.appdoquintal.com/files/748b0375070abbc9470b-abacate.jpg"/>
                  <div class="overlay"></div>
                </a>
                <div class="text py-3 pb-4 px-3 text-center">
                  
                  
                  <div class="bottom-area d-flex px-3">
                    <div class="m-auto d-flex">
                      <a type="button" class="add-to-cart d-flex justify-content-center align-items-center text-center" href="/"></a>
                    </div>
                  </div>
                </div>
            </div>
            <div class="col-md-8 col-lg-8">		          
              <div class="text">
                <h3>Abacate</h3>
                
                <span>Product No.12345 Available(Instock)</span>
                
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vulputate, purus at tempor blandit, nulla felis dictum eros, sed volutpat odio sapien id lectus. Cras mollis massa ac congue posuere. Fusce viverra mauris vel magna pretium aliquet. Nunc tincidunt, velit id tempus tristique, velit dolor hendrerit nibh, at scelerisque neque mauris sed ex.
                </p>
                <div class="bottom-area d-flex px-3">
                  <div class="m-auto d-flex">
                    <a type="button" class="add-to-cart d-flex justify-content-center align-items-center text-center" href="/">Adicionar no Carrinho</a>
                  </div>
                </div>
              </div>

          </div>
        </div>
      </div>
    </SectionProducts>
  );
}