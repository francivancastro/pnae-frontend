import React, { useState, useEffect } from 'react';
import './alterar-escola.css';
import Navbar from '../../components/navbar';
import Menubar from '../../components/menubar';
import Rodape from '../../components/rodape';
import axios from 'axios';
import { estados, municipios } from '../../components/estados.js';

function AlterarEscola(props){
    const [diretores, setDiretores] = useState([]);
    const [escola, setEscola] = useState({
        nome: "", diretor: "", alunosMatriculados: "", valorPNA: "", cep: "",
        logradouro: "", bairro: "", numero: "", municipio: "", estado: "", referencia: ""
    });
    const [feedback, setFeedback] = useState({ status: null, message: '' });
    const [loading, setLoading] = useState(false);
    const paramsID = props.match.params.id;
    const urlDiretores = process.env.REACT_APP_API_URL + "/diretores";
    const urlEscolas = process.env.REACT_APP_API_URL + "/escolas/";

    // obtem uma escola específica por meio do ID passado pela URL
    useEffect(() => {
        axios.get(urlEscolas, {
            params: {
                ID: paramsID
            }
        }).then((res) => {
            const response = res.data.filter(esc => esc._id === paramsID)[0];
            console.log(response);
            const escola = (response.escola ? response.escola.nome : "");
            setEscola({
                nome: response.nome,
                alunosMatriculados: response.alunosMatriculados,
                valorPNA: response.valorPNA,
                categoria: response.categoria,
                cep: response.cep,
                logradouro: response.logradouro,
                bairro: response.bairro,
                numero: response.numero,
                municipio: response.municipio,
                estado: response.estado,
                referencia: response.referencia
            })
        })
    }, []);


    // obtem os diretores cadastrados da API
    useEffect(() => {
        async function getEscolaresFromAPI() {
            const response = await axios.get(urlDiretores);
            setDiretores(response.data);
        }
        getEscolaresFromAPI();
    }, []);

    const handleChange = event => {
        const { name, value } = event.target;
        setEscola({ ...escola, [name]: value });
    }

    // habilita o select municípios quando selecionado um estado
    const selectChangeState = event => {
        document.querySelector("select#selectedCidade").disabled = false;
    }

    const handleSubmit = async event => {
        event.preventDefault();
        console.log(escola);

        const response = await axios.put(`${urlEscolas}${paramsID}`, escola)
            .then(() => {
                setLoading(false);
                setFeedback({ status: 'success', message: 'Escola alterada com sucesso' });
            }).catch(() => {
                setLoading(false);
                setFeedback({ status: 'error', message: 'Ocorreu um erro ao tentar alterar o escola' });
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
                            <h3 className="mb-6">CADASTRO DE ESCOLAS</h3>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label for="nomeEscola">Nome da Escola</label>
                                    <input
                                        onChange={handleChange}
                                        value={escola.nome}
                                        name="nome"
                                        onfocus="this.value = '';"
                                        type="text" className="form-control"
                                        id="nomeEscola"
                                        aria-describedby="nomeEscola"
                                        placeholder="Escreva o nome da escola aqui..."
                                    />
                                    <small id="" className="form-text text-muted">
                                        Campo Obrigatório*
                                        </small>
                                </div>
                                <div className="form-group">
                                    <label for="nomeDiretor">Diretor</label>
                                    <select onChange={handleChange} className="form-control" name="diretor" id="Escolar">
                                        <option selected>Selecione o diretor</option>
                                        {diretores.map(diretor => (
                                            <option value={diretor._id}>{diretor.nome}</option>
                                        ))}
                                    </select>
                                    <small id="" className="form-text text-muted">
                                        Campo Obrigatório*
                                        </small>
                                </div>
                                <div className="form-group">
                                    <label for="alunosMatriculados">Alunos matriculados</label>
                                    <input
                                        onChange={handleChange}
                                        value={escola.alunosMatriculados}
                                        name="alunosMatriculados"
                                        onfocus="this.value = '';"
                                        type="text" className="form-control"
                                        id="alunosMatriculados"
                                        aria-describedby="alunosMatriculados"
                                        placeholder="Informe o n° de alunos matriculados aqui"
                                    />
                                    <small id="" className="form-text text-muted">
                                        Campo Obrigatório*
                                        </small>
                                </div>
                                <div className="form-group">
                                    <label for="valorPNA">valor PNAE</label>
                                    <input
                                        onChange={handleChange}
                                        value={escola.valorPNA}
                                        name="valorPNA"
                                        onfocus="this.value = '';"
                                        type="text" className="form-control"
                                        id="valorPNA"
                                        aria-describedby="valorPNA"
                                        placeholder="Informe o valor do PNAE aqui"
                                    />
                                    <small id="" className="form-text text-muted">
                                        Campo Obrigatório*
                                        </small>
                                </div>
                                <h3 className="my-4">ENDEREÇO</h3>
                                <div className="form-group">
                                    <label for="cepEscola">cep</label>
                                    <input
                                        onChange={handleChange}
                                        value={escola.categoria}
                                        name="cep"
                                        onfocus="this.value = '';"
                                        type="text" className="form-control"
                                        id="cepEscola"
                                        aria-describedby="cepEscola"
                                        placeholder="Informe o cep aqui"
                                    />
                                </div>
                                <div className="form-group">
                                    <label for="logradouroEscola">Logradouro</label>
                                    <input
                                        onChange={handleChange}
                                        value={escola.categoria}
                                        name="logradouro"
                                        onfocus="this.value = '';"
                                        type="text" className="form-control"
                                        id="logradouroEscola"
                                        aria-describedby="logradouroEscola"
                                        placeholder="Informe o logradouro aqui"
                                    />
                                </div>
                                <div className="form-group">
                                    <label for="bairroEscola" >Bairro</label>
                                    <input
                                        onChange={handleChange}
                                        value={escola.bairro}
                                        name="bairro"
                                        onfocus="this.value = '';"
                                        type="text" className="form-control"
                                        id="bairroEscola"
                                        aria-describedby="bairroEscola"
                                        placeholder="Informe o seu bairro aqui..."
                                    />
                                    <small id="" className="form-text text-muted">
                                        Campo Obrigatório*
                                        </small>
                                </div>
                                <div className="form-group">
                                    <label for="numeroEscola" >Número</label>
                                    <input
                                        onChange={handleChange}
                                        value={escola.numero}
                                        name="numero"
                                        onfocus="this.value = '';"
                                        type="text" className="form-control"
                                        id="numeroEscola"
                                        aria-describedby="numeroEscola"
                                        placeholder="Informe o número da residência aqui..."
                                    />
                                    <small id="" className="form-text text-muted">
                                        Campo Obrigatório*
                                        </small>
                                </div>
                                <div className="form-group">
                                    <label for="estadoEscola" >Estado</label>
                                    <select onChange={selectChangeState} name="estado" className="custom-select mr-sm-2" id="selectedEstado">
                                        <option selected>UF</option>
                                        {estados.map(estado => (<option value={estado.uf}>{estado.nome}</option>))}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label for="municipioEscola" >Município</label>
                                    <select disabled value={escola.municipio} onChange={handleChange} name="municipio" className="custom-select mr-sm-2" id="selectedCidade">
                                        <option selected>Selecione o Município</option>
                                        {municipios.map(municipio => (<option value={municipio.nome}>{municipio.nome}</option>))}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label for="referenciaEscola" >Complemento</label>
                                    <input
                                        onChange={handleChange}
                                        value={escola.referencia}
                                        name="referencia"
                                        onfocus="this.value = '';"
                                        type="text" className="form-control"
                                        id="referenciaEscola"
                                        aria-describedby="referenciaEscola"
                                        placeholder="Informe uma referência aqui..."
                                    />
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
export default AlterarEscola;
