const text = document.getElementById("add");
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
 if (todo === null) {
   todoArray = [];
 } else {
   todoArray = JSON.parse(todo);
 }
 let htmlCode = "";
 todoArray.forEach((list, ind) => {
   htmlCode += `<div class='d-flex flex-row p-2'>
 
   
   <p id="displayedItems" class='text-success'> - ${list}</p>
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



// Jasons Saturday to do list

const todos = [
  {
    id: 1,
    title: "Do the Washing"
  },
  {
    id: 1,
    title: "Do the Washing"
  },
  {
    id: 1,
    title: "Do the Washing"
  },
  {
    id: 1,
    title: "Do the Washing"
  },
]


// write html too screen


const todosContainer = document.querySelector()