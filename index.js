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
        var thisTask = document.querySelectorAll(".done");
        for (var i=0; i<thisTask.length; i++) {
            thisTask[i].onclick = function(){
                // this.getElementById("taskname").value.write(strike());
                this.style.background="green";
                this.parentNode.classList.add("checked");
            }    
            
        }
    }
    document.getElementById("write-task").value = "";
}
