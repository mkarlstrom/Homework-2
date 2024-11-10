let input = document.querySelector("#input"); // Hämta input elementet
let button = document.querySelector("#button"); // Hämta button elementet
let output = document.querySelector("#output"); // Hämta output elementet
let rmbutton = document.querySelector("#rmbutton"); // Hämta button elementet
let cbutton = document.querySelector("#cbutton");

// Kör koden när varje knapp klickas
button.addEventListener("click", function(){
output.innerText = input.value; output.style.color ='red' // Skriv texten i output som den i input
});

rmbutton.addEventListener("click", function(){
    output.innerText = "";
});

cbutton.addEventListener("click", function(){
    output.innerText = input.value; output.style.color ='green'
});