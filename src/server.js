const express = require("express");
const cors = require("cors");

const production = require('./controllers/productionController.js')

const server = express();
server.use(cors());
server.use(express.json());
const port = process.env.PORT

server.post('/api/v1/produto',production.create)

server.get('/api/v1/produto/',production.search)

server.get('/api/v1/indexproduto',production.index)

server.delete('/api/v1/produto/:codigo',production.Delete)

server.put('/api/v1/produto',production.update)

server.listen(port,()=>{
	console.log("servidor rodando na porta 3333")
}
)