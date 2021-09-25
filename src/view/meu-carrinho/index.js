import React from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addQty, removeQty, removeItem, confirmOrder } from '../../store/modules/cart/actions';
import { apiv2, base_uri_image } from '../../services/api';


import Navbar from '../../components/navbar';
import Menubar from '../../components/menubar';
import Banner from '../../components/banner';
import Footer from '../../components/rodape';
import { EmptyCart, CartSection } from './styles';

import { RiShoppingCartLine } from 'react-icons/ri';
;

export default function Cart() {
  const { carts, qtyItems } = useSelector(state => state.cart)
    const dispatch = useDispatch();
    
    async function handleConfirm(cart) {
      if(window.confirm('Você deseja realmente confirmar essa encomenda? Após isso você pode ir em "meus pedidos" para ter acesso ao telefone do fornecedor.')) {
        const body = {...cart, items: cart.products}
        
        const products = cart.products

        delete body.products;

        try {
          await apiv2.post('/orders', body);

          products.map(product => dispatch(removeItem(product, cart)))
          //console.log(products);
          dispatch(confirmOrder(cart))
          
          alert('Pedido confirmado com sucesso.')
        } catch (error) {
          alert('Houve um erro ao confirmar seu pedido, verifique sua conexão')
        }
      }
    }

  return (
    <>
      <Navbar />
      <Banner title="Meu Carrinho" />

      <div style={{minHeight: '300px'}}>
        <div className="container-fluid">
          <div className="container" >
          {qtyItems === 0 ? 
            <EmptyCart>
              <div className="progresso-compra car-vazio">
                <div className="head-prog">
                  <h2>CARRINHO VAZIO</h2>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 text-center">
                  <RiShoppingCartLine size={220} color="86ae46"/>
                  <h2 className="text-center">Não há produtos selecionados até o momento!</h2>
                  <p className="text-center">Seu carrinho está vazio. <Link to="/produtos" >Voltar para o site</Link>.</p>
                </div>
              </div>
            </EmptyCart>  
          :
            <CartSection>
              <div className="text-center">
                <h3>Carrinho: ({carts.length} Produtores) R$ 200,00</h3>
              </div>
              {carts.map(cart => (
               
                <div key={carts.indexOf(cart)} className="cart">
                  <div className="seller">
                    <h5>Produtor(a): {cart.producer ? cart.producer_name : cart.cooperative_name}</h5>
                  </div>
                  {cart.products.map(product => (
                    <div key={product.product} className="product">
                      <div className="product-image">
                      {product.image ?
                        <img width='30px' src={base_uri_image + product.image} alt="product"/>
                      :
                        <img src="http://placehold.it/200x200" alt="product" />
                      }
                      </div>
                      <div className="product-info">
                      <div className="product-title">
                          <h6>Produto</h6>
                          <strong>{product.product_name}</strong>
                        </div>
                        <div className="product-title">
                          <h6>Produtor</h6>
                          <strong>{cart.producer_name}</strong>
                        </div>
                        <div className="product-title">
                          <h6>Local</h6>
                          <strong>Cidade|Bairro</strong>
                        </div>
                        <div className="product-price">
                          <h6>Preço</h6>
                          <strong>R${product.price.toString().replace(".", ",")}</strong>
                          
                        </div>
                        <div className="product-price">
                          <h6>Disponivel</h6>
                          <strong>{product.qty }</strong>
                          
                        </div>
                        <div className="product-quantity">
                          <h6>Quantidade</h6>
                          <div className="text-center">
                            <button
                              className="btn-quantity remove" 
                              onClick={() => dispatch(removeQty(product, cart))}> 
                              - 
                            </button> 
                              {product.qty}
                            <button 
                              className="btn-quantity add"
                              onClick={() => dispatch(addQty(product, cart))}>
                              + 
                            </button>
                            <p>
                              <button 
                                className="btn-remove"
                                onClick={() => {
                                  if(window.confirm(`Deseja realmente remover ${product.product_name} do carrinho ?`)) {
                                    dispatch(removeItem(product, cart))
                                  }
                                }}>
                                Remover
                              </button>
                            </p>
                          </div>
                        </div>
                        <div className="product-total">
                          <h6>Subtotal</h6>
                          <strong>R${product.total_price.toString().replace(".", ",")}</strong>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div style={{padding: '20px'}} ><label>Observação sobre o pedido:</label><textarea style={{width: '100%'}} rows='5' name='justificativa'></textarea></div>         

                  
                  <div className="confirm">                    
                    <div className="final-price">
                      <h5>Valor final</h5>
                      <h5>R$ {cart.final_price.toString().replace(".", ",")} </h5>                      
                    </div>                    
                    <button onClick={() => handleConfirm(cart)}> Confirmar </button>
                  </div>
                 

                </div>
                
              ))}
            </CartSection>
          }
            <br/>
          </div>
         
        </div>
      </div>
    <Footer />
    </>
  );
}