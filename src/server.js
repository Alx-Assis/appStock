//require('dotenv').config()

const express = require("express");

const production = require('./controllers/productionController.js')

const server = express();
server.use(express.json());
const port = process.env.PORT

server.post('/api/v1/produto',production.create)
server.get('/api/v1/produto',production.search)
server.get('/api/v1/indexproduto',production.index)
server.delete('/api/v1/produto',production.delete)
server.put('/api/v1/produto',production.update)

server.listen(port,()=>{
	console.log("servidor rodando na porta 3333")
}
)