// document.addEventListener("DOMContentLoaded", function() {
//     console.log("The DOM has loaded");
// });

console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
);

const texter = document.getElementById('text')

// const DOMContentLoaded = 
// const x = 
document.addEventListener("DOMContentLoaded", function() {
    texter.innerHTML = "This is really cool!";
});

// console.log(x)

// DOMContentLoaded