const completeBtn = document.querySelectorAll(".complete_btn");

for (const button of completeBtn) {
  button.addEventListener("click", function (event) {
    event.target.setAttribute("disabled", "true");
    const taskCount = document.querySelector(".task_count");
    let taskAssigned = parseInt(taskCount.innerText);
    if(taskAssigned > 0){
        taskAssigned--;
        taskCount.innerText = taskAssigned;
    }
   
    const countTask = document.querySelector(".count_task");
    let totalCount = parseInt(countTask.innerText);
    if(totalCount > 0){
        totalCount++;
        countTask.innerText = totalCount;
    }
  });
}
