import React from 'react';
import { FooterStyle } from './styles';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (

    <FooterStyle id="myFooter">
      <div className="footer-social">
        <div className="container">
          <h5 className="footer-copyright font-weight-bold text-white">DoQuintal dos Produtores para a sua mesa :)</h5>
          <h5 className="footer-copyright font-weight-bold text-white">Parceiros</h5>
          <div className="row justify-content-center">
            <div className="cc col-1">
              <Link to="https://www2.unifap.br/ccomputacao/" target="_blank" />
            </div>
            <div className="governo col-1">
              <Link to="https://www.portal.ap.gov.br" target="_blank" />
            </div>
            <div className="profnit col-1">
              <Link to="http://www.profnit.org.br/en/profnit-network/" target="_blank" />
            </div>
            <div className="rurap col-1">
              <Link to="https://rurap.portal.ap.gov.br" target="_blank" />
            </div>
            <div className="sebrae col-1">
              <Link to="https://m.sebrae.com.br/sites/PortalSebrae/ufs/ap?codUf=3" target="_blank" />
            </div>
            <div className="setec col-1" >
              <Link to="http://www.setec.ap.gov.br/" target="_blank" />
            </div>
            <div className="srd col-1" >
              <Link to="/" target="_blank" />
            </div>
            <div className="unifap col-1" >
              <Link to="/https://www2.unifap.br" target="_blank" />
            </div>
          </div>
        </div>
      </div>
    </FooterStyle>

  )
}

