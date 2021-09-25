import React from 'react';
import './acompanhar-pedido1.css';
import { Link } from 'react-router-dom';

function AcompanharPedido1() {
    return(
        <>
        <div class="card col-9 px-2 d-sm-flex justify-content-center mr-2">
        <div class="card-body justify-content-center ">
            <div class="media flex-column flex-sm-row justify-content-center">
                
            <img class="order img-fluid rounded mb-3 mb-md-0" src="" alt=""/>
                <div class="media-body ">
                <div class=" entrega ml-3"> Previsão de Entrega: <span class="font-weight-bold text-dark"> 15/04/2020</span></div>
                <p class=" t3 text-muted ml-3">Produtor: <span class="font-weight-bold text-dark">Tenda do Seu João</span></p>
                <div class="price font-weight-bold ml-3 ">R$44,00</div>
                <p class=" t3 text-muted ml-3">Status: <span class="font-weight-bold text-dark">Pagamento em análise</span></p>
                <p class=" t3 text-muted ml-3">Última localização: <span class="font-weight-bold text-dark">Santana</span></p> 
                </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default AcompanharPedido1;