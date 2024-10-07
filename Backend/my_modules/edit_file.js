const jsonfile = require("jsonfile");

db_path = "Backend//database//tasks.json"

// Função para ler arquivos json
function readList(db_path) {
    const tasks = jsonfile.readFileSync(db_path)
    return tasks
}

// Função para escrever a lista de tarefas json
function appendList(db_path, new_task) {
    const actual_tasks = readList(db_path)
    // Validação da entrada do usuário
    if (!("nome" in new_task && "status" in new_task)) {
        console.log("!!! Json com keys erradas, use status e nome.")
        return false
    }
    if (Object.keys(new_task).length != 2) {
        console.log("!!! Json com propriedades a mais.")
        return false
    }
    // Organizar as IDs
    let task_id = 0
    actual_tasks.forEach(element => {
        element.id = task_id
        task_id += 1
    });
    // Adicionar o id da nova tarefa
    new_task.id = actual_tasks.length

    actual_tasks.push(new_task)
    jsonfile.writeFileSync(db_path, actual_tasks, { spaces: 2 })
    return true
}

// Função para editar um item da lista json
function editList(db_path, id_task, new_task) {
    id_task = Number(id_task)
    const actual_tasks = readList(db_path)

    // Verificar se o id existe para fazer a busca
    if (id_task <= actual_tasks.length - 1) {
        actual_tasks[id_task].nome = new_task.nome
        actual_tasks[id_task].status = new_task.status
        jsonfile.writeFileSync(db_path, actual_tasks, { spaces: 2 })
        return true
    }
    else {
        console.log("Não encontrada a tarefa número: " + id_task)
    }
}

// Função para deletar um item da lista
function deleteItemList(db_path, id_task) {
    id_task = Number(id_task)
    let actual_tasks = readList(db_path)
    // Verificar se o id existe para fazer a busca
    if (id_task <= actual_tasks.length - 1) {
        actual_tasks.splice(id_task, 1)
        // Organizar as IDs
        let task_id = 0
        actual_tasks.forEach(element => {
            element.id = task_id
            task_id += 1
        });
        jsonfile.writeFileSync(db_path,actual_tasks,{spaces:2})
        return true
    }
    else {
        console.log("Não encontrada tarefa número: "+id_task)
        return false
    }
}

// Função para deletar todos os itens da lista
function clearList(db_path) {
    jsonfile.writeFileSync(db_path, [], { spaces: 2 })
}


module.exports = { readList, appendList, editList, deleteItemList, clearList }