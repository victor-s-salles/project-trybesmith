# Boas-vindas ao repositório do projeto TrybeSmith!

Este projeto é uma loja de itens medievais, no formato de uma API, utilizando _Typescript_

Você irá desenvolver todas as camadas da aplicação (_Models_, _Service_ e _Controllers_) em seu código e, por meio dessa aplicação, será possível realizar as operações básicas que se pode fazer em um determinado banco de dados: Criação, Leitura, Atualização e Exclusão (_CRUD_).

Criei alguns endpoints que irão ler e escrever em um banco de dados, utilizando o MySQL.


### 🗓 Entrega 
* Projeto individual.
* Foram `2` dias de projeto.

<br />

# Tecnologias utilizadas

A API foi construída utilizando as seguintes tecnologias:

- Typescript
- Node.js
- Express.js
- MySQL
- JWT
- ESLint
- Docker

<br />

# Instalação

<details>
  <summary><strong>Comandos</strong></summary>
  Antes de começar a instalação, verifique se você possui o Node.js e o MySQL instalados em sua máquina.

  <br />

  * Dica: Para testar os endpoints recomendo usar a extensão Thunder Client

  <br />

  ####  1 - Clone este repositório para sua máquina local usando o seguinte comando no terminal:
  `git clone https://github.com/lucascbb/trybesmith.git`

  #### 2 - Acesse o diretório do projeto:
  `cd trybesmith`

  #### 3 - Instale as dependências do projeto utilizando o seguinte comando:
  `npm install`

  #### 4 - Rode os serviços node e db com o comando:
  `docker-compose up -d`

  #### 5 - Rode os comandos para criar e popular o banco de dados:
  `npm run posttest` e `npm run restore`

  #### 6 - Rode o projeto na porta 3003 utilizando o nodemon:
  `docker exec -it trybesmith bash`

  #### 7 - Rode dentro do container:
  `npm run dev`

</details>
<details>
  <summary><strong>Scripts prontos</strong></summary>
  <br />
  <summary><strong>Diagrama de Entidade-Relacionamento</strong></summary>
  <br />

  1 - Deleta o banco de dados: "drop": "npx sequelize-cli db:drop"
  - `npm run drop`

  2 - Cria o banco e gera as tabelas: 
  - `npm run posttest` e `npm run restore`

  3 - Container
  - `docker exec -it trybesmith bash`

  **** Atenção!!! Caso opte por utilizar o Docker, TODOS os comandos disponíveis no package.json (npm start, npm test, npm run dev, ...) devem ser executados DENTRO do container

</details>
<details>
  <summary><strong> Tabelas</strong></summary><br />

  O banco terá três tabelas: pessoas usuárias, produtos e pedidos.

  ```sql
  DROP SCHEMA IF EXISTS Trybesmith;
  CREATE SCHEMA IF NOT EXISTS Trybesmith;

  CREATE TABLE Trybesmith.users (
    id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
    username TEXT NOT NULL,
    vocation TEXT NOT NULL,
    level INTEGER NOT NULL,
    password TEXT NOT NULL
  );

  CREATE TABLE Trybesmith.orders (
    id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES Trybesmith.users (id)
  );

  CREATE TABLE Trybesmith.products (
    id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
    name TEXT NOT NULL,
    amount TEXT NOT NULL,
    order_id INTEGER,
    FOREIGN KEY (order_id) REFERENCES Trybesmith.orders (id)
  );
  ```

  O arquivo `Trybesmith.sql` contém as _queries_ que criam e populam o banco como o teste faz, e os testes **restauram** o banco de dados após sua execução.

  Para que o avaliador funcione corretamente, tanto local quanto remoto, sua `connection.ts` não deve conter o database e suas _queries_ devem conter o banco de dados explicitamente como o exemplo abaixo:
  ```sh
  SELECT * FROM Trybesmith.products;
  ```

</details>
<br />

# Endpoints
<details><summary><strong>A API possui os seguintes endpoints:</strong></summary>

- post -> `/users`: Cadastro de pessoas usuárias;   
Exemplo de como corpo da requisição deverá receber o formato:

  ```json
   { 
    "username": "MAX",
    "vocation": "swordsman",
    "level": 10,
    "password": "SavingPeople"
  }
  ```

- post -> `/login`: Fazer login com um usuario cadastrado, retorna um token;   
Exemplo de como corpo da requisição deverá receber o formato:

  ```json
  {
    "username": "victor",
    "password": "test123"
  }
  ```

- get -> `/orders`: Retorna uma array com todos os pedidos;

- post -> `/orders`: Cadastro de pedido, atualiza tabela de produtos e acrscenta na tabela de pedidos;   
  Exemplo de como corpo da requisição deverá receber o formato:

  ```json
  {
    "productsIds": [1, 2]
  }
  ```

- get -> `/products`: Retorna um array de todos os produtos;

- post -> `/products`: Cadastro de produtos;   
Exemplo de como corpo da requisição deverá receber o formato:

  ```json
    {
    "name": "Espada longa",
    "amount": "30 peças de ouro"
  }
  ```
</details>
<br />

# Requisitos realizados (100%)

### 1 - Crie um endpoint para o cadastro de produtos
<br />

### 2 - Crie um endpoint para a listagem de produtos
<br />

### 3 - Crie um endpoint para o cadastro de pessoas usuárias
<br />

### 4 - Crie um endpoint para listar todos os pedidos
<br />

### 5 - Crie um endpoint para o login de pessoas usuárias
<br />

### 6 - Crie as validações dos produtos
<br />

### 7 - Crie as validações para as pessoas usuárias
<br />

### 8 - Crie um endpoint para o cadastro de um pedido
<br />
