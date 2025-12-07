const input = document.getElementById("taskInput");
input.addEventListener("keyPress", function(e)  {
    if (e.key === "Enter") addTask();

});

function addTask() {
    const taskText = input.ariaValueMax.trim();
    if (taskText === "") return;

    const li = document.createElement("li");
    li.innerHTML = taskText + '<button onclick="removeTask(this)">X</button>';
    li.addEventListener("click", () => toggleComplete(li));

    document.getElementById("taskList").appendChild(li);
    input.value = "";
}

function removeTask(button) {
    button.parentElement.remove();
}

function toggleComplete(li) {
    li.classList.toggle("completed");
}

function cleanTask() {
    document.getElementById("taskList").innerHTML = "";
}

