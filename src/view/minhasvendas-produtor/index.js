import React, {useState, useEffect} from 'react';
import {apiv2} from '../../services/api';
import './meuspedidos.css';
import Navbar from '../../components/navbar';
import Rodape from '../../components/rodape';
import { Page} from './styles';
import Menubar from '../../components/menubar';
import Pedido2 from '../../components/pedido2';
import { Link, NavLink } from 'react-router-dom';

import {Menu} from './styles';
import {Pagination} from 'react-bootstrap';


function MinhasVendasProdutor (){

  const [orders, setOrders] = useState({
    docs: [],
    hasNextPage: false,
    hasPrevPage: false,
    totalPages: 0
  });
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function getOrders() {
      setLoading(true)
      try {
        const response = await apiv2.get(`/producers/orders?page=${page}`);
        setOrders(response.data);
      } catch (error) {
        setLoading(false)
        alert('Falha ao recuperar seus pedidos.')
      } finally {
        setLoading(false)
      }
    }
    getOrders();
  }, [page]);

  function nextPage() {
    setPage(page + 1);
  }

  function prevPage() {
    setPage(page - 1);
  }

  function showIndexPages() {
    let aux = [] ;
    for (let p = 1; p <= orders.totalPages; p++) {
      aux.push(
        <Pagination.Item 
          active={p === page} 
          onClick={() => setPage(p)}>
            {p}
          </Pagination.Item>
      );
      
    }
    return aux;
  }

  async function handleCancel(id) {
    if(window.confirm('Você realmente deseja cancelar esse pedido?')) {
      try {
        const response = await apiv2.post(`/orders/${id}/cancel`);
        alert(response.data.message)
        window.location.reload()
      } catch (error) {
        alert(error.response.data.message)
      }
    }
  }

  return(
    <>
      <Navbar/>

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
            <div class="col-md-8 order-md-1 mt-5">
              {
                orders.docs.map(order => (
                  <Pedido2 order={order} />
                ))
              }
            </div>
            
        </div>
       
        {
          loading ? <div className="d-flex justify-content-center">
          <div className="spinner-border text-success" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div> : <>
        <Page className="pagination justify-content-center">
          <Pagination>
            <Pagination.First disabled={page === 1} onClick={() => setPage(1)} />
            <Pagination.Prev disabled={!orders.hasPrevPage} onClick={prevPage} />

            {showIndexPages().map(p => p)}

            <Pagination.Next disabled={!orders.hasNextPage} onClick={nextPage} />
            <Pagination.Last disabled={orders.totalPages === page} onClick={() => setPage(orders.totalPages)} />
          </Pagination>
        </Page>
        
        

          </>
        }
        
      </div>
      <Rodape/>
    </>
  )
}


export default MinhasVendasProdutor;

