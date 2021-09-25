import React, { useState } from 'react';
import './cadastro-diretor.css';
import Navbar from '../../components/navbar';
import Menubar from '../../components/menubar';
import Rodape from '../../components/rodape';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function CadastroDiretor(){
    const [feedback, setFeedback] = useState({ status: null, message: '' });
    const urlDiretores = process.env.REACT_APP_API_URL + "/diretores";
    const [password1, setPassword1] = useState();
    const [password2, setPassword2] = useState();

    const handleChangePassword1 = (event) => {
        setPassword1(event.target.value);
    }

    const handleChangePassword2 = (event) => {
        setPassword2(event.target.value);
    }

    const formik = useFormik({
        initialValues: {
            nome: '',
            cpf: '',
            telefone: '',
            email: '',
            senha: '',
        },
        validationSchema: Yup.object({
            nome: Yup.string()
                .required("O campo Nome deve ser preenchido"),
            cpf: Yup.string()
                .required("O campo CPF deve ser preenchido"),
            telefone: Yup.string()
                .required("O campo Telefone deve ser preenchido"),
            email: Yup.string().email("Informe um e-mail válido")
                .required("O campo Email deve ser preenchido")
        }),
        onSubmit: values => {
            if (password1 === password2) {
                values.senha = password1;

                axios.post(urlDiretores, {
                    nome: values.nome,
                    cpf: values.cpf,
                    telefone: values.telefone,
                    email: values.email,
                    senha: values.senha
                }).then(response => {
                    setFeedback({ status: 'success', message: 'Diretor cadastrado com sucesso' });
                }).catch(error => {
                    console.log(error);
                    setFeedback({ status: 'error', message: 'Ocorreu um erro ao tentar cadastrar o diretor' });
                })
            } else {
                alert("As senhas informadas são diferentes!");
            }
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
                            <h3 className="mb-6">CADASTRO DE DIRETOR</h3>
                            {
                                formik.touched && formik.errors ?
                                    <ul ClassName="list-group">
                                        {formik.touched.nome && formik.errors.nome ?
                                            <li className="list-group-item list-group-item-danger mb-3">
                                                {formik.errors.nome}
                                            </li> : null}
                                        {formik.touched.cpf && formik.errors.cpf ?
                                            <li className="list-group-item list-group-item-danger mb-3">
                                                {formik.errors.cpf}
                                            </li> : null}
                                        {formik.touched.telefone && formik.errors.telefone ?
                                            <li className="list-group-item list-group-item-danger mb-3">
                                                {formik.errors.telefone}
                                            </li> : null}
                                        {formik.touched.email && formik.errors.email ?
                                            <li className="list-group-item list-group-item-danger mb-3">
                                                {formik.errors.email}
                                            </li> : null}
                                        {formik.touched.senha && formik.errors.senha ?
                                            <li className="list-group-item list-group-item-danger mb-3">
                                                {formik.errors.senha}
                                            </li> : null}
                                    </ul> : null
                            }

                            {feedback.status === 'success' && <div className="alert alert-success text-weight-bold" role="alert">{feedback.message}</div>}
                            {feedback.status === 'error' && <div className="alert alert-danger text-weight-bold" role="alert">{feedback.message}</div>}
                            <form onSubmit={formik.handleSubmit}>
                                <div className="form-group">
                                    <label for="nomeProduto">Nome</label>
                                    <input
                                        onChange={formik.handleChange}
                                        value={formik.values.nome}
                                        name="nome"
                                        onfocus="this.value = '';"
                                        onblur={formik.handleBlur}
                                        type="text" className="form-control"
                                        id="nomeDiretor"
                                        aria-describedby="nomeDiretor"
                                        placeholder="Escreva o seu nome do diretor aqui..."
                                    />
                                    <small id="" className="form-text text-muted">
                                        Campo Obrigatório*
                                        </small>
                                </div>
                                <div className="form-group">
                                    <label for="cpfDiretor">CPF</label>
                                    <input
                                        onChange={formik.handleChange}
                                        value={formik.values.cpf}
                                        name="cpf"
                                        onfocus="this.value = '';"
                                        onblur={formik.handleBlur}
                                        type="text" className="form-control"
                                        id="cpfDiretor"
                                        aria-describedby="cpfDiretor"
                                        placeholder="Informe o CPF do diretor aqui..."
                                    />
                                    <small id="" className="form-text text-muted">
                                        Campo Obrigatório*
                                        </small>
                                </div>
                                <div className="form-group">
                                    <label for="telefoneDiretor">Telefone</label>
                                    <input
                                        onChange={formik.handleChange}
                                        value={formik.values.telefone}
                                        name="telefone"
                                        onfocus="this.value = '';"
                                        onblur={formik.handleBlur}
                                        type="text" className="form-control"
                                        id="telefoneDiretor"
                                        aria-describedby="telefoneDiretor"
                                        placeholder="Informe o telefone do diretor aqui..."
                                    />
                                    <small id="" className="form-text text-muted">
                                        Campo Obrigatório*
                                        </small>
                                </div>
                                <div className="form-group">
                                    <label for="emailDiretor" >Email</label>
                                    <input
                                        onChange={formik.handleChange}
                                        value={formik.values.email}
                                        name="email"
                                        onfocus="this.value = '';"
                                        onblur={formik.handleBlur}
                                        type="text" className="form-control"
                                        id="emailDiretor"
                                        aria-describedby="emailDiretor"
                                        placeholder="Informe o email do diretor aqui..."
                                    />
                                    <small id="" className="form-text text-muted">
                                        Campo Obrigatório*
                                        </small>
                                </div>
                                <div className="form-group" >
                                    <label for="senhaDiretor">Senha</label>
                                    <input
                                        onChange={handleChangePassword1}
                                        value={password1}
                                        name="senha"
                                        onfocus="this.value = '';"
                                        onblur={formik.handleBlur}
                                        type="password" className="form-control"
                                        id="senhaDiretor"
                                        aria-describedby="senhaDiretor"
                                        placeholder="Digite sua senha do diretor aqui..."
                                    />
                                </div>
                                <div className="form-group" >
                                    <label for="senhaDiretor">Confirmar Senha</label>
                                    <input
                                        onChange={handleChangePassword2}
                                        value={password2}
                                        name="senha"
                                        onfocus="this.value = '';"
                                        onblur={formik.handleBlur}
                                        type="password" className="form-control"
                                        id="senhaDiretor"
                                        aria-describedby="senhaDiretor"
                                        placeholder="Digite a senha novamente aqui..."
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
export default CadastroDiretor;
