import React, { useState, useEffect } from 'react';
import './produtor.css';
import Navbar from '../../components/navbar';
import Menubar from '../../components/menubar';
import CartInfo from '../../components/cartinfo';
import CartInfo2 from '../../components/cartinfo2';
import Rodape from '../../components/rodape';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Produtor() {

    const [produtores, setProdutores] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const urlProdutores = process.env.REACT_APP_API_URL + "/produtores";

    useEffect(() => {
        async function getProdutoresFromAPI() {
            setLoading(true);
            const response = await axios.get(urlProdutores);
            setProdutores(response.data);
        }
        getProdutoresFromAPI().then(() =>{
            setLoading(false);
        });
    }, []);

    const endProdutores = produtores.map(produtor => produtor.endereco);
    const cidades = endProdutores.flat().map(end => end.municipio);
    const cidadesAtendidas = [...new Set(cidades)];

    console.log(cidades);

    return (
        <>

            <Navbar />
            <Menubar />
            <div className="produtor">
                <div class="container">
                {loading ? (
                        <div className="d-flex justify-content-center p-5">
                          <div className="spinner-border text-success" role="status">
                            <span className="sr-only">Loading...</span>
                          </div>
                        </div>
                    ) : produtores.length > 0 ? (
                    <div class="row">
                        <div class="col-lg-3">
                            <h3 class="my-4 ml-1">Cidades Atendidas</h3>
                            <div class="municipios-group">
                                {cidadesAtendidas.map(cidade => (
                                    <Link to="/not-found" class="list-group-item">{cidade}</Link>
                                ))}
                            </div>
                        </div>

                        <div class="col-lg-9 mt-4">
                            <div class="container-fluid">
                                <div class="row">
                                    {produtores.map(produtor => (
                                        <CartInfo nomeProdutor={produtor.nome} sexoProdutor={produtor.sexo} />
                                    ))}


                                </div>
                            </div>
                        </div>

                    </div>
                    ) : <div className="alert alert-danger" role="alert">Não há produtos cadastrados</div>}
                </div>
            </div>

            <Rodape />
        </>
    )
}

export default Produtor;
