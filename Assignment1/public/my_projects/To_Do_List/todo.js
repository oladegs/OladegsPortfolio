// Call updateEfficiency when page loads
window.addEventListener("load", function () {
  updateEfficiency();
});

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
for (var i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Function to remove a task when clicking on the "close" button
var close = document.getElementsByClassName("close");
for (var i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
    updateEfficiency(); // Update efficiency when a task is deleted
  };
}

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("You must write something :)");
  } else {
    document.getElementById("myUL").appendChild(li);
    updateEfficiency();
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  // Add click event listener to the newly created close button
  span.onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
    updateEfficiency(); // Update efficiency when a task is deleted
  };
}

// Function to update efficiency bar based on completed tasks
function updateEfficiency() {
  var totalTasks = document.querySelectorAll("#myUL li").length;
  var completedTasks = document.querySelectorAll("#myUL li.checked").length;
  var efficiency = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

  var efficiencyBar = document.querySelector(".efficiency-bar");
  efficiencyBar.style.width = efficiency + "%";

  // Update efficiency percentage
  efficiencyBar.textContent = efficiency.toFixed(0) + "%";

  if (efficiency === 100) {
    efficiencyBar.style.backgroundColor = "rgba(196, 214, 201)"; // Completed all tasks (coral)
  } else {
    efficiencyBar.style.backgroundColor = "rgba(202, 173, 136, 0.8)"; // Some tasks not completed (grey)
  }
}

// Call updateEfficiency when tasks are checked or unchecked
var list = document.querySelector("ul");
list.addEventListener("click", function (ev) {
  if (ev.target.tagName === "LI") {
    ev.target.classList.toggle("checked");
    updateEfficiency();
  }
});
