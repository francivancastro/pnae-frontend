import React, { useState, useEffect } from 'react';
import './alterar-diretor.css';
import Navbar from '../../components/navbar';
import Menubar from '../../components/menubar';
import Rodape from '../../components/rodape';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function AlterarDiretor(props){
    const [diretores, setDiretores] = useState([]);
    const [diretor, setDiretor] = useState({ nome: "", cpf: "", telefone: "", email: "" });
    const [feedback, setFeedback] = useState({ status: null, message: '' });
    const [loading, setLoading] = useState(false);
    const paramsID = props.match.params.id;
    const urlDiretores = process.env.REACT_APP_API_URL + "/diretores";
    const urlDiretor = process.env.REACT_APP_API_URL + "/diretor/";

    // obtem um diretor específico por meio do ID passado pela URL
    useEffect(() => {
        axios.get(urlDiretores, {
            params: {
                ID: paramsID
            }
        }).then((res) => {
            const response = res.data.filter(diretor => diretor._id === paramsID)[0];
            console.log(response);

            setDiretor({
                nome: response.nome,
                cpf: response.cpf,
                telefone: response.telefone,
                email: response.email,

            })
        })
    }, []);

    // obtem os diretores cadastrados da API
    useEffect(() => {
        async function getDiretoresFromAPI() {
            const response = await axios.get(urlDiretores);
            setDiretores(response.data);
        }
        getDiretoresFromAPI();
    }, []);

    const handleChange = event => {
        const { name, value } = event.target;
        setDiretor({ ...diretor, [name]: value });
    }

    const handleSubmit = async event => {
        event.preventDefault();
        console.log(diretor);

        const response = await axios.put(`${urlDiretor}${paramsID}`, diretor)
            .then(() => {
                setLoading(false);
                setFeedback({ status: 'success', message: 'Diretor alterado com sucesso' });
            }).catch(() => {
                setLoading(false);
                setFeedback({ status: 'error', message: 'Ocorreu um erro ao tentar alterar o diretor' });
            });
    }

    return (
        <>
            <Navbar />
            <Menubar />

            <div className="content form-group">
                <div className="main">
                    <div className="container">
                        <div className="register w-50 m-auto">
                            <h3 className="mb-6">CADASTRO DE DIRETOR</h3>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label for="nomeDiretor">Nome</label>
                                    <input
                                        onChange={handleChange}
                                        value={diretor.nome}
                                        name="nome"
                                        onfocus="this.value = '';"
                                        type="text" className="form-control"
                                        id="nomeDiretor"
                                        aria-describedby="nomeDiretor"
                                        placeholder="Escreva o nome do diretor aqui..."
                                    />
                                    <small id="" className="form-text text-muted">
                                        Campo Obrigatório*
                                        </small>
                                </div>
                                <div className="form-group">
                                    <label for="cpfDiretor">CPF</label>
                                    <input
                                        onChange={handleChange}
                                        value={diretor.cpf}
                                        name="cpf"
                                        onfocus="this.value = '';"
                                        type="text" className="form-control"
                                        id="cpfDiretor"
                                        aria-describedby="cpfDiretor"
                                        placeholder="Informe o seu CPF aqui..."
                                    />
                                    <small id="" className="form-text text-muted">
                                        Campo Obrigatório*
                                        </small>
                                </div>
                                <div className="form-group">
                                    <label for="telefoneDiretor">Telefone</label>
                                    <input
                                        onChange={handleChange}
                                        value={diretor.telefone}
                                        name="telefone"
                                        onfocus="this.value = '';"
                                        type="text" className="form-control"
                                        id="telefoneDiretor"
                                        aria-describedby="telefoneDiretor"
                                        placeholder="Informe o seu Telefone aqui..."
                                    />
                                    <small id="" className="form-text text-muted">
                                        Campo Obrigatório*
                                        </small>
                                </div>
                                <div className="form-group">
                                    <label for="emailDiretor">Email</label>
                                    <input
                                        onChange={handleChange}
                                        value={diretor.email}
                                        name="email"
                                        onfocus="this.value = '';"
                                        type="text" className="form-control"
                                        id="emailDiretor"
                                        aria-describedby="emailDiretor"
                                        placeholder="Informe o seu email aqui..."
                                    />
                                    <small id="" className="form-text text-muted">
                                        Campo Obrigatório*
                                        </small>
                                </div>


                                <div className="register-button">
                                    <input onClick={() => { setLoading(false) }} className="button" name="cancelar" type="reset" value="cancelar" />
                                    <input onClick={() => { setLoading(true) }} className="button" name="submit" type="submit" value="atualizar" />

                                    {/* SPINNER * SPINNER* SPINNER* SPINNER* SPINNER* SPINNER* SPINNER* SPINNER* SPINNER* SPINNER* SPINNER* SPINNER */}
                                    {loading && (
                                        <div className="d-flex justify-content-center mt-4">
                                            <div className="spinner-border text-success" role="status">
                                                <span className="sr-only">Loading...</span>
                                            </div>
                                        </div>
                                    )}
                                    {/* SPINNER * SPINNER* SPINNER* SPINNER* SPINNER* SPINNER* SPINNER* SPINNER* SPINNER* SPINNER* SPINNER* SPINNER */}
                                </div>

                                {feedback.status === 'success' && <div className="alert alert-success text-weight-bold" role="alert">{feedback.message}</div>}
                                {feedback.status === 'error' && <div className="alert alert-danger text-weight-bold" role="alert">{feedback.message}</div>}

                            </form>
                            <div className="clearfix"> </div>
                        </div>
                    </div>
                </div>

                <div className="clearfix"></div>
            </div>

            <Rodape />
        </>
    )
}
export default AlterarDiretor;
