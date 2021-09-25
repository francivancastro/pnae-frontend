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
    <CardProductStyle className="col-lg-3 col-md-6" >    
      <div class="product-item mb-30">
        <a href="/produto" class="product-img">
          <img src={base_uri_image + product.image} alt=""/>                        
        </a>
        <div class="product-info">
          {/* <p>Available<span>(In Stock)</span></p> */}
          <h4><Link to="#">{product.name}</Link></h4>
          <div class="product-price">R$ {product.price.toFixed(2).replace('.', ',')}</div>
          <div class="qty-cart">
            <div class="quantity buttons_added">
              <input type="button" value="-" class="minus minus-btn"/>
              <input type="number" step="1" name="quantity" value="1" class="input-text qty text"/>
              <input type="button" value="+" class="plus plus-btn"/>
            </div>
            <span class="cart-icon">
              <button  onClick={()=> handleAddCart(product)} class="add-cart-btn hover-btn"><i class="uil uil-shopping-cart-alt"></i>Add to Cart</button>
            </span>
          </div>
        </div>
      </div>
    </CardProductStyle>      
  );
}

