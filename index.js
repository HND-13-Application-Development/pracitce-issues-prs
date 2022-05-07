var btn = document.getElementById("btn")
var label = document.querySelector("label")
var count = 0

btn.addEventListener("click", () => {
    count++
    label.innerText = count;
    console.log("clicked!")
});