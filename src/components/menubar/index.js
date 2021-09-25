import React, { useRef, useCallback } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Nav, Img } from './styles';
import { base_uri_image } from '../../services/api';
import { signOut } from '../../store/modules/auth/actions';
import { useDispatch, useSelector } from 'react-redux';
import history from '../../services/history';
import { FaBars, FaUserCircle, FaShoppingCart} from 'react-icons/fa';
import logo from '../../view/images/logooficial.png';

export default function NavBar() {
  const filterRef = useRef(null);
  const { qtyItems } = useSelector(state => state.cart)
  const { signed, user } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  function handleLogOut() {
    dispatch(signOut());
    history.push('/')
  }

  const handleSearch = useCallback(() => {
    history.push({
      pathname: `/produtos`,
      state: {
        filter: filterRef.current.value
      }
    });
  }, [])
  
  const handlePressEnter = useCallback((e) => {
    if(e.charCode === 13) {
      handleSearch()
    }
  }, [handleSearch])

  return(
    <Nav className="navbar navbar-expand-lg ftco_navbar" id="ftco-navbar">
      <div className="container" >

        {/* Título do sistema */}
        <Link className="navbar-brand" to="/"><img src={logo} alt="logo" className="logo"/></Link>
        
        {/* BOTÃO BURGUER PARA O MOBILE */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-toggle="collapse" 
          data-target="#ftco-nav" 
          aria-controls="ftco-nav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <FaBars size={22}/>
          <strong style={{padding: '5px',fontWeight: 'normal'}}>Menu</strong>
        </button>

        {/* NAVBAR MOSTRADA FULL */}
        <div className="collapse navbar-collapse" id="ftco-nav">
          <ul className="navbar-nav ml-auto">

            {/* BARRA DE PESQUISA */}
            <li className="nav-item search-item">
              <input ref={filterRef} className="search" type="text" placeholder="Pesquisar produto" onKeyPress={handlePressEnter}/>
            </li>

            <li className="nav-item" >
              <NavLink exact to="/">Home</NavLink> 
            </li>
            <li className="nav-item">
              <NavLink exact to="/produtores-cooperativas">Produtores</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/produtos">Produtos</NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/contato">Contato</NavLink>
            </li>
            {!signed &&
              <li className="nav-item dropdown">
                <Link 
                  to=""
                  className="nav-link dropdown-toggle"
                  role="button" 
                  id="dropdownLogin" 
                  data-toggle="dropdown" 
                  aria-haspopup="true" 
                  aria-expanded="false">
                    Entrar
                </Link>
                <div className="dropdown-menu" aria-labelledby="dropdownLogin">
                  <NavLink exact to="/login/cliente" className="dropdown-item">Cliente</NavLink>
                  <NavLink exact to="/login/cooperativa" className="dropdown-item">Cooperativa</NavLink>
                  <NavLink exact to="/login/produtor" className="dropdown-item">Produtor</NavLink>
                </div>
              </li>
            }
            
            {signed && user.type === 'Cliente' &&
              <li className="nav-item cart">
                <NavLink exact to="/carrinho">
                  <FaShoppingCart size={14}/>
                  <span>  [{qtyItems}]</span>
                </NavLink>
              </li>
            }

            {/* AVATAR ICON DO USUÁRIO */}
            {signed && user.type !== 'Administrador' &&
              <li className="nav-item dropdown">
                <Link 
                  className="nav-link dropdown-toggle"
                  role="button" 
                  id="dropdownLogin" 
                  data-toggle="dropdown" 
                  aria-haspopup="true" 
                  aria-expanded="false">
                  {user.data.image ?
                    <Img src={base_uri_image + user.data.image} />
                    :
                    <FaUserCircle color="rgb(0, 0, 0, 0.125)" size={38} />
                  }
                </Link>
                <div className="dropdown-menu" aria-labelledby="dropdownLogin">
                  {user.type === 'Cliente' && 
                  <>
                    <NavLink exact to="/cliente/minhaconta" className="dropdown-item">Minha Conta</NavLink>
                    <NavLink exact to="/meuspedidos" className="dropdown-item">Meus Pedidos</NavLink>
                  </>
                  }
                  {user.type === 'Produtor' && 
                  <>
                    <NavLink exact to="/produtor/minhaconta" className="dropdown-item">Minha Conta</NavLink>
                    <NavLink exact to="/produtor/listagem/produtos" className="dropdown-item">Meus Produtos</NavLink>
                    <NavLink exact to="/produtor/minhasvendas" className="dropdown-item">Minhas Vendas</NavLink>
                  </>
                  }
                  {user.type === 'Cooperativa' && 
                  <>
                    <NavLink exact to="/cooperativa/minhaconta" className="dropdown-item">Minha Conta</NavLink>
                    <NavLink exact to="/cooperativa/listagem/produtos" className="dropdown-item">Meus Produtos</NavLink>
                    <NavLink exact to="/cooperativa/minhasvendas" className="dropdown-item">Minhas Vendas</NavLink>
                  </>
                  }
                  <Link to="/" className="dropdown-item logout" onClick={()=>handleLogOut()}>Sair</Link>
                </div>
              </li>
            }

            {signed && user.type === 'Administrador' &&
              <li className="nav-item dropdown">
              <Link 
                className="nav-link dropdown-toggle"
                role="button" 
                id="dropdownLogin" 
                data-toggle="dropdown" 
                aria-haspopup="true" 
                aria-expanded="false">
                  Administrar
              </Link>
              <div className="dropdown-menu" aria-labelledby="dropdownLogin">
                <NavLink exact to="/admin/listagem/produtos" className="dropdown-item">Produtos</NavLink>
                <NavLink exact to="/admin/listagem/produtores" className="dropdown-item">Produtores</NavLink>
                <NavLink exact to="/admin/listagem/cooperativas" className="dropdown-item">Cooperativas</NavLink>
                <NavLink exact to="/admin/listagem/categorias" className="dropdown-item">Categorias</NavLink>
                <Link to="/" className="dropdown-item logout" onClick={()=>handleLogOut()}>Sair</Link>
              </div>
             </li>
            }
          </ul>
        </div>
      </div>
    </Nav>
  );
};
