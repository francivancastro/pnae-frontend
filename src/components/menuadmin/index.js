import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Nav } from './styles';
import { signOut } from '../../store/modules/auth/actions';
import { useDispatch, useSelector } from 'react-redux';
import history from '../../services/history';
import { FaBars } from 'react-icons/fa';

export default function NavBar() {
  const dispatch = useDispatch();

  function handleLogOut() {
    dispatch(signOut());
    history.push('/')
  }

  return(
    <Nav className="navbar navbar-expand-lg" id="ftco-navbar">
      <div className="container">

        {/* Título do sistema */}
        <Link className="navbar-brand" to="/">DoQuintal</Link>
        
        {/* BOTÃO BURGUER PARA O MOBILE */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
          <div className="button-toggler">
            <FaBars size={22}/>
            <strong style={{padding: '5px',fontWeight: 'normal'}}>Menu</strong>
          </div>
        </button>

        {/* NAVBAR MOSTRADA FULL */}
        <div className="navbar-collapse collapse show" id="ftco-nav" >
          <ul className="navbar-nav ml-auto" >

            <li className="nav-item" >
              <Link >
                <NavLink
                  exact to="/admin/listagem/produtos"
                  className="main-nav"
                  
                >
                  produtos
                </NavLink>
              </Link> 
            </li>

            <li className="nav-item" >
              <Link >
                <NavLink
                  exact to="/admin/listagem/produtores"
                  className="main-nav"
                  
                >
                  Produtores
                </NavLink>
              </Link> 
            </li>

            <li className="nav-item" >
              <Link >
                <NavLink
                  exact to="/admin/listagem/cooperativas"
                  className="main-nav"
                  
                >
                  Cooperativas
                </NavLink>
              </Link> 
            </li>

            <li className="nav-item" >
              <Link >
                <NavLink
                  exact to="/admin/listagem/categorias"
                  className="main-nav"
                  
                >
                  Categorias
                </NavLink>
              </Link> 
            </li>

            <li className="nav-item logout">
              <Link to="/" onClick={()=>handleLogOut()}>Sair</Link>
            </li>
          </ul>
        </div>
      </div>
    </Nav>
  );
};
