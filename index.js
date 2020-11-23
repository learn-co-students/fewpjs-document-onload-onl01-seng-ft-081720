// Your code goes here

function replaceText() {
    let text = document.getElementById("text")
    text.innerHTML = ("This is really cool!")
}

document.addEventListener("DOMContentLoaded", function() {
    replaceText();
})