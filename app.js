// // function addTask() {
// //     const task = prompt("Enter a new task");
//     alert("Task added!");
//     const list = document.querySelector("ul");
//     const newTask = document.createElement("li");
//     newTask.textContent = task;
//     list.appendChild(newTask);

//   }
const taskInput=document.getElementById('taskinput')
  function addTask(){
    let task = document.getElementById("taskinput").value;
    alert("Task added!");
    const list = document.querySelector("ul");
    const newTask = document.createElement("li");
    newTask.textContent = task;
    list.appendChild(newTask);
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
  
