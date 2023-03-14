import { render, taskAtual, inputTask, loadTasksFromStorage } from "./to-do-list.js";

export function modalJS(){
const deleteAllBtn = document.querySelector("#deleteAllBtn");
const confirmDeleteModal = document.querySelector("#confirmDeleteModal");
const p = confirmDeleteModal.querySelector('p')
const btnsAll = confirmDeleteModal.querySelector(".btnsAll")
const btnsAllCheck = confirmDeleteModal.querySelector(".btnsAllChecked")
const cancelDeleteBtn = document.querySelector("#cancelDeleteBtn");
const confirmDeleteBtn = document.querySelector("#confirmDeleteBtn");

deleteAllBtn.addEventListener("click", () => {
  p.innerText = "Deseja realmente excluir todas as tarefas?"
  confirmDeleteModal.style.display = "block";
  btnsAllCheck.style.display = "none";
  btnsAll.style.display = 'block';
});

cancelDeleteBtn.addEventListener("click", () => {
  confirmDeleteModal.style.display = "none";
});

confirmDeleteBtn.addEventListener("click", () => {
  localStorage.setItem('tasks', '[]')
  loadTasksFromStorage();
  render();
  inputTask.value = '';
  confirmDeleteModal.style.display = "none";
});
}

export function modal2(){
  const deleteAllCheckedBtn = document.querySelector("#deleteAllCheckedBtn");
  const confirmDeleteModal = document.querySelector("#confirmDeleteModal");
  const p = confirmDeleteModal.querySelector('p')
  const btnsAll = confirmDeleteModal.querySelector(".btnsAll")
  const btnsAllCheck = confirmDeleteModal.querySelector(".btnsAllChecked")
  const cancelDeleteBtnCheck = document.querySelector("#cancelDeleteBtnCheck");
  const confirmDeleteCheckBtn = document.querySelector("#confirmDeleteCheckBtn");

  deleteAllCheckedBtn.addEventListener("click", () => {
    p.innerText = 'Deseja realmente excluir as tarefas concluídas?'
    confirmDeleteModal.style.display = "block";
    btnsAllCheck.style.display = "block";
    btnsAll.style.display = 'none';

  });

  cancelDeleteBtnCheck.addEventListener("click", () => {
    confirmDeleteModal.style.display = "none";
  });

  confirmDeleteCheckBtn.addEventListener("click", () => {
    let tasks = JSON.parse(localStorage.getItem("tasks"))
    
    let tasksNoDone = tasks.filter( item => item.done === false);
    
    localStorage.setItem('tasks', JSON.stringify(tasksNoDone))
    
    loadTasksFromStorage();
    render();
    inputTask.value = '';
    confirmDeleteModal.style.display = "none";
  });

}