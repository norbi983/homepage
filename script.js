console.log("Cześć");

let button__theme = document.querySelector(".js-themeButton");
let body = document.querySelector(".body");
let themeName = document.querySelector(".themeName");

button__theme.addEventListener("click", () => {
    body.classList.toggle("dark");
    if(body.classList.contains("dark")) {
        themeName.innerText ="jasny"
    } else {
        themeName.innerText ="ciemny"
    }})


   