import React, { useState, useEffect } from 'react';
import './detalhes-escola.css';
import Navbar from '../../components/navbar';
import Menubar from '../../components/menubar';
import Rodape from '../../components/rodape';
import Search from '../../components/search';
import { Link } from 'react-router-dom';
import axios from 'axios';

function DetalhesEscolas(props){
    const paramsID = props.match.params.id;
    const [ escola, setEscola ] = useState([]);
    const [ errorMessage, setErrorMessage ] = useState(false);
    const urlEscolas = process.env.REACT_APP_API_URL + "/escolas/";

    // obtem as escolas cadastrados da API
    useEffect(() => {
        axios.get(urlEscolas, {
            params: {
                ID: paramsID
            }
        }).then(function(res) {
            const response = res.data.map(register => register);
            setEscola(response.filter(esc => esc._id === paramsID));
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
                                Ocorreu um erro ao tentar consultar as informações da escola selecionada
                            </div>
                        ) : (
                            <table className="table table-striped table-hover w-75 my-6 mx-auto">
                            {escola.map(esc => (
                                <>
                                <tr>
                                    <th scope="row">NOME</th>
                                    <td colspan="2">{esc.nome.toUpperCase()}</td>
                                </tr>
                                <tr>
                                    <th scope="row">DIRETOR VINCULADO</th>
                                    <td colspan="2">{esc.diretor.nome.toUpperCase()}</td>
                                </tr>
                                <tr>
                                    <th scope="row">ALUNOS MATRICULADOS</th>
                                    <td colspan="2">{esc.alunosMatriculados}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Valor PNAE</th>
                                    <td colspan="2">R$ {esc.valorPNA}</td>
                                </tr>
                                <tr>
                                <th scope="row">ENDEREÇO</th>
                                <td colspan="2">
                                    {[...esc.endereco].map(end => end.logradouro)}. Nº
                                    {[...esc.endereco].map(end => end.numero)}. Bairro
                                    {[...esc.endereco].map(end => end.bairro)}.
                                    {[...esc.endereco].map(end => end.municipio)} -
                                    {[...esc.endereco].map(end => end.estado)}
                                </td>
                            </tr>
                                <tr className="text-center">
                                    <th scope="row"></th>
                                    <td><Link to={'/alterar/escola/' + esc._id}>ALTERAR</Link></td>
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
export default DetalhesEscolas;
