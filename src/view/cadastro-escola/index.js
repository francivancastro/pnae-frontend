import React, { useState, useEffect } from 'react';
import './cadastro-escola.css';
import Navbar from '../../components/navbar';
import Menubar from '../../components/menubar';
import Rodape from '../../components/rodape';
import { estados, municipios } from '../../components/estados.js';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function CadastroEscola(){
    const [diretores, setDiretores] = useState([]);
    const [feedback, setFeedback] = useState({ status: null, message: '' });
    const urlDiretores = process.env.REACT_APP_API_URL + "/diretores";
    const urlEscolas = process.env.REACT_APP_API_URL + "/escolas";

    // obtem os diretores cadastrados da API
    useEffect(() => {
        async function getDiretoresFromAPI() {
            const response = await axios.get(urlDiretores);
            setDiretores(response.data);
        }
        getDiretoresFromAPI();
    }, []);

    // habilita o select municípios quando selecionado um estado
    const selectChangeState = event => {
        document.querySelector("select#selectedCidade").disabled = false;
        formik.values.estado = event.target.value;
    }

    const formik = useFormik({
        initialValues: {
            nome: '',
            diretor: '',
            alunosMatriculados: '',
            valorPNA: '',
            cep: '',
            logradouro: '',
            bairro: '',
            numero: '',
            municipio: '',
            estado: '',
            referencia: ''
        },
        validationSchema: Yup.object({
            nome: Yup.string()
                .required("O campo Nome da Escola deve ser preenchido"),
            diretor: Yup.string()
                .required("O campo Nome do Diretor deve ser preenchido"),
            alunosMatriculados: Yup.number()
                .required("O campo Alunos Matriculados deve ser preenchido"),
            valorPNA: Yup.string()
                .required("O campo Valor PNA deve ser preenchido"),
            cep: Yup.string()
                .required("O campo CEP deve ser preenchido"),
            logradouro: Yup.string()
                .required("O campo Logradouro deve ser preenchido"),
            bairro: Yup.string()
                .required("O campo Bairro deve ser preenchido"),
            numero: Yup.string()
                .required("O campo Numero deve ser preenchido. Caso não tenha número escreva s/n"),
            municipio: Yup.string()
                .required("O campo Municipio deve ser preenchido"),
            estado: Yup.string()
                .required("O campo Estado deve ser preenchido"),
        }),
        onSubmit: values => {
            axios.post(urlEscolas, {
                nome: values.nome,
                diretor: values.diretor,
                alunosMatriculados: values.alunosMatriculados,
                valorPNA: values.valorPNA,
                cep: values.cep,
                logradouro: values.logradouro,
                bairro: values.bairro,
                numero: values.numero,
                municipio: values.municipio,
                estado: values.estado,
                referencia: values.referencia,
            }).then(response => {
                setFeedback({ status: 'success', message: 'Escola cadastrada com sucesso' });
            }).catch(error => {
                console.log(error);
                setFeedback({ status: 'error', message: 'Ocorreu um erro ao tentar cadastrar a escola' });
            })
        }
    })

    return (
        <>
            <Navbar />
            <Menubar />

            <div className="content form-group">
                <div className="main">
                    <div className="container">
                        <div className="register w-50 m-auto">
                            <h3 className="mb-6">CADASTRO DE ESCOLAS</h3>
                            {
                                formik.touched && formik.errors ?
                                    <ul ClassName="list-group">
                                        {formik.touched.nome && formik.errors.nome ?
                                            <li className="list-group-item list-group-item-danger mb-3">
                                                {formik.errors.nome}
                                            </li> : null}
                                        {formik.touched.diretor && formik.errors.diretor ?
                                            <li className="list-group-item list-group-item-danger mb-3">
                                                {formik.errors.diretor}
                                            </li> : null}
                                        {formik.touched.alunosMatriculados && formik.errors.alunosMatriculados ?
                                            <li className="list-group-item list-group-item-danger mb-3">
                                                {formik.errors.alunosMatriculados}
                                            </li> : null}
                                        {formik.touched.valorPNA && formik.errors.valorPNA ?
                                            <li className="list-group-item list-group-item-danger mb-3">
                                                {formik.errors.valorPNA}
                                            </li> : null}
                                        {formik.touched.cep && formik.errors.cep ?
                                            <li className="list-group-item list-group-item-danger mb-3">
                                                {formik.errors.cep}
                                            </li> : null}
                                        {formik.touched.logradouro && formik.errors.logradouro ?
                                            <li className="list-group-item list-group-item-danger mb-3">
                                                {formik.errors.logradouro}
                                            </li> : null}
                                        {formik.touched.bairro && formik.errors.bairro ?
                                            <li className="list-group-item list-group-item-danger mb-3">
                                                {formik.errors.bairro}
                                            </li> : null}
                                        {formik.touched.numero && formik.errors.numero ?
                                            <li className="list-group-item list-group-item-danger mb-3">
                                                {formik.errors.numero}
                                            </li> : null}
                                        {formik.touched.municipio && formik.errors.municipio ?
                                            <li className="list-group-item list-group-item-danger mb-3">
                                                {formik.errors.municipio}
                                            </li> : null}
                                        {formik.touched.estado && formik.errors.estado ?
                                            <li className="list-group-item list-group-item-danger mb-3">
                                                {formik.errors.estado}
                                            </li> : null}
                                    </ul> : null
                            }

                            {feedback.status === 'success' && <div className="alert alert-success text-weight-bold" role="alert">{feedback.message}</div>}
                            {feedback.status === 'error' && <div className="alert alert-danger text-weight-bold" role="alert">{feedback.message}</div>}
                            <form onSubmit={formik.handleSubmit}>
                                <div className="form-group">
                                    <label for="nomeProduto">Nome da Escola</label>
                                    <input
                                        onChange={formik.handleChange}
                                        value={formik.values.nome}
                                        name="nome"
                                        onfocus="this.value = '';"
                                        onblur={formik.handleBlur}
                                        type="text" className="form-control"
                                        id="nomeProduto"
                                        aria-describedby="nomeProduto"
                                        placeholder="Escreva o nome do produto aqui..."
                                    />
                                    <small id="" className="form-text text-muted">
                                        Campo Obrigatório*
                                        </small>
                                </div>
                                <div className="form-group">
                                    <label for="nomeDiretor">Nome do Diretor</label>
                                    <select onChange={formik.handleChange} className="form-control" id="diretor">
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
                                    <label for="alunosMatriculados">Alunos Matriculados</label>
                                    <input
                                        onChange={formik.handleChange}
                                        value={formik.values.alunosMatriculados}
                                        name="alunosMatriculados"
                                        onfocus="this.value = '';"
                                        onblur={formik.handleBlur}
                                        type="text" className="form-control"
                                        id="alunosMatriculados"
                                        aria-describedby="alunosMatriculados"
                                        placeholder="Informe a quantidade de alunos matriculados aqui"
                                    />
                                    <small id="" className="form-text text-muted">
                                        Campo Obrigatório*
                                        </small>
                                </div>
                                <div className="form-group">
                                    <label for="valorPNA">Valor PNA</label>
                                    <input
                                        onChange={formik.handleChange}
                                        value={formik.values.valorPNA}
                                        name="valorPNA"
                                        onfocus="this.value = '';"
                                        onblur={formik.handleBlur}
                                        type="text" className="form-control"
                                        id="valorPNA"
                                        aria-describedby="valorPNA"
                                        placeholder="Informe o Valor PNA aqui..."
                                    />
                                </div>

                                <h3 className="my-4">ENDEREÇO</h3>

                                <div className="form-group">
                                    <label for="cepProdutor">CEP</label>
                                    <input
                                        onChange={formik.handleChange}
                                        value={formik.values.cep}
                                        name="cep"
                                        onfocus="this.value = '';"
                                        onblur={formik.handleBlur}
                                        type="text" className="form-control"
                                        id="cepProdutor"
                                        aria-describedby="cepProdutor"
                                        placeholder="Informe o seu CEP aqui..."
                                    />
                                    <small id="" className="form-text text-muted">
                                        Campo Obrigatório*
                                        </small>
                                </div>
                                <div className="form-group">
                                    <label for="logradouroProdutor" >Logradouro</label>
                                    <input
                                        onChange={formik.handleChange}
                                        value={formik.values.logradouro}
                                        name="logradouro"
                                        onfocus="this.value = '';"
                                        onblur={formik.handleBlur}
                                        type="text" className="form-control"
                                        id="logradouroProdutor"
                                        aria-describedby="logradouroProdutor"
                                        placeholder="Informe o logradouro aqui..."
                                    />
                                    <small id="" className="form-text text-muted">
                                        Campo Obrigatório*
                                        </small>
                                </div>
                                <div className="form-group">
                                    <label for="bairroProdutor" >Bairro</label>
                                    <input
                                        onChange={formik.handleChange}
                                        value={formik.values.bairro}
                                        name="bairro"
                                        onfocus="this.value = '';"
                                        onblur={formik.handleBlur}
                                        type="text" className="form-control"
                                        id="bairroProdutor"
                                        aria-describedby="bairroProdutor"
                                        placeholder="Informe o seu bairro aqui..."
                                    />
                                    <small id="" className="form-text text-muted">
                                        Campo Obrigatório*
                                        </small>
                                </div>
                                <div className="form-group">
                                    <label for="numeroProdutor" >Número</label>
                                    <input
                                        onChange={formik.handleChange}
                                        value={formik.values.numero}
                                        name="numero"
                                        onfocus="this.value = '';"
                                        onblur={formik.handleBlur}
                                        type="text" className="form-control"
                                        id="numeroProdutor"
                                        aria-describedby="numeroProdutor"
                                        placeholder="Informe o seu número aqui..."
                                    />
                                    <small id="" className="form-text text-muted">
                                        Campo Obrigatório*
                                        </small>
                                </div>
                                <div className="form-group">
                                    <label for="estadoProdutor" >Estado</label>
                                    <select onChange={selectChangeState} name="estado" className="custom-select mr-sm-2" id="selectedEstado">
                                        <option selected>UF</option>
                                        {estados.map(estado => (<option value={estado.uf}>{estado.nome}</option>))}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label for="municipioProdutor" >Município</label>
                                    <select disabled value={formik.values.municipio} onChange={formik.handleChange} name="municipio" className="custom-select mr-sm-2" id="selectedCidade">
                                        <option selected>Selecione o Município</option>
                                        {municipios.map(municipio => (<option value={municipio.nome}>{municipio.nome}</option>))}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label for="referenciaProdutor" >Complemento</label>
                                    <input
                                        onChange={formik.handleChange}
                                        value={formik.values.referencia}
                                        name="referencia"
                                        onfocus="this.value = '';"
                                        onblur={formik.handleBlur}
                                        type="text" className="form-control"
                                        id="referenciaProdutor"
                                        aria-describedby="referenciaProdutor"
                                        placeholder="Informe uma referência aqui..."
                                    />
                                </div>

                                <div className="register-button">
                                    <input className="button" name="cancelar" type="reset" value="cancelar" />
                                    <input className="button" name="submit" type="submit" value="salvar" />
                                </div>
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
export default CadastroEscola;
