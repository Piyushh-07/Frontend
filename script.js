// Wait until DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("addBtn").addEventListener("click", addTask);

  function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();

    if (taskText === "") {
      alert("Please enter a task!");
      return;
    }

    let li = document.createElement("li");

    // Task text
    let span = document.createElement("span");
    span.textContent = taskText;
    span.onclick = function () {
      li.classList.toggle("completed");
    };

    // Delete button
    let delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.className = "delete-btn";
    delBtn.onclick = function () {
      li.remove();
    };

    li.appendChild(span);
    li.appendChild(delBtn);
    document.getElementById("taskList").appendChild(li);

    input.value = "";
  }
});
