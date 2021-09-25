import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { apiv2 } from '../../../../services/api';

import './styles.css';
import Navbar from '../../../../components/navbar'
import Menuadmin from '../../../../components/menuadmin';

import { BsPlus } from 'react-icons/bs';

function ListaCategorias() {
  const [categories, setProdutos] = useState({
    docs: [],
    hasPrevPage: false,
    hasNextPage: false,
  });
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    async function getProdutos() {
      try {
        const response = await apiv2.get(`/categories?page=${page}`)
        setProdutos(response.data)
        setLoading(false)
      } catch (error) {
        alert('Erro ao recuperar categorias da base de dados, verifique sua conexão.')
        setLoading(false)

      }
    }
    getProdutos()
  }, [page])

  function handleDelete(e) {
    if(window.confirm('Deseja apagar este item?')) {
      // ROTA DE DELETAR
    }
  }

  function nextPage() {
    setPage(page + 1)
  }
  function prevPage() {
    setPage(page - 1)
  }
  return (
    <>
      <Navbar />
      <Menuadmin />

      <div className="content">
        <div className="container">
          <h3>Lista de categorias</h3>
          <div className="pagination">
            <div className="boxPagination">
              <button 
                disabled={!categories.hasPrevPage} 
                onClick={prevPage}>voltar
              </button>
              <p>{page}</p>
              <button 
                disabled={!categories.hasNextPage} 
                onClick={nextPage}>próximo
              </button>
            </div>
            <Link 
              to="/admin/cadastro/categoria" 
              style={{color: 'black', textDecoration: 'none' }}
            >
              <div className="buttonAdd">
                <BsPlus size="35px"/>
                <p>cadastrar</p>
              </div>
            </Link>
          </div>
          {loading ? (
            <div className="d-flex justify-content-center">
              <div className="spinner-border text-success" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          ) : categories.docs.length > 0 ? (
            <table className="table table-striped table-hover text-center">
              <thead className="thead-light">
                <tr>
                  <th scope="col">Nome</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {categories.docs.map(category => (
                  <tr key={category._id}>

                    <td className="align-middle" >
                      {category.name}
                    </td>
                    <td className="align-middle">
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : <div className="alert alert-danger" role="alert">Não há categorias cadastradas</div>}
        </div>
        <div className="clearfix"></div>
      </div>
    </>
  )
}
export default ListaCategorias;
