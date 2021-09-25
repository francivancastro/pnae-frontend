import React, { useState, useEffect } from 'react';
import './escolas.css';
import axios from 'axios';
import Navbar from '../../components/navbar/';
import Menubar from '../../components/menubar/';
import Rodape from '../../components/rodape/';
import ListaEscolas from '../../components/lista-escolas/';
import { Link } from 'react-router-dom';

function Escolas(){
    const [ escolas, setEscolas ] = useState([]);

    useEffect(() => {
        async function getEscolasFromAPI() {
            const response = await axios.get("http://localhost:4000/escolas");
            setEscolas(response.data);

            getEscolasFromAPI();
        }
    }, [])

    return (
        <>
            <Navbar />
            <Menubar />
            <div class="container">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nome</th>
                            <th scope="col">CPF</th>
                            <th scope="col">Telefone</th>
                            <th scope="col">E-mail</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Rodape />
        </>
    )
}

export default Escolas;
