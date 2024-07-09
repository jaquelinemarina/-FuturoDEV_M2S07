# CRUD - Sequelize
Atividade desenvolvida no módulo 2 da formação **Futuro DEV - Floripa Mais Tec 2**, coordenada pelo **Lab365** em parceria com a **Prefeitura de Florianópolis**, **SESI** e **SENAI**.

## Rodar o repositório

### Na primeira vez é necessário instalar as dependências:

1. `npm install`
2. `cp .env_example .env`

### Para rodar o repositório em ambiente local:

1. `npm run start:dev`

## Trabalhando com Migrations

### Criar uma migration:

1. Opção nº 1: `sequelize migration:generate --name nome_da_migracao`
2. Opção nº 2: `npx sequelize-cli migration:generate --name nome_da_migracao`

### Rodar uma migration:

1. Opção nº 1: `sequelize db:migrate`
2. Opção nº 2: `npx sequelize db:migrate`

### Reverter a última migration:

1. Opção nº 1: `sequelize-cli db:migrate:undo`
2. Opção nº 2: `npx sequelize-cli db:migrate:undo`

### Reverter todas as migration:

1. Opção nº 1: `sequelize-cli db:migrate:undo_all`
2. Opção nº 2: `npx sequelize-cli db:migrate:undo_all`

## Trabalhando com Seeders

### Executar o seeders para gerar valores iniciais no banco de dados:

1. Opção nº 1: `sequelize db:seed:all`
2. Opção nº 2: `npx sequelize db:seed:all`

## Documentação do Sequelize:

https://sequelize.org/docs/v6/core-concepts/model-basics/

## Bibliotecas utilizadas:

### Instalar o Sequelize:

`npm install sequelize`

### Instalar o driver do PostgreSQL:

`npm install pg`

### Instalar o CLI do Sequelize:

`npm install -g sequelize-cli`

### Instalar o dotenv:

`npm install dotenv`

### Instalar o JsonWebToken (JWT):

`npm install jsonwebtoken`

### Instalar o Axios:

`npm install axios`
