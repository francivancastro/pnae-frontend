import React, { useState, useEffect } from 'react';
import './detalhes-produtor.css';
import Navbar from '../../components/navbar';
import Menubar from '../../components/menubar';
import Rodape from '../../components/rodape';
import Search from '../../components/search';
import { Link } from 'react-router-dom';
import axios from 'axios';

function DetalhesProdutor(props){
    const [ produtor, setProdutor ] = useState([]);
    const [ errorMessage, setErrorMessage ] = useState(false);
    const urlProdutores = process.env.REACT_APP_API_URL + "/produtores/";
    const paramsID = props.match.params.id;

    // obtem o ID do produtor pela URL
    useEffect(() => {
        axios.get(urlProdutores, {
            params: {
                ID: paramsID
            }
        }).then(function(res) {
            const response = res.data.filter(prod => prod._id === paramsID);
            setProdutor(response);
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
                                Ocorreu um erro ao tentar consultar as informações do produtor selecionado
                            </div>
                        ) : (
                            <table className="table table-striped table-hover w-75 my-6 mx-auto">
                            {produtor.map(prod => (
                                <>
                                <tr>
                                    <th scope="row">NOME</th>
                                    <td colspan="2">{prod.nome.toUpperCase()}</td>
                                </tr>
                                <tr>
                                    <th scope="row">CPF</th>
                                    <td colspan="2">{prod.cpf}</td>
                                </tr>
                                <tr>
                                    <th scope="row">DAP</th>
                                    <td colspan="2">{prod.dap}</td>
                                </tr>
                                <tr>
                                    <th scope="row">SEXO</th>
                                    <td colspan="2">
                                        {prod.sexo === "m" && "Masculino"}
                                        {prod.sexo === "f" && "Feminino"}
                                        {prod.sexo === undefined && "Sexo não especificado"}
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">TELEFONE</th>
                                    <td colspan="2">{prod.telefone}</td>
                                </tr>
                                <tr>
                                    <th scope="row">E-MAIL</th>
                                    <td colspan="2">{prod.email}</td>
                                </tr>
                                <tr>
                                    <th scope="row">ENDEREÇO</th>
                                    <td colspan="2">
                                        {[...prod.endereco].map(end => end.logradouro)}. Nº
                                        {[...prod.endereco].map(end => end.numero)}. Bairro
                                        {[...prod.endereco].map(end => end.bairro)}.
                                        {[...prod.endereco].map(end => end.municipio)} -
                                        {[...prod.endereco].map(end => end.estado)}
                                    </td>
                                </tr>
                                <tr className="text-center">
                                    <th scope="row"></th>
                                    <td><Link to={'/alterar/produtor/' + prod._id}>ALTERAR</Link></td>
                                    <td><Link to="#" onClick={confirmRemove}>APAGAR</Link></td>
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
export default DetalhesProdutor;
