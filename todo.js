const todoList = [];

// render(); --> required if there is already some predefined values in the list.

function render() {
  let html = "";
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    // const name= todoObject.name;
    // const dueDate = todoObject.dueDate;
    const {name, dueDate} = todoObject; 
    const tHtml = `
    <div>${name}</div>
    <div>${dueDate }</div>
    <button onclick="
    todoList.splice(${i}, 1);
    render();
    " class="css-delete">Delete</button>`;
    html += tHtml;
  }
  document.querySelector(".js-tList").innerHTML = html;
}
function addTodo() {
  const inputElement = document.querySelector(".js-input");
  const name = inputElement.value;
  const dateElement = document.querySelector(".js-date");
  const dueDate = dateElement.value;
  
  todoList.push({
    // name : name,
    name,
    // dueDate : dueDate
    dueDate
  });
  inputElement.value = "";
  dateElement.value = "";
  render();
}
