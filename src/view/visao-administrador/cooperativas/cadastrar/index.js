import React, { useState } from 'react';
import {useSelector} from 'react-redux'
import * as yup from 'yup';

import { apiv2 } from '../../../../services/api';
import history from '../../../../services/history';

import Navbar from '../../../../components/navbar';

import addimage from '../../../images/addimage.png';

import './styles.css'

import { SpanError } from '../../../../styles/error';
import { states } from '../../../../utils/address';
import { cnpjMask, telefoneMask, celularMask, cepMask, removeMask } from '../../../../utils/mask';

export default function CadastroCooperativa() {
  const {token} = useSelector(state => state.auth)
  const [nome, setNome] = useState();
  const [cnpj, setcnpj] = useState();
  const [agricultoresCadastrados, setagricultoresCadastrados] = useState();
  const [email, setEmail] = useState();
  const [telefone, setTelefone] = useState();
  const [celular, setCelular] = useState();
  const [cep, setCep] = useState("");
  const [street, setStreet] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [municipio, setMunicipio] = useState("");
  const [estado, setEstado] = useState("");
  const [image, setImage] = useState(null)
  const [delivery_fee, setDelivery_fee] = useState()
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState({})

  const schema = yup.object().shape({
    name: yup.string().required('O nome é obrigatório'),
    registeredFarmers: yup.number()
      .transform(v => !v ? void 0 : v)
      .min(1, 'Você precisa ter no mínimo 1 agricultor cadastrado')
      .required('Informe a quantidade de agricultores cadastrados'),
    cnpj: yup.string().length(14, 'Informe um CNPJ válido').required('O CNPJ é obrigatório'),
    cell_phone: yup.string().length(11, 'Informe um número válido').required('O número de celular é obrigatório'),
    landline: yup.string().length(10, 'Informe um número válido'),
    email: yup.string().email('Informe um email válido').required('O email é obrigatório'),
    address: yup.object().shape({
      cep: yup.string().length(8, 'Informe um CEP válido').required('O CEP é obrigatório'),
      street: yup.string().required('Informe sua rua'),
      number: yup.string().required('Informe o número da sua casa'),
      district: yup.string().required('Informe seu bairro'),
      city: yup.string().required('Informe seu município'),
      state: yup.string().required('Informe o UF do seu estado'),
    }),
    delivery_fee: yup.number()
    .transform(v => !v ? void 0 : v)
    .required('Informe o valor da taxa de entrega')
  });

  async function handleSubmit(e) {
    try {
      const body =  {
        name: nome,
        cnpj: removeMask(cnpj),
        cell_phone: removeMask(celular),
        landline: removeMask(telefone),
        address: {
          cep: removeMask(cep),
          street,
          number: numero,
          district: bairro,
          city: municipio,
          state: estado,
        },
        email,
        delivery_fee,
        registeredFarmers: agricultoresCadastrados
      }

      if(image) body.image = image;

      await schema.validate(body, {
        abortEarly: false
      });

      setLoading(true);
      await apiv2.post('/cooperatives', body, {
        'Authorization': `Bearer ${token}`
      });
      alert('Cooperativa cadastrado com sucesso');
      history.push('/admin/listagem/cooperativas')
    } catch (error) {
      setLoading(false);
      if(error instanceof yup.ValidationError){
        const errorMessages = {};

        error.inner.forEach(err => {
          errorMessages[err.path] = err.message;
        })
        setFeedback(errorMessages)
        alert('Dados inválidos, verifique os campos.')
      } else {
        alert('Erro ao cadastrar cooperativa. Possiveis erros: cnpj e email são unicos, verifique se já não exista cadastro deles ou verifique sua conexão.')
      }
    } finally {
      setLoading(false);
    }
  }

  function handleImage(evt) {
    var f = evt.target.files[0]; // FileList object
    var reader = new FileReader();
    // Closure to capture the file information.
    reader.onload = (function(theFile) {
      return function(e) {
        var binaryData = e.target.result;
        //Converting Binary Data to base 64
        var base64String = window.btoa(binaryData);
        setImage(base64String)
      };
    })(f);
    // Read in the image file as a data URL.
    reader.readAsBinaryString(f);
  }

  function handleBackList(e) {
    e.preventDefault();
    
    if (window.confirm('Você tem certeza que deseja cancelar este cadastro?')){
        history.replace('/admin/listagem/cooperativas');
    }
  }

  return (
    <>
      <Navbar />  

      <div className="formCad">
          <h3 class="mb-5 mt-2" id="titleCad"align="center">Cadastro de Cooperativa</h3>

          <div className="inputContent">
            <h5 className="labelTitle" for="nomeProdutor">Nome da cooperativa:</h5>
            <input id="nomeProdutor" type="text" value={nome} onChange={input => setNome(input.target.value)}/>
            <SpanError>{feedback && feedback.name}</SpanError>
          </div>

          <div className="inputContent">
            <h5 className="labelTitle" for="cnpjProdutor">CNPJ:</h5>
            <input id="cnpjProdutor" type="text" value={cnpj} onChange={input => setcnpj(cnpjMask(input.target.value))}/>
            <SpanError>{feedback && feedback.cnpj}</SpanError>
          </div>

          <div className="inputContent">
            <h5 className="labelTitle" for="agricultoresCadastrados">Agricultores Cadastrados:</h5>
            <input id="agricultoresCadastrados" type="number" value={agricultoresCadastrados} onChange={input => setagricultoresCadastrados(input.target.value)}/>
            <SpanError>{feedback && feedback.registeredFarmers}</SpanError>
          </div>
          
          <div className="inputContent">
            <h5 className="labelTitle" for="celularProdutor">Celular:</h5>
            <input id="celularProdutor" type="text" value={celular} onChange={input => setCelular(celularMask(input.target.value))}/>
            <SpanError>{feedback && feedback.cell_phone}</SpanError>
          </div>

          <div className="inputContent">
            <h5 className="labelTitle" for="telefoneProdutor">Telefone:</h5>
            <input id="telefoneProdutor" type="text" value={telefone} onChange={input => setTelefone(telefoneMask(input.target.value))}/>
            <SpanError>{feedback && feedback.landline}</SpanError>
          </div>

          <div className="inputContent">
            <h5 className="labelTitle" for="emailProdutor">Email:</h5>
            <input id="emailProdutor" type="email" value={email} onChange={input => setEmail(input.target.value)}/>
            <SpanError>{feedback && feedback.email}</SpanError>
          </div>

          <div className="inputContent">            
            <label className="labelTitle" for="precoProduto">Preço do frete:</label>
            <input id="precoProduto" type="number" min={0} step={0.01} value={delivery_fee} onChange={input => setDelivery_fee(input.target.value)}/>
            <SpanError>{feedback && feedback.delivery_fee}</SpanError>
          </div>

          <div className="inputContent">
            <h3 className="endereço">ENDEREÇO</h3>
          </div>

          <div className="inputContent">
            <h5 className="labelTitle" for="cepProdutor">CEP:</h5>
            <input id="cepProdutor" type="text" value={cep} onChange={input => setCep(cepMask(input.target.value))}/>
            <SpanError>{feedback && feedback['address.cep']}</SpanError>
          </div>

          <div className="inputContent">
            <label className="labelTitle" for="ruaProdutor">Rua:</label>
            <input id="ruaProdutor" type="text" value={street} onChange={input => setStreet(input.target.value)}/>
            <SpanError>{feedback && feedback['address.street']}</SpanError>
          </div>
          
          <div className="inputContent">
            <h5 className="labelTitle" for="bairroProdutor">Bairro:</h5>
            <input id="bairroProdutor" type="text" value={bairro} onChange={input => setBairro(input.target.value)}/>
            <SpanError>{feedback && feedback['address.district']}</SpanError>
          </div>

          <div className="inputContent">
            <h5 className="labelTitle" for="casaProdutor">Número:</h5>
            <input id="casaProdutor" type="text" value={numero} onChange={input => setNumero(input.target.value)}/>
            <SpanError>{feedback && feedback['address.number']}</SpanError>
          </div>

          <div className="inputContent">
            <h5 className="labelTitle" for="estado">Estado:</h5>
            <select id="estado" onChange={input => setEstado(input.target.value)}>
              <option disabled selected>Escolha seu estado</option>
              {states.map(option => {
                return <option value={option.uf}>{option.name} - {option.uf}</option>
              })}
            </select>
            <SpanError>{feedback && feedback['address.state']}</SpanError>
          </div>

          <div className="inputContent">
            <h5 className="labelTitle" for="municipio">Município:</h5>
            <select disabled={!estado} id="municipio" onChange={input => setMunicipio(input.target.value)}>
              <option disabled selected>Escolha seu município</option>
              {estado && states[states.findIndex(state => state.uf === estado)].cities.map(option => {
                return <option value={option.name}>{option.name}</option>
              })}
            </select>
            <SpanError>{feedback && feedback['address.city']}</SpanError>
          </div>
          
          <div id="divButtons">
            <button className="button" id="voltar" onClick={handleBackList} DIS>Voltar</button>
            <button disabled={loading} className="button" id="salvar" onClick={handleSubmit}>Salvar</button>
          </div>
      </div>
    </>
  );
}
