import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { apiv2 } from '../../../../services/api';

import './styles.css';
import Navbar from '../../../../components/navbar'
import Menuadmin from '../../../../components/menuadmin';
import { cpfMask, celularMask } from '../../../../utils/mask';

import { BsPlus } from 'react-icons/bs';

function ListaProdutores() {
  const [produtores, setProdutores] = useState({
    docs: [],
    hasPrevPage: false,
    hasNextPage: false,
  });
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    async function getProdutores() {
      try {
        const response = await apiv2.get(`/producers?page=${page}`)
        setProdutores(response.data)
        setLoading(false)
      } catch (error) {
        alert('Erro ao recuperar produtores da base de dados, verifique sua conexão.')
        setLoading(false)

      }
    }
    getProdutores()
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
        <h3>Lista de produtores</h3>
          <div className="pagination">
            <div className="boxPagination">
              <button 
                disabled={!produtores.hasPrevPage} 
                onClick={prevPage}>voltar
              </button>
              <p>{page}</p>
              <button 
                disabled={!produtores.hasNextPage} 
                onClick={nextPage}>próximo
              </button>
            </div>
            <Link 
              to="/admin/cadastro/produtor" 
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
          ) : produtores.docs.length > 0 ? (
            <table className="table table-striped table-hover text-center">
              <thead className="thead-light">
                <tr>
                  <th scope="col">Nome</th>
                  <th scope="col">CPF</th>
                  <th scope="col">DAP</th>
                  <th scope="col">Celular</th>
                  <th scope="col">Município</th>
                  <th scope="col">Opções</th>
                </tr>
              </thead>
              <tbody>
                {produtores.docs.map(produtor => (
                  <tr key={produtor._id}>
                    <td className="align-middle" >
                      {produtor.name}
                    </td>
                    <td className="align-middle" >
                      {cpfMask(produtor.cpf)}
                    </td>
                    <td className="align-middle" >
                      {produtor.dap}
                    </td>
                    <td className="align-middle" >
                      {celularMask(produtor.cell_phone)}
                    </td>
                    <td className="align-middle" >
                      {produtor.address.city}
                    </td>
                    <td className="align-middle">
                      <Link 
                        to={{
                          pathname: "/admin/alterar/produtor/" + produtor._id,
                          state: produtor
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
          ) : <div className="alert alert-danger" role="alert">Não há produtores cadastrados</div>}
        </div>
        <div className="clearfix"></div>
      </div>
    </>
  )
}
export default ListaProdutores;
