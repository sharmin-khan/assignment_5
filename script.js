const completeBtn = document.querySelectorAll(".complete_btn");
let count = 0;

for (const button of completeBtn) {
  button.addEventListener("click", function (event) {
    alert("Board updated successfully");
    count++;
    if (count === 6) {
      alert("Congrates!!! You have completed all the current task");
    }
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
    let currentTime = new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });

    let title =
      event.target.parentNode.parentNode.querySelector(".title").textContent;
    const historyDiv = document.querySelector(".history_div");
    const div = document.createElement("div");
    div.innerHTML = `<p class="text-gray-800 bg-[#F4F7FF] rounded-lg p-4">You have completed the task ${title} at ${currentTime}</p>`;
    historyDiv.appendChild(div);
    document
      .querySelector(".history_btn")
      .addEventListener("click", function () {
        document.querySelector(".history_div").textContent = "";
      });
  });
}

document.getElementById("color_btn").addEventListener("click", function () {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
});

new Date();
let weekday = new Date().toLocaleDateString("en-US", { weekday: "short" });
let options = {
  month: "short",
  day: "numeric",
  year: "numeric",
};
let datePart = new Date().toLocaleDateString("en-US", options).replace(/,/, "");
document.querySelector(".day").textContent = `${weekday},`;
document.querySelector(".date").textContent = datePart;

document.querySelector(".blog_btn").addEventListener("click", function () {
  window.location.href = "./blog.html";
});
