import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { apiv2 } from '../../../../services/api';

import './styles.css';
import Navbar from '../../../../components/navbar'
import MenuBar from '../../../../components/menubar'

import { BsPlus } from 'react-icons/bs';

function ListaProdutos() {
  const [produtos, setProdutos] = useState({
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
        const response = await apiv2.get(`/producers/products?page=${page}`)
        setProdutos(response.data)
        setLoading(false)
      } catch (error) {
        alert('Erro ao recuperar produtos da base de dados, verifique sua conexão.')
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

      <div className="content">
        <div className="container">
          <h3>Lista de produtos</h3>
          <div className="pagination">
            <div className="boxPagination">
              <button 
                disabled={!produtos.hasPrevPage} 
                onClick={prevPage}>voltar
              </button>
              <p>{page}</p>
              <button 
                disabled={!produtos.hasNextPage} 
                onClick={nextPage}>próximo
              </button>
            </div>
            <Link 
              to="/produtor/cadastro/produto" 
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
          ) : produtos.docs.length > 0 ? (
            <table className="table table-striped table-hover text-center">
              <thead className="thead-light">
                <tr>
                  <th scope="col">Nome</th>
                  <th scope="col">Preço</th>
                  <th scope="col">Quantidade</th>
                  <th scope="col">Unidade</th>
                  <th scope="col">Categoria</th>
                  <th scope="col">Opções</th>
                </tr>
              </thead>
              <tbody>
                {produtos.docs.map(produto => (
                  <tr key={produto._id}>

                    <td className="align-middle" >
                      {produto.name}
                    </td>
                    <td className="align-middle" >
                      R$ {produto.price.toFixed(2)}
                    </td>
                    <td className="align-middle" >
                      {produto.qty}
                    </td>
                    <td className="align-middle" >
                      {produto.unity}
                    </td>
                    <td className="align-middle" >
                      {produto.category.name}
                    </td>
                    <td className="align-middle">
                      <Link 
                        
                        to={{
                          pathname: "/produtor/alterar/produto/" + produto._id,
                          state: produto
                        }}
                        style={{textDecorationColor: 'black', color: 'black'}}
                      >Editar
                      </Link>
                      <br/>
                      <Link 
                        onClick={handleDelete}
                        style={{textDecorationColor: 'black', color: 'black'}}
                        >Apagar
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : <div className="alert alert-danger" role="alert">Não há produtos cadastrados</div>}
        </div>
        <div className="clearfix"></div>
      </div>
    </>
  )
}
export default ListaProdutos;
