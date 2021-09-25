import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { apiv2, base_uri_image } from '../../services/api';
import history from '../../services/history';
import Navbar from '../../components/navbar';
import Menubar from '../../components/menubar';
import Rodape from '../../components/rodape';
import { Link, NavLink } from 'react-router-dom';
import { cnpjMask, cepMask, celularMask, telefoneMask, removeMask } from '../../utils/mask';
import * as yup from 'yup';
import { FaUserCircle } from 'react-icons/fa'
import { editUserSuccess, editImageUserSucess } from '../../store/modules/auth/actions';
import {Dados, Menu, Container, Img, ImgBox, ButtonContainer} from './styles';
import { SpanError } from '../../styles/error'
import { states, amapaCities } from '../../utils/address'

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

function DadosCooperativa() {
  const {token, user} = useSelector(state => state.auth);
  const [name, setName] = useState();
  const [cnpj, setCnpj] = useState();
  const [registeredFarmers, setRegisteredFarmers] = useState();
  const [landline, setLandline] = useState();
  const [cell_phone, setCell_phone] = useState();
  const [email, setEmail] = useState();
  const [cep, setCep] = useState("")
  const [street, setStreet] = useState("")
  const [number, setNumber] = useState("")
  const [district, setDistrict] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [password, setPassword] = useState();
  const [delivery_fee, setDelivery_fee] = useState()
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState({})
  const [image, setImage] = useState('');
  const [preview, setPreview] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadDataUser() {
      try {
        if (user.data.image){
          setImage(user.data.image);
          setPreview(base_uri_image + user.data.image)
        }
        setName(user.data.name);
        setCnpj(cnpjMask(user.data.cnpj));
        setRegisteredFarmers(user.data.registeredFarmers);
        setEmail(user.data.email);
        setCell_phone(celularMask(user.data.cell_phone));
        setLandline(telefoneMask(user.data.landline));
        
        setCep(cepMask(user.data.address.cep));
        setStreet(user.data.address.street);
        setDistrict(user.data.address.district);
        setNumber(user.data.address.number);
        setState(user.data.address.state);
        setCity(user.data.address.city);
        setDelivery_fee(user.data.delivery_fee);

      } catch (error) {
        alert('Houve um erro ao carregar seus dados. Verifique sua conexão.')
      }
    }
    loadDataUser();
  }, [user.data.address.cep, user.data.address.city, user.data.address.district, user.data.address.number, user.data.address.state, user.data.address.street, user.data.cell_phone, user.data.cnpj, user.data.delivery_fee, user.data.email, user.data.image, user.data.landline, user.data.name, user.data.registeredFarmers])

  async function handleSubmit(e) {
    try {
      const body =  {
        name,
        cnpj: removeMask(cnpj),
        registeredFarmers,
        cell_phone: removeMask(cell_phone),
        landline: removeMask(landline),
        email,
        address: {
          cep: removeMask(cep),
          number,
          district,
          street,
          city,
          state,
        },
        delivery_fee
      }

      await schema.validate(body, {
        abortEarly: false
      });

      setLoading(true);
      setFeedback({})
      const response = await apiv2.put(`/cooperatives/${user.data._id}`, body, {
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
      const response = await apiv2.patch(`/cooperatives/image`, formData, {
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
                    exact to="/cooperativa/minhaconta"
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
                    exact to="/cooperativa/minhasvendas"
                    className="main-nav"
                    activeStyle={{
                      color: 'rgb(71, 71, 71)'
                    }}
                  >
                    Minhas Vendas
                    </NavLink>
                </Link>
                <Link class="list-group-item">
                  <NavLink
                    style={{color: 'rgb(145, 145, 145)'}}
                    exact to="/cooperativa/listagem/produtos"
                    className="main-nav"
                    activeStyle={{
                      color: 'rgb(71, 71, 71)'
                    }}
                  >
                    Meus Produtos
                    </NavLink>
                </Link>
              </div>
            </div>

            <div class="col-md-8 order-md-1">
              <Dados></Dados>
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
                        <h5 className="labelTitle" for="nomeProdutor">Nome da cooperativa:</h5>
                        <input id="nomeProdutor" type="text" value={name} onChange={input => setName(input.target.value)}/>
                        <SpanError>{feedback && feedback.name}</SpanError>
                      </div>

                      <div className="inputContent">
                        <h5 className="labelTitle" for="cnpjProdutor">CNPJ:</h5>
                        <input id="cnpjProdutor" type="text" value={cnpj} onChange={input => setCnpj(cnpjMask(input.target.value))}/>
                        <SpanError>{feedback && feedback.cnpj}</SpanError>
                      </div>

                      <div className="inputContent">
                        <h5 className="labelTitle" for="agricultoresCadastrados">Agricultores Cadastrados:</h5>
                        <input id="agricultoresCadastrados" type="number" value={registeredFarmers} onChange={input => setRegisteredFarmers(input.target.value)}/>
                        <SpanError>{feedback && feedback.registeredFarmers}</SpanError>
                      </div>
                      
                      <div className="inputContent">
                        <h5 className="labelTitle" for="celularProdutor">Celular:</h5>
                        <input id="celularProdutor" type="text" value={cell_phone} onChange={input => setCell_phone(celularMask(input.target.value))}/>
                        <SpanError>{feedback && feedback.cell_phone}</SpanError>
                      </div>

                      <div className="inputContent">
                        <h5 className="labelTitle" for="telefoneProdutor">Telefone:</h5>
                        <input id="telefoneProdutor" type="text" value={landline} onChange={input => setLandline(telefoneMask(input.target.value))}/>
                        <SpanError>{feedback && feedback.landline}</SpanError>
                      </div>

                      <div className="inputContent">
                        <h5 className="labelTitle" for="emailProdutor">Email:</h5>
                        <input disabled id="emailProdutor" type="email" value={email} onChange={input => setEmail(input.target.value)}/>
                        <SpanError>{feedback && feedback.email}</SpanError>
                      </div>

                      <div className="inputContent">            
                        <label className="labelTitle" for="precoProduto">Preço do frete:</label>
                        <input id="precoProduto" type="number" min={0} step={0.01} value={delivery_fee} onChange={input => setDelivery_fee(input.target.value)}/>
                        <SpanError>{feedback && feedback.delivery_fee}</SpanError>
                      </div>
                    </Container>
                      
                      <div className="inputContent">
                        <h3 className="endereço">ENDEREÇO</h3>
                      </div>

                    <Container>
                        
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
                        <input id="bairroProdutor" type="text" value={district} onChange={input => setDistrict(input.target.value)}/>
                        <SpanError>{feedback && feedback['address.district']}</SpanError>
                      </div>

                      <div className="inputContent">
                        <h5 className="labelTitle" for="casaProdutor">Número:</h5>
                        <input id="casaProdutor" type="text" value={number} onChange={input => setNumber(input.target.value)}/>
                        <SpanError>{feedback && feedback['address.number']}</SpanError>
                      </div>

                      <div className="inputContent">
                        <h5 className="labelTitle" for="estado">Estado:</h5>
                        <select id="estado" onChange={input => setState(input.target.value)}>
                          {!state && <option disabled selected>Escolha seu estado</option>}
                          {states.map(option => {
                            return <option value={option.uf} selected={state === option.uf}>{option.name} - {option.uf}</option>
                          })}
                        </select>
                        <SpanError>{feedback && feedback['address.state']}</SpanError>
                      </div>

                      <div className="inputContent">
                        <h5 className="labelTitle" for="municipio">Município:</h5>
                        <select disabled={!state} id="municipio" onChange={input => setCity(input.target.value)}>
                          {!city && <option disabled selected>Escolha seu município</option>}
                          {state && amapaCities.map(option => {
                            return <option value={option.name} selected={city === option.name}>{option.name}</option>
                          })}
                        </select>
                        <SpanError>{feedback && feedback['address.city']}</SpanError>
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

export default DadosCooperativa;