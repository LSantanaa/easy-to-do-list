
const list = document.querySelector('#list');
const inputTask = document.querySelector('#inputTask');
const btn = document.querySelector('#btn');
const divHidden = document.querySelector('#divHidden')
const yourTask = document.querySelector('#yourTask')

let taskAtual = [];


// Adiciona uma nova tarefa na lista
function addTask(){
  const taskText = inputTask.value.trim();
  if(taskText){
    taskAtual.push({
      text: taskText,
      done: false,
      btnBloqEdit: false,
    });
    render();
  }
}
//Deleta uma tarefa da lista
function deleta(pos){
  taskAtual.splice(pos, 1);
  render();
}

//renderiza lista de tarefas
function render(){
  list.innerHTML = '';

  taskAtual.forEach( (item, index) =>{
      const li = document.createElement('li');
      li.className = 'task-item align-center';

      const check = document.createElement('input');
      check.type = 'checkbox';
      check.setAttribute('id', 'check');
      check.checked = item.done;

      const divCheck = document.createElement('div');
      divCheck.classList.add('check');

      const inputTextTask = document.createElement('input');
      inputTextTask.classList.add('task-text', 'align-center');
      inputTextTask.setAttribute('disabled', 'disabled');
      inputTextTask.type = 'text';
      inputTextTask.value = item.text;

      const btnEdit = document.createElement('button');
      const btnDel = document.createElement('button');

      btnEdit.classList.add('btn', 'edit');
      btnEdit.innerText = 'Editar';
      btnDel.classList.add('btn', 'del');
      btnDel.setAttribute('onclick', `deleta(${index})`);
      btnDel.innerText = 'Excluir';

      // Libera o campo para edição da tarefa
      btnEdit.addEventListener('click', liberaCampo);
      function liberaCampo(e){
        inputTextTask.removeAttribute('disabled');
        inputTextTask.focus();
      }

      //bloqueia edição de tarefas
      document.addEventListener('click', bloqEdit);
      function bloqEdit(e){
        if(e.target != btnEdit){
          if(e.target != inputTextTask)
          inputTextTask.setAttribute('disabled', 'disabled');
        }
      }

      function toggleDisable(){
        if(item.btnBloqEdit){
          btnEdit.setAttribute('disabled','')
        }else{
          btnEdit.removeAttribute('disabled')
        }
      }
      toggleDisable()

      //alterna se tarefa está concluída ou não e salva
      check.addEventListener('click', function(e){
        item.done = e.target.checked;
        item.btnBloqEdit = e.target.checked;
        toggleDisable()
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
  toggleHidden()
  saveTasksToStorage();
}

function saveTasksToStorage(){
  localStorage.setItem('tasks', JSON.stringify(taskAtual));
}

//carrega tasks salvas do local storage
function loadTasksFromStorage(){
  const savedTasks = JSON.parse(localStorage.getItem('tasks'));
  if(savedTasks){
    taskAtual = savedTasks;
    render();
  }
}

function toggleHidden(){
  if(taskAtual.length != 0){
    divHidden.classList.add('d-none')
    yourTask.classList.remove('d-none')
  }else{
    yourTask.classList.add('d-none')
    divHidden.classList.remove('d-none')
  }
}

btn.addEventListener('click', (e)=>{
  e.preventDefault();
  addTask();
  inputTask.value = '';
});

loadTasksFromStorage();