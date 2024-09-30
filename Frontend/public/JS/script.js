const API_URL = "http://localhost:3000/tarefas"

//Função get para pedir as tarefas
async function getTarefas(){
    try{
        const resposta = await fetch(API_URL)
        const lista_tarefas = await resposta.json()
        console.log(lista_tarefas)
        
    }
    catch(erro){
        const message_error = "Erro ao abrir as tarefas: " + erro
        console.log(getTarefas(message_error))
    }
}

console.log(getTarefas())