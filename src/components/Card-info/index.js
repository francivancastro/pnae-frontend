import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaExclamation, FaHeart } from "react-icons/fa";
import { base_uri_image } from '../../services/api';
import { Card } from './styles';

export default function CardInfo({ person, type }) {
  const path = type === 'producer' ? '/produtos/produtor/' : '/produtos/cooperativa/' 

  return (
  <div className="col-md-6 col-lg-3 ftco-animate fadeInUp ftco-animated">
    <Card className="product">
      <Link to={path + person._id} className="img-prod">
        {person.image ?
          <img className="img-fluid" src={base_uri_image + person.image}/>
          :
          <img className="img-fluid" src="http://placehold.it/500x500" style={{width: '100%'}}/>
        }
        <div className="overlay"></div>
      </Link>
      <div className="text py-3 pb-4 px-3 text-center">
        <h3>
          <Link to={path + person._id} >{person.name}</Link>
        </h3>
        <div className="d-flex">
          <div className="pricing">
            <p className="price">
              <span className="price-sale">{person.address.city ? person.address.city.toLowerCase() : 'Desconhecido'}</span>
            </p>
          </div>
        </div>
      
        <div className="bottom-area d-flex px-3">
          <div className="m-auto d-flex">
            <Link className="add-to-cart d-flex justify-content-center align-items-center text-center">
              <FaBars className="icon"/>
            </Link>

            <Link className="add-to-cart d-flex justify-content-center align-items-center text-center">
              <FaExclamation className="icon"/>
            </Link>
            
            <Link className="add-to-cart d-flex justify-content-center align-items-center text-center">
              <FaHeart className="icon"/>
            </Link>
          </div>
        </div>
      </div>
    </Card>
  </div>
  );
}
