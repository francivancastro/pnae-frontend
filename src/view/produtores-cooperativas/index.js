import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbar';
import Menubar from '../../components/menubar';
import Rodape from '../../components/rodape';
import CardInfo from '../../components/Card-info';
import { Link } from 'react-router-dom';
import axios from 'axios'

import {apiv2} from '../../services/api';

import {Categories} from './styles';

function getProdutores() {
  return apiv2.get('/producers?all=true');
}

function getCooperativas() {
  return apiv2.get('/cooperatives?all=true');
}

export default function Produtores() {
  const [produtores, setProdutores] = useState();
  const [cooperativas, setCooperativas] = useState();
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getProdutoresCooperativas() {
      try {
        setLoading(true)
        const responses = await axios.all([
          getProdutores(), 
          getCooperativas()
        ])
        setProdutores(responses[0].data)
        setCooperativas(responses[1].data)
        setLoading(false)
      } catch (error) {
        alert('Erro ao recuperar produtos da base de dados, verifique sua conexão.')
        setLoading(false)

      } finally {
        setLoading(false)
      }
    }
    getProdutoresCooperativas()
  }, [page])

  return (
    <>
      <Navbar />
      <Menubar />
      <div className="container">
      {loading ? (
        <div className="d-flex justify-content-center p-5">
          <div className="spinner-border text-success" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
        ) :  (
      <>
      {/* CATEGORIAS */}
      <div className="row justify-content-center">
        <div className="col-md-10 mb-5 text-center">
        <Categories className="product-category">
            <li>
              <Link className="active">Municípios</Link>
            </li>
            <li>
              <Link >Macapá</Link>
            </li>
            <li>
              <Link >Santana</Link>
            </li>
            
          </Categories>
        </div>
      </div>

      {/* PRODUTORESS */}
      {produtores || cooperativas ?
      <>
      <div className="row">
         { produtores.map(producer => (
            <CardInfo key={producer._id} person={producer} type="producer"/>
          ))
          }
         { cooperativas.map(cooperative => (
            <CardInfo key={cooperative._id} person={cooperative} type="cooperative"/>
          ))
          }
      </div>
        
      </>
    : <div className="alert alert-danger" role="alert">Não há produtos cadastrados</div>  
    }
      </>
      )}
    </div>
      <Rodape />
    </>
  )
}