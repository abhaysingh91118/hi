let button = document.querySelector(".card button");
let h5 = document.querySelector(".card h5");
button.addEventListener("click", function() {

    h5.textContent = "Button clicked!";
    h5.style.color = "blue";
setTimeout(function() {
    h5.textContent = "You clicked the button!";
    h5.style.color = "green";
}, 2000);
});