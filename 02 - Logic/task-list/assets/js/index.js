const inputTask = document.querySelector(".input-task");
const buttonTask = document.querySelector(".button-task");
const ulTasks = document.querySelector(".tasks");

const createElement = tag => {
  const element = document.createElement(tag);
  return element;
}

const clearInput = () => {
  inputTask.value = "";
  inputTask.focus();
}

const createDeleteButton = li => {
  li.innerText += " ";
  const delButton = document.createElement("button");
  delButton.innerText = "Delete";
  delButton.setAttribute("class", "delete");
  li.appendChild(delButton);
}

inputTask.addEventListener("keypress", event => {
  if(event.keyCode === 13) {
    if (!inputTask.value) return event.preventDefault();
    createTask(inputTask.value);
  };
})

const saveTasks = () => {
  const liTasks = ulTasks.querySelectorAll("li");
  const listTasks = [];

  for (let task of liTasks) {
    let taskText = task.innerText;
    taskText = taskText.replace("Delete", "").trim();
    listTasks.push(taskText);
  }

  const tasksJSON = JSON.stringify(listTasks); // transforma em JSON como string
  // Só aceita strings -> setItem
  localStorage.setItem("tasks", tasksJSON); // 1° vem o nome usado para recuperar, segundo vem o valor
  console.log(tasksJSON);
}

const addTasksSaved = () => {
  const tasks = localStorage.getItem("tasks");
  const listTasks = JSON.parse(tasks); // Convertendo de volta para um objeto js (nesse caso array)
  for (let task of listTasks) {
    createTask(task);
  }
}

const createTask = inputValue => {
    const element = createElement("li");
    const text = document.createTextNode(inputValue);
    element.appendChild(text);
    ulTasks.appendChild(element);
    clearInput();
    createDeleteButton(element);
    saveTasks();
}

buttonTask.addEventListener("click", event => {
  if (!inputTask.value) return event.preventDefault();
  createTask(inputTask.value);
});

document.addEventListener("click", event => {
  const element = event.target;

  if (element.classList.contains("delete")) {
    element.parentElement.remove();
    saveTasks();
  }
})

addTasksSaved();