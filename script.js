const completeBtn = document.querySelectorAll(".complete_btn");

for (const button of completeBtn) {
  button.addEventListener("click", function (event) {
    event.target.setAttribute("disabled", "true");
    const taskCount = document.querySelector(".task_count");
    let taskAssigned = parseInt(taskCount.innerText);
    if (taskAssigned > 0) {
      taskAssigned--;
      taskCount.innerText = taskAssigned;
    }

    const countTask = document.querySelector(".count_task");
    let totalCount = parseInt(countTask.innerText);
    if (totalCount > 0) {
      totalCount++;
      countTask.innerText = totalCount;
    }

    let title =
      event.target.parentNode.parentNode.querySelector(".title").textContent;
    const historyDiv = document.querySelector(".history_div");
    const div = document.createElement("div");
    div.innerHTML = `<p class="text-gray-500">You have completed the task ${title} at 12:48:15 PM</p>`;
    historyDiv.appendChild(div);
    document
      .querySelector(".history_btn")
      .addEventListener("click", function () {
        document.querySelector(".history_div").textContent = "";
      });
  });
}
