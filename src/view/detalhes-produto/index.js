import React, { useState, useEffect } from 'react';
import './detalhes-produtos.css';
import Navbar from '../../components/navbar';
import Menubar from '../../components/menubar';
import Rodape from '../../components/rodape';
import Search from '../../components/search';
import { Link } from 'react-router-dom';
import axios from 'axios';

function DetalhesProduto(props){
    const [ produto, setProduto ] = useState([]);
    const [ errorMessage, setErrorMessage ] = useState(false);
    const urlProdutos = process.env.REACT_APP_API_URL + "/produtos/";
    const paramsID = props.match.params.id;

    // obtem o ID do produtor pela URL
    useEffect(() => {
        axios.get(urlProdutos, {
            params: {
                ID: paramsID
            }
        }).then(function(res) {
            const response = res.data.filter(prod => prod._id === paramsID);
            setProduto(response)
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
                                Ocorreu um erro ao tentar consultar as informações do produto selecionado
                            </div>
                        ) : (
                            <table className="table table-striped table-hover w-75 my-6 mx-auto">
                            {produto.map(prod => (
                                <>
                                <tr>
                                    <th scope="row">NOME</th>
                                    <td colspan="2">{prod.nome.toUpperCase()}</td>
                                </tr>
                                <tr>
                                    <th scope="row">PREÇO</th>
                                    <td colspan="2">R$ {prod.preco.toFixed(2)}</td>
                                </tr>
                                <tr>
                                    <th scope="row">QUANTIDADE</th>
                                    <td colspan="2">{prod.quantidade}{prod.unidade}</td>
                                </tr>
                                <tr>
                                    <th scope="row">CATEGORIA</th>
                                    <td colspan="2">{prod.categoria}</td>
                                </tr>
                                <tr>
                                    <th scope="row">PRODUTOR</th>
                                    <td colspan="2">{prod.produtor ? prod.produtor.nome : ""}</td>
                                </tr>
                                <tr className="text-center">
                                    <th scope="row"></th>
                                    <td><Link to={'/alterar/produto/' + prod._id}>ALTERAR</Link></td>
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
export default DetalhesProduto;
