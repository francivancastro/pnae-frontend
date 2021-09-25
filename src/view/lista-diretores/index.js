import React, { useState, useEffect } from 'react';
import './lista-diretores.css';
import Navbar from '../../components/navbar';
import Menubar from '../../components/menubar';
import Rodape from '../../components/rodape';
import Search from '../../components/search';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ListaDiretores(){
    const [ diretores, setDiretores ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const urlDiretores = process.env.REACT_APP_API_URL + "/diretores";
    const urlCadastro = "/cadastro/diretor";
    var contador = 0;

    // obtem os diretores cadastrados da API
    useEffect(() => {
        async function getDiretoresFromAPI() {
            setLoading(true);
            const response = await axios.get(urlDiretores);
            setDiretores(response.data);
        }
        getDiretoresFromAPI().then(() => {
            setLoading(false);
        });
    }, []);

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

                        <Search urlCadastro={urlCadastro} />

                        {loading ? (
                            <div className="d-flex justify-content-center">
                                <div className="spinner-border" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </div>
                        ) : diretores.length > 0 ? (
                            <table className="table table-striped table-hover text-center">
                                <caption>Lista de Diretores</caption>
                                <thead className="thead-light">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Nome</th>
                                        <th scope="col">CPF</th>
                                        <th scope="col">Telefone</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Opções</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {diretores.map(diretor => (
                                        <tr key={diretor._id}>
                                            <th className="align-middle" scope="row">
                                                {++contador}
                                            </th>
                                            <td className="align-middle">
                                                {diretor.nome}
                                            </td>
                                            <td className="align-middle">
                                                {diretor.cpf}
                                            </td>
                                            <td className="align-middle">
                                                {diretor.telefone}
                                            </td>
                                            <td className="align-middle">
                                                {diretor.email}
                                            </td>
                                            <td className="align-middle">
                                                <Link to={"/detalhes/diretor/" + diretor._id}>Detalhes</Link><br />
                                                <Link to="#" onClick={confirmRemove}>Apagar</Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : <div className="alert alert-danger" role="alert">Não há diretores cadastrados</div>}
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>

            <Rodape />
        </>
    )
}
export default ListaDiretores;
