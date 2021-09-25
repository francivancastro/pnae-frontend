import React, {useState} from 'react';
import * as yup from 'yup';
import {apiv2} from '../../../../services/api';
import history from '../../../../services/history';
import '../../login.css';
import Navbar from '../../../../components/navbar';
import Rodape from '../../../../components/rodape';
import Menubar from '../../../../components/menubar';
import { cpfMask, removeMask } from '../../../../utils/mask';

export default function ProdutorLogin() {
  const [loading, setLoading] = useState(false);
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  async function handleSubmit() {
    if(password !== confirmPassword) {
      alert('As senhas não são iguais.')
      return;
    }
    try {
      const response = await apiv2.post('/producers/newPassword', {cpf: removeMask(cpf), password});
      alert(response.data.message)
      history.push('/login/produtor')
    } catch (error) {
      alert(error.response.data.message)      
    }
  }

  return (
    <>
      <Navbar />
      <Menubar />
      <div class="container mt-4 pt-5 pb-5">
          <div class="login">
              <h3>Cadastre sua nova senha aqui, Produtor</h3>
              <p>caso você já possua senha, apenas volte para a página de login.</p>
              {loading && (
                <div className="d-flex justify-content-center mt-4">
                    <div className="spinner-border text-success" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
              )}
              <form>
                <span>CPF<label>*</label></span>
                <div className="form">
                  <input onChange={input => setCpf(cpfMask(input.target.value))} type="text" id="inputEmail" placeholder="CPF" value={cpf}/>
                </div>
                <span>Nova senha<label>*</label></span>
                <div className="form">
                  <input onChange={input => setPassword(input.target.value)} type="password" id="inputPassword" placeholder="Senha" value={password} />
                </div>
                <span>Digite novamente a nova senha<label>*</label></span>
                <div className="form">
                  <input onChange={input => setConfirmPassword(input.target.value)} type="password" id="inputPassword" placeholder="Senha" value={confirmPassword} />
                </div>
                <div className="acount">
                  <button onClick={handleSubmit} className="acount-btn btn-success" type="button">Cadastrar</button>
                </div>
              </form>
          </div>
      </div>
      <Rodape />
    </>
  );
}