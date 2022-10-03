console.log("Cześć");

let button__Theme = document.querySelector('.button__Theme');
let body = document.querySelector(".body");
let themeName = document.querySelector(".themeName");

button__Theme.addEventListener("click", () => {
    body.classList.toggle("dark");
    if(body.classList.contains("dark")) {
        themeName.innerText ="jasny"
    } else {
        themeName.innerText ="ciemny"
    }})


   