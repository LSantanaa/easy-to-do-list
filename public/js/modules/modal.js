import { render, taskAtual, inputTask, loadTasksFromStorage } from "./to-do-list.js";

export function modalJS(){
const deleteAllBtn = document.querySelector("#deleteAllBtn");
const confirmDeleteModal = document.querySelector("#confirmDeleteModal");
const cancelDeleteBtn = document.querySelector("#cancelDeleteBtn");
const confirmDeleteBtn = document.querySelector("#confirmDeleteBtn");

deleteAllBtn.addEventListener("click", () => {
  confirmDeleteModal.style.display = "block";
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
