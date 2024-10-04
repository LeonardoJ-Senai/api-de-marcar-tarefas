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
        console.log(message_error)
    }
}

// Função para postar novas tarefas
async function postTarefas(novaTarefa){
    try{
        const resposta = await fetch(API_URL,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            // Formato {"nome":"nometarefa","status":"statustarefa"}
            body:JSON.stringify(novaTarefa)
        })
    }
    catch(erro){
        console.log("Erro ao adicionar uma tarefa: "+erro)
    }
}

// Função para deletar tarefas por id
async function deleteTarefas(id){
    try {
        const resposta = await fetch(`${API_URL}/${id}`,{
            method:"DELETE"
        })
    } catch (erro) {
        console.log("Erro ao adicionar uma tarefa: "+erro)
    }
}

// Deletar todas as tarefas
async function limparTarefas(){
    try {
        const resposta = await fetch(API_URL,{
            method:"DELETE"})
    } catch (erro) {
        console.log("Erro ao adicionar uma tarefa: "+erro)
    }
}


document.getElementById("buttonGet").onclick=async()=>{
    await getTarefas()
}
document.getElementById("buttonPost").onclick=async()=>{
    const novaTarefa = {"nome":"nometarefa","status":"statustarefa"}
    await postTarefas(novaTarefa)
}
document.getElementById("buttonPut").onclick=async()=>{
    console.log("Ainda não criado")
}
document.getElementById("buttonDelete").onclick=async()=>{
    const id = 0
    await deleteTarefas(id)
}
document.getElementById("buttonDeleteAll").onclick=async()=>{
    await limparTarefas()
}




//document.addEventListener("DOMContentLoaded",getTarefas())
