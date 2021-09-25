import React, {useState} from 'react';
import { Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import { signInCooperative } from '../../../store/modules/auth/actions';
import { cnpjMask, removeMask} from '../../../utils/mask';

import '../login.css';
import Navbar from '../../../components/navbar';
import Rodape from '../../../components/rodape';
import Menubar from '../../../components/menubar';

export default function CooperativaLogin() {
  const {loading} = useSelector(state => state.auth)
  const [cnpj, setCnpj] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const schema = yup.object().shape({
    cnpj: yup.string().length(14).required(),
    password: yup.string().min(6).required()
  });

  
  async function handleSubmit() {

    const body =  {
      cnpj: removeMask(cnpj),
      password
    }

    const validation = await schema.isValid(body);

    if(validation) {
      try {
        dispatch(signInCooperative(body.cnpj, body.password));
      } catch (error) {
        alert('Erro no login. Verifique sua conexão.');
      }
      } else {
        alert('Dados incorretos ou faltando para cadastro, revise os campos.');
      }
    }

  return (
    <>
      <Navbar />
      <Menubar />
      <div class="container mt-4 pt-5 pb-5">
          <div class="login">
              <h3>Login para Cooperativas</h3>
              <p>Se você possui uma conta conosco, faça o login.</p>
              {loading ?
                <div className="d-flex justify-content-center mt-4">
                    <div className="spinner-border text-success" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
                : 
                <form>
                <span>CNPJ<label>*</label></span>
                <div className="form">
                  <input onChange={input => setCnpj(cnpjMask(input.target.value))} type="text" id="inputEmail" placeholder="CNPJ" value={cnpj}/>
                </div>
                <span>Senha<label>*</label></span>
                <div className="form">
                  <input onChange={input => setPassword(input.target.value)} type="password" id="inputPassword" placeholder="Senha" value={password} />
                </div>
                <div className="acount">
                  <button onClick={handleSubmit} className="acount-btn btn-success" type="button">Entrar</button>
                </div>
                <Link to='/cooperativa/novasenha'>Cadastrar nova senha</Link>
              </form>
            }
         
          </div>
      </div>
      <Rodape />
    </>
  );
}