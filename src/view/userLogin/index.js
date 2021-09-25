import React, { useState } from 'react';
import './userlogin.css';
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

function UserLogin() {
        return (
            <>
            <Navbar />
            <Menubar />

            <div class="container w-50">
                <form class="identity-form-login" method="POST" action="/">
                    <h2 class="text-center my-4">Login</h2>

                        <label for="email">E-mail:</label>
                        <input class="form-control my-2" type="email" id="email" name="email" required/>

                        <label for="password">Senha</label>
                        <input class="form-control my-2" type="password" id="password" name="password" required />

                        <div class="acount mt-4">
                            <input class="acount-btn" type="submit" value="Login" />
                        </div>
                </form>
            </div>

        <Rodape />
        </>
    )
}

export default UserLogin;
