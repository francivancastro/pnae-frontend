import React from 'react';
import './finalizarcompra.css';
import Navbar from '../../components/navbar';
import Menubar from '../../components/menubar';
import Card from '../../components/card';
import Rodape from '../../components/rodape';
import { Link } from 'react-router-dom';

function FinalizarCompra() {
    return (
        <>
            <Navbar />
            <Menubar />
            <div class="container">
                <Card />
                <div className="row col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-5 mb-5 justify-content-center" align="center">
                    <Link className="ml-4 font-weight-bold p-2 morebtnfz hvr-rectangle-in btn-success" to='pagamento'>Pagamento</Link>
                </div>
            </div>
            <Rodape />
        </>
    )
}

export default FinalizarCompra;