const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Conexão com MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "minhasenha",
  database: "clientesdb"
});

db.connect(err => {
  if (err) throw err;
  console.log("✅ MySQL conectado...");
});

// Criar tabela (rodar uma vez no banco)
const createTable = `
CREATE TABLE IF NOT EXISTS clientes (
  ID BIGINT AUTO_INCREMENT PRIMARY KEY,
  DataHoraCadastro DATETIME DEFAULT CURRENT_TIMESTAMP,
  Codigo VARCHAR(15),
  Nome VARCHAR(150),
  CPF_CNPJ VARCHAR(20),
  CEP VARCHAR(8),
  Logradouro VARCHAR(100),
  Endereco VARCHAR(120),
  Numero VARCHAR(20),
  Bairro VARCHAR(50),
  Cidade VARCHAR(60),
  UF VARCHAR(2),
  Complemento VARCHAR(150),
  Fone VARCHAR(15),
  LimiteCredito FLOAT,
  Validade DATE
)`;
db.query(createTable);

// Rotas CRUD
app.get("/clientes", (req, res) => {
  const { Codigo, Nome, Cidade, CEP } = req.query;
  let sql = "SELECT * FROM clientes WHERE 1=1";
  if (Codigo) sql += ` AND Codigo LIKE '%${Codigo}%'`;
  if (Nome) sql += ` AND Nome LIKE '%${Nome}%'`;
  if (Cidade) sql += ` AND Cidade LIKE '%${Cidade}%'`;
  if (CEP) sql += ` AND CEP LIKE '%${CEP}%'`;

  db.query(sql, (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

app.post("/clientes", (req, res) => {
  const cliente = req.body;
  db.query("INSERT INTO clientes SET ?", cliente, (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ id: result.insertId, ...cliente });
  });
});

app.put("/clientes/:id", (req, res) => {
  const { id } = req.params;
  db.query("UPDATE clientes SET ? WHERE ID = ?", [req.body, id], err => {
    if (err) return res.status(500).send(err);
    res.json({ id, ...req.body });
  });
});

app.delete("/clientes/:id", (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM clientes WHERE ID = ?", [id], err => {
    if (err) return res.status(500).send(err);
    res.json({ message: "Cliente removido" });
  });
});

app.listen(5000, () => console.log("🚀 API rodando em http://localhost:5000"));
