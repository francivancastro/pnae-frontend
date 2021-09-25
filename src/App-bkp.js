import React from 'react';
import { BrowserRouter as Router, Route, withRouter, Redirect } from 'react-router-dom';
import { IdentityContextProvider } from 'react-netlify-identity';

/*PÁGINAS*/
import Home from './view/home';
import Produtos from './view/produtos';
import Produtor from './view/produtor';
import Finalizar from './view/finalizar';
import Pagamento from './view/pagamento';
import Contato from './view/contato';
import CartInfo2 from './components/cartinfo2';
import CartInfo from './components/cartinfo';
import Card from './components/card';
import FinalizarCompra from './view/finalizarcompra';
import Menubar from './components/menubar';
import Navbar from './components/navbar';
import Lista from  './components/lista';
import CadastroDiretor from './view/cadastro-diretor';
import CadastroCooperativa from './view/cadastro-cooperativa';
import CadastroProduto from './view/cadastro-produto';
import CadastroProdutor from './view/cadastro-produtor';
import ListaDiretores from './view/lista-diretores';
import ListaCooperativas from './view/lista-cooperativas';
import ListaProdutos from './view/lista-produtos';
import ListaProdutores from './view/lista-produtores';
import DetalhesProduto from './view/detalhes-produto';
import DetalhesProdutor from './view/detalhes-produtor';
import DetalhesCooperativa from './view/detalhes-cooperativa';
import DetalhesDiretor from './view/detalhes-diretor';
import AlterarProduto from './view/alterar-produto';
import AlterarProdutor from './view/alterar-produtor';
import AlterarDiretor from './view/alterar-diretor';
import AlterarEscola from './view/alterar-escola';
import AlterarCooperativa from './view/alterar-cooperativa';
import NotFound from './view/not-found';

function App() {
    const url = 'https://www.appdoquintal.com.br/';

    return (
        <IdentityContextProvider url={url} >
            <Router>
                <Route exact path='/' component={Home} />
                <Route exact path='/produtos' component={Produtos} />
                <Route exact path='/produtor'component={Produtor} />
                <Route exact path="/finalizar" component={Finalizar}/>
                <Route exact path='/pagamento' component={Pagamento} />
                <Route exact path='/contato' component={Contato} />
                <Route exact path='/cart2'component={CartInfo2} />
                <Route exact path='/cart'component={CartInfo} />
                <Route exact path='/card'component={Card} />
                <Route exact path='/finalizarcompra' component={FinalizarCompra} />
                <Route exact path='/menu' component={Menubar}/>
                <Route exact path='/nav' component={Navbar}/>
                <Route exact path='/lista' component={Lista}/>
                <Route exact path='/cadastro/diretor' component={CadastroDiretor} />
                <Route exact path='/cadastro/cooperativa' component={CadastroCooperativa} />
                <Route exact path='/cadastro/produto' component={CadastroProduto} />
                <Route exact path='/cadastro/produtor' component={CadastroProdutor} />
                <Route exact path='/listagem/diretores' component={ListaDiretores} />
                <Route exact path='/listagem/cooperativas' component={ListaCooperativas} />
                <Route exact path='/listagem/produtos' component={ListaProdutos} />
                <Route exact path='/listagem/produtores' component={ListaProdutores} />
                <Route path='/detalhes/produto/:id' component={DetalhesProduto} />
                <Route path='/detalhes/produtor/:id' component={DetalhesProdutor} />
                <Route path='/detalhes/cooperativa/:id' component={DetalhesCooperativa} />
                <Route path='/detalhes/diretor/:id' component={DetalhesDiretor} />
                <Route path='/alterar/produto/:id' component={AlterarProduto} />
                <Route path='/alterar/produtor/:id' component={AlterarProdutor} />
                <Route path='/alterar/diretor/:id' component={AlterarDiretor} />
                <Route path='/alterar/cooperativa/:id' component={AlterarCooperativa} />
                <Route exact path='/not-found' component={NotFound} />
            </Router>
        </IdentityContextProvider>
    );
}

export default App;
