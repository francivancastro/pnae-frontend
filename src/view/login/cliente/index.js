import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import history from '../../../services/history';

import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import { signInCustomer } from '../../../store/modules/auth/actions';

import '../login.css';
import Navbar from '../../../components/navbar';
import Rodape from '../../../components/rodape';
import Menubar from '../../../components/menubar';
import { cpfMask, removeMask} from '../../../utils/mask';

export default function ClienteLogin() {
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');

  const {loading} = useSelector(state => state.auth);

  const dispatch = useDispatch();

  const schema = yup.object().shape({
    cpf: yup.string().length(11).required(),
    password: yup.string().required()
  });

  async function handleSubmit() {
    const body =  {
      cpf: removeMask(cpf),
      password
    }

    const validation = await schema.isValid(body);

    if(!validation) {
      alert('Revise os campos.')
      return;
    }
    dispatch(signInCustomer(body.cpf, body.password));
  }
  

  return (
    <>
      <Navbar />
      <div className="container mt-4 pt-5 pb-5">
          <div className="login">
              <h3>Login para Clientes</h3>
              <p>Se você possui uma conta conosco, faça o login.</p>
              <Link to = '/cadastro-cliente' style={{color: 'black'}}>
                <p>Se você não possui uma conta conosco, clique aqui.</p>
              </Link>
              {loading ? 
                <div className="d-flex justify-content-center mt-4">
                    <div className="spinner-border text-success" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div> : 
                <form>
                <span>CPF<label>*</label></span>
                <div className="form">
                  <input onChange={input => setCpf(cpfMask(input.target.value))} type="text" id="inputEmail" placeholder="CPF" value={cpf}/>
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
      <Rodape />
    </>
  );
}