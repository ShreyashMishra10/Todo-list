const todoList = [];

// render(); --> required if there is already some predefined values in the list.

function render() {
  let html = "";
  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];
    const tHtml = `<p>${todo}</p>`;
    html += tHtml;
  }
  document.querySelector(".js-tList").innerHTML = html;
}
function addTodo() {
  const inputElement = document.querySelector(".js-input");
  const name = inputElement.value;
  todoList.push(name);
  inputElement.value = "";
  render();
}
