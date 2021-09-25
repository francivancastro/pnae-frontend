import React, { useState, useEffect } from 'react';
import './detalhes-diretor.css';
import Navbar from '../../components/navbar';
import Menubar from '../../components/menubar';
import Rodape from '../../components/rodape';
import Search from '../../components/search';
import { Link } from 'react-router-dom';
import axios from 'axios';

function DetalhesDiretor(props){
    const [ diretor, setDiretor ] = useState([]);
    const [ errorMessage, setErrorMessage ] = useState(false);
    const urlDiretores = process.env.REACT_APP_API_URL + "/diretores";
    const paramsID = props.match.params.id;

    // obtem os diretores cadastrados da API
    useEffect(() => {
        axios.get(urlDiretores, {
            params: {
                ID: paramsID
            }
        }).then(function (res) {
            const response = res.data.filter(diretor => diretor._id === paramsID);
            setDiretor(response)
        }).catch(() => {
            setErrorMessage(true);
        })
    }, []);

    console.log(diretor);

    const confirmRemove = () => {
        alert("Tem certeza que deseja remover este registro?");
    }

    return (
        <>
            <Navbar />
            <Menubar />

            <div className="content">
                <div className="order-6">
                    <div className="container">
                        {errorMessage ? (
                            <div className="alert alert-danger" role="alert">
                                Ocorreu um erro ao tentar consultar as informações do diretor selecionado
                            </div>
                        ) : (
                                <table className="table table-striped table-hover w-75 my-6 mx-auto">
                                    {diretor.map(diretor => (
                                        <>
                                            <tr>
                                                <th scope="row">NOME</th>
                                                <td colspan="2">{diretor.nome.toUpperCase()}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">CPF</th>
                                                <td colspan="2">{diretor.cpf}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Telefone</th>
                                                <td colspan="2">{diretor.telefone}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Email</th>
                                                <td colspan="2">{diretor.email}</td>
                                            </tr>
                                            <tr className="text-center">
                                                <th scope="row"></th>
                                                <td><Link to={'/alterar/diretor/' + diretor._id}>ALTERAR</Link></td>
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
export default DetalhesDiretor;
