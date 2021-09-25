import React, { useState, useEffect } from 'react';
import { apiv2, base_uri_image } from '../../services/api';
import { useSelector, useDispatch} from 'react-redux';
import Navbar from '../../components/navbar';
import Menubar from '../../components/menubar';
import Rodape from '../../components/rodape';
import { Link, NavLink } from 'react-router-dom';
import { cpfMask, cepMask, celularMask, telefoneMask, removeMask } from '../../utils/mask';
import * as yup from 'yup';
import { FaUserCircle } from 'react-icons/fa'
import { editUserSuccess } from '../../store/modules/auth/actions';
import {Dados, Menu, Container, Img, ImgBox, ButtonContainer} from './styles';
import { SpanError } from '../../styles/error'
import { states, amapaCities } from '../../utils/address'

const schema = yup.object().shape({
  name: yup.string().required('O nome é obrigatório'),
  cpf: yup.string().length(11, 'Informe um CPF válido').required('O CPF é obrigatório'),
  dap: yup.string().required('O DAP é obrigatório'),
  cell_phone: yup.string().length(11, 'Informe um número válido').required('O número de celular é obrigatório'),
  landline: yup.string().length(10, 'Informe um número válido'),
  gender: yup.string(),
  address: yup.object().shape({
    cep: yup.string().length(8, 'Informe um CEP válido').required('O CEP é obrigatório'),
    street: yup.string().required('Informe sua rua'),
    number: yup.string().required('Informe o número da sua casa'),
    district: yup.string().required('Informe seu bairro'),
    city: yup.string().required('Informe seu município'),
    state: yup.string().required('Informe o UF do seu estado'),
  }),
  delivery_fee: yup.number().transform(v => !v ? void 0 : v).required('Informe o valor da taxa de entrega')
});

function DadosProdutor() {
  const {token, user} = useSelector(state => state.auth);
  const [name, setName] = useState();
  const [cpf, setCpf] = useState();
  const [dap, setDap] = useState();
  const [gender, setGender] = useState();
  const [landline, setLandline] = useState();
  const [cell_phone, setCell_phone] = useState();
  const [cep, setCep] = useState("")
  const [street, setStreet] = useState("")
  const [number, setNumber] = useState("")
  const [district, setDistrict] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [delivery_fee, setDelivery_fee] = useState()
  const [image, setImage] = useState('');
  const [preview, setPreview] = useState('');
  const [male, setMale] = useState(false);
  const [female, setFemale] = useState(false);
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
        setDap(user.data.dap);
        setGender(user.data.gender)
        setCell_phone(celularMask(user.data.cell_phone));
        setLandline(telefoneMask(user.data.landline));
        
        setCep(cepMask(user.data.address.cep));
        setStreet(user.data.address.street);
        setDistrict(user.data.address.district);
        setNumber(user.data.address.number);
        setState(user.data.address.state);
        setCity(user.data.address.city);
        setDelivery_fee(user.data.delivery_fee)


        if(user.data.gender === 'm') setMale(true);
        if(user.data.gender === 'f') setFemale(true);

      } catch (error) {
        alert('Houve um erro ao carregar seus dados. Verifique sua conexão.')
      }
    }
    loadDataUser();
  }, [user.data])

  async function handleSubmit(e) {
    try {
      const body =  {
        name,
        cpf: removeMask(cpf),
        dap,
        gender,
        cell_phone: removeMask(cell_phone),
        landline: removeMask(landline),
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

      if(image) body.image = image;

      await schema.validate(body, {
        abortEarly: false
      });

      setFeedback({})
      setLoading(true);
      const response = await apiv2.put(`/producers/${user.data._id}`, body, {
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
        alert('Erro ao atualizar seus dados. Possiveis erros: CPF e Email são únicos, verifique se já não exista cadastro deles ou verifique sua conexão.');
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
      const response = await apiv2.patch(`/producers/image`, formData, {
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

  function handleSexOptionChange(e) {
    if(e.target.value === "m") {
      setMale(!male);
      setFemale(false);
    } else {
      setMale(false);
      setFemale(!female);
    }

    if(e.target.checked) {
      setGender(e.target.value);
    }
  }

    return(
      <>
        <Navbar />


        <div class="container">

          <div class="row ">

            <div class="col-lg-3">

              <Menu>Minha Conta</Menu>
              <div class="list-group">
              <Link class="list-group-item" >
                  <NavLink
                    style={{color: 'rgb(145, 145, 145)'}}
                    exact to="/produtor/minhaconta"
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
                    exact to="/produtor/minhasvendas"
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
                    exact to="/produtor/listagem/produtos"
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
                        <h5 className="labelTitle" for="dapProdutor">DAP:</h5>
                        <input id="dapProdutor" type="text" value={dap} onChange={input => setDap(input.target.value)} />
                        <SpanError>{feedback && feedback.dap}</SpanError>
                      </div>

                      <div className="inputContent">
                        <h5 className="labelTitle" for="sexoProdutor">Sexo:</h5>
                        <div className="radioGroup">
                          
                          <label className="radio">
                            <input 
                              id="sexoProdutor" 
                              type="radio" value={"m"} 
                              onClick={handleSexOptionChange}
                              checked={male}/>
                              <span></span>
                              masculino
                          </label>
                          <label className="radio">
                            <input 
                              id="sexoProdutor" 
                              type="radio" value={"f"} 
                              onClick={handleSexOptionChange}
                              checked={female}/>
                              <span></span>
                              feminino
                          </label>
                        </div>
                      </div>

                      <div className="inputContent">
                        <label className="labelTitle" for="celularProdutor">Celular:</label>
                        <input id="celularProdutor" type="text" value={cell_phone} onChange={input => setCell_phone(celularMask(input.target.value))} />
                        <SpanError>{feedback && feedback.cell_phone}</SpanError>
                      </div>
                      
                      <div className="inputContent">
                        <label className="labelTitle" for="telefoneProdutor">Telefone:</label>
                        <input id="telefoneProdutor" type="text" value={landline} onChange={input => setLandline(telefoneMask(input.target.value))} />
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
                        <input id="cepProdutor" type="text" value={cep} onChange={input => setCep(cepMask(input.target.value))} />
                        <SpanError>{feedback && feedback['address.cep']}</SpanError>
                      </div>

                      <div className="inputContent">
                        <label className="labelTitle" for="ruaProdutor">Rua:</label>
                        <input id="ruaProdutor" type="text" value={street} onChange={input => setStreet(input.target.value)} />
                        <SpanError>{feedback && feedback['address.street']}</SpanError>
                      </div>

                      <div className="inputContent">
                        <h5 className="labelTitle" for="bairroProdutor">Bairro:</h5>
                        <input id="bairroProdutor" type="text" value={district} onChange={input => setDistrict(input.target.value)} />
                        <SpanError>{feedback && feedback['address.district']}</SpanError>
                      </div>

                      <div className="inputContent">
                        <h5 className="labelTitle" for="casaProdutor">Número:</h5>
                        <input id="casaProdutor" type="text" value={number} onChange={input => setNumber(input.target.value)} />
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

export default DadosProdutor;