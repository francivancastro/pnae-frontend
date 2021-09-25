import React from 'react';
import './pedido1.css';
import {ProductInfo, Border} from './styles';
import {format} from 'date-fns';
import { celularMask } from '../../utils/mask';
import {apiv2} from '../../services/api';

import {Accordion, Card} from 'react-bootstrap';

function Pedido1({ order }){
  function setStatus(status) {
    if(status === 'processing') {
      return 'Recebemos seu Pedido!'
    }

    if(status === 'confirmed') {
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
                Data do Pedido: {format(new Date(order.createdAt), "dd/MM/yyyy")}
                {
                    order.producer ?
                      <>
                        <div className="row mb-2 ml-2">Produtor: {order.producer.name} | Telefone: {celularMask(order.producer.cell_phone)}</div>
                      </>
                      :
                      <>
                        <div className="row mb-2 ml-2">Produtor: {order.cooperative.name} | Telefone: {celularMask(order.cooperative.cell_phone)}</div>
                      </>
                  }
                <div className="row mb-2 ml-0"> 
                <span class='btn btn-sm status-desativado'>Recebemos seu Pedido!</span>
                <span class='btn btn-sm status-atual'>Sua Nota Fiscal foi Emitida</span>
                <span class='btn btn-sm status-desativado'>Seu Pedido está em Transporte</span>
                <span class='btn btn-sm status-desativado'>Seu Pedido foi Entrege</span>
                {order.status == 'canceled' &&
                    <span class='btn btn-sm status-cancelado'>Pedido Cancelado</span>
                }


                {/* {setStatus(order.status)} */}
                </div>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                 
                  <div className="row mb-2 ml-2">Produtos: </div>
                  {order.items.map(item => (
                    <ProductInfo>
                      <p>{item.product.name} | R$ {item.product.price.toFixed(2).replace('.', ',')} x {item.qty}</p>
                    </ProductInfo>
                  ))}
                  <div className="row mb-2 ml-2">Preço: R${order.total_price.toFixed(2)}</div>

                </Card.Body>
              </Accordion.Collapse>
            </Border>
          </Card>
        </Accordion>

      </>
    )
}

export default Pedido1;