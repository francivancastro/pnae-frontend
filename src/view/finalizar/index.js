import React from 'react';
import './finalizar.css';
import Navbar from '../../components/navbar';
import Rodape from '../../components/rodape';
import { Link } from 'react-router-dom';
import Menubar from '../../components/menubar';

function Finalizar(){
    return(
    <>
    <Navbar />
    <Menubar/>
    <div className="container">
        <div className="img-section row col-xs-12 col-sm-12 col-md-12 col-lg-12" align="center">
            <img src="images/pay.png" alt="" />
        <div />
    </div>
        <div className="text-section row col-xs-12 col-sm-12 col-md-12 col-lg-12" align="center">
            <h2 className="pagar">Pagamento realizado com sucesso</h2>
            <h3 className="enviar mt-3">Enviamos um e-mail com sua nota fiscal e informações de Entrega em sua Escola</h3>
        </div>
    </div>
    <Rodape />
    </>
    )
}

export default Finalizar;