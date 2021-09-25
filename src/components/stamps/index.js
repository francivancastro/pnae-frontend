import React from 'react';
import shipped from '../../icons/shipped.svg';
import diet from '../../icons/diet.svg';
import medal from '../../icons/medal.svg';
import customerService from '../../icons/customer-service.svg';
import { Section } from './styles';

export default function Stamps() {

  return (
    <Section className="ftco-section">
			<div className="container">
				<div className="row no-gutters ftco-services">
          <div className="col-md-3 text-center d-flex align-self-stretch ftco-animate fadeInUp ftco-animated">
            <div className="media block-6 services mb-md-0 mb-4">
              <div className="icon bg-color-1 active d-flex justify-content-center align-items-center mb-2">
            		<div className="icon-border"><img src={shipped} alt="icon"/></div>
              </div>
              <div className="media-body">
                <h3 className="heading"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Envio Grátis</font></font></h3>
                <span><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Em encomendas superiores a R$ 100</font></font></span>
              </div>
            </div>      
          </div>
          <div className="col-md-3 text-center d-flex align-self-stretch ftco-animate fadeInUp ftco-animated">
            <div className="media block-6 services mb-md-0 mb-4">
              <div className="icon bg-color-2 d-flex justify-content-center align-items-center mb-2">
                <div className="icon-border"><img src={diet} alt="icon"/></div>
              </div>
              <div className="media-body">
                <h3 className="heading"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Sempre fresco</font></font></h3>
                <span><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Produto embalado</font></font></span>
              </div>
            </div>    
          </div>
          <div className="col-md-3 text-center d-flex align-self-stretch ftco-animate fadeInUp ftco-animated">
            <div className="media block-6 services mb-md-0 mb-4">
              <div className="icon bg-color-3 d-flex justify-content-center align-items-center mb-2">
                <div className="icon-border"><img src={medal} alt="icon"/></div>
              </div>
              <div className="media-body">
                <h3 className="heading"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Qualidade superior</font></font></h3>
                <span><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Produtos de qualidade</font></font></span>
              </div>
            </div>      
          </div>
          <div className="col-md-3 text-center d-flex align-self-stretch ftco-animate fadeInUp ftco-animated">
            <div className="media block-6 services mb-md-0 mb-4">
              <div className="icon bg-color-4 d-flex justify-content-center align-items-center mb-2">
                <div className="icon-border"><img src={customerService} alt="icon"/></div>
              </div>
              <div className="media-body">
                <h3 className="heading"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Suporte</font></font></h3>
                <span><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Suporte 24/7</font></font></span>
              </div>
            </div>      
          </div>
        </div>
			</div>
		</Section>
  );
};