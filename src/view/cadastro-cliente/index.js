import React, { useState } from 'react';
import * as yup from 'yup';

import { apiv2 } from '../../services/api';
import history from '../../services/history';
import Navbar from '../../components/navbar';

import './styles.css';
import { Img, ImgBox, ButtonContainer } from './styles';
import { FaUserCircle } from 'react-icons/fa';

import { SpanError } from '../../styles/error';
import { states, amapaCities } from '../../utils/address';

import { cpfMask, cepMask, celularMask, removeMask } from '../../utils/mask';

export default function CadastroCliente() {
  const [name, setName] = useState();
  const [cpf, setCpf] = useState();
  const [cell_phone, setCell_phone] = useState();
  const [email, setEmail] = useState();
  const [cep, setCep] = useState("")
  const [street, setStreet] = useState("")
  const [number, setNumber] = useState("")
  const [district, setDistrict] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [complement, setComplement] = useState("")
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState({})

  const schema = yup.object().shape({
    name: yup.string().required('O nome é obrigatório'),
    cpf: yup.string().length(11, 'Insira um CPF válido').required('O CPF é obrigatório'),
    email: yup.string().email('Insira um email válido'),
    cell_phone: yup.string().length(11, 'Insira um número válido').required('Informe seu número de celular'),
    cep: yup.string().length(8, 'Insira um CEP válido').required('Informe seu CEP'),
    street: yup.string().required('Infome sua rua'),
    district: yup.string().required('Informe seu bairro'),
    number: yup.string().required('Informe o número da sua casa'),
    state: yup.string().required('Informe o UF do seu estado'),
    city: yup.string().required('Informe o seu município'),
    complement: yup.string(),
    password: yup.string().min(6, 'Sua senha deve ter no mínimo 6 caracteres').required('A senha é obrigatória')
  });

  async function handleSubmit() {
    try {
      const body =  {
        name,
        cpf: removeMask(cpf),
        email,
        cell_phone: removeMask(cell_phone),
        cep: removeMask(cep),
        number,
        street,
        district,
        city,
        state,
        complement,
        password
      }

      await schema.validate(body, {
        abortEarly: false
      });

      setLoading(true);
      setFeedback({});  
    
      await apiv2.post('/customers', body);
      alert('Cliente cadastrado com sucesso');
      history.push('/login/cliente')
    } catch (error) {
      setLoading(false);
      if(error instanceof yup.ValidationError){
        const errorMessages = {};

        error.inner.forEach(err => {
          errorMessages[err.path] = err.message;
        })
        setFeedback(errorMessages)
        alert('Dados inválidos, verifique os campos.')
      } 
      else {
        alert(error.response.data.message);
      }
    } finally {
      setLoading(false);
    }
  }

  function handleBackList(e) {
    e.preventDefault();
    
    if (window.confirm('Você tem certeza que deseja cancelar este cadastro?')){
        history.replace('/login/cliente');
    }
  }

  return (
    <>
      <Navbar /> 

      {
        loading ? <div className="d-flex justify-content-center">
          <div className="spinner-border text-success" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div> :
          <div className="formCad">
            <h3 className="mb-5 mt-2" id="titleCad" align="center">Cadastro de Cliente</h3>

            <div className="inputContent">
              <h5 className="labelTitle" for="nomeProdutor">Nome completo:</h5>
              <input id="nomeProdutor" type="text" defaultValue={name} onChange={input => setName(input.target.value)} />
              <SpanError>{feedback && feedback.name}</SpanError>
            </div>

            <div className="inputContent">
              <h5 className="labelTitle" for="cpfProdutor">CPF:</h5>
              <input id="cpfProdutor" type="text" defaultValue={cpf} onChange={input => setCpf(cpfMask(input.target.value))} />
              <SpanError>{feedback && feedback.cpf}</SpanError>
            </div>

            <div className="inputContent">
              <h5 className="labelTitle" for="dapProdutor">Email:</h5>
              <input id="dapProdutor" type="email" defaultValue={email} onChange={input => setEmail(input.target.value)} />
              <SpanError>{feedback && feedback.email}</SpanError>
            </div>

            <div className="inputContent">
              <label className="labelTitle" for="celularProdutor">Celular:</label>
              <input id="celularProdutor" type="text" defaultValue={cell_phone} onChange={input => setCell_phone(celularMask(input.target.value))} />
              <SpanError>{feedback && feedback.cell_phone}</SpanError>
            </div>

            <div className="inputContent">
              <h3 className="endereço">ENDEREÇO</h3>
            </div>

            <div className="inputContent">
              <h5 className="labelTitle" for="cepProdutor">CEP:</h5>
              <input id="cepProdutor" type="text" defaultValue={cep} onChange={input => setCep(cepMask(input.target.value))} />
              <SpanError>{feedback && feedback.cep}</SpanError>
            </div>

            <div className="inputContent">
              <label className="labelTitle" for="ruaProdutor">Rua:</label>
              <input id="ruaProdutor" type="text" defaultValue={street} onChange={input => setStreet(input.target.value)} />
              <SpanError>{feedback && feedback.street}</SpanError>
            </div>

            <div className="inputContent">
              <h5 className="labelTitle" for="bairroProdutor">Bairro:</h5>
              <input id="bairroProdutor" type="text" defaultValue={district} onChange={input => setDistrict(input.target.value)} />
              <SpanError>{feedback && feedback.district}</SpanError>
            </div>

            <div className="inputContent">
              <h5 className="labelTitle" for="casaProdutor">Número:</h5>
              <input id="casaProdutor" type="text" defaultValue={number} onChange={input => setNumber(input.target.value)} />
              <SpanError>{feedback && feedback.number}</SpanError>
            </div>

            <div className="inputContent">
              <h5 className="labelTitle" for="estado">Estado:</h5>
              <select id="estado" onChange={input => setState(input.target.value)}>
                {!state && <option disabled selected>Escolha seu estado</option>}
                {states.map(option => {
                  return <option defaultValue={option.uf} selected={state === option.uf}>{option.name} - {option.uf}</option>
                })}
              </select>
              <SpanError>{feedback && feedback.state}</SpanError>
            </div>

            <div className="inputContent">
              <h5 className="labelTitle" for="municipio">Município:</h5>
              <select disabled={!state} id="municipio" onChange={input => setCity(input.target.value)}>
                {!city && <option disabled selected>Escolha seu município</option>}
                {state && amapaCities.map(option => {
                  return <option defaultValue={option.name} selected={city === option.name}>{option.name}</option>
                })}
              </select>
              <SpanError>{feedback && feedback.city}</SpanError>
            </div>

            <div className="inputContent">
              <h5 className="labelTitle" for="complementoProdutor">Complemento:</h5>
              <input id="complementoProdutor" type="text" defaultValue={complement} onChange={input => setComplement(input.target.value)} />
            </div>

            <div className="inputContent">
              <h5 className="labelTitle" for="passwordProdutor">Senha:</h5>
              <input id="passwordProdutor" type="password" defaultValue={password} onChange={input => setPassword(input.target.value)} />
              <SpanError>{feedback && feedback.password}</SpanError>
            </div>

            <ButtonContainer>
              <button className="button" id="voltar" onClick={handleBackList}>Voltar</button>
              <button disabled={loading} className="button" id="salvar" onClick={handleSubmit}>Salvar</button>
            </ButtonContainer>
          </div>
      }


    </>
  );
}
