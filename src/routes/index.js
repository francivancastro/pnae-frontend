import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';



import Home from '../view/home';
import Produto from '../view/produto';
import ProdutoresCooperativas from '../view/produtores-cooperativas';
import Produtos from '../view/produtos';
import ProdutosProdutor from '../view/produtos-produtor';
import ProdutosCooperativa from '../view/produtos-cooperativa';
import Contato from '../view/contato';
import NotFound from '../view/not-found';
import ClienteLogin from '../view/login/cliente';
import ProdutorLogin from '../view/login/produtor';
import PasswordProdutor from '../view/login/produtor/Password';
import CooperativaLogin from '../view/login/cooperativa';
import PasswordCooperative from '../view/login/cooperativa/Password';


import DetalhesProduto from '../view/detalhes-produto';

import MeuCarrinho from '../view/meu-carrinho';
import AdminLogin from '../view/visao-administrador/login';
import CadastroCategoriaProduto from '../view/visao-administrador/categorias-produtos/cadastrar';
import CadastroProduto from '../view/visao-administrador/produtos/cadastrar';
import CadastroProdutor from '../view/visao-administrador/produtores/cadastrar';
import CadastroCooperativa from '../view/visao-administrador/cooperativas/cadastrar';
import AlterarProduto from '../view/visao-administrador/produtos/alterar';
import AlterarCooperativa from '../view/visao-administrador/cooperativas/alterar';
import AlterarProdutor from '../view/visao-administrador/produtores/alterar';
import ListaCategoriasProdutor from '../view/visao-administrador/categorias-produtos/listar'
import ListaCooperativas from '../view/visao-administrador/cooperativas/listar';
import ListaProdutos from '../view/visao-administrador/produtos/listar';
import ListaProdutores from '../view/visao-administrador/produtores/listar';

import ListaProdutoCooperativa from '../view/visao-cooperativa/produtos/listar'
import CadastrarProdutoCooperativa from '../view/visao-cooperativa/produtos/cadastrar'
import AlterarProdutoCooperativa from '../view/visao-cooperativa/produtos/alterar'

import ListaProdutoProdutor from '../view/visao-produtor/produtos/listar'
import CadastrarProdutoProdutor from '../view/visao-produtor/produtos/cadastrar'
import AlterarProdutoProdutor from '../view/visao-produtor/produtos/alterar'

import MeusPedidos from '../view/meuspedidos';
import FinalizarCompra from '../view/finalizarcompra';
import Finalizar from '../view/finalizar';
import AcompanharPedido from '../view/acompanhar-pedido';

import CadastroCliente from '../view/cadastro-cliente';

import DadosCliente from '../view/dados-cliente';
import DadosProdutor from '../view/dados-produtor';
import DadosCooperativa from '../view/dados-cooperativa';

import MinhasVendasCooperativa from '../view/minhasvendas-cooperativa';
import MinhasVendasProdutor from '../view/minhasvendas-produtor';

export default function Routes() {
  return (
    <Switch>
      <Route exact path='/meuspedidos' component={MeusPedidos} isCustomer={true}/>
      <Route exact path='/finalizarcompra' component={FinalizarCompra} />
      <Route exact path='/finalizar' component={Finalizar} />
      <Route exact path='/acompanharpedido' component={AcompanharPedido} />
      <Route exact path='/cliente/minhaconta' component={DadosCliente} isCustomer={true} />
      <Route exact path='/produtor/minhaconta' component={DadosProdutor} isProducer={true} />
      <Route exact path='/cooperativa/minhaconta' component={DadosCooperativa} isCooperative={true} />

      <Route exact path='/produtos/detalhe' component={DetalhesProduto} />

      <Route exact path='/produtos/produtor/:id' component={ProdutosProdutor} />
      <Route exact path='/produtos/cooperativa/:id' component={ProdutosCooperativa} />
      <Route exact path='/produtores-cooperativas' component={ProdutoresCooperativas} />

      {/*ROTAS ORGANIZADAS */}

      <Route exact path='/' component={Home} />
      <Route exact path='/home' component={Home} />
      <Route exact path='/produtos' component={Produtos} />
      <Route exact path='/produto' component={Produto} />
      <Route exact path='/contato' component={Contato} />

      <Route exact path='/login/cliente' component={ClienteLogin} />
      <Route exact path='/login/produtor' component={ProdutorLogin} />
      <Route exact path='/produtor/novasenha' component={PasswordProdutor} />
      <Route exact path='/login/cooperativa' component={CooperativaLogin} />
      <Route exact path='/cooperativa/novasenha' component={PasswordCooperative} />

      <Route exact path='/carrinho' component={MeuCarrinho} isCustomer={true}/>

      {/* VISÃO ADMINISTRADOR */}

      <Route exact path='/admin' component={AdminLogin} />
      <Route exact path='/admin/cadastro/cooperativa' component={CadastroCooperativa} isAdmin={true}/>
      <Route exact path='/admin/cadastro/produto' component={CadastroProduto} isAdmin={true}/>
      <Route exact path='/admin/cadastro/produtor' component={CadastroProdutor} isAdmin={true}/>
      <Route exact path='/admin/cadastro/categoria' component={CadastroCategoriaProduto} isAdmin={true}/>
      <Route exact path='/admin/listagem/categorias' component={ListaCategoriasProdutor} isAdmin={true}/>
      <Route exact path='/admin/listagem/cooperativas' component={ListaCooperativas} isAdmin={true} />
      <Route exact path='/admin/listagem/produtos' component={ListaProdutos} isAdmin={true} />
      <Route exact path='/admin/listagem/produtores' component={ListaProdutores} isAdmin={true} />
      <Route path='/admin/alterar/produto/:id' component={AlterarProduto} isAdmin={true}/>
      <Route path='/admin/alterar/cooperativa/:id' component={AlterarCooperativa} isAdmin={true}/>
      <Route path='/admin/alterar/produtor/:id' component={AlterarProdutor} isAdmin={true}/>
      
      {/* VISÃO COOPERATIVA */}

      <Route path='/cooperativa/listagem/produtos' component={ListaProdutoCooperativa} isCooperative={true}/>
      <Route path='/cooperativa/cadastro/produto' component={CadastrarProdutoCooperativa} isCooperative={true}/>
      <Route path='/cooperativa/alterar/produto/:id' component={AlterarProdutoCooperativa} isCooperative={true}/>
      <Route exact path='/cooperativa/minhasvendas' component={MinhasVendasCooperativa} isCooperative={true}/>

      {/* VISÃO PRODUTOR */}
      
      <Route path='/produtor/listagem/produtos' component={ListaProdutoProdutor} isProducer={true}/>
      <Route path='/produtor/cadastro/produto' component={CadastrarProdutoProdutor} isProducer={true}/>
      <Route path='/produtor/alterar/produto/:id' component={AlterarProdutoProdutor} isProducer={true}/>
      <Route exact path='/produtor/minhasvendas' component={MinhasVendasProdutor} isProducer={true}/>

      {/* VISÃO CLIENTE */}

      <Route path='/cadastro-cliente' component={CadastroCliente} />
  
      <Route exact path='/not-found' component={NotFound} />
    </Switch>
  );
}
