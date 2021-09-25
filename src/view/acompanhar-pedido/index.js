import React from 'react';
import './acompanhar-pedido.css';
import Navbar from '../../components/navbar';
import Rodape from '../../components/Footer';
import { Link } from 'react-router-dom';
import Menubar from '../../components/menubar';
import AcompanharPedido1 from '../../components/acompanhar-pedido1';
import AcompanharPedido2 from '../../components/acompanhar-pedido2';
import AcompanharPedido3 from '../../components/acompanhar-pedido3';
import AcompanharPedido4 from '../../components/acompanhar-pedido4';
function AcompanharPedido(){
        return(
            <>
        <Navbar/>
        <Menubar />
            
            

        <div className="acompanhar-pedido">
        <div class="container my-4 ">
        
             <h3 class=" col meuspedidos mt-4 mb-4 pb-4 mr-5 ">Acompanhar Pedidos</h3>
             <div className="row">
             <div class="col-lg-3">

        <h3 class="acmp my-3 ml-3">Menuzito</h3>
        <div class="list-group ml-3">
            <a href="#" class="list-group-item text-dark">Compras</a>
            <a href="#" class="list-group-item text-dark">Compras </a>
            <a href="#" class="list-group-item text-dark">Compras</a>
        </div>
        </div>

        <div class="col-lg-9">
            <div className="faixa col-12 mt-4 pt-3 pb-3" >
                <h3 className="faixafrase">Pedido em 03 de Abril de 2020</h3>
            </div>

        <div class="row">
        <AcompanharPedido1/>
        <AcompanharPedido2/>    
        <AcompanharPedido3/>
        <AcompanharPedido4/>

        </div>
        </div>
           
        </div>
        </div>
        </div>
           
        <Rodape/>    
        </>
        )
}

export default AcompanharPedido;