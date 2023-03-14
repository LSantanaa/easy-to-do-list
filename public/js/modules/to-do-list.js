export let taskAtual = [];

const list = document.querySelector("#list");
export const inputTask = document.querySelector("#inputTask");
const btn = document.querySelector("#btn");
const divHidden = document.querySelector("#divHidden");
const yourTask = document.querySelector("#yourTask");

// Adiciona uma nova tarefa na lista
export function addTask() {
  const taskText = inputTask.value.trim();
  if (taskText) {
    taskAtual.push({
      text: taskText,
      done: false,
      btnBloqEdit: false,
    });
    render();
  }
}

export function saveTasksToStorage() {
  localStorage.setItem("tasks", JSON.stringify(taskAtual));
}
//carrega tasks salvas do local storage
export function loadTasksFromStorage() {
  const savedTasks = JSON.parse(localStorage.getItem("tasks"));
  if (savedTasks) {
    taskAtual = savedTasks;
    render();
  }
}

//cria a lista de tarefas com suas funcionalidades e renderiza
export function render() {
  list.innerHTML = "";

  taskAtual.forEach((item, index) => {
    const li = document.createElement("li");
    li.className = "task-item align-center";

    const check = document.createElement("input");
    check.type = "checkbox";
    check.setAttribute("id", "check");
    check.checked = item.done;

    const divCheck = document.createElement("div");
    divCheck.classList.add("check");

    const inputTextTask = document.createElement("input");
    inputTextTask.classList.add("task-text", "align-center");
    inputTextTask.setAttribute("disabled", "disabled");
    inputTextTask.type = "text";
    inputTextTask.value = item.text;

    const btnEdit = document.createElement("button");
    const btnDel = document.createElement("button");

    btnEdit.classList.add("btn", "edit");
    btnEdit.innerText = "Editar";
    btnDel.classList.add("btn", "del");
    btnDel.innerText = "Excluir";
    btnDel.addEventListener("click", deleta);

    //Deleta uma tarefa da lista
    function deleta(index) {
      taskAtual.splice(index, 1);
      saveTasksToStorage();
      loadTasksFromStorage();
      inputTask.value = "";
    }

    // Libera o campo para edição da tarefa
    btnEdit.addEventListener("click", liberaCampo);

    function liberaCampo(e) {
      inputTextTask.removeAttribute("disabled");
      inputTextTask.focus();

      inputTextTask.addEventListener("blur", (e) => {
        inputTextTask.setAttribute("disabled", "disabled");
        taskAtual[index].text = inputTextTask.value;
        saveTasksToStorage();
      });
    }

    function toggleDisable() {
      if (item.btnBloqEdit) {
        btnEdit.setAttribute("disabled", "");
      } else {
        btnEdit.removeAttribute("disabled");
      }
    }
    toggleDisable();

    //alterna se tarefa está concluída ou não e salva
    check.addEventListener("click", function (e) {
      item.done = e.target.checked;
      item.btnBloqEdit = e.target.checked;
      toggleDisable();
      saveTasksToStorage();
    });
    //construção
    li.appendChild(check);
    li.appendChild(divCheck);
    li.appendChild(inputTextTask);
    li.appendChild(btnEdit);
    li.appendChild(btnDel);
    list.appendChild(li);
  });
  toggleHidden();
  saveTasksToStorage();
}

export function toggleHidden() {
  if (taskAtual.length != 0) {
    divHidden.classList.add("d-none");
    yourTask.classList.remove("d-none");
  } else {
    yourTask.classList.add("d-none");
    divHidden.classList.remove("d-none");
  }
}

btn.addEventListener("click", (e) => {
  e.preventDefault();
  addTask();
  inputTask.value = "";
});

loadTasksFromStorage();
