import React from 'react';
import './pagamento.css'
import { Link } from 'react-router-dom';
import Rodape from '../../components/rodape';
import Navbar from '../../components/navbar';
import Menubar from '../../components/menubar';


function Pagamento() {
    return (
        <>
            <Navbar />
            <Menubar />

            <div class="container mt-5"> 
                <div class="row">
                    <div class="col-md-4 order-md-2 mb-4">
                        <h4 class="d-flex justify-content-between align-items-center mb-3">
                            <span class="text-muted">Seu carrinho</span>
                            <span class="badge badge-secondary badge-pill">3</span>
                        </h4>
                        <ul class="list-group mb-3">
                            <li class="list-group-item d-flex justify-content-between lh-condensed">
                                <div>
                                    <h6 class="my-0">Nome do Produto</h6>
                                    <small class="text-muted">Descrição breve</small>
                                </div>
                                <span class="text-muted">R$12</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between lh-condensed">
                                <div>
                                    <h6 class="my-0">Segundo produto</h6>
                                    <small class="text-muted">Descrição breve</small>
                                </div>
                                <span class="text-muted">R$8</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between lh-condensed">
                                <div>
                                    <h6 class="my-0">Terceiro produto</h6>
                                    <small class="text-muted">Descrição breve</small>
                                </div>
                                <span class="text-muted">R$5</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between bg-light">
                                <div class="text-success">
                                    <h6 class="my-0">Código promocional</h6>
                                    <small>CÓDIGO DO EXEMPLO</small>
                                </div>
                                <span class="text-success">-R$5</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between">
                                <span>Total (BRL)</span>
                                <strong>R$20</strong>
                            </li>
                        </ul>

                        <form class="card p-2">
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="Código promocional"/>
                                <div class="input-group-append">
                                    <button type="submit" class="btn btn-secondary">Resgatar</button>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div class="col-md-8 order-md-1">
                    <h3 class="mb-3">Pagamento</h3>
                    <form class="needs-validation" novalidate>
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label for="firstName">Nome</label>
                                <input type="name" class="form-control" id="firstName" placeholder="Nome" required/>
                                <div class="invalid-feedback">
                                    É necessário o primeiro nome válido.
                                </div>
                            </div>
                           
                            <div class="col-md-6 mb-3">
                                <label for="lastName">Sobrenome</label>
                                <input type="lastname" class="form-control" id="lastName" placeholder="Sobrenome" required/>
                                <div class="invalid-feedback">
                                    O sobrenome válido é obrigatório.
                                </div>
                            </div>
                        </div>

                        <div class="mb-3">
                            <label for="username">Usuário</label>
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">@</span>
                                </div>
                                <input type="username" class="form-control" id="username" placeholder="Username" required/>
                                <div class="invalid-feedback">
                                    Usuário é obrigatório.
                                </div>
                            </div>
                        </div>

                        <div class="mb-3">
                            <label for="email">Email<span class="text-muted">(Optional)</span></label>
                            <input type="e-mail" class="form-control" id="email" placeholder="Email" required/>
                            <div class="invalid-feedback">
                                Digite um endereço de e-mail válido.
                            </div>
                        </div>

                        <div class="mb-3">
                            <label for="address">Endereço</label>
                            <input type="address" class="form-control" id="address" placeholder="Endereço" required/>
                            <div class="invalid-feedback">
                                Por favor insira seu endereço de entrega.
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-5 mb-3">
                                <label for="country">País</label>
                                <select class="custom-select d-block w-100" id="country" required>
                                    <option value="">Escolher...</option>
                                    <option>Brasil</option>
                                </select>
                                <div class="invalid-feedback">
                                    Por favor, selecione um país válido.
                                </div>
                            </div>
                            <div class="col-md-4 mb-3">
                                <label for="state">Estado</label>
                                <select class="custom-select d-block w-100" id="state" required>
                                    <option value="">Escolher...</option>
                                    <option>Amapá (AP)</option>
                                </select>
                                <div class="invalid-feedback">
                                    Forneça um estado válido.
                                </div>
                            </div>
                            <div class="col-md-3 mb-3">
                                <label for="zip">Código postal</label>
                                <input type="zip" class="form-control" id="zip" placeholder="" required/>
                                <div class="invalid-feedback">
                                    Código postal necessário.
                                </div>
                            </div>
                        </div>
                        <div class="mb-4">
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="same-address"/>
                                <label class="custom-control-label" for="same-address">O endereço de entrega é igual ao meu endereço de cobrança</label>
                            </div>
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="save-info"/>
                                <label class="custom-control-label" for="save-info">Salve essas informações para a próxima vez</label>
                            </div>
                        </div>

                        <h4 class="mb-3">Forma de pagamento</h4>
                        <div class="d-block my-3">
                            <div class="custom-control custom-radio">
                                <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" checked required/>
                                <label class="custom-control-label" for="credit">Cartão de crédito</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input id="boleto" name="paymentMethod" type="radio" class="custom-control-input" required/>
                                <label class="custom-control-label" for="boleto">Boleto</label>
                            </div>
                        </div>
                        <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label for="cc-name">Nome no cartão</label>
                                    <input type="Nameoncard" class="form-control" id="cc-name" placeholder="" required/>
                                    <small class="text-muted">Nome completo como exibido no cartão</small>
                                    <div class="invalid-feedback">
                                        O nome no cartão é obrigatório
                                    </div>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label for="cc-number">Número do Cartão de Crédito</label>
                                    <input type="Creditcardnumber" class="form-control" id="cc-number" placeholder="xxxx xxxx xxxx xxxx" required/>
                                    <div class="invalid-feedback">
                                        É necessário o número do cartão de crédito
                                    </div>
                                </div>
                            </div>
                        <div class="row">
                                <div class="col-md-3 mb-3">
                                    <label for="cc-expiration">Expiração</label>
                                    <input type="expiration" class="form-control" id="cc-expiration" placeholder="xx/xx" required/>
                                    <div class="invalid-feedback">
                                        Data de vencimento necessária
                                    </div>
                                </div>
                                <div class="col-md-3 mb-3">
                                    <label for="cc-expiration">CVV</label>
                                    <input type="cvv" class="form-control" id="cc-cvv" placeholder="xxx" required/>
                                    <div class="invalid-feedback">
                                        Código de segurança necessário
                                    </div>
                                </div>
                            </div> 
                        <button class="btn btn-success btn-lg btn-block" type="submit">Continue to checkout</button>
                    </form>
                </div>
            </div>       

                <footer class="my-5 pt-5 text-muted text-center text-small">
                    <p class="mb-1">&copy; 2020 doQuintal</p>
                    <ul class="list-inline">
                        <li class="list-inline-item"><a href="#">Privacidade</a></li>
                        <li class="list-inline-item"><a href="#">Termos</a></li>
                        <li class="list-inline-item"><a href="#">Suporte</a></li>
                    </ul>
                </footer>
            </div>
        <Rodape />
        </>
    )
}

export default Pagamento;