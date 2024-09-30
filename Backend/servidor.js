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
const PORT = 3000
// Indicar ao express que vamos utilizar o Cors e arquivos Json
// Dizer que vamos trabalhar com json no Servidor app
app.use(express.json())
// Usar o Cors
app.use(cors())

// Caminho do banco de dados (arquivos json)
const db_path = path.join(__dirname,"database","tasks.json")

// Requisitar dados
app.get("/tarefas",(req,res)=>{
    res.json(edit_file.readList(db_path))
})
// Enviar dados (nossas tarefas)
app.post("/tarefas",(req,res)=>{
    const nova_tarefa = {
        nome:req.body.nome,
        status:req.body.status
    }
    edit_file.appendList(db_path,nova_tarefa)
    res.status(201).json(edit_file.readList(db_path))
})
// Editar dados de tarefas já existentes
app.put("/tarefas/:id",(req,res)=>{
    const id = parseInt(req.params.id)
    const nova_tarefa = {
        nome:req.body.nome,
        status:req.body.status
    }
    const sucess = edit_file.editList(db_path,id,nova_tarefa)
    // Verifica se o id existe e retorna
    if(sucess){
        res.status(200).json(edit_file.readList(db_path))
    }
    else{
        res.status(404).send("Não encontrado o id número: "+id)
    }
})

//Deletar um dado (deletar uma tarefa pelo id)
app.delete("/tarefas/:id",(req,res)=>{
    const id = parseInt(req.params.id)
    const sucess = edit_file.deleteItemList(db_path,id)
    if(sucess){
        res.status(200).json(edit_file.readList(db_path))
    }
    else{
        res.status(404).send("Não foi encontrado um id: "+id+", igual na lista.")
    }
})

//Deletar todas as tarefas
app.delete("/tarefas",(req,res)=>{
    edit_file.clearList(db_path)
    res.status(200).send("Todas as mensagens foram deletadas com sucesso")
})

app.listen(PORT,()=>{
    console.log(`Servidor funcionando na porta localhost:${PORT}`)
})
