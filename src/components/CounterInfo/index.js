import React, { useState, useEffect } from 'react';
import { Row, Container } from 'react-bootstrap';
import { CounterInfoStyle } from './styles';

export default function FeaturedProducts() {
  
  return (
    <CounterInfoStyle>
      <section>
        <Container>
          <Row>
            <div className="col-lg-12">
              {/* <div className="main_title">
                  <span><em></em></span>
                  <h2>Nossos Números</h2>
                  <p></p>             
              </div> */}
              <br/><br/><br/>
            </div>
          </Row>

          <Row>          
            
            <div className="col-lg-3 col-md-3">
              <div className='counter-number'>1300</div> 
              <div className='counter-title'>Produtores</div>
            </div>
            {/* <div className="col-lg-3 col-md-3">
              <div className='counter-number'>420</div> 
              <div className='counter-title'>Categorias</div>
            </div> */}
            <div className="col-lg-3 col-md-3">
              <div className='counter-number'>14031</div> 
              <div className='counter-title'>Produtos</div>
            </div>   
          
            <div className="col-lg-3 col-md-3">
              <div className='counter-number'>680</div>             
              <div className='counter-title'>Escolas</div>
            </div>

            <div className="col-lg-3 col-md-3">
              <div className='counter-number'>80</div>             
              <div className='counter-title'>Municípios</div>
            </div>
          </Row>
        </Container>
      </section>
    </CounterInfoStyle>
  );
}