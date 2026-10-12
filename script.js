
const botao = document.getElementById("add-task-button");
const taskInput = document.getElementById("taskInput");
function adicionarTarefa(event) {
    event.preventDefault();   

    const taskText = taskInput.value.trim();
    if(taskText === ""){
        alert("Por favor, insira uma tarefa antes de adicionar.");
        return;
    }

    const taskList = document.getElementById("tasks");
    const newTask = document.createElement("li");
    newTask.textContent = taskText;
    taskList.appendChild(newTask);
    taskInput.value = "";
    
    newTask.addEventListener("click", function() {
        newTask.classList.toggle("concluida");
    });
    const botaoexcluir = document.createElement("button");
    botaoexcluir.textContent="Excluir";
    newTask.appendChild(botaoexcluir);

        botaoexcluir.addEventListener("click", function(event) {
        event.stopPropagation();
        newTask.remove();

        const filtros = document.querySelectorAll(".filtro");
        const taskList = document.getElementById("tasks");
        newTask.classList.toggle("concluida");
    });
}
botao.addEventListener("click", adicionarTarefa);
