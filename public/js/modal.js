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
  taskAtual = [];
  saveTasksToStorage();
  render();
  confirmDeleteModal.style.display = "none";
});
