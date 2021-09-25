import React, { useState, useEffect } from 'react';
import {useParams, useLocation} from 'react-router-dom';
import {useSelector} from 'react-redux'
import * as yup from 'yup';

import addimage from '../../../images/addimage.png';
import { apiv2, base_uri_image } from '../../../../services/api';
import history from '../../../../services/history';

import Navbar from '../../../../components/navbar';

import { SpanError } from '../../../../styles/error';

import './styles.css';

function getCategories() {
  return apiv2.get('/categories?all=true');
}


const unities = [
  {
    "name": "Grama",
    "value": "Grama",
  },
  {
    "name": "Quilograma",
    "value": "Kilograma",
  },
  {
    "name": "Litro",
    "value": "Litro",
  },
  {
    "name": "Fardo",
    "value": "Fardo",
  },
  {
    "name": "Unidade",
    "value": "Unidade",
  },
];

const schema = yup.object().shape({
  name: yup.string().required('O nome é obrigatório'),
  price: yup.number().transform(v => !v ? void 0 : v).required('O preço é obrigatório'),
  unity: yup.string().required('A unidade de medida é obrigatória'),
  qty: yup.number().transform(v => !v ? void 0 : v).required('A quantidade é obrigatória'),
  category: yup.string().required('A categoria é obrigatória'),
  description: yup.string()
});

export default function AlterarProduto() {
  const {token} = useSelector(state => state.auth)
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [unity, setUnity] = useState();
  const [qty, setQty] = useState();
  const [category, setCategory] = useState();
  const [description, setDescription] = useState();
  const [categories, setCategories] = useState([]);
  const [image, setImage] = useState(null);
  
  const [product, setProduct] = useState(null);
  const [preview, setPreview] = useState('');

  const [feedback, setFeedback] = useState({})
  const [loading, setLoading] = useState(false);

  const {id} = useParams();

  const defaultProduto = useLocation().state;
  
  useEffect(() => {
    async function getProduto() {
      try {
        if (defaultProduto.image){
          setImage(defaultProduto.image);
          setPreview(base_uri_image + defaultProduto.image)
        }

        setName(defaultProduto.name);
        setPrice(defaultProduto.price);
        setUnity(defaultProduto.unity);
        setQty(defaultProduto.qty);
        setDescription(defaultProduto.description)
        setCategory(defaultProduto.category._id);
        
      } catch (error) {
        alert('Erro ao recuperar cooperativa da base de dados, verifique sua conexão.');
      }
    }

    async function loadCategories() {
      try {
        const response = await getCategories();
        setCategories(response.data)
      } catch (error) {
        alert('Falha ao carregar categorias de produtos, verifique sua conexão.')
      }
    }

    getProduto();
    loadCategories();
  }, [defaultProduto, defaultProduto.category, defaultProduto.description, defaultProduto.image, defaultProduto.name, defaultProduto.price, defaultProduto.qty, defaultProduto.unity]);

  async function handleSubmit() {
    try {
      const body = {
        name,
        price,
        unity,
        qty,
        category,
        description
      }
      
      await schema.validate(body, {
        abortEarly: false
      });
    
      setLoading(true);
      await apiv2.put(`/products/${id}`, body, {
        'Authorization': `Bearer ${token}`
      })
      alert('Produto atualizado com sucesso')
      //history.push('/admin/listagem/produtos')
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
        alert('Erro ao alterar produto, verifique sua conexão e tente novamente.')
      }
    } finally {
      setLoading(false);
    }
  }

  async function handleSubmitImage() {
    const formData = new FormData();
    formData.append('image', image)
    try {
      setLoading(true);
      await apiv2.patch(`/products/image/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`
        }
      })
      alert('Imagem alterada')
      //history.push('/admin/listagem/produtos')
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

  
  function handleBackList(e) {
    e.preventDefault();
    
    if (window.confirm('Você tem certeza que deseja cancelar este cadastro?')){
        history.replace('/admin/listagem/produtos');
    }
  }

  return (
    <>
      <Navbar />  

      <div className="formCad">
          <h4 id="titleCad"align="center">Alteração de produto</h4>
          <div className="inputContentImage" style={{marginTop: '30px'}}>  
          <h4 className="imgProd" for="imagemProduto">Imagem do Produto</h4>
          <div className="imageAreaMain">
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
              {preview ? (<img alt="" src={preview}/>) : 
                (<img src={addimage} alt=""/>)
              }
            </label>
          </div>
        </div>

        <div style={{marginBottom: '30px'}}>
        <button disabled={loading} className="button" id="salvar" onClick={handleSubmitImage}>Salvar imagem</button>
        </div>

          <div className="inputContent">  
            <h5 className="labelTitle" for="nomeProduto">Nome do produto:</h5>
            <input 
              id="nomeProduto" 
              type="text" 
              value={name} 
              onChange={input => setName(input.target.value)}
              maxLength="20"
            />
            <SpanError className="error">{feedback && feedback.name}</SpanError>
          </div>

          <div className="inputContent">            
            <h5 className="labelTitle" for="precoProduto">Preço do produto:</h5>
            <input id="precoProduto" type="number" min={0} step={0.01} value={price} onChange={input => setPrice(input.target.value)}/>
            <SpanError className="error">{feedback && feedback.price}</SpanError>
          </div>

          <div className="inputContent">            
            <h5 className="labelTitle" for="unidadeProduto">Unidade de medida do produto:</h5>
            <select id="unidadeProduto" onChange={input => setUnity(input.target.value)}>
              {!unity && <option disabled selected>Escolha a unidade</option>}
              {unities.map(option => {
                return <option value={option.value} selected={option.value === unity}>{option.name} ({option.value})</option>
              })}
            </select>
            <SpanError className="error">{feedback && feedback.unity}</SpanError>
          </div>

          <div className="inputContent">            
            <h5 className="labelTitle" for="quantidadeProduto">Quantidade do produto:</h5>
            <input id="quantidadeProduto" type="number" min={0} step={0.01}  value={qty} onChange={input => setQty(input.target.value)}/>
            <SpanError className="error">{feedback && feedback.qty}</SpanError>
          </div>

          <div className="inputContent">            
            <h5 className="labelTitle" for="categoriaProduto">Categoria do produto:</h5>
            <select id="unidadeProduto" onChange={input => setCategory(input.target.value)}>  
              {!category && <option disabled selected>Escolha a categoria</option>}
              {categories.map(option => {
                return <option value={option._id} selected={option._id === category}>{option.name}</option>
              })}
            </select>
            <SpanError className="error">{feedback && feedback.category}</SpanError>
          </div>

          <div className="inputContent">            
            <label className="labelTitle" for="descriptionProduto">Descrição do produto:</label>
            <textarea 
              id="descriptionProduto" 
              type="text" 
              value={description} 
              onChange={input => setDescription(input.target.value)}
              maxLength="50"
            />
          </div>

          <div id="divButtons">
            <button className="button" id="voltar" onClick={handleBackList}>voltar</button>
            <button disabled={loading} className="button" id="salvar" onClick={handleSubmit}>salvar</button>
          </div>
      </div>
    </>
  );
}
