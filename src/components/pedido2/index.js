import React from 'react';
import './pedido2.css';
import {ProductInfo, Border} from './styles';
import {format} from 'date-fns';
import { celularMask } from '../../utils/mask';
import {apiv2} from '../../services/api';

import {Accordion, Card} from 'react-bootstrap';

function Pedido1({ order }){
  function setStatus(status) {
    if(status === 'processing' || status === 'confirmed') {
      return 'Confirmado'
    }
    if(status === 'canceled') {
      return 'Cancelado'
    }
    if(status === 'completed') {
      return 'Finalizado'
    }
  }
  
    return(
      <>


        <Accordion >

          <Card className="mb-2">
            <Border>
              <Accordion.Toggle as={Card.Header} eventKey="0">
              <div className="row mb-2 ml-2">Data: {format(new Date(order.createdAt), "dd/MM/yyyy")} </div>    
              <div className="row mb-2 ml-2">Cliente: {order.customer.name} | Telefone: {celularMask(order.customer.cell_phone)}</div>
              <div className="row mb-2 ml-2"> Status: {setStatus(order.status)}</div>
                  
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <div className="row mb-2 ml-2">Produtos: </div>
                  {order.items.map(item => (
                    <ProductInfo>
                      <p>{item.product.name} - R$ {item.product.price.toFixed(2).replace('.', ',')} x{item.qty}</p>
                    </ProductInfo>
                  ))}
                  <div className="row mb-2 ml-2">Preço: R${order.total_price.toFixed(2)}</div>
                  <div className="row mb-2 ml-2"><a className='btn btn-success' hrtef='#'>Estamos Separando seus Produtos</a></div>
                  <div className="row mb-2 ml-2"><a className='btn btn-success' hrtef='#'>Preparado para Entrega</a> </div> 
                  <div className="row mb-2 ml-2"><a className='btn btn-success' hrtef='#'>Em Rota de entrega</a> </div>
                  <div className="row mb-2 ml-2"><a className='btn btn-success' hrtef='#'>Produtos Entregue</a> </div>
                  <div className="row mb-2 ml-2"><a className='btn btn-danger' hrtef='#'>Cancelar Pedido</a></div>

                </Card.Body>
              </Accordion.Collapse>
            </Border>
          </Card>
        </Accordion>

      </>
    )
}

export default Pedido1;