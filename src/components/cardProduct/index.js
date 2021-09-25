//Alterado por Amerson Chagas - 19-01-2021

import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaBars, FaShoppingCart, FaHeart } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addToCartRequest } from '../../store/modules/cart/actions';
import history from '../../services/history';
import { base_uri_image } from '../../services/api';

import { CardProductStyle } from './styles';

export default function CardProduct({ product }) {
  // console.log(product);

  const { signed, user } = useSelector(state => state.auth);

  
  const dispatch = useDispatch();
  const producer_name = product.producer ? product.producer.name : product.cooperative.name
  const producer_city = product.producer ? product.producer.address.city : product.cooperative.address.city
  const producer_district = product.producer ? product.producer.address.district : product.cooperative.address.district

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
    <CardProductStyle className="col-lg-12 col-md-12 mb-20" >    
        
      <div className="col-md-12  mb-30 product-item">
        <div className="col-md-1 product-img">
          <a href="/produto" >
            <img src={base_uri_image + product.image} data-src="img/location_list_4.jpg" alt="" className="lazy loaded" data-was-processed="true"/>                      
          </a>
        </div>
        <div className="col-md-11">          
          <div className="col-md-3 product-info">
            <h4 className="product-name"><Link to="/produto">{product.name}</Link></h4>         
          </div>
          <div className="col-md-3 product-info">
            <h4 className="product-owner">{producer_name}</h4>     
          </div>
          <div className="col-md-2 product-info">
            <h4 className="product-location">{producer_city} | {producer_district}</h4>        
          </div>
          <div className="col-md-1 product-info">
            <h4 className="product-price">R$ {product.price.toFixed(2).replace('.', ',')}</h4>          
          </div>
          <div className="col-md-1 product-info">
            <h4 className="product-qnt">{product.qty} Disponíveis</h4>          
          </div>
        </div>
        <div className="col-md-2 qty-cart">        
          {/* <div className="quantity buttons_added">
            <input type="button" value="-" className="minus minus-btn"/>
            <input type="number" step="1" name="quantity" value="1" className="input-text qty text"/>
            <input type="button" value="+" className="plus plus-btn"/>
          </div> */}
          <div className="cart-icon mb-10 mt-10">
            <button  onClick={()=> handleAddCart(product)} className="add-cart-btn hover-btn"><i className="uil uil-shopping-cart-alt"></i>Add to Cart</button>
          </div>
        </div>

      </div>
    </CardProductStyle>      
  );
}

