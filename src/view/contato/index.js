import React from 'react';
import './contato.css';
import BarTop from '../../components/BarTop';
import Rodape from '../../components/rodape';
import { Link } from 'react-router-dom';
import Menubar from '../../components/menubar';
function Contato() {
    return (
        <>
            <BarTop/>
            <Menubar/>
            <div className="contact-section-page">
                <div className="contact-head text-center">
                    <div className="container">
                        <h3>Contato</h3>
                    </div>
                </div>
                <div className="contact_top">
                    <div className="container">
                        <h5 className=" text-center">Entre em contato através do e-mail:</h5>
                        <p className="text-center">edersonsouzacosta@gmail.com</p>
                    </div>
                </div>
            </div>
            <Rodape />
        </>
    )
}

export default Contato;