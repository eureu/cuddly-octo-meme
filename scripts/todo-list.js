const todoList = [{
  name: 'make dinner', 
  dueDate: '2022-12-22'
}, {
  name: 'wash dishes',
  dueDate: '2022-12-24'
}];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  todoList.forEach(function(todoObject, idx) {
    const { name, dueDate } = todoObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div> 
      <button class="delete-todo-button" onclick="
        todoList.splice(${idx}, 1);
        renderTodoList();
      ">Delete</button>
    `;
    todoListHTML += html;
  });

  document.querySelector('.js-todo-list').innerHTML = todoListHTML
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;
  
  const dateInputElemenet = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElemenet.value;

  todoList.push({
    name,
    dueDate
});

  inputElement.value = '';

  renderTodoList();
};