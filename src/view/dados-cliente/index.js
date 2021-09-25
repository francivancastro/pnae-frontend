import React, { useState, useEffect } from 'react';
import { apiv2, base_uri_image } from '../../services/api';
import { useSelector, useDispatch} from 'react-redux';
import Navbar from '../../components/navbar';
import Menubar from '../../components/menubar';
import Rodape from '../../components/rodape';
import { FaUserCircle } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { cpfMask, cepMask, celularMask, removeMask } from '../../utils/mask';
import * as yup from 'yup';
import { editUserSuccess } from '../../store/modules/auth/actions';
import {ButtonContainer, Menu, Container, Img, ImgBox } from './styles';
import { SpanError } from '../../styles/error';
import { states, amapaCities } from '../../utils/address';

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
  complement: yup.string()
});

function DadosCliente() {
  const {token, user} = useSelector(state => state.auth);
  const [name, setName] = useState();
  const [cpf, setCpf] = useState();
  const [email, setEmail] = useState();
  const [cell_phone, setCell_phone] = useState();
  const [cep, setCep] = useState("")
  const [street, setStreet] = useState("")
  const [district, setDistrict] = useState("")
  const [number, setNumber] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [complement, setComplement] = useState("")
  const [image, setImage] = useState('');
  const [preview, setPreview] = useState('');

  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState({})
  
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadDataUser() {
      try {
        if (user.data.image){
          setImage(user.data.image);
          setPreview(base_uri_image + user.data.image)
        }
        setName(user.data.name);
        setCpf(cpfMask(user.data.cpf));
        setEmail(user.data.email);
        setCell_phone(celularMask(user.data.cell_phone));
        
        setCep(cepMask(user.data.cep));
        setStreet(user.data.street);
        setDistrict(user.data.district);
        setNumber(user.data.number);
        setState(user.data.state);
        setCity(user.data.city);
        setComplement(user.data.complement)

      } catch (error) {
        alert('Houve um erro ao carregar seus dados. Verifique sua conexão.')
      }
    }
    loadDataUser();
  }, [user.data.cell_phone, user.data.cep, user.data.city, user.data.complement, user.data.cpf, user.data.district, user.data.email, user.data.image, user.data.name, user.data.number, user.data.state, user.data.street])

  async function handleSubmit(e) {
    try {
      const body =  {
        name,
        cpf: removeMask(cpf),
        email,
        cell_phone: removeMask(cell_phone),
        cep: removeMask(cep),
        street,
        number,
        district,
        state,
        city,
        complement,
      }

      await schema.validate(body, {
        abortEarly: false
      });

      setLoading(true);
      setFeedback({})
      const response = await apiv2.put(`/customers`, body, {
        'Authorization': `Bearer ${token}`
      });
      const newUser = response.data;
      newUser.password = ""
      dispatch(editUserSuccess({data: newUser, type: user.type }))
      alert('Dados atualizados com sucesso');
    } 
    catch (error) {
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
        alert('Erro ao atualizar seus dados. Possiveis erros: CNPJ e Email são únicos, verifique se já não exista cadastro deles ou verifique sua conexão.');
      }
    } 
    finally {
      setLoading(false);
    }
  }

  async function handleSubmitImage() {
    const formData = new FormData();
    formData.append('image', image)
    try {
      setLoading(true);
      const response = await apiv2.patch(`/customers/image`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`
        }
      })
      alert('Imagem alterada')
      const newUser = response.data;
      newUser.password = ""
      dispatch(editUserSuccess({data: newUser, type: user.type }))

    } catch (error) {
      console.log(error)
      alert('Erro ao cadastrar imagem do produto.')
    } finally {
      setLoading(false);
    }
  }

  function handleImage(e) {
    const file = e.target.files[0];
    setImage(file);

    if(!file) {
      setPreview(null)
      return;
    }

    const previewURL = URL.createObjectURL(file);
    
    setPreview(previewURL);
  }
  

    return(
      <>
        <Navbar />
        <Menubar />


        <div class="container">

          <div class="row ">

            <div class="col-lg-3">

              <Menu>Minha Conta</Menu>
              <div class="list-group">
                <Link class="list-group-item" >
                  <NavLink
                    style={{color: 'rgb(145, 145, 145)'}}
                    exact to="/cliente/minhaconta"
                    className="main-nav"
                    activeStyle={{
                      color: 'rgb(71, 71, 71)'
                    }}
                  >
                    Meus Dados
                    </NavLink>
                </Link>
                <Link class="list-group-item">
                  <NavLink
                    style={{color: 'rgb(145, 145, 145)'}}
                    exact to="/meuspedidos"
                    className="main-nav"
                    activeStyle={{
                      color: 'rgb(71, 71, 71)'
                    }}
                  >
                    Meus Pedidos
                    </NavLink>
                </Link>
              </div>
            </div>

            <div class="col-md-8 order-md-1">
              <Menu/>
              {
                loading ? <div className="d-flex justify-content-center">
                  <div className="spinner-border text-success" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                </div> :
                  <>
                    <ImgBox>
                      <label className="labelTitle" >Foto de Perfil</label>
                      <div className="img">
                        <input
                          type="file"
                          id="selectImage"
                          accept="image/*"
                          onChange={handleImage}
                        />
                        <label
                          id="selectArea"
                          for="selectImage"
                        >
                          {
                            preview ?
                            <>
                              <Img src={preview}/>  
                            </>
                            :
                            <>
                              <FaUserCircle size={160} color='rgba(0,0,0,.125)'/>
                            </>
                          }
                        </label>
                      </div>
                      <ButtonContainer>
                        <button id="salvar" disabled={loading} onClick={handleSubmitImage} >Salvar imagem</button>
                      </ButtonContainer>
                    </ImgBox>

                    <Container>
                      <div className="inputContent">
                        <h5 className="labelTitle" for="nomeProdutor">Nome completo:</h5>
                        <input id="nomeProdutor" type="text" value={name} onChange={input => setName(input.target.value)} />
                        <SpanError>{feedback && feedback.name}</SpanError>
                      </div>

                      <div className="inputContent">
                        <h5 className="labelTitle" for="cpfProdutor">CPF:</h5>
                        <input disabled id="cpfProdutor" type="text" value={cpf} onChange={input => setCpf(cpfMask(input.target.value))} />
                        <SpanError>{feedback && feedback.cpf}</SpanError>
                      </div>

                      <div className="inputContent">
                        <h5 className="labelTitle" for="dapProdutor">Email:</h5>
                        <input disabled id="dapProdutor" type="email" value={email} onChange={input => setEmail(input.target.value)} />
                        <SpanError>{feedback && feedback.email}</SpanError>
                      </div>

                      <div className="inputContent">
                        <label className="labelTitle" for="celularProdutor">Celular:</label>
                        <input id="celularProdutor" type="text" value={cell_phone} onChange={input => setCell_phone(celularMask(input.target.value))} />
                        <SpanError>{feedback && feedback.cell_phone}</SpanError>
                      </div>
                    </Container>
                      
                      <div className="inputContent">
                        <h3 className="endereço">ENDEREÇO</h3>
                      </div>

                    <Container>
                        
                      <div className="inputContent">
                        <h5 className="labelTitle" for="cepProdutor">CEP:</h5>
                        <input id="cepProdutor" type="text" value={cep} onChange={input => setCep(cepMask(input.target.value))} />
                        <SpanError>{feedback && feedback.cep}</SpanError>
                      </div>

                      <div className="inputContent">
                        <label className="labelTitle" for="ruaProdutor">Rua:</label>
                        <input id="ruaProdutor" type="text" value={street} onChange={input => setStreet(input.target.value)} />
                        <SpanError>{feedback && feedback.street}</SpanError>
                      </div>

                      <div className="inputContent">
                        <h5 className="labelTitle" for="bairroProdutor">Bairro:</h5>
                        <input id="bairroProdutor" type="text" value={district} onChange={input => setDistrict(input.target.value)} />
                        <SpanError>{feedback && feedback.district}</SpanError>
                      </div>

                      <div className="inputContent">
                        <h5 className="labelTitle" for="casaProdutor">Número:</h5>
                        <input id="casaProdutor" type="text" value={number} onChange={input => setNumber(input.target.value)} />
                        <SpanError>{feedback && feedback.number}</SpanError>
                      </div>

                      <div className="inputContent">
                        <h5 className="labelTitle" for="estado">Estado:</h5>
                        <select id="estado" onChange={input => setState(input.target.value)}>
                          {!state && <option disabled selected>Escolha seu estado</option>}
                          {states.map(option => {
                            return <option value={option.uf} selected={state === option.uf}>{option.name} - {option.uf}</option>
                          })}
                        </select>
                        <SpanError>{feedback && feedback.state}</SpanError>
                      </div>

                      <div className="inputContent">
                        <h5 className="labelTitle" for="municipio">Município:</h5>
                        <select disabled={!state} id="municipio" onChange={input => setCity(input.target.value)}>
                          {!city && <option disabled selected>Escolha seu município</option>}
                          {state && amapaCities.map(option => {
                            return <option value={option.name} selected={city === option.name}>{option.name}</option>
                          })}
                        </select>
                        <SpanError>{feedback && feedback.city}</SpanError>
                      </div>

                      <div className="inputContent">
                        <h5 className="labelTitle" for="complementoProdutor">Complemento:</h5>
                        <input id="complementoProdutor" type="text" value={complement} onChange={input => setComplement(input.target.value)} />
                      </div>

                    </Container>
                    <ButtonContainer>
                      <button id="salvar" disabled={loading} onClick={handleSubmit} >Salvar</button>
                    </ButtonContainer>
                    
                  </>
              }

            </div>

          </div>
        </div>

        <Rodape />
      </>
    )

}

export default DadosCliente;