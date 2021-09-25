import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import './login.css';

import { signInAdmin } from '../../../store/modules/auth/actions';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Insira um email válido')
      .required('O email é obrigatório'),
    password: Yup.string()
      .min(6, 'Senha deve ter no mínimo 6 caracteres')
      .required('A senha é obrigatória'),
  });

  async function handleSubmit() {
    const validation = await schema.isValid({email, password})
    if(validation) {
      dispatch(signInAdmin(email, password))
    } else {
      alert('Verifique seus dados de login, algo está errado.')
    }
  }

  return (
    <>
      <div class="container mt-4 pt-5 pb-5">
          <div class="login">
              <h3>LOGIN ADMINISTRATIVO</h3>
              {loading ?
                <div className="d-flex justify-content-center mt-4">
                    <div className="spinner-border text-success" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
                :
                <form>
                <span>E-mail<label>*</label></span>
                <div className="form">
                  <input onChange={input => setEmail(input.target.value)} type="email" id="inputEmail" placeholder="Email" autofocus value={email}/>
                </div>
                <span>Senha<label>*</label></span>
                <div className="form">
                  <input onChange={input => setPassword(input.target.value)} type="password" id="inputPassword" placeholder="Senha" value={password} />
                </div>
                <div className="acount">
                  <button onClick={handleSubmit} className="acount-btn btn-success" type="button">Entrar</button>
                </div>
              </form>
              }
          
          </div>
      </div>
    </>
  )
}

export default Login;
