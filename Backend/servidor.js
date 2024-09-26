// Importar e inicializar o express
const express = require("express")
const app = express()
// Importar o Cors, bibliotica que auxilia para evitar o erro de acesso de endereço cruzado
const cors = require("cors")
// Biblioteca que criamos
const edit_file = require("../Backend/my_modules/edit_file.js")
// Biblioteca para concatenar caminhos
const path = require("path") 
// Porta do nosso servidor
const PORT = 8000
// Indicar ao express que vamos utilizar o Cors e arquivos Json
// Dizer que vamos trabalhar com json no Servidor app
app.use(express.json())
// Usar o Cors
app.use(cors())

// Caminho do banco de dados (arquivos json)
const db_path = path.join()