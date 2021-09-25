import React, { useState, useEffect } from 'react';
import {useSelector} from 'react-redux'
import axios from 'axios';
import * as yup from 'yup';

import addimage from '../../../images/addimage.png';
import { apiv2 } from '../../../../services/api';
import history from '../../../../services/history';

import Navbar from '../../../../components/navbar';
import MenuAdmin from '../../../../components/menuadmin';

import './styles.css';



const schema = yup.object().shape({
  name: yup.string().required(),
});

export default function CadastroProduto() {
  const {token} = useSelector(state => state.auth)
  const [name, setName] = useState();


  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    const body = {
      name,

    }
    const validation = await schema.isValid(body);

    if(!validation) {
      alert('Dados incorretos para cadastro, revise os campos.')
      return
    }
    try {
      setLoading(true);
      await apiv2.post('/categories', body, {
        'Authorization': `Bearer ${token}`
      });
      alert('Categoria cadastrada com sucesso')
      history.push('/admin/listagem/categorias')
    } catch (error) {
      setLoading(false);
      alert('Categoria já existe ou conexão instável.')
    } finally {
      setLoading(false);
    }
  }
  
  function handleBackList(e) {
    e.preventDefault();
    
    if (window.confirm('Você tem certeza que deseja cancelar este cadastro?')){
        history.replace('/admin/listagem/categorias');
    }
  }

  return (
    <>
      <Navbar />
      <MenuAdmin/>

      <div className="formCad">
          <h3 class="mb-5 mt-2" id="titleCad"align="center">Cadastro de Categoria de Produtos</h3>
         

          <div className="inputContent">  
            <h5 className="labelTitle" for="nomeProduto">Nome da Categoria:</h5>
            <input 
              id="nomeProduto" 
              type="text" 
              value={name} 
              onChange={input => setName(input.target.value)}
              maxLength="20"
            />
            <small>Campo obrigatório*</small>
          </div>

          <div id="divButtons">
            <button className="button" id="voltar" onClick={handleBackList}>Voltar</button>
            <button disabled={loading} className="button" id="salvar" onClick={handleSubmit}>Salvar</button>
          </div>
      </div>
    </>
  );
}
