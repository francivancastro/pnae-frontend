import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaBars, FaShoppingCart, FaHeart } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addToCartRequest } from '../../store/modules/cart/actions';
import history from '../../services/history';
import { base_uri_image } from '../../services/api';

import { ProductStyle } from './styles';

export default function CardProduct({ product }) {
  const { signed, user } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const name = product.producer ? product.producer.name : product.cooperative.name
  const city = product.producer ? product.producer.address.city : product.cooperative.address.city

  function handleAddCart(product) {
    if (signed && user.type === 'Cliente') {
      dispatch(addToCartRequest(product))
    }
    if (!signed && window.confirm('Você deseja fazer login ?')) {
      history.push('/login/cliente')
    }
    if (user.type !== 'Cliente'){
      alert('Apenas clientes podem comprar produtos')
    }
  }
  return (
   
    <div className="col-md-6 col-lg-3 ftco-animate fadeInUp ftco-animated" style={{marginBottom: '30px'}}>
      <ProductStyle className="product">
        <Link to="/produto" className="img-prod">
          {product.image ?
            <img className="img-fluid" src={base_uri_image + product.image}/>
            :
            <img className="img-fluid" src="http://placehold.it/500x500" style={{width: '100%'}}/>
          }
          <div className="overlay"></div>
        </Link>
        <div className="text py-3 pb-4 px-3 text-center">
          <h3>
            <Link to="/produto">{product.name}</Link>
          </h3>
          <div className="d-flex">
            <div className="pricing">
              <p className="price">
                <span className="price-sale">R$ {product.price.toFixed(2).replace('.', ',')}</span>
              </p>
              <p className="seller">
                <span className="name-seller">{name}</span>
              </p>
              <p className="address">
                <span className="address-city">{city}</span>
              </p>
            </div>
          </div>
          <div className="bottom-area d-flex px-3">
            <div className="m-auto d-flex">
            {
            /*
              <Link className="add-to-cart d-flex justify-content-center align-items-center text-center">
                <FaBars className="icon"/>
              </Link>
            */
            }
            
              <Link to="#" onClick={()=> handleAddCart(product)} type="button" className="add-to-cart d-flex justify-content-center align-items-center text-center">
                <FaShoppingCart className="icon"/>
              </Link>
            
            {
            /*
              <Link className="add-to-cart d-flex justify-content-center align-items-center text-center">
                <FaHeart className="icon"/>
              </Link>
            */
            }
            </div>
          </div>
        </div>
      </ProductStyle>
    </div>
  );
}

