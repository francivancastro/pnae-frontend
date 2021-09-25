import React, { useState } from 'react';
import './register.css';
import Navbar from '../../components/navbar';
import Rodape from '../../components/rodape';
import { Link, Redirect } from 'react-router-dom';
import Menubar from '../../components/menubar';
import GoTrue from 'gotrue-js';

const auth = new GoTrue({
    APIUrl: "https://www.appdoquintal.com.br/.netlify/identity",
    audience: "",
    setCookie: false
});

function Register() {
    const [ email, setEmail ] = useState();
    const [ password1, setPassword1 ] = useState();
    const [ password2, setPassword2 ] = useState();
    const [ msg, setMsg ] = useState();

    const handleChangeEmail = event => {
        const value = event.target.value;
        setEmail(value);
    }

    const handleChangePassword1 = event => {
        const value = event.target.value;
        setPassword1(value);
    }

    const handleChangePassword2 = event => {
        const value = event.target.value;
        setPassword2(value);
    }

    const handleSubmit = event => {
        event.preventDefault();

        if (password1 === password2) {
            auth.signup(email, password1)
                .then(response => console.log("Foi enviando uma mensagem de confirmação para seu email", response))
                .then(alert("Foi enviando uma mensagem de confirmação para seu email"))
                .catch(error => console.log("Ocorreu um error", error));
        } else {
            alert("As senhas não conferem!");
        }
    }

    return (
        <>
            <Navbar />
            <Menubar />

                <div class="container w-50">
                    <form class="identity-form-login" onSubmit={handleSubmit}>
                        <h2 class="text-center my-4">Registrar-se</h2>

                            <label for="email">E-mail:</label>
                            <input onChange={handleChangeEmail} class="form-control my-2" type="email" id="email" name="email" />

                            <label for="password">Senha</label>
                            <input onChange={handleChangePassword1} class="form-control my-2" type="password" id="password1" name="password1" />

                            <label for="password">Confirmar Senha</label>
                            <input onChange={handleChangePassword2} class="form-control my-2" type="password" id="password2" name="password2" />

                            <div class="acount mt-4">
                                <input class="acount-btn" type="submit" value="Registrar" />
                            </div>
                    </form>
                </div>

            <Rodape />
        </>
    )
}

export default Register;
