import React from 'react';
import './search.css';

function Search(props) {
    const urlCadastro = props.urlCadastro;

    const searching = () => {
        const keyword = document.querySelector("#keyword").value;
        if(keyword === "") {
            alert("Preencha o campo de busca!");
        } else {
            alert(keyword);
        }
    }

    return (
        <div className="form-search">
            <form>
                <a href={urlCadastro} id="cadastrar">
                    Cadastrar
                </a>
              
            </form>
        </div>
    )
}

export default Search;