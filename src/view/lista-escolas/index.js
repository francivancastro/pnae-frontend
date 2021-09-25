import React, { useState, useEffect } from 'react';
import './lista-escolas.css';
import Navbar from '../../components/navbar';
import Menubar from '../../components/menubar';
import Rodape from '../../components/rodape';
import Search from '../../components/search';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ListaEscolas(){
    const [ escolas, setEscolas ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const urlEscolas = process.env.REACT_APP_API_URL + "/escolas"
    const urlCadastro = "/cadastro/escola"
    var contador = 0;

    // obtem as escolas cadastradas da API
    useEffect(() => {
        async function getEscolasFromAPI() {
            setLoading(true);
            const response = await axios.get(urlEscolas);
            setEscolas(response.data);
        }
        getEscolasFromAPI().then(() => {
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
                <div className="order-6" id="Order">
                    <div className="container">

                        <Search urlCadastro={urlCadastro} />

                        {loading ? (
                            <div className="d-flex justify-content-center">
                                <div className="spinner-border" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </div>
                        ) : escolas.length > 0 ? (
                            <table className="table table-striped table-hover text-center">
                                <caption>Lista de Escolas</caption>
                                <thead className="thead-light">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Escola</th>
                                        <th scope="col">Diretor</th>
                                        <th scope="col">Alunos matriculados</th>
                                        <th scope="col">Valor PNA</th>
                                        <th scope="col" colspan="2">Opções</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {escolas.map(escola => (
                                        <tr key={escola._id}>
                                            <th className="align-middle" scope="row">
                                                {++contador}
                                            </th>
                                            <td className="align-middle">
                                                {escola.nome}
                                            </td>
                                            <td className="align-middle">
                                                {escola.diretor.nome}
                                            </td>
                                            <td className="align-middle">
                                                {escola.alunosMatriculados}
                                            </td>
                                            <td className="align-middle">
                                                {escola.valorPNA}
                                            </td>
                                            <td className="align-middle">
                                                <Link to={"/detalhes/escola/" + escola._id}>Alterar</Link><br />
                                                <Link to="#" onClick={confirmRemove}>Apagar</Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : <div className="alert alert-danger" role="alert">Não há escolas cadastrados</div>}
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>

            <Rodape />
        </>
    )
}
export default ListaEscolas;
