# Projeto Cadastro de Clientes - Fullstack

Este projeto é um sistema completo de cadastro de clientes utilizando **Node.js + Express + MySQL** no backend e **React** no frontend. Ele fornece uma **API REST** para operações CRUD e permite cadastro, pesquisa, edição e exclusão de clientes.  

O frontend também integra a consulta de endereço via **CEP** usando a API do [ViaCEP](https://viacep.com.br).

---

## 📁 Estrutura do Projeto

/projeto-clientes
├── backend (Node.js + Express + MySQL)
└── frontend (React)

---

## 🛠 Tecnologias

**Backend:**
- Node.js
- Express
- MySQL
- Cors
- Body-Parser

**Frontend:**
- React
- Axios

---

## ⚙️ Configuração do Backend

1. Entre na pasta do backend:

```bash
cd backend
```

2. Entre na pasta do backend:

```bash
npm install
```
3. Configure o MySQL no arquivo server.js:
```bash
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "sua_senha",
  database: "clientesdb"
});
```
4. Crie o banco de dados no MySQL:
```bash
CREATE DATABASE clientesdb;
```
O backend cria automaticamente a tabela clientes ao iniciar.

5. Inicie o servidor:
```bash
node server.js
```
O backend estará disponível em http://localhost:5000.

## ⚙️ Configuração do Frontend
1. Entre na pasta do frontend:
```bash
cd frontend
```
2. Instale as dependências:
```bash
npm install
```
3.Inicie a aplicação React:
```bash
npm start
```
O frontend abrirá automaticamente em http://localhost:3000.

## Funcionalidades
1. Cadastro de clientes com campos como:
    
    Código, Nome, CPF/CNPJ, CEP, Logradouro, Número, Bairro, Cidade, UF, Complemento, Telefone, Limite de Crédito e Validade.

2. Consulta de endereço via CEP usando API do ViaCEP.

3. Pesquisa de clientes por Código, Nome, Cidade ou CEP.

4. Edição e atualização de clientes existentes.

5. Exclusão de clientes com confirmação.

## 🔗 Endpoints da API
| Método | Rota           | Descrição                                       |
| ------ | -------------- | ----------------------------------------------- |
| GET    | /clientes      | Lista todos os clientes (com filtros opcionais) |
| POST   | /clientes      | Cadastra um novo cliente                        |
| PUT    | /clientes/\:id | Atualiza cliente pelo ID                        |
| DELETE | /clientes/\:id | Deleta cliente pelo ID                          |

Exemplo de filtros na consulta:
```bash
GET http://localhost:5000/clientes?Nome=João&Cidade=São Paulo
```

## 👀 Observações
Certifique-se de que o backend esteja rodando antes do frontend.

O formulário muda o botão para “Atualizar” quando estiver editando um cliente.

Os dados de CEP são preenchidos automaticamente via API do ViaCEP.

## 🚀 Autor
Nilson Mazurchi
📧 nmazurchi@gmail.com

🌐 https://www.linkedin.com/in/nilsonmazurchi/