// // when clicking Add butoton:
// function addTask(){
//     if (document.getElementById("write-task").value === ""){
//         alert("You have to write something first.");
//     }

//     else{
//         // new task text:
//         var newTask = document.getElementById("list-text");
//         var inputText = document.getElementById("write-task").value;
        
//         var newDiv = document.createElement("div");
//         var newLi = document.createElement("li");

//         newDiv.setAttribute("id","list-text");
//         newLi.classList.add("list-box");
        

//         newLi.innerHTML = inputText;

//         newTask.appendChild(newDiv);
//         newTask.appendChild(newLi);
//         // delete button:
//         var del = document.createElement("BUTTON");
//         del.classList.add("delete-button");
//         del.innerHTML = '<img src="images/recycle-bin.png" width="20px">';
//         del.style.marginLeft = "5px";
//         del.onclick = deleteTask;

//         newTask.appendChild(del);
//     }
//     document.getElementById("write-task").value = "";
// }

// // when clicking on delete button:
// function deleteTask(){
//     // alert("hello");
//     this.parentNode.remove()
//     // var currentTask = document.querySelectorAll(".delete-button");
//     // for (var i=0; i<currentTask.length; i++) {
//     //     // currentTask[i].parentNode.remove();
//     //     currentTask[i] = 
//     //         this.parentNode.remove();
         
//     // } 

//     }

document.querySelector(".add-button").onclick = function(){
    if(document.querySelector(".newTask input").value.length == 0){
        alert("Add task name!");
    } else {
        document.querySelector("#tasks").innerHTML +=
        `<div class="task">
            <span id="taskname">
                ${document.querySelector(".newTask input").value}
            </span>
            <button class="delete">
            <img src="images/remove.png" width="20px">
            </button>
            <button class="done">
            <img src="images/done.png" width="20px">
            
            </button>
        </div>
        `;
        var currentTask = document.querySelectorAll(".delete");
        for (var i=0; i<currentTask.length; i++) {
            currentTask[i].onclick = function(){
                this.parentNode.remove();
            }    
        }
    }
    document.getElementById("write-task").value = "";
}
