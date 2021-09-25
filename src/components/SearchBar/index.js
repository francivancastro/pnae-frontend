import React, { useRef, useCallback } from 'react';
import { SearchBar } from './style';

import { signOut } from '../../store/modules/auth/actions';

import { useDispatch, useSelector } from 'react-redux';
import history from '../../services/history';

//BootStrap
import { Row } from 'react-bootstrap';

function Search(props) {
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

    return (
        <SearchBar>
        <div className="search text-center">
            <div className="search-inner">
            <Row>
              <div className="col-lg-12">
                <div className="main_title">
                    <span><em></em></span>
                    <h2>O que você procura?</h2>
                    <p></p>             
                </div>
              </div>
            </Row>
                <form className="search-form brd-rd30" method="get" action="busca.php">
                    
                    <input className="brd-rd30" autoFocus="" ref={filterRef} className="search" type="text" placeholder="Pesquisar produto" onKeyPress={handlePressEnter}/>
           
                    <button className="brd-rd30 bg-green" type="submit">BUSCAR</button>
                </form>
            </div>
        </div>
        </SearchBar>
    )
}

export default Search;
