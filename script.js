const text = document.getElementById("add");
const sortButton= document.getElementById("sort-btn");
const addTaskButton = document.getElementById("add-task-btn");
const saveTaskButton = document.getElementById("save-todo-btn");
const listBox = document.getElementById("listBox");
const saveInd = document.getElementById("saveIndex");

// array to add items

let todoArray = [];

// add items to do list

addTaskButton.addEventListener("click", (e) => {
 e.preventDefault();
 let todo = localStorage.getItem("todo");
 if (todo === null) {
   todoArray = [];
 } else {
   todoArray = JSON.parse(todo);
 }
 todoArray.push(text.value);
 text.value = "";
 localStorage.setItem("todo", JSON.stringify(todoArray));
 displayTodo();
});


//Display items on screen

function displayTodo() {
 let todo = localStorage.getItem("todo");
 {
   todoArray = JSON.parse(todo);
 }
 let htmlCode = "";
 todoArray.forEach((list, ind) => {
   htmlCode += `<div class='d-flex flex-row p-1'>
   <li class="d-flex flex-row gap-2" id="${ind}">
  <input type="checkbox" onclick="itemCompleted(${ind}) checked" class="mt-4 ms-2 chkItem form-check-input">
   <p id="displayedItems" class='text-success text-center'> - ${list}</p>
  <button onclick='deleteTodo(${ind})'  <i id="close-btn" class="btn btn-outline-danger fa-solid fa-circle-xmark"></i></button>

</div>`;
 });
 listBox.innerHTML = htmlCode;
}



// Delete
function deleteTodo(ind) {
 let todo = localStorage.getItem("todo");
 todoArray = JSON.parse(todo);
 todoArray.splice(ind, 1);
 localStorage.setItem("todo", JSON.stringify(todoArray));
 displayTodo();
}

// Edit

saveTaskButton.addEventListener("click", () => {
  let todo = localStorage.getItem("todo");
  todoArray = JSON.parse(todo);
  let id = saveInd.value;
  todoArray[id] = text.value;
  addTaskButton.style.display = "block";
  saveTaskButton.style.display = "none";
  text.value = "";
  localStorage.setItem("todo", JSON.stringify(todoArray));
  displayTodo();
 });















 



