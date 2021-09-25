import React, { useState, useEffect } from 'react';
import {apiv2} from '../../services/api';
import ProductCard from '../card/';
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
      <div className="container title">
        <div className="row justify-content-center mb-3 pb-3">
          <div className="col-md-12 heading-section text-center ftco-animate fadeInUp ftco-animated">
            <span className="subheading">Produtos em Destaque 2s</span>
          </div>
        </div>   		
      </div>
      <div className="container">
          {loading ? (
            <div className="d-flex justify-content-center p-5">
              <div className="spinner-border text-success" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          ) : (
      
            products.docs.length >= 1 ?
                <div className="row">
                  {products.docs.map(product => (
                    <ProductCard key={product._id} product={product} />
                  ))
                  }
                </div>
              : <div className="alert alert-danger" role="alert">Não há produtos cadastrados</div> 
            )}
        </div>
    </SectionProducts>
  );
}