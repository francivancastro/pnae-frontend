import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {apiv2} from '../../services/api';

import Navbar from '../../components/navbar';
import Menubar from '../../components/menubar';
import CardProduct from '../../components/cardProduct';
import Pagination from 'react-bootstrap/Pagination'
import { Categories, CustomPagination, ProductListStyle } from './styles';
import { Link, useLocation } from 'react-router-dom';
import Rodape from '../../components/rodape';
import history from '../../services/history';
import { useDispatch, useSelector } from 'react-redux';
import { addToCartRequest } from '../../store/modules/cart/actions';

function getCategories() {
  return apiv2.get('/categories?all=true');
}

function Produtos() {
  const { signed, user } = useSelector(state => state.auth);

  const dispatch = useDispatch();
  const [products, setProducts] = useState({
    docs: [],
    hasPrevPage: false,
    hasNextPage: false,
    totalPages: 0
  });
  const [category, setCategory] = useState(null)
  const [categories, setCategories] = useState([]);
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false);
  const location = useLocation().state;

  const filter = location ? location.filter : '';

  function nextPage() {
    setPage(page + 1)
  }
  function prevPage() {
    setPage(page - 1)
  }

  useEffect(() => {
    setLoading(true)
    async function getProdutos() {
      try {
        if (category) {
          const responses = await axios.all([
          apiv2.get(`/products/category/${category}?page=${page}&filter=${filter}`),
          getCategories()
          ]) 
          setProducts(responses[0].data)
          setCategories(responses[1].data)
        } else {
          const responses = await axios.all([
          apiv2.get(`/products?page=${page}&filter=${filter}`),
          getCategories()
          ]) 
          setProducts(responses[0].data)
          setCategories(responses[1].data)
        }
        
      } catch (error) {
        console.log(error)
        alert('Erro ao recuperar produtos da base de dados, verifique sua conexão.')
        setLoading(false)
      } finally {
        setLoading(false)
      }
    }
    if(filter) setCategory('');
    
    getProdutos()
  }, [page, category, filter]);

  function showIndexPages() {
    let aux = [] ;
    for (let p = 1; p <= products.totalPages; p++) {
      aux.push(
        <Pagination.Item
          key={p} 
          active={p === page} 
          onClick={() => setPage(p)}>
            {p}
          </Pagination.Item>
      );
      
    }
    return aux;
  }

  function handleAddCart(product) {
    if (signed) {
      dispatch(addToCartRequest(product))
    } else {
      if (window.confirm('Você deseja fazer login ?')) {
        history.push('/login/cliente')
      }
    }
  }

  console.log(user);
  

  return (

    
    <>
      <Navbar />
      <ProductListStyle>
        
        
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
      {/* <div className="row justify-content-center">
        <div className="col-md-10 mb-5 text-center">
          <Categories className="product-category">
            <li>
              <Link to="#"
                className={!category ? "active" : ""}
                onClick={() => {
                  setPage(1)
                  setCategory(null)
                }} >Todos</Link>
            </li>
            {categories.map(map_category => (
              <li key={map_category._id}>
                <Link to="#"
                  className={category === map_category._id ? "active" : ""}
                  onClick={() => {
                    setPage(1)
                    setCategory(map_category._id)
                  }}
                >
                  {map_category.name.toLowerCase()}
                </Link>
              </li>
            ))}
          </Categories>
        </div>
      </div> */}

      <div className="row">
        <div className="col-lg-12">
          <div className="main_title">
              <span><em></em></span>
              <h2>Busca: {filter}</h2>
              {/* {signed && user.type === 'Cliente' &&
               <h4>Bairro mais Próximo: {user.data.district}</h4>
              } */}
              <p>28 Produtos Encontrados</p>             
          </div>
        </div>
      </div>

      {/* PRODUTOS */}
      {products.docs.length >= 1 ?
      <>

      <div className="product-list" >
        <div className="row">
          { products.docs.map(product => (
              <CardProduct key={product._id} product={product}/>
            ))
                  }
        </div>
      </div>

      {/* PAGINAÇÃO */}
      <div className="row mt-5">
        <div className="col text-center">
          <CustomPagination className="d-flex justify-content-center">
            <Pagination >
              <Pagination.First disabled={page === 1} onClick={() => setPage(1)}/>
              <Pagination.Prev disabled={!products.hasPrevPage} onClick={prevPage}/>
              
              {showIndexPages().map(p => p)}

              <Pagination.Next disabled={!products.hasNextPage} onClick={nextPage}/>
              <Pagination.Last disabled={products.totalPages === page} onClick={() => setPage(products.totalPages)}/>
            </Pagination>
          </CustomPagination >
        </div>
      </div>
      </>
    : <div className="alert alert-danger" role="alert">Não há produtos cadastrados</div>  
    }
      </>
      )}
    </div>
    
    </ProductListStyle>
      <Rodape />
    </>
  )
}
export default Produtos;
