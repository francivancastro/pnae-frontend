import React, { useState, useEffect } from 'react';
import './detalhes-cooperativa.css';
import Navbar from '../../components/navbar';
import Menubar from '../../components/menubar';
import Rodape from '../../components/rodape';
import Search from '../../components/search';
import { Link } from 'react-router-dom';
import axios from 'axios';

function DetalhesCooperativas(props){
    const paramsID = props.match.params.id;
    const [ cooperativa, setCooperativa ] = useState([]);
    const [ errorMessage, setErrorMessage ] = useState(false);
    const urlCooperativa = process.env.REACT_APP_API_URL + "/cooperativas/";

    // obtem as escolas cadastrados da API
    useEffect(() => {
        axios.get(urlCooperativa, {
            params: {
                ID: paramsID
            }
        }).then(function(res) {
            const response = res.data.map(register => register);
            setCooperativa(response.filter(esc => esc._id === paramsID));
        }).catch(() => {
            setErrorMessage(true);
        })
    }, []);

    const confirmRemove = () => {
        alert("Tem certeza que deseja remover este registro?");
    }


    return(
    <>
        <Navbar/>
        <Menubar/>

            <div className="content">
                <div className="order-6">
                    <div className="container">
                        {errorMessage ? (
                            <div className="alert alert-danger" role="alert">
                                Ocorreu um erro ao tentar consultar as informações da cooperativa selecionada
                            </div>
                        ) : (
                            <table className="table table-striped table-hover w-75 my-6 mx-auto">
                            {cooperativa.map(cooperativa => (
                                <>
                                <tr>
                                    <th scope="row">NOME</th>
                                    <td colspan="2">{cooperativa.nome.toUpperCase()}</td>
                                </tr>
                               <tr>
                                    <th scope="row">AGRICULTORES CADASTRADOS</th>
                                    <td colspan="2">{cooperativa.agricultoresCadastrados}</td>
                                </tr>
                               <tr>
                                <th scope="row">ENDEREÇO</th>
                                <td colspan="2">
                                    {[...cooperativa.endereco].map(end => end.logradouro)}. Nº
                                    {[...cooperativa.endereco].map(end => end.numero)}. Bairro
                                    {[...cooperativa.endereco].map(end => end.bairro)}.
                                    {[...cooperativa.endereco].map(end => end.municipio)} -
                                    {[...cooperativa.endereco].map(end => end.estado)}
                                </td>
                            </tr>
                                <tr className="text-center">
                                    <th scope="row"></th>
                                    <td><Link to={'/alterar/cooperativa/' + cooperativa._id}>ALTERAR</Link></td>
                                    <td><a href="#" onClick={confirmRemove}>APAGAR</a></td>
                                </tr>
                                </>
                            ))}
                            </table>
                        )}
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
    <Rodape />
    </>
    )
}
export default DetalhesCooperativas;
