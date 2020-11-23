// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
  console.log("The DOM has loaded");

  const text = document.getElementById('text')
  text.innerHTML = "This is really cool!"
  
});
// to confirm that the eventlistener DOMcontentLoaded function is working
console.log(
  "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
);

