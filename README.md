doQuintal
========================================================
Plataforma Estadual para Comercialização de Produtos da Agricultura Familiar
--------------------------------------------------------

Sistema Web que permite a realização de transações de compra e venda de produtos alimentícios previstos no PNAE.

### Tecnologias Utilizadas no Desenvolvimento da Aplicação:

+ Node JS (API)
+ React JS (Front-end)
+ MongoDB (Base de Dados)

## Instalação em Ambiente de Desenvolvimento

**Observação:** _É necessário ter o ambiente devidamente configurado com as tecnologias Node.js, NPM, MongoDB e React JS instaladas corretamente._

1. Acesse o diretório backend e execute:

    ```shell
        npm install
    ```
2. Acesse o diretório web e execute:

    ```shell
        npm install
    ```

**Observação:** _Se estiver utilizando o ambiente Windows e estiver tentando instalar dentro do diretório C: é possível que ocorra um erro de permissão de acesso ao diretório. Para corrigir o erro acesse as propriedades do diretório e altera as permissões de acesso._

### Procedimentos para startar a aplicação em ambiente de desenvolvimento.

#### Usando Base de Dados Local

1. Inicie a base de Dados

    - Em sistemas operacionais GNU/Linux Ubuntu execute:

    ```shell
        $ sudo service mongod start
    ```

    - Em sistemas operacionais Microsoft Windows execute:

    ```shell
        C:/> ... não sei, não uso Windows
    ```

2. Execute o Node JS em modo de desenvolvimento (usa o nodemon para re-executar o Node sempre que houver alterações nos scripts da aplicação).

    - Acesse o diretório backend através do terminal e execute o comando seguinte:

    ```shell
        npm run dev
    ```

3. Execute a aplicação em React JS

    - Abra outro terminal, acesse o diretório web e execute:

    ```shell
        npm start
    ```
