import React from 'react';
import './lista2.css';
import { Link } from 'react-router-dom';

function Lista2(props) {
  const image = props.imagemProduto ? new Buffer(props.imagemProduto.data, 'base64') : null;

  return (
    <>
      <div class="col-lg-3 col-md-6 mb-5">
        <div class="card h-100">
          <Link style={{textDecoration: 'none'}}>
            {image ?
              <img class="card-img-top" src={`data:image/jpeg;base64,${image}`} alt="" />
              :
              <img class="card-img-top" src="http://placehold.it/500x300" alt="" />
            }

            <h5 class="mt-2 mb-2">
              <h6 className="text-center">{props.nomeProduto} da cooperativa {props.nomeCooperativa}</h6>
              <h5 className="text-center mt-2">R$ {props.precoProduto}</h5>
            </h5>
          </Link>
        </div>
      </div>

    </>
  )
}

export default Lista2;