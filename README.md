
# Gerenciador de Tarefas - API

Este projeto é uma API do tipo REST simples para gerenciar tarefas, construída com **Node.js**, **Express** e um arquivo **JSON** como banco de dados. A API permite criar, listar, editar e excluir tarefas. A seguir estão as instruções para configurar e usar a aplicação. Todo o projeto foi desenvolvido na aula de Desenvolvimento de Sistemas no SENAI junto dos alunos.

## Funcionalidades

- **GET** `/tarefas`: Retorna a lista de todas as tarefas.
- **POST** `/tarefas`: Adiciona uma nova tarefa.
- **PUT** `/tarefas/:id`: Edita uma tarefa existente com base no `id`.
- **DELETE** `/tarefas`: Exclui **todas** as tarefas.
- **DELETE** `/tarefas/:id`: Exclui uma tarefa com base no `id`.

## Tecnologias Utilizadas

- **Node.js**
- **Express.js**
- **JSONFile** (para ler e gravar arquivos JSON)
- **CORS** (para permitir requisições de diferentes origens)
- **Path** (para manipulação de caminhos de arquivos)

## Instalação

### Pré-requisitos

- **Node.js** (versão 12 ou superior)
- **npm** ou **yarn**


## Endpoints da API

### 1. **GET** `/tarefas`

Retorna todas as tarefas no banco de dados.

- **Resposta**:
   \`\`\`json
   [
     {
       "id": 0,
       "nome": "Tarefa exemplo",
       "status": "Pendente"
     },
     {
       "id": 1,
       "nome": "Outra tarefa",
       "status": "Concluída"
     }
   ]
   \`\`\`

### 2. **POST** `/tarefas`

Cria uma nova tarefa.

- **Requisição**:
   - **Body** (JSON):
     \`\`\`json
     {
       "nome": "Nova Tarefa",
       "status": "Em andamento"
     }
     \`\`\`
- **Resposta** (Status 201):
   \`\`\`json
   [
     {
       "id": 0,
       "nome": "Tarefa exemplo",
       "status": "Pendente"
     },
     {
       "id": 1,
       "nome": "Nova Tarefa",
       "status": "Em andamento"
     }
   ]
   \`\`\`

### 3. **PUT** `/tarefas/:id`

Edita uma tarefa existente com base no ID.

- **Parâmetro de rota**:
   - `:id`: ID da tarefa a ser editada.
   
- **Requisição**:
   - **Body** (JSON):
     \`\`\`json
     {
       "nome": "Tarefa Atualizada",
       "status": "Concluída"
     }
     \`\`\`
     
- **Resposta** (Status 200):
   \`\`\`json
   [
     {
       "id": 0,
       "nome": "Tarefa Atualizada",
       "status": "Concluída"
     }
   ]
   \`\`\`

- **Se a tarefa não for encontrada (Status 404)**:
   \`\`\`
   Não encontrada tarefa número {id}
   \`\`\`

### 4. **DELETE** `/tarefas`

Exclui **todas** as tarefas.
   
- **Resposta** (Status 200):
   \`\`\`
   Todas as tarefas foram removidas.
   \`\`\`

### 5. **DELETE** `/tarefas/:id`

Exclui uma tarefa com base no ID.

- **Parâmetro de rota**:
   - `:id`: ID da tarefa a ser excluída.
   
- **Resposta** (Status 200):
   \`\`\`json
   [
     {
       "id": 0,
       "nome": "Tarefa Exemplo",
       "status": "Pendente"
     }
   ]
   \`\`\`

- **Se a tarefa não for encontrada (Status 404)**:
   \`\`\`
   Não encontrada tarefa número {id}
   \`\`\`


## Como Testar Usando o Postman

### Requisições **GET**
1. Selecione o método **GET**.
2. Insira a URL: \`http://localhost:8000/tarefas\`.
3. Clique em **Send**.

### Requisições **POST**
1. Selecione o método **POST**.
2. Insira a URL: \`http://localhost:8000/tarefas\`.
3. Vá até a aba **Body** e selecione **raw** e **JSON**.
4. Insira o JSON da nova tarefa:
   \`\`\`json
   {
       "nome": "Nova Tarefa",
       "status": "Em andamento"
   }
   \`\`\`
5. Clique em **Send**.

### Requisições **PUT**
1. Selecione o método **PUT**.
2. Insira a URL: \`http://localhost:8000/tarefas/0\` (substitua \`0\` pelo ID da tarefa).
3. Vá até a aba **Body** e selecione **raw** e **JSON**.
4. Insira o JSON da tarefa editada:
   \`\`\`json
   {
       "nome": "Tarefa Atualizada",
       "status": "Concluída"
   }
   \`\`\`
5. Clique em **Send**.

### Requisições **DELETE**
1. Selecione o método **DELETE**.
2. Insira a URL: \`http://localhost:8000/tarefas/0\` (substitua \`0\` pelo ID da tarefa).
3. Clique em **Send**.

## Contribuindo

Sinta-se à vontade para abrir issues e pull requests.
