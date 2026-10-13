
const botao = document.getElementById("add-task-button");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("tasks");
const filtros = document.querySelectorAll(".filtro");


function adicionarTarefa(event) {
    event.preventDefault();

    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Por favor, insira uma tarefa antes de adicionar.");
        return;
    }


    const newTask = document.createElement("li");

    const textoTarefa = document.createElement("span");
    textoTarefa.textContent = taskText;
    newTask.appendChild(textoTarefa);


    textoTarefa.addEventListener("click", function() {
        newTask.classList.toggle("concluida");
        atualizarContador()
        aplicarFiltro(filtroAtivo);
    });

    const botaoExcluir = document.createElement("button");
    botaoExcluir.textContent = "Excluir";
    botaoExcluir.type = "button";

    botaoExcluir.addEventListener("click", function(event) {
        event.stopPropagation();
        newTask.remove();
        atualizarContador();
    });

    newTask.appendChild(botaoExcluir);
    taskList.appendChild(newTask);
    atualizarContador();

    taskInput.value = "";

    aplicarFiltro(filtroAtivo);
}


botao.addEventListener("click", adicionarTarefa);


let filtroAtivo = "todas";


function aplicarFiltro(filtro) {
    const tarefas = taskList.querySelectorAll("li");

    tarefas.forEach(function(tarefa) {
        const concluida = tarefa.classList.contains("concluida");

        if (filtro === "todas") {
            tarefa.style.display = "";
        } else if (filtro === "pendentes") {
            tarefa.style.display = concluida ? "none" : "";
        } else if (filtro === "concluidas") {
            tarefa.style.display = concluida ? "" : "none";
        }
    });
}


filtros.forEach(function(botaoFiltro) {
    botaoFiltro.addEventListener("click", function() {
        filtroAtivo = botaoFiltro.dataset.filtro;

        // Atualizar o botão visualmente ativo
        filtros.forEach(function(filtro) {
            filtro.classList.remove("ativo");
        });

        botaoFiltro.classList.add("ativo");

        aplicarFiltro(filtroAtivo);
    });
});

    const contador = document.getElementById("task-counter");
    function atualizarContador() {
        const total = taskList.querySelectorAll("li").length;
        const concluidas = taskList.querySelectorAll("li.concluida").length;
        const pendentes = total - concluidas;
        contador.textContent = `Total de tarefas: ${total}, Concluídas: ${concluidas}, Pendentes: ${pendentes}`;
        const progressBar = document.getElementById("progress-bar");
    const progresso = total > 0 ? (concluidas / total) * 100 : 0;
    progressBar.style.width = `${progresso}%`;
    } 
