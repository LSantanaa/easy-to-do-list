import { loadTasksFromStorage, render } from "./to-do-list.js";

export function checkAll(){
  const inputCheckAllTasks = document.querySelector('.checkAllTasks')
  
  function checkAllTasks(e){
    let tasks = JSON.parse(localStorage.getItem('tasks'))
    if(e.target.checked){
      let tasksTrue = tasks.map(item => {
        item.done = true;
        item.btnBloqEdit = true;
        return item;
      })
      localStorage.setItem('tasks', JSON.stringify(tasksTrue))
      loadTasksFromStorage();
      render();

    }else if(e.target.checked === false){
      let tasksTrue = tasks.map(item => {
        item.done = false;
        item.btnBloqEdit = false;
        return item;
      })
      localStorage.setItem('tasks', JSON.stringify(tasksTrue))
      loadTasksFromStorage();
      render();
    }
  }
  inputCheckAllTasks.addEventListener('click', checkAllTasks)
}