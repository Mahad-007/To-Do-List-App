// // function addTask() {
// //     const task = prompt("Enter a new task");
//     alert("Task added!");
//     const list = document.querySelector("ul");
//     const newTask = document.createElement("li");
//     newTask.textContent = task;
//     list.appendChild(newTask);

//   }
// let deleteBtn = document.createElement("button");
// deleteBtn.textContent = "Delete";
// deleteBtn.onclick = function () {
//   ul.removeChild(li);
// };
const taskInput=document.getElementById('taskinput')
  function addTask(){
    let task = document.getElementById("taskinput").value;
    alert("Task added!");
    const list = document.querySelector("ul");
    list.classList.add("list-items");
    // let checkbox = document.createElement("taskinput");
    // checkbox.type="checkbox";
    const newTask = document.createElement("li");
    newTask.textContent = task;
    list.appendChild(newTask);
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");
    list.appendChild(deleteBtn);
    let completeBtn = document.createElement("button");
    completeBtn.textContent = "Completed";
    completeBtn.classList.add("complete-btn");
    list.appendChild(completeBtn);
    let editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn");
    editBtn.textContent = "Edit";
    list.appendChild(editBtn);
  }
  
  const button = document.querySelector("button");
  
  button.addEventListener("click", addTask);
//   function createParagraph() {
//     const para = document.createElement("p");
//     para.textContent = "You clicked the button!";
//     document.body.appendChild(para);
//   }
  
//   const buttons = document.querySelectorAll("button");
  
//   for (const button of buttons) {
//     button.addEventListener("click", createParagraph);
//   }
  
