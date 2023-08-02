const inputBox = document.getElementById("input-box");
const list = document.getElementById("list-container");
// var dest=new Date("june 3,2023 10:23:00").getTime();

function addTask() {
  let c = 0;
  var dest = document.getElementById("date").value;
  var final = new Date(dest).getTime();
  console.log(final);
  if (inputBox.value === "") {
    alert("you must write");
  } else {
    let newTask = document.createElement("li");
    var timer = document.createElement("span");
    timer.classList.add("timer");

    const xe = inputBox.value;

    // console.log(dest);
    var x = setInterval(function () {
      var now = new Date().getTime();
      var diff = final - now;
      //console.log(diff);

      var days = Math.floor(diff / (1000 * 60 * 60 * 24));
      // console.log(days);
      let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

      let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

      let seconds = Math.floor((diff % (1000 * 60)) / 1000);

      //  document.getElementById("demo").innerHTML=days + "d, " + hours + "hrs, "+ minutes +"min, "+seconds+" sec";
      if (c == 0) {
        var taskContent = document.createTextNode(xe);
        c++;
      }
      timer.textContent =
        days + "d, " + hours + "hrs, " + minutes + "min, " + seconds + " sec";
      if (days == 0 && minutes == 0 && hours == 0 && seconds == 0) {
        alert(`${xe} expires`);
        clearInterval(x);
        
      }
      newTask.appendChild(taskContent);
      newTask.appendChild(timer);
    }, 1000);
    list.appendChild(newTask);
  }
}
