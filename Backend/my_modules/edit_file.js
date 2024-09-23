const jsonfile = require("jsonfile");

db_path="Backend//database//tasks.json"

// Função para ler arquivos json
function readList(db_path){
    const tasks = jsonfile.readFileSync(db_path)
    return tasks
}

// Função para escrever a lista de tarefas json
function appendList(db_path,new_task){
    const actual_tasks = readList(db_path)
    actual_tasks.push(new_task)
    jsonfile.writeFileSync(db_path,actual_tasks, {spaces:2})
}

// Função para editar um item da lista json
function editList(db_path,id_task,new_task){
    //Completar na próxima aula
}

// Função para deletar um item da lista
function deleteItemList(){
    //Completar na próxima aula
}

// Função para deletar todos os itens da lista
function clearList(){
    jsonfile.writeFileSync(db_path,[],{spaces:2})
}

module.exports = {readList,appendList,editList,deleteItemList,clearList}