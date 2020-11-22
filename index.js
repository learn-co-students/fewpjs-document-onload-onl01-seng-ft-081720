// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
    const text = document.querySelector("#text");
    text.innerHTML = "This is really cool!"
  });

  console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );