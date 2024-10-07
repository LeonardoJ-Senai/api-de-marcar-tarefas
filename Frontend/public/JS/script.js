const API_URL = "http://localhost:3000/tarefas"

//Função get para pedir as tarefas
async function getTarefas(){
    try{
        const resposta = await fetch(API_URL)
        const lista_tarefas = await resposta.json()
        return lista_tarefas
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
        const resposta = await fetch(API_URL,{method:"DELETE"});
    } catch (erro) {
        console.log("Erro ao adicionar uma tarefa: "+erro)
    }
}

// Editar tarefas
async function putTarefas(id,tarefaAtualizada){
    try {
        const resposta = await fetch(`${API_URL}/${id}`,{
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(tarefaAtualizada),
        });
    } catch (erro) {
        console.log("Erro ao adicionar uma tarefa: "+erro);
    }
}

// Função que chama ao clicar no botão de editar tarefas
function editarTarefa(tarefa){
    const novoStatus = tarefa.status === "Concluida" ? "Pendente" : "Concluida"
    const tarefaAtualizada = {nome:tarefa.nome,status:novoStatus}
    putTarefas(tarefa.id,tarefaAtualizada)
}

// Carregar lista de tarefas
async function carregarListaTarefas(){
    const listaTarefas = document.getElementById("listaTarefas")
    const tarefas = await getTarefas() || []
    // Limpar a lista no início
    listaTarefas.innerHTML=""
    // Adicionar cada tarefa do array vindo do fetch para a ul(listaTarefas)
    tarefas.forEach((tarefa)=>{
        const li = document.createElement("li")
        li.innerHTML = `
            <span>${tarefa.nome} - ${tarefa.status}</span>
            <button onclick="deleteTarefas(${tarefa.id})">Excluir</button>
        `
        const editButton = document.createElement("button")
        editButton.textContent = "Mudar Status"
        editButton.addEventListener("click",()=>{editarTarefa(tarefa)})
        li.appendChild(editButton)

        listaTarefas.appendChild(li)
    })
}

// Função chamada pelo onsubmit
function adicionarTarefa(event){
    event.preventDefault();
    const nometarefa = document.getElementById("nomeTarefa").value
    const statustarefa = document.getElementById("statusTarefa").value
    postTarefas({nome:nometarefa,status:statustarefa})
}

// Função chamada pelo botão de Limpar Todas as Tarefas
document.getElementById("limparTarefas").addEventListener("click",()=>{
    if(confirm("Você deseja limpar todas as tarefas mesmo?")){
        limparTarefas()
    }
})

// Carregar as tarefas ao iniciar a página
document.addEventListener("DOMContentLoaded", carregarListaTarefas())
