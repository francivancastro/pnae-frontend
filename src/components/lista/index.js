import React from 'react';
import { Info, AreaButton } from './styles'
import './lista.css';

function Lista(props) {
  const product = props.product
  const image = product.image ? new Buffer(product.image.data, 'base64') : null;
  let dono = '';
  let tipo = '';
  if(product.cooperative) {
    dono = product.cooperative.name
    tipo = 'Cooperativa'
  } else {
    dono = product.producer.name
    tipo = 'Produtor'
  }
  return (
    <>
      <div className="card_box">
        <div className="img_card">
          {image ?
            <img class="card-img-top" src={`data:image/jpeg;base64,${image}`} alt="" />
            :
            <img class="card-img-top" src="http://placehold.it/500x300" alt="" />
          }
        </div>
        <div className="text_info">
          <h5 className="text-center">{product.name}</h5>
          <Info>{product.description}</Info>
          <Info className="text-center"><strong>{tipo}: </strong>{dono}</Info>
          <Info className="text-center"><strong>Medida: </strong>{product.unity}</Info>
          <h5 className="text-center mt-2">{`R$ ${product.price.toFixed(2)}`}</h5>
        </div>
        <AreaButton className="button_add_bag">
          <button>Adicionar carrinho</button>
        </AreaButton>
      </div>
    </>
  )
}

export default Lista;
